#!/usr/bin/env python3
"""Story-pipeline QC check for a story page or storyteller draft.

  python3 scripts/story_check.py content/stories/"ST342 — Title.md"            # published page
  python3 scripts/story_check.py docs/enrichment/drafts/s1a/s1a-001.md --context draft

Runs the same mechanical bar as the enrichment validator (word range, banned AI
vocabulary, staging patterns, bold in prose, dash budget, tool-name leaks, link
resolution, ## Sources URL) plus story-specific rules (Principles section,
provenance line, published-id format). Works on NEW files, which the
git-diff-based enrich_validate.py cannot check (no HEAD baseline).

Exit 1 on any hard error. Warnings do not fail the check.
"""
import sys, os, re, argparse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from enrich_stats import load, LINK, parse
from enrich_validate import BANNED, STAGING, MIN_WORDS, MAX_WORDS, MAX_DASH, prose_text, split

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def check(path, context='published'):
    errs, warns = [], []
    new = open(os.path.join(ROOT, path), encoding='utf-8').read()
    fm, body = split(new)

    # --- front matter (context-specific) -----------------------------------
    if context == 'published':
        mid = re.search(r'^id:\s*"?ST(\d+)"?', fm, re.M)
        if not mid:
            errs.append('published story must have id: "ST###"')
        else:
            n = int(mid.group(1))
            base = os.path.basename(path)
            if not re.match(rf'ST{n:03d} — .+\.md$', base):
                errs.append(f'file name must be "ST{n:03d} — Title.md"')
        mtitle = re.search(r'^title:\s*"?\d+\. (.+?)"?$', fm, re.M)
        if not mtitle:
            errs.append('title must be "N. Title" (numbered)')
    else:  # draft
        for key in ('lane', 'local-id', 'status', 'target-principles'):
            if not re.search(rf'^{re.escape(key)}:', fm, re.M):
                errs.append(f'draft front matter missing key: {key}')
        status = re.search(r'^status:\s*(\S+)', fm, re.M)
        if status and status.group(1) not in ('researching', 'drafting', 'qc_pending', 'ready', 'returned'):
            errs.append(f'unknown draft status: {status.group(1)!r}')

    # --- provenance line (italic first line of the body) --------------------
    first = next((l for l in body.split('\n') if l.strip()), '')
    if context == 'published' and not re.match(r'^_[^_]+_\s*$', first.strip()):
        errs.append('first body line must be the italic provenance line (_genre, era, source_)')

    # --- prose bar (shared with the enrichment validator) ------------------
    pt = prose_text(body)
    pw = len(pt.split())
    if pw < MIN_WORDS:
        errs.append(f'prose too short: {pw} < {MIN_WORDS}')
    if pw > MAX_WORDS:
        errs.append(f'prose too long: {pw} > {MAX_WORDS}')
    low = pt.lower()
    for w in BANNED:
        if w in low:
            errs.append(f'banned phrase: {w!r}')
    for rx in STAGING:
        m = re.search(rx, low)
        if m:
            errs.append(f'staging pattern: {m.group(0)!r}')
    for leak in ('fetch_url', 'search_web', 'web_search', 'pdftotext'):
        if leak in new:
            errs.append(f'tool name leaked into published text: {leak!r}')
    dashes = pt.count('—') + pt.count('–') + pt.count(' -- ')
    if dashes > MAX_DASH:
        errs.append(f'{dashes} dashes in prose (max {MAX_DASH})')
    if '**' in pt:
        errs.append('bold in prose')
    # gist-first: first non-empty prose paragraph must exist and carry content
    paras = [p for p in re.split(r'\n\s*\n', pt) if p.strip()]
    if not paras or len(paras[0].split()) < 8:
        errs.append('gist-first violated: no substantive opening paragraph')

    # --- link resolution -----------------------------------------------------
    E = load()
    byfile = {e['fm'].get('file'): i for i, e in E.items()}
    byid = {e['fm'].get('id'): i for i, e in E.items()}
    links = {m.group(1).strip() for m in LINK.finditer(body)}
    bad = sorted(t for t in links if t not in byfile and t not in byid)
    if bad:
        errs.append(f'UNRESOLVED links: {bad[:6]}')
    if context == 'draft':
        tps = re.findall(r'target-principles:\s*\[([^\]]*)\]', fm)
        tplist = [t.strip().strip('"\'') for t in tps[0].split(',') if t.strip().strip('"\'')] if tps else []
        missing = [t for t in tplist if t not in byid]
        if missing:
            errs.append(f'target-principles not in wiki: {missing}')

    # --- story sections ------------------------------------------------------
    m = re.search(r'\*\*Principles:\*\*(.*?)(\n\n|\Z)', body, re.S)
    if not m or not re.search(r'^- \[\[', m.group(1), re.M):
        errs.append('missing **Principles:** section with at least one link')
    m = re.search(r'## Sources\n(.*?)(\n## |\Z)', body, re.S)
    if not m or not re.search(r'https?://', m.group(1)):
        errs.append('## Sources has no http(s) URL (verification trail missing)')
    # QC-note block is draft-only scaffolding, never for published pages
    if context == 'published' and re.search(r'## QC notes', body):
        errs.append('QC notes block leaked into published page')

    return errs, warns


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('path', help='story page or draft path (repo-relative)')
    ap.add_argument('--context', choices=['draft', 'published'], default='published')
    args = ap.parse_args()
    errs, warns = check(args.path, args.context)
    status = 'FAIL' if errs else 'ok  '
    print(f'{status} {args.path} [{args.context}]')
    for e in errs:
        print('     ERR ', e)
    for w in warns:
        print('     warn', w)
    print('0 errors' if not errs else f'{len(errs)} errors')
    return 1 if errs else 0


if __name__ == '__main__':
    sys.exit(main())
