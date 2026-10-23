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
        # 2026-10-23 fix (supervisor-pplx-8c47a5): thinker bands (t1a-t1f) record
        # done entries as thinker names (often short forms: 'Bergson'), not
        # concept titles — skip them like kernel bands; the dashboard counts
        # principles and concepts only.
        if re.match(r'^t1[a-z]?$', os.path.basename(f)[:-5]):
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
    # 2026-10-23 fix (supervisor-pplx-8c47a5): kernel bands k1a-k1e record bare K-IDs
    # (e.g. 'K109') and carry no type marker — exclude them from phantom principles
    pr_unmatched = sorted(x for x in (done_ids - set(principles))
                          if x not in kernels and not re.fullmatch(r'K\d+', x)
                          and ' recreation' not in x)
    # 2026-10-23 fix (supervisor-pplx-1023a): sibling pages can share a normalized
    # key (Nonattachment vs Non-attachment); match done titles to pages EXACTLY
    # first, and only fall back to normalized matching for titles with no exact
    # page — otherwise one sibling's done record hides the other as "remaining".
    exact_pages = set(concepts)
    co_done = set()
    for t in done_titles:
        if t in exact_pages:
            co_done.add(t)
        elif norm(t) in by_norm:
            co_done.add(by_norm[norm(t)])
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
    # thinker bands (t1a-t1f) record done entries as thinker page titles — they
    # are not concept titles; exclude them from phantom unmatched concepts.
    # 'X recreation' strings are maintenance-band note entries, not titles.
    thinkers = {fn[:-3] for fn in os.listdir(os.path.join(ROOT, 'content/thinkers'))
                if fn.endswith('.md')}
    thinker_norm = {norm(t) for t in thinkers}
    co_unmatched = sorted(t for t in done_titles
                          if co_norm(t) not in by_norm
                          and co_norm(t) not in kernel_norm
                          and co_norm(t) not in thinker_norm
                          and ' recreation' not in t)

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
    lines.append('Kernel pages live in `content/kernels/`; thinker pages in `content/thinkers/`. Recorded-done counts come from the kernel band state files. The kernel queue is not trimmed of already-enriched items, so raw queue length overstates the remaining work; the rows below separate them. Metric shown: recorded-done coverage of existing kernel pages = (distinct kernel IDs in band done lists that have a current page) / (kernel pages). No completion percentage is shown for thinkers or stories: no completion denominator is defined for either program (the thinkers band t1a, minted 2026-10-22, covers a 12-thinker slice of the queue).')
    lines.append('')
    lines.append('| Program | Pages | Done entries (bands) | Distinct done K-IDs | Done K-IDs with a page | Recorded-done coverage of pages | Queue (raw) | Queued IDs not in done |')
    lines.append('|---|---|---|---|---|---|---|---|')
    def _kids(items):
        out = set()
        for it in items:
            s = it if isinstance(it, str) else (it.get('path') or it.get('id') or '')
            out.update(re.findall(r'K\d+', s))
        return out
    kdone_entries = 0
    kdone_ids = []
    kband_names = []
    # kernel page IDs/titles first, so bands are matched against real kernel pages
    kpage_ids = set()
    kpage_titles = {}
    for fp in glob.glob(os.path.join(ROOT, 'content/kernels/*.md')):
        b = os.path.basename(fp)[:-3]
        m = re.match(r'(K\d+) — (.*)', b)
        if m:
            kpage_ids.add(m.group(1))
            kpage_titles[m.group(2)] = m.group(1)
    title_matched = set()
    # ALL band state files count: kernel-adjacent bands outside batches/k*.json also
    # record kernel completions (e.g. cmp records 'K413 — Box breathing' strings), and
    # kpr records some kernels by bare title. Entries are counted only when they match
    # an existing kernel page (K-ID or title), so principle-band K-IDs cannot collide.
    for bp in sorted(glob.glob(os.path.join(ROOT, 'docs/enrichment/batches/*.json'))):
        try:
            s = json.load(open(bp))
        except Exception:
            continue
        d = s.get('done', [])
        if not isinstance(d, list) or not d:
            continue
        band_hit = False
        is_kernel_band = '/batches/k' in bp.replace(os.sep, '/')
        for it in d:
            s2 = it if isinstance(it, str) else ''
            m = re.search(r'K\d+', s2)
            if m and m.group(0) in kpage_ids:
                # K-ID entries are unambiguous (only kernel pages have these IDs
                # in kpage_ids): count from any band (cmp records K413-style strings).
                kdone_ids.append(m.group(0)); band_hit = True
            elif not m and is_kernel_band and s2 in kpage_titles:
                # bare-title entries are ambiguous (concept pages share titles with
                # kernel pages): count only from kernel bands (kpr records by title).
                title_matched.add(kpage_titles[s2]); band_hit = True
        if band_hit:
            kband_names.append(os.path.basename(bp)[:-5])
            kdone_entries += sum(1 for it in d if isinstance(it, str))
    from collections import Counter
    kcnt = Counter(kdone_ids)
    for kid_ in title_matched:
        kcnt[kid_] += 1
    kdone = set(kdone_ids) | title_matched
    kqueue = _kids(json.load(open(os.path.join(ROOT, 'docs/enrichment/queue-kernels.json'))))
    kpages = set()
    for fp in glob.glob(os.path.join(ROOT, 'content/kernels/*.md')):
        kpages.update(re.findall(r'K\d+', os.path.basename(fp)))
    kdone_pages = kdone & kpages
    cov = f'{100*len(kdone_pages)/len(kpages):.1f}%' if kpages else 'n/a'
    kdup = {k: v for k, v in kcnt.items() if v > 1}
    lines.append(f'| Kernels | {len(kpages)} | {kdone_entries} ({", ".join(kband_names)}) | {len(kdone)} | {len(kdone_pages)} | {cov} | {len(kqueue)} | {len(kqueue - kdone)} |')
    tq = json.load(open(os.path.join(ROOT, 'docs/enrichment/queue-thinkers.json')))
    tpages = set()
    for fp in glob.glob(os.path.join(ROOT, 'content/thinkers/*.md')):
        tpages.update(re.findall(r'T\d+', os.path.basename(fp)))
    t1a = None
    try:
        t1a = json.load(open(os.path.join(ROOT, 'docs/enrichment/bands/t1a-manifest.json')))
    except Exception:
        pass
    t1a_note = (f"; thinkers band t1a minted 2026-10-22 with {len(t1a.get('thinkers', []))} thinkers assigned, {len(json.load(open(os.path.join(ROOT, 'docs/enrichment/batches/t1a.json'))).get('done', []))} recorded done"
                 if t1a else '; no thinkers band state exists yet')
    lines.append(f'| Thinkers | {len(tpages)} | N/A (no done-count percentage; see note) | — | — | N/A: no defined completion denominator | {len(tq)} | — |')
    lines.append('')
    lines.append(f'- Thinker reconciliation: {len(tpages)} thinker page(s) exist ({", ".join(sorted(tpages)[:5])}…); the thinker queue holds {len(tq)} entries{t1a_note}. No completion percentage is computed: the program has no defined completion denominator.')
    lines.append(f'- Kernel reconciliation: {len(kdup)} kernel IDs are recorded in more than one done entry (duplicate records, counted once; the current overlap is {sorted(kdup.keys())} — recorded both by K-ID and by title); {len(title_matched)} done entries are recorded by title rather than K-ID (matched to their K-pages by title); {len(kdone - kpages)} recorded-done kernel IDs have no current page; {len(kpages - kdone)} kernel pages are not recorded done; {len(kqueue - kdone)} queued IDs are absent from the done set (a queue-set figure, not a page count — the queue is not trimmed of done items and needs reconciliation).')
    lines.append('- Stories carry no completion denominator in their registry; the Stories section above reports counts only.')
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
