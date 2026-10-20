#!/usr/bin/env python3
"""Tests for the stories pipeline tools: story_check, story_guard, story_state, story_register.

Run from repo root:  python3 scripts/test_story_tools.py
Creates only temp fixtures (git-ignored paths cleaned up in finally); never touches live content.
"""
import sys, os, re, json, subprocess, tempfile, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'scripts'))
import story_guard, story_state  # noqa

PASS = FAIL = 0


def check(name, cond, detail=''):
    global PASS, FAIL
    if cond:
        PASS += 1
        print(f'  ok   {name}')
    else:
        FAIL += 1
        print(f'  FAIL {name} {detail}')


# ---------------------------------------------------------------- fixtures
PROSE_1 = '''This opening paragraph carries the gist of the story well inside the first eighty
words, which is the bar the page must clear. The story opens with a situation: a small
kingdom by a river, a dry season that will not end, and a farmer who has watched his
neighbours chase water from one field to the next until their channels ran empty and
their tempers ran hot. The complication arrives when the farmer's own well begins to
fail, and with it the argument that has kept his family and his brother's family at
one table for thirty years. He can dig deeper, fight harder, and win the water, or he
can watch the crop die and the family split over the loss. He does neither of those
things, and the turn of the story is the quiet reason why: he spends a season laying
grooves and mulch and shade so that what rain does fall stays where it lands, and by
the next autumn his field is the only one in the valley still green. The outcome
shows the principle at work in a life that a reader can retell without opening the
source text again, and the interpretation names what the story carries and what it
leaves for another story to carry.

The second paragraph completes the arc: the turn and the outcome land here, the
interpretation follows, and the page closes ready for an essay writer to quote it,
cite it, and know where to go deeper if the essay needs more than the page gives.
'''

GOOD_DRAFT = '''---
lane: stz
local-id: stz-001
status: ready
title: A Test Story
target-principles: ["D005"]
target-angles: "D005: test angle"
evidence:
  - source: "Test Source"
    url: https://example.org/test
    accessed: 2026-10-20
    quotes: ["test"]
coverage-matrix:
  - facet: "set-up"
    carried-by: "para 1"
    supported-by: "test source"
---

_A parable, test tradition · [Test Source](https://example.org/test)_

''' + PROSE_1 + '''
**Principles:**
- [[D005 — Expect reversal — extremes turn into their opposites|D5. Expect reversal]]

## Sources
- [Test Source](https://example.org/test) — opened 2026-10-20
'''

PUBLISHED_OK = '''---
schema: 0
id: "ST999"
type: "story"
title: "999.  A Test Story"
file: "ST999 — A Test Story"
---

_A parable, test tradition · [Test Source](https://example.org/test)_

''' + PROSE_1 + '''
**Principles:**
- [[D005 — Expect reversal — extremes turn into their opposites|D5. Expect reversal]]

## Sources
- [Test Source](https://example.org/test) — opened 2026-10-20
'''

BAD_DRAFT = GOOD_DRAFT.replace('status: ready', 'status: bogus')
BANNED_DRAFT = GOOD_DRAFT.replace('This opening paragraph carries the gist',
                                  'This delve into a rich tapestry carries the gist')


def run_checker(text, context='draft'):
    d = tempfile.mkdtemp()
    p = os.path.join(d, 'fixture.md')
    open(p, 'w', encoding='utf-8').write(text)
    try:
        sys.path.insert(0, os.path.join(ROOT, 'scripts'))
        import importlib
        import story_check
        importlib.reload(story_check)
        return story_check.check(os.path.relpath(p, ROOT), context)
    finally:
        shutil.rmtree(d)


