#!/usr/bin/env python3
"""Corpus search helpers for concept enrichment (connection-saturation checks).

  python3 scripts/enrich_find.py title  "ubuntu"            # entries whose TITLE contains the text (all types)
  python3 scripts/enrich_find.py mention "Ubuntu" "umuntu" --concept Ubuntu [--type principle] [--max 40]
        # entries whose BODY mentions any term (case-insensitive, word-boundary);
        # flags [LINKED] when the entry already has an edge to --concept, [NEW] when it does not.
  python3 scripts/enrich_find.py neighbors Ubuntu           # direct neighbours of an entry, grouped by type, with titles
  python3 scripts/enrich_find.py context R001               # title + first 600 chars of prose of any entry (to check how it uses a concept)
  python3 scripts/enrich_find.py resolve "Ren" "I and Thou" # check that [[targets]] exist (by file or id)
"""
import sys, os, re, argparse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from enrich_stats import load, graph, LINK, prose_words

def snippet(body, rx, w=90):
    m = rx.search(body)
    if not m: return ''
    a, b = max(0, m.start() - w), min(len(body), m.end() + w)
    return re.sub(r'\s+', ' ', body[a:b])

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('cmd')
    ap.add_argument('terms', nargs='+')
    ap.add_argument('--concept'); ap.add_argument('--type'); ap.add_argument('--max', type=int, default=40)
    a = ap.parse_args()
    E = load(); A = graph(E)
    byfile = {e['fm'].get('file'): i for i, e in E.items()}
    if a.cmd == 'title':
        t = a.terms[0].lower()
        for i, e in sorted(E.items()):
            if t in (e['fm'].get('title') or '').lower():
                print(f"{e['fm']['type']:9} deg={len(A[i]):3} {i} | file={e['fm'].get('file')}")
    elif a.cmd == 'mention':
        rx = re.compile(r'\b(' + '|'.join(re.escape(t) for t in a.terms) + r')\b', re.I)
        cid = a.concept
        cid = byfile.get(cid, cid)
        n = 0
        for i, e in sorted(E.items()):
            if a.type and e['fm'].get('type') != a.type: continue
            if i == cid: continue
            if rx.search(e['body']) or rx.search(e['fm'].get('title') or ''):
                tag = '[LINKED]' if cid and i in A.get(cid, ()) else '[NEW]   '
                print(f"{tag} {e['fm']['type']:9} {i} | {snippet(e['body'], rx)}")
                n += 1
                if n >= a.max: print('... (truncated, raise --max)'); break
    elif a.cmd == 'neighbors':
        cid = byfile.get(a.terms[0], a.terms[0])
        by = {}
        for j in A[cid]: by.setdefault(E[j]['fm']['type'], []).append(j)
        for t, js in sorted(by.items()):
            print(f'## {t} ({len(js)})')
            for j in sorted(js): print(f"  {j} (deg {len(A[j])})")
    elif a.cmd == 'context':
        for t in a.terms:
            i = byfile.get(t, t); e = E.get(i)
            if not e: print('MISSING', t); continue
            body = re.sub(r'\s+', ' ', LINK.sub(lambda m: m.group(1), e['body']))[:600]
            print(f"## {i} [{e['fm']['type']}] {e['fm'].get('title')}\n{body}\n")
    elif a.cmd == 'resolve':
        for t in a.terms:
            print(('OK      ' if (t in byfile or t in E) else 'MISSING ') + t)
main()
