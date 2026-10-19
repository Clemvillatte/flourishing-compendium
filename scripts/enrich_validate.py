#!/usr/bin/env python3
"""Validate enriched entries against the committed baseline (git HEAD by default).

  python3 scripts/enrich_validate.py                 # every modified content/*.md vs HEAD
  python3 scripts/enrich_validate.py "content/concepts/Ubuntu.md" ...

Hard errors (exit 1): front-matter changed; any original wikilink lost; any wikilink that
does not resolve; prose < MIN_WORDS or > MAX_WORDS; no http(s) source URL in ## Sources;
banned AI vocabulary; em-dash budget exceeded; 'not X but Y' staging; bold in prose.
Warnings: fewer than 3 Related-concepts lines; no '## Related concepts' section.
"""
import sys, os, re, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from enrich_stats import load, graph, LINK, prose_words, parse, ROOT

MIN_WORDS, MAX_WORDS, MAX_DASH = 150, 480, 3
BANNED = ['delve', 'tapestry', 'testament', 'pivotal', 'vibrant', 'showcase', 'underscore', 'interplay', 'intricate',
          'meticulous', 'landscape of', 'crucial', 'groundbreaking', 'breathtaking', 'nestled', 'in the realm of',
          'rich tapestry', 'it is worth noting', 'it\'s worth noting', 'in conclusion', 'serves as', 'stands as',
          'a testament', 'deep dive', 'journey of', 'enduring legacy', 'plays a key role', 'plays a crucial role']
STAGING = [r'\bnot (just|only|merely|simply)\b[^.]{0,80}\bbut\b', r"\bit'?s not\b[^.]{0,60}\bit'?s\b", r'\bat its core\b',
           r'\bthe real (question|issue|point)\b', r"\bhere'?s the thing\b", r"\blet'?s (dive|explore|break)\b"]

def git_show(path):
    r = subprocess.run(['git', 'show', f'HEAD:{path}'], cwd=ROOT, capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None

def split(t):
    end = t.find('\n---\n', 4)
    return t[:end + 5], t[end + 5:]

def prose_text(body):
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    out, skip = [], False
    for line in body.split('\n'):
        s = line.strip()
        if s.startswith('#'):
            skip = s.lstrip('#').strip().lower().startswith(('sources', 'cited in', 'related', 'see also', 'references', 'further'))
            continue
        if skip or not s or s.startswith(('-', '*', '>', '|')): continue
        if LINK.sub('', s).strip(' -—[]') == '': continue
        out.append(s)
    return '\n'.join(out)

def validate(path, byfile, byid):
    errs, warns = [], []
    new = open(os.path.join(ROOT, path), encoding='utf-8').read()
    old = git_show(path)
    if old is None: return [f'{path}: no baseline in git HEAD'], []
    fm_n, body_n = split(new); fm_o, body_o = split(old)
    if fm_n != fm_o: errs.append('front-matter changed')
    mtype = re.search(r'^type:\s*"?([^"\n]+)', fm_n, re.M)
    typ = mtype.group(1).strip() if mtype else None
    minw, maxw = (40, 300) if typ == 'principle' else (MIN_WORDS, MAX_WORDS)
    lo = {m.group(1).strip() for m in LINK.finditer(body_o)}
    ln = {m.group(1).strip() for m in LINK.finditer(body_n)}
    lost = sorted(t for t in lo - ln)
    if lost: errs.append(f'LOST {len(lost)} original links, e.g. {lost[:4]}')
    bad = sorted(t for t in ln if t not in byfile and t not in byid)
    if bad: errs.append(f'UNRESOLVED links: {bad[:6]}')
    pt = prose_text(body_n); pw = len(pt.split())
    if pw < minw: errs.append(f'prose too short: {pw} < {minw}')
    if pw > maxw: errs.append(f'prose too long: {pw} > {maxw}')
    low = pt.lower()
    for w in BANNED:
        if w in low: errs.append(f'banned phrase: {w!r}')
    for rx in STAGING:
        m = re.search(rx, low)
        if m: errs.append(f'staging pattern: {m.group(0)!r}')
    dashes = pt.count('—') + pt.count('–') + pt.count(' -- ')
    if dashes > MAX_DASH: errs.append(f'{dashes} dashes in prose (max {MAX_DASH})')
    if '**' in pt: errs.append('bold in prose')
    m = re.search(r'## Sources\n(.*?)(\n## |\Z)', body_n, re.S)
    if not m or not re.search(r'https?://', m.group(1)):
        if typ == 'principle':
            warns.append('## Sources has no http(s) URL (principles: cite the primary text with a locator instead)')
        else:
            errs.append('## Sources has no http(s) URL (verification trail missing)')
    rel = re.search(r'## Related concepts\n(.*?)(\n## |\Z)', body_n, re.S)
    if not rel: warns.append('no ## Related concepts section')
    elif len(re.findall(r'^- \[\[', rel.group(1), re.M)) < 3: warns.append('fewer than 3 Related-concepts lines')
    return errs, warns

if __name__ == '__main__':
    E = load()
    byfile = {e['fm'].get('file'): i for i, e in E.items()}
    paths = sys.argv[1:]
    if not paths:
        out = subprocess.run(['git', 'status', '--porcelain', 'content'], cwd=ROOT, capture_output=True, text=True).stdout
        paths = [l[3:].strip().strip('"') for l in out.splitlines() if l[3:].strip().endswith('.md')]
    bad = 0
    for p in paths:
        errs, warns = validate(p, byfile, E)
        status = 'FAIL' if errs else 'ok  '
        print(f'{status} {p}')
        for e in errs: print('     ERR ', e)
        for w in warns: print('     warn', w)
        bad += bool(errs)
    print(f'{len(paths)} checked, {bad} failed')
    sys.exit(1 if bad else 0)