def main():
    global PASS, FAIL
    print('story_check (draft context):')
    errs, _ = run_checker(GOOD_DRAFT)
    check('good draft passes', not errs, str(errs))
    errs, _ = run_checker(BAD_DRAFT)
    check('unknown draft status flagged', any('status' in e for e in errs), str(errs))
    errs, _ = run_checker(BANNED_DRAFT)
    check('banned AI phrase caught', any('banned' in e for e in errs), str(errs))
    short = GOOD_DRAFT.replace(PROSE_1, 'Short text.')
    errs, _ = run_checker(short)
    check('too-short caught', any('too short' in e for e in errs), str(errs))
    errs, _ = run_checker(GOOD_DRAFT.replace('**Principles:**\n- [[D005', '**Principlez:**\n- [[D005'))
    check('missing Principles section caught', any('Principles' in e for e in errs), str(errs))

    print('story_check (published context):')
    errs, _ = run_checker(PUBLISHED_OK, context='published')
    check('published fixture clean of prose errors',
          not [e for e in errs if 'file name' not in e and 'title' not in e], str(errs))
    errs, _ = run_checker(PUBLISHED_OK + '\n## QC notes\n- x\n', context='published')
    check('published-context QC-notes leak caught', any('QC notes' in e for e in errs), str(errs))
    errs, _ = run_checker(PUBLISHED_OK.replace('_A parable, test tradition · ', 'Plain first line. '), context='published')
    check('published provenance line required', any('provenance' in e for e in errs), str(errs))

    print('story_guard:')
    check('storyteller blocked from content/',
          bool(story_guard.violations(['content/principles/D005.md'], 'storyteller', 's1a')))
    check('storyteller blocked from other lane',
          bool(story_guard.violations(['docs/enrichment/drafts/s1b/x.md'], 'storyteller', 's1a')))
    check('storyteller own lane ok',
          not story_guard.violations(['docs/enrichment/drafts/s1a/s1a-001.md',
                                      'docs/enrichment/batons/s1a.json'], 'storyteller', 's1a'))
    check('worker blocked from stories pipeline',
          bool(story_guard.violations(['content/stories/ST342 — X.md'], 'worker')))
    check('worker allowed on own band principle',
          not story_guard.violations(['content/principles/D005.md'], 'worker'))
    check('supervisor may integrate',
          not story_guard.violations(['content/stories/ST342 — X.md', 'content/_order.json'], 'supervisor'))

    print('story_state:')
    try:
        for argv, expect in [
            (['stz', 'start', 'stz-001', 'angle'], 'researching'),
            (['stz', 'set', 'stz-001', 'drafting'], 'drafting'),
            (['stz', 'set', 'stz-001', 'qc_pending', 'first QC'], 'qc_pending'),
            (['stz', 'set', 'stz-001', 'ready'], 'ready'),
            (['stz', 'publish', 'stz-001', 'ST342'], 'published_backlinks_pending'),
            (['stz', 'backlinks', 'stz-001', 'done'], 'integrated'),
        ]:
            sys.argv = ['story_state.py'] + argv
            story_state.main()
            st = story_state.load('stz')
            check(f'transition {argv[1]} -> {expect}', st['items']['stz-001']['status'] == expect)
        check('stid recorded', story_state.load('stz')['items']['stz-001'].get('stid') == 'ST342')
    finally:
        p = story_state.path('stz')
        if os.path.exists(p):
            os.remove(p)

    print('story_register (dry-run only):')
    d = tempfile.mkdtemp()
    dp = os.path.join(d, 's1a-001.md')
    open(dp, 'w', encoding='utf-8').write(GOOD_DRAFT)
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.relpath(dp, ROOT)], capture_output=True, text=True)
    check('ready draft dry-run plans cleanly', r.returncode == 0, r.stdout + r.stderr)
    check('dry-run announces no write', 'DRY-RUN' in r.stdout, r.stdout)
    dp2 = os.path.join(d, 's1a-002.md')
    open(dp2, 'w', encoding='utf-8').write(BAD_DRAFT)
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.relpath(dp2, ROOT)], capture_output=True, text=True)
    check('non-ready draft refused', r.returncode == 1 and 'status' in r.stdout, r.stdout + r.stderr)
    # BAD_DRAFT now has a bogus status; also test the non-ready 'drafting' case
    open(dp2, 'w', encoding='utf-8').write(GOOD_DRAFT.replace('status: ready', 'status: drafting'))
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.relpath(dp2, ROOT)], capture_output=True, text=True)
    check('drafting (not ready) draft refused', r.returncode == 1 and 'status' in r.stdout, r.stdout + r.stderr)
    shutil.rmtree(d)

    print(f'{PASS} passed, {FAIL} failed')
    return 1 if FAIL else 0


if __name__ == '__main__':
    sys.exit(main())
