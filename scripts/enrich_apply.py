#!/usr/bin/env python3
"""Apply cross-link proposals produced by enrichment workers (sequential, deterministic).

Proposals live in docs/enrichment/proposals/*.json:
{
 "reciprocal": [ {"into": "Wu wei", "link": "Dao", "why": "the pattern wu wei aligns with"} ],
 "inline":     [ {"into": "AF021", "concept": "Ubuntu", "phrase": "Ubuntu: I am because we are"} ]
}
- reciprocal: appends '- [[link]] — why' to the '## Related concepts' section of CONCEPT/KERNEL/other
  non-principle entry `into` (creates the section before '## Sources' if absent). Skips if already linked.
- inline: wraps the FIRST plain-text occurrence of `phrase` in entry `into` as [[concept|phrase]];
  skipped when the phrase is already inside a wikilink/heading/code, or the entry already links `concept`.
Applied proposals are moved to docs/enrichment/proposals/applied/. Never edits front-matter.
"""
import sys, os, re, json, glob, shutil
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from enrich_stats import load, LINK, ROOT

def main():
    E = load(); byfile = {e['fm'].get('file'): i for i, e in E.items()}
    res = lambda k: byfile.get(k, k)
    pdir = os.path.join(ROOT, 'docs', 'enrichment', 'proposals'); os.makedirs(os.path.join(pdir, 'applied'), exist_ok=True)
    stats = dict(recip=0, inline=0, skipped=0)
    for pf in sorted(glob.glob(os.path.join(pdir, '*.json'))):
        P = json.load(open(pf, encoding='utf-8'))
        for r in P.get('reciprocal', []):
            into, link = res(r['into']), res(r['link'])
            if into not in E or link not in E: stats['skipped'] += 1; print('skip (unresolved)', r); continue
            e = E[into]; target_file = E[link]['fm']['file']
            linked = {res(m.group(1).strip()) for m in LINK.finditer(e['body'])}
            if link in linked: stats['skipped'] += 1; continue
            line = f"- [[{target_file}]] — {r['why'].strip()}\n"
            b = e['body']
            m = re.search(r'## Related concepts\n', b)
            if m:
                nxt = re.search(r'\n## ', b[m.end():])
                pos = m.end() + (nxt.start() if nxt else len(b[m.end():]))
                b = b[:pos].rstrip('\n') + '\n' + line.rstrip('\n') + '\n' + ('\n' + b[pos:].lstrip('\n') if b[pos:].strip() else '')
            else:
                s = re.search(r'\n## Sources', b)
                sec = '\n## Related concepts\n\n' + line
                b = (b[:s.start()].rstrip('\n') + '\n' + sec + b[s.start():]) if s else b.rstrip('\n') + '\n' + sec
            e['body'] = b; e['dirty'] = True; stats['recip'] += 1
        for r in P.get('inline', []):
            into, concept = res(r['into']), res(r['concept']); phrase = r['phrase']
            if into not in E or concept not in E: stats['skipped'] += 1; print('skip (unresolved)', r); continue
            e = E[into]; cf = E[concept]['fm']['file']
            if concept in {res(m.group(1).strip()) for m in LINK.finditer(e['body'])}: stats['skipped'] += 1; continue
            # protected spans: wikilinks, headings, code, html comments
            prot = [(m.start(), m.end()) for rx in (r'\[\[[^\]]*\]\]', r'`[^`\n]*`', r'(?s)<!--.*?-->', r'(?m)^#.*$') for m in re.finditer(rx, e['body'])]
            done = False
            for m in re.finditer(re.escape(phrase), e['body']):
                if any(a <= m.start() < b_ for a, b_ in prot): continue
                e['body'] = e['body'][:m.start()] + f'[[{cf}|{phrase}]]' + e['body'][m.end():]
                e['dirty'] = True; stats['inline'] += 1; done = True; break
            if not done: stats['skipped'] += 1; print('skip (phrase not found/unprotected)', r)
        shutil.move(pf, os.path.join(pdir, 'applied', os.path.basename(pf)))
    for i, e in E.items():
        if e.get('dirty'):
            p = os.path.join(ROOT, e['path']); t = open(p, encoding='utf-8').read()
            end = t.find('\n---\n', 4)
            open(p, 'w', encoding='utf-8').write(t[:end + 5] + e['body'])
    print(stats)
main()
