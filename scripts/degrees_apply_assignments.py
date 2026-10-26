#!/usr/bin/env python3
"""Phase A/B/C splice for degrees (deg-fix-schema lane, 2026-10-26).

Usage: scripts/degrees_apply_assignments.py <degree_id> [--write]
Reads docs/degrees/integration/<degree>-assignments.json (structured assignments:
segments / locator / role / note per module reference) and
<degree>-learner-content.json (titles, descriptions, kickers, reflection prompts,
openingNote, drawsOnPriorModules) and applies both to the fcAcademyData block of
site/assets/app.js. Idempotent. Without --write prints a diff report only."""
import json, re, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, 'site/assets/app.js')
INT = os.path.join(ROOT, 'docs/degrees/integration')
KEY = 'window.fcAcademyData = '

def load():
    s = open(APP, encoding='utf-8').read()
    i = s.index(KEY) + len(KEY)
    d, end = json.JSONDecoder().raw_decode(s[i:])
    return s, i, end, d

def clean_title(t):
    t = re.sub(r'\s*\(assigned [^()]*\)', '', t)
    t = re.sub(r'\s*\([^()]*\bassigned\)', '', t)
    t = re.sub(r'\(([^()]*?),\s*assigned [^()]*\)', r'(\1)', t)
    return t

def main():
    deg = sys.argv[1]; write = '--write' in sys.argv
    s, i, end, d = load()
    dd = {x['id']: x for x in d['degrees']}[deg]
    src = {x['source_id']: x for x in d['sources']}
    log = []
    lcp = os.path.join(INT, f'{deg}-learner-content.json')
    if os.path.exists(lcp):
        lc = json.load(open(lcp))
        if lc.get('openingNote'): dd['openingNote'] = lc['openingNote']
        if lc.get('degree_title'): dd['title'] = lc['degree_title']
        if lc.get('degree_description'): dd['description'] = lc['degree_description']
        for mid, c in lc['modules'].items():
            m = d['modules'][mid]
            if c.get('title'): m['title'] = c['title']
            if c.get('kicker'): m['kicker'] = c['kicker']
            if c.get('description'): m['description'] = c['description']
            if c.get('mod_prompt'): m['reflectionPrompt'] = c['mod_prompt']
            if c.get('drawsOnPriorModules'): m['drawsOnPriorModules'] = c['drawsOnPriorModules']
            if c.get('prerequisite_display'): m['prerequisiteDisplay'] = c['prerequisite_display']
    ap = os.path.join(INT, f'{deg}-assignments.json')
    spec = json.load(open(ap))
    for nsid, nsrec in spec.get('new_sources', {}).items():
        if nsid not in src:
            d['sources'].append(nsrec); src[nsid] = nsrec; log.append(f'new source {nsid}')
    for mid, ms in spec['modules'].items():
        m = d['modules'][mid]
        old = {}
        for sec in ('requiredMedia', 'optionalMedia'):
            for r in m.get(sec, []):
                old.setdefault(r['source_id'], r)
        remove = set(ms.get('remove', []))
        req, opt, seen = [], [], set()
        for r in ms['refs']:
            sid = r['source_id']
            if sid not in src:
                raise SystemExit(f'{mid}: unknown source {sid}')
            level = r.get('level') or (old.get(sid) or {}).get('level') or 'Intermediate'
            nr = {'source_id': sid, 'level': level}
            for k in ('role', 'segments', 'locator', 'note'):
                if k in r: nr[k] = r[k]
            (req if r['section'] == 'required' else opt).append(nr)
            seen.add(sid)
        for sec, lst in (('requiredMedia', req), ('optionalMedia', opt)):
            pass
        # keep existing refs not mentioned and not removed (unspecified = untouched)
        for sec, lst in (('requiredMedia', req), ('optionalMedia', opt)):
            for r in m.get(sec, []):
                if r['source_id'] not in seen and r['source_id'] not in remove:
                    lst.append(r); log.append(f'{mid}: kept unspecified {sec[:3]} {r["source_id"]}')
        for sid in remove:
            if sid in {r['source_id'] for r in m.get('requiredMedia', []) + m.get('optionalMedia', [])}:
                log.append(f'{mid}: removed {sid}')
        m['requiredMedia'], m['optionalMedia'] = req, opt
    for sid, patch in spec.get('sources', {}).items():
        src[sid].update(patch)
    # strip assignment windows from source titles used by this degree
    for mid in dd['modules']:
        m = d['modules'][mid]
        for r in m['requiredMedia'] + m['optionalMedia']:
            sr = src[r['source_id']]; nt = clean_title(sr['title'])
            if nt != sr['title']:
                log.append(f'title {r["source_id"]}: {sr["title"]!r} -> {nt!r}'); sr['title'] = nt
    for l in log: print(l)
    if write:
        out = s[:i] + json.dumps(d, separators=(',', ':'), ensure_ascii=False) + s[i + end:]
        open(APP, 'w', encoding='utf-8').write(out)
        print('written')
if __name__ == '__main__': main()
