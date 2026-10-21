#!/usr/bin/env python3
"""Progress dashboard generator.

Reads the authoritative per-band completion records (docs/enrichment/batches/*.json
'done' lists), reconciles them against the current corpus, and writes
docs/enrichment/PROGRESS.md — the owner-facing done / to-do / %-by-category view.

Read-only except for writing PROGRESS.md. It never touches the queues.

Usage:
  python3 scripts/enrich_progress_report.py
"""
import json, glob, os, re, subprocess, sys
from datetime import datetime, timedelta, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'docs/enrichment/PROGRESS.md')

def load_done():
    """All recorded-done entries across band state files, deduplicated."""
    ids, titles = set(), set()
    for f in glob.glob(os.path.join(ROOT, 'docs/enrichment/batches/*.json')):
        try:
            d = json.load(open(f))
        except Exception:
            continue
        for x in d.get('done') or []:
            if isinstance(x, str):
                (ids if re.match(r'^[A-Z]{1,3}\d+', x) else titles).add(x)
    return ids, titles

def main():
    # corpus
    principles = {}   # id -> title
    for fn in os.listdir(os.path.join(ROOT, 'content/principles')):
        m = re.match(r'^([A-Z]{1,3}\d+)', fn)
        if m:
            principles[m.group(1)] = fn[:-3]
    concepts = set()
    for fn in os.listdir(os.path.join(ROOT, 'content/concepts')):
        if fn.endswith('.md'):
            concepts.add(fn[:-3])

    # forest labels from structure pages
    labels = {}
    for fn in os.listdir(os.path.join(ROOT, 'content/structure')):
        m = re.match(r'^([A-Z]{1,3}) — (.+)\.md$', fn)
        if m:
            labels.setdefault(m.group(1), m.group(2))

    done_ids, done_titles = load_done()

    # reconcile (concept records use ': ' where filenames use ' — ', etc.; match on
    # alphanumeric-normalized titles)
    def norm(s):
        return re.sub(r'[^a-z0-9]', '', s.lower())
    by_norm = {norm(c): c for c in concepts}
    pr_done = done_ids & set(principles)
    pr_unmatched = sorted(done_ids - set(principles))
    co_done = {by_norm[norm(t)] for t in done_titles if norm(t) in by_norm}
    co_unmatched = sorted(t for t in done_titles if norm(t) not in by_norm)

    # per-forest tally
    forests = {}
    for pid in principles:
        m = re.match(r'^([A-Z]{1,3})', pid)
        forests.setdefault(m.group(1), {'done': 0, 'total': 0})
        forests[m.group(1)]['total'] += 1
    for pid in pr_done:
        m = re.match(r'^([A-Z]{1,3})', pid)
        forests[m.group(1)]['done'] += 1

    # sanity checks: sums and percentages
    assert sum(v['done'] for v in forests.values()) == len(pr_done)
    for pf, v in forests.items():
        assert v['done'] <= v['total'], pf

    head = subprocess.run(['git', 'rev-parse', '--short', 'HEAD'],
                          capture_output=True, text=True, cwd=ROOT).stdout.strip()
    now = datetime.now(timezone.utc)
    due = now + timedelta(hours=1)

    lines = []
    lines.append('# Enrichment progress dashboard')
    lines.append('')
    lines.append(f'As of {now:%Y-%m-%d %H:%M} UTC (input revision `{head}`). '
                 f'Scope: principles and concepts enrichment — not the whole wiki. '
                 f'Next update due by {due:%H:%M} UTC (supervisor refreshes at every pass, at least hourly).')
    lines.append('')
    lines.append('"Recorded done" = listed in a band state file after validation; it does not by itself '
                 'certify that every claim passed source QC. "Not recorded done" = the remaining backlog.')
    lines.append('')
    lines.append('## Overall')
    lines.append('')
    lines.append('| Type | Recorded done | Not recorded done | Total | Done % |')
    lines.append('|---|---|---|---|---|')
    rem_pr = len(principles) - len(pr_done)
    rem_co = len(concepts) - len(co_done)
    lines.append(f'| Principles | {len(pr_done)} | {rem_pr} | {len(principles)} | {100*len(pr_done)/len(principles):.1f}% |')
    lines.append(f'| Concepts | {len(co_done)} | {rem_co} | {len(concepts)} | {100*len(co_done)/len(concepts):.1f}% |')
    lines.append(f'| **Combined** | **{len(pr_done)+len(co_done)}** | **{rem_pr+rem_co}** | '
                 f'**{len(principles)+len(concepts)}** | **{100*(len(pr_done)+len(co_done))/(len(principles)+len(concepts)):.1f}%** |')
    lines.append('')
    lines.append('## Principles by forest')
    lines.append('')
    lines.append('| Forest | Recorded done | Total | Done % |')
    lines.append('|---|---|---|---|')
    for pf, v in sorted(forests.items(), key=lambda x: (x[1]['done']/x[1]['total'], -x[1]['total'])):
        lines.append(f'| {pf} — {labels.get(pf, "?")} | {v["done"]} | {v["total"]} | {100*v["done"]/v["total"]:.1f}% |')
    lines.append('')
    lines.append('## Reconciliation notes')
    lines.append('')
    lines.append(f'- Recorded-done principle IDs with no current page: {len(pr_unmatched)}'
                 + (f' ({", ".join(pr_unmatched[:10])}' + ('…' if len(pr_unmatched) > 10 else '') + ')' if pr_unmatched else '.'))
    lines.append(f'- Recorded-done concept titles with no current page (even after normalizing punctuation): {len(co_unmatched)}'
                 + (f' ({", ".join(co_unmatched[:5])}…)' if len(co_unmatched) > 5 else
                    (f' ({", ".join(co_unmatched)})' if co_unmatched else '.')))
    lines.append('- Concept records are matched to pages on alphanumeric-normalized titles, so renames between ' +
                 'colon and dash forms do not show as unmatched; true renames or deletions appear above and are ' +
                 'counted as done, not as backlog.')
    lines.append('')
    lines.append(f'Generated by `python3 scripts/enrich_progress_report.py` — read-only; never touches the queues.')

    open(OUT, 'w').write('\n'.join(lines) + '\n')
    print(f'wrote {os.path.relpath(OUT, ROOT)}: principles {len(pr_done)}/{len(principles)}, '
          f'concepts {len(co_done)}/{len(concepts)}, unmatched pr/co: {len(pr_unmatched)}/{len(co_unmatched)}')

if __name__ == '__main__':
    main()
