#!/usr/bin/env python3
"""Verify a dossier markdown before pushing.

Checks (per docs/enrichment/dossiers/HANDOFF.md):
1. Every card link resolves against an actual content/ file (by filename
   or by front-matter id).
2. Basic shape: title heading, question blockquote, at least one
   subtheme header, and at least one quote whose carrier link opens
   (URL check is manual; here we only require the carrier link exists).
3. Story section (owner-directed 2026-10-24, README structure item 4):
   every dossier carries a `## Story:` section after Practice, holding
   at least one story card link. Published dossiers not yet enriched
   sit on STORY_MIGRATION below and fail with instructions; a dossier
   leaves the list in the same commit that adds its Story section.
   In-progress and future dossiers are NOT grandfathered: the section
   is part of the v2 format.

Usage (from the repo root):
  python3 scripts/dossier_check.py docs/enrichment/dossiers/anger.md

Exit 0 = all checks pass; nonzero otherwise. Printout lists every
problem found.
"""
import re
import sys
import os
import urllib.parse

# Published dossiers that do not carry the Story section yet (owner-
# directed enrichment work). Remove the slug in the same commit that
# adds the dossier's Story section.
STORY_MIGRATION = []

CONTENT_DIRS = [
    'content/concepts', 'content/kernels', 'content/principles',
    'content/sayings', 'content/structure', 'content/thinkers',
    'content/stories',
]
CARD = re.compile(r'\]\(https://clemvillatte\.github\.io/flourishing-compendium/#card=([^)]+)\)')
CARD_URL = 'https://clemvillatte.github.io/flourishing-compendium/#card='
CARRIER = re.compile(r'\]\((https?://[^)]+)\)')


def carriers_of(md):
    """External carrier links only (card links are not carriers)."""
    return [u for u in CARRIER.findall(md) if not u.startswith(CARD_URL)]


def quote_lines(md):
    """Blockquote lines other than the opening question."""
    lines = md.split('\n')
    seen_question = False
    out = []
    for l in lines:
        s = l.strip()
        if s.startswith('> '):
            if not seen_question:
                seen_question = True  # the dossier question under the title
                continue
            out.append(s[2:])
    return out


def resolves(target):
    for d in CONTENT_DIRS:
        if os.path.exists(os.path.join(d, target + '.md')):
            return True
    for d in CONTENT_DIRS:
        if not os.path.isdir(d):
            continue
        for fn in os.listdir(d):
            if not fn.endswith('.md'):
                continue
            head = open(os.path.join(d, fn), encoding='utf-8').read(400)
            for pat in ('id: "%s"', "id: '%s'", 'id: %s'):
                if pat % target in head:
                    return True
    return False


def main(path):
    if not os.path.exists(path):
        print('FAIL file not found:', path)
        return 1
    md = open(path, encoding='utf-8').read()
    problems = []

    if not re.search(r'^# ', md, re.M):
        problems.append('no "# Title" heading')
    if not re.search(r'^> ', md, re.M):
        problems.append('no "> question" blockquote under the title')

    headers = re.findall(r'^##+ (.+)$', md, re.M)
    if not headers:
        problems.append('no ## subtheme headers')

    targets = [urllib.parse.unquote(t) for t in CARD.findall(md)]
    unresolved = [t for t in targets if not resolves(t)]
    for t in unresolved:
        problems.append('card link does not resolve: %s' % t)

    # quotations: at least one quote line carrying an external carrier
    quotes = quote_lines(md)
    ext_carriers = carriers_of(md)
    if not ext_carriers:
        problems.append('no external carrier links found (every quote needs one)')
    elif not any(c in q for q in quotes for c in ext_carriers):
        problems.append('no quoted passage carries an external carrier link '
                        '(the opening question is not a quotation)')

    # Story section (4th section, after Practice; README structure item 4)
    m = re.search(r'^## Story:', md, re.M)
    slug = os.path.splitext(os.path.basename(path))[0]
    if not m:
        if slug in STORY_MIGRATION:
            problems.append(
                'no "## Story:" section — this published dossier is on the '
                'STORY_MIGRATION list: enrich it with the 4th section per '
                'docs/enrichment/dossiers/README.md item 4 (stories that '
                'best represent the theme, one-line loglines compressed from '
                'the story cards, which you must open and read), then '
                'remove the slug from STORY_MIGRATION in this script in '
                'the same commit. Exemplars: the-self.md, anger.md')
        else:
            problems.append(
                'no "## Story:" section (4th section after Practice, '
                'owner-directed 2026-10-24) — see '
                'docs/enrichment/dossiers/README.md item 4; exemplars: '
                'the-self.md, anger.md')
    else:
        story_body = md[m.end():]
        nxt = re.search(r'^## ', story_body, re.M)
        if nxt:
            story_body = story_body[:nxt.start()]
        story_links = [urllib.parse.unquote(t) for t in CARD.findall(story_body)]
        story_hits = [t for t in story_links
                     if os.path.exists(os.path.join('content/stories', t + '.md'))
                     or (re.match(r'^ST\d+$', t) and any(
                         fn.startswith(t + ' ') or fn.startswith(t + chr(0x2014))
                         for fn in os.listdir('content/stories')))]
        if not story_hits:
            problems.append(
                'the Story section holds no story card link — it must offer '
                'loglines for the stories that best represent the theme, '
                'each with its card link (content/stories/)')
        elif slug in STORY_MIGRATION:
            problems.append(
                'this dossier has its Story section — remove %r from '
                'STORY_MIGRATION in this script (same commit)' % slug)

    if problems:
        print('FAIL %s' % path)
        for p in problems:
            print('  -', p)
        return 1
    print('OK %s: %d card links resolve, %d headers, %d external carriers'
          % (path, len(targets), len(headers), len(ext_carriers)))
    return 0


if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('usage: dossier_check.py <dossier.md>')
        sys.exit(2)
    sys.exit(main(sys.argv[1]))
