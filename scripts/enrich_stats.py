#!/usr/bin/env python3
"""Enrichment queue builder.

Reads content/**/*.md, rebuilds the SAME link graph the site uses (wikilinks in
any entry body, resolved by `file` or `id`, undirected, deduplicated), then
scores every entry of a given type for prose weakness.

Usage:
  python3 scripts/enrich_stats.py                # writes docs/enrichment/queue-concepts.json + prints summary
  python3 scripts/enrich_stats.py --type concept --show 40

Outputs a ranked list: highest degree first, among entries whose prose is weak.
`prose_words` counts only real explanatory prose: it drops front-matter, headings,
list/link-only lines, and the Sources / Cited-in sections.
"""
import os, re, json, sys, argparse
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LINK = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]')

def parse(path):
    t = open(path, encoding='utf-8').read()
    end = t.find('\n---\n', 4)
    fm, body = {}, t[end + 5:]
    for line in t[4:end].split('\n'):
        k, _, v = line.partition(': ')
        if not _: continue
        try: fm[k.strip()] = json.loads(v)
        except Exception: fm[k.strip()] = v
    return fm, body

def prose_words(body):
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    out = []
    skip = False
    for line in body.split('\n'):
        s = line.strip()
        if s.startswith('#'):
            h = s.lstrip('#').strip().lower()
            skip = h.startswith(('sources', 'cited in', 'related', 'see also', 'references', 'further reading'))
            continue
        if skip or not s: continue
        if s.startswith(('-', '*', '>', '|')) : continue      # list/quote/table lines are not prose
        if LINK.sub('', s).strip(' -—[]') == '': continue      # link-only line
        out.append(LINK.sub(lambda m: m.group(1), s))
    return len(' '.join(out).split())

def load():
    entries = {}
    for d, _, fs in os.walk(os.path.join(ROOT, 'content')):
        for fn in fs:
            if not fn.endswith('.md'): continue
            p = os.path.join(d, fn)
            fm, body = parse(p)
            entries[fm['id']] = dict(fm=fm, body=body, path=os.path.relpath(p, ROOT))
    return entries

def graph(entries):
    byfile, byid = {}, {}
    for i, e in entries.items():
        byfile.setdefault(e['fm'].get('file', ''), i); byid[i] = i
    adj = {i: set() for i in entries}
    for i, e in entries.items():
        for m in LINK.finditer(e['body']):
            t = m.group(1).strip()
            j = byfile.get(t) or byid.get(t)
            if j and j != i:
                adj[i].add(j); adj[j].add(i)
    return adj

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--type', default='concept')
    ap.add_argument('--show', type=int, default=25)
    ap.add_argument('--weak', type=int, default=120, help='prose words below this = weak')
    a = ap.parse_args()
    E = load(); A = graph(E)
    rows = []
    for i, e in E.items():
        if e['fm'].get('type') != a.type: continue
        pw = prose_words(e['body'])
        rows.append(dict(id=i, title=e['fm'].get('title'), path=e['path'], degree=len(A[i]), prose_words=pw))
    rows.sort(key=lambda r: (-r['degree'], r['id']))
    weak = [r for r in rows if r['prose_words'] < a.weak]
    out = os.path.join(ROOT, 'docs', 'enrichment', f'queue-{a.type}s.json')
    json.dump(weak, open(out, 'w'), ensure_ascii=False, indent=0)
    print(f'{len(rows)} {a.type} entries; {len(weak)} weak (<{a.weak} prose words) -> {out}')
    import collections
    b = collections.Counter(min(r['prose_words'] // 20 * 20, 200) for r in rows)
    print('prose-word histogram:', sorted(b.items()))
    for r in weak[:a.show]: print(r['degree'], r['prose_words'], r['id'])
