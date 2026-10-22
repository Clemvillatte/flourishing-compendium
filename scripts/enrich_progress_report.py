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
    """All recorded-done entries across band state files, deduplicated.
    Kernel-special bands (e.g. kpr, whose IDs index content/kernels/) are
    excluded: their IDs are kernel numbers, not principle IDs, and would
    otherwise surface as phantom 'unmatched principles'."""
    ids, titles = set(), set()
    for f in glob.glob(os.path.join(ROOT, 'docs/enrichment/batches/*.json')):
        try:
            d = json.load(open(f))
        except Exception:
            continue
        if str(d.get('type', '')).startswith('kernel'):
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
    # kernel pages (content/kernels) are indexed by K-IDs in kernel bands (kpr, cmp);
    # they are not principles — drop them from the unmatched-principles count
    kernels = {fn[:-3] for fn in os.listdir(os.path.join(ROOT, 'content/kernels'))
               if fn.endswith('.md')}
    pr_unmatched = sorted(x for x in (done_ids - set(principles)) if x not in kernels)
    co_done = {by_norm[norm(t)] for t in done_titles if norm(t) in by_norm}
    # concept done entries recorded as paths (content/kernels/...) or with trailing
    # audit-note suffixes '(verify-...)' are bookkeeping artifacts, not concept titles;
    # normalize them before matching so they do not surface as phantom unmatched
    def co_norm(t):
        t = re.sub(r' \(verify-[^)]*\)$', '', t)
        if t.startswith('content/'):
            t = t.split('/')[-1]
        t = re.sub(r'\.md$', '', t)
        return norm(t)
    # kernel titles are not concept titles; entries pointing at kernel pages are
    # bookkeeping artifacts from kernel-adjacent bands, not missing concept pages
    kernel_norm = {norm(k) for k in kernels}
    co_unmatched = sorted(t for t in done_titles
                          if co_norm(t) not in by_norm
                          and co_norm(t) not in kernel_norm)

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
                 f'Scope: principles and concepts enrichment, plus a count-only view of the separate stories pipeline. '
                 f'Refreshed at every supervisor pass and at every shift start; next update due by {due:%H:%M} UTC.')
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
    # stories pipeline (separate lane registry; PROGRESS.md reports counts only)
    stories = []
    for fn in os.listdir(os.path.join(ROOT, 'content/stories')):
        if re.match(r'^ST\d+ — .+\.md$', fn):
            stories.append(fn)
    lanes = {}
    for sf in sorted(glob.glob(os.path.join(ROOT, 'docs/enrichment/drafts/s1*/state.json'))):
        try:
            d = json.load(open(sf))
        except Exception:
            continue
        lane = d.get('lane') or os.path.basename(os.path.dirname(sf))
        tally = {'published': 0, 'ready': 0, 'qc_pending': 0, 'other': 0}
        for it in (d.get('items') or {}).values():
            st = it.get('status')
            if st == 'published' or it.get('st-id'):
                tally['published'] += 1
            elif st == 'ready':
                tally['ready'] += 1
            elif st == 'qc_pending':
                tally['qc_pending'] += 1
            else:
                tally['other'] += 1
        lanes[lane] = tally
    if stories or lanes:
        lines.append('## Stories (separate pipeline)')
        lines.append('')
        lines.append(f'Published story pages (content/stories/ST*.md): {len(stories)}. The per-lane '
                     'rows below are LANE-REPORTED statuses from the lane state files, NOT reconciled '
                     'against actual registrations (a lane may report "ready" for a story already '
                     'published; the published-page count above is the reconciled figure). '
                     'qc_pending = awaiting lane QC; other = returned or backlinks pending. '
                     'Lanes are listed in STORIES-TASKBOARD.md; storytellers never touch '
                     'concept/principle pages.')
        lines.append('')
        lines.append('| Lane | Published (lane-reported) | Ready (lane-reported) | QC pending | Other |')
        lines.append('|---|---|---|---|---|')
        tp = tr = tq = to = 0
        for lane in sorted(lanes):
            v = lanes[lane]
            tp += v['published']; tr += v['ready']; tq += v['qc_pending']; to += v['other']
            lines.append(f'| {lane} | {v["published"]} | {v["ready"]} | {v["qc_pending"]} | {v["other"]} |')
        lines.append(f'| **All lanes** | **{tp}** | **{tr}** | **{tq}** | **{to}** |')
        lines.append('')

    lines.append('## Kernels and thinkers (enrichment programs)')
    lines.append('')
    lines.append('Kernel pages live in `content/kernels/`; thinker pages in `content/thinkers/`. Recorded-done counts come from the kernel band state files (kpr, k1a, k1b, …). The kernel queue is not trimmed of already-enriched items, so raw queue length overstates the remaining work; the rows below separate them. Metric shown: recorded-done coverage of existing kernel pages = (kernel IDs in band done lists that have a current page) / (kernel pages). No completion percentage is shown for thinkers: no thinker band state or completion denominator exists yet.')
    lines.append('')
    lines.append('| Program | Pages | Recorded done (entries) | Done K-IDs with a page | Recorded-done coverage of pages | Queue (raw) | Queue minus done |')
    lines.append('|---|---|---|---|---|---|---|')
    def _kids(items):
        out = set()
        for it in items:
            s = it if isinstance(it, str) else json.dumps(it)
            out.update(re.findall(r'K\d+', s))
        return out
    kdone_entries = 0
    kdone = set()
    kband_files = sorted(glob.glob(os.path.join(ROOT, 'docs/enrichment/batches/k*.json')))
    kband_names = []
    for bp in kband_files:
        if os.path.basename(bp).startswith('k') and not os.path.basename(bp).startswith('kernel'):
            try:
                s = json.load(open(bp))
            except Exception:
                continue
            d = s.get('done', [])
            if not isinstance(d, list) or not d:
                continue
            if not (isinstance(d[0], str) and re.search(r'K\d', d[0])):
                continue
            kband_names.append(os.path.basename(bp)[:-5])
            kdone_entries += len(d)
            kdone |= _kids(d)
    kqueue = _kids(json.load(open(os.path.join(ROOT, 'docs/enrichment/queue-kernels.json'))))
    kpages = set()
    for fp in glob.glob(os.path.join(ROOT, 'content/kernels/*.md')):
        kpages.update(re.findall(r'K\d+', os.path.basename(fp)))
    kdone_pages = kdone & kpages
    cov = f'{100*len(kdone_pages)/len(kpages):.1f}%' if kpages else 'n/a'
    lines.append(f'| Kernels | {len(kpages)} | {kdone_entries} ({", ".join(kband_names)}) | {len(kdone_pages)} | {cov} | {len(kqueue)} | {len(kqueue - kdone)} |')
    tq = json.load(open(os.path.join(ROOT, 'docs/enrichment/queue-thinkers.json')))
    tpages = set()
    for fp in glob.glob(os.path.join(ROOT, 'content/thinkers/*.md')):
        tpages.update(re.findall(r'T\d+', os.path.basename(fp)))
    lines.append(f'| Thinkers | {len(tpages)} | N/A: no thinker band state exists yet | — | N/A: no defined completion denominator | {len(tq)} | — |')
    lines.append('')
    lines.append(f'- Thinker reconciliation: {len(tpages)} thinker page(s) exist ({", ".join(sorted(tpages)[:5])}…); the thinker queue holds {len(tq)} entries; no completion percentage is computed because no thinker band state or completion denominator exists yet.')
    lines.append(f'- Kernel reconciliation: {len(kdone & kqueue)} kernel IDs appear both in recorded-done and in the raw queue (the queue is not trimmed); {len(kdone - kpages)} recorded-done kernel IDs have no current page; {len(kpages - (kdone | kqueue))} kernel pages are listed in neither the done lists nor the queue (no claim is made here about how they arose).')
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
