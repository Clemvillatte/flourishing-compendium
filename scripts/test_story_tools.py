#!/usr/bin/env python3
"""Tests for the stories pipeline tools: story_check, story_guard, story_state, story_register.

Run from repo root:  python3 scripts/test_story_tools.py
Creates only temp fixtures (git-ignored paths cleaned up in finally); never touches live content.
"""
import sys, os, re, json, subprocess, tempfile, shutil, datetime

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
    star_prov = PUBLISHED_OK.replace('_A parable, test tradition · ', '*A parable, test tradition · ').replace(
        '](https://example.org/test)_', '](https://example.org/test)*')
    errs, _ = run_checker(star_prov, context='published')
    check('star-emphasis provenance accepted (published)',
          not [e for e in errs if 'provenance' in e], str(errs))
    errs, _ = run_checker(PUBLISHED_OK + '\n## QC notes\n- x\n', context='published')
    check('published-context QC-notes leak caught', any('QC notes' in e for e in errs), str(errs))
    errs, _ = run_checker(PUBLISHED_OK.replace('_A parable, test tradition · ', 'Plain first line. '), context='published')
    check('published provenance line required', any('provenance' in e for e in errs), str(errs))

    print('story_guard:')
    check('storyteller blocked from content/',
          bool(story_guard.violations(['content/principles/D005.md'], 'storyteller', 's1a')))
    check('storyteller blocked from other lane',
          bool(story_guard.violations(['docs/enrichment/drafts/s1b/x.md'], 'storyteller', 's1a')))
    check('storyteller blocked from shared docs (default-deny)',
          bool(story_guard.violations(['docs/enrichment/STORIES-TASKBOARD.md'], 'storyteller', 's1a')))
    check('storyteller blocked from worker state',
          bool(story_guard.violations(['docs/enrichment/progress.json'], 'storyteller', 's1a')))
    check('storyteller own lane ok',
          not story_guard.violations(['docs/enrichment/drafts/s1a/s1a-002.md',
                                      'docs/enrichment/drafts/s1a/state.json',
                                      'docs/enrichment/batons/s1a.json'], 'storyteller', 's1a'))
    check('worker blocked from stories pipeline',
          bool(story_guard.violations(['content/stories/ST342 — X.md'], 'worker')))
    check('worker blocked from story tools and lane batons',
          bool(story_guard.violations(['scripts/story_check.py', 'scripts/test_story_tools.py',
                                       'docs/enrichment/batons/s1a.json'], 'worker')))
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
    open(dp, 'w', encoding='utf-8').write(BAD_DRAFT)
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.relpath(dp, ROOT)], capture_output=True, text=True)
    check('non-ready draft refused', r.returncode == 1 and 'status' in r.stdout, r.stdout + r.stderr)
    open(dp, 'w', encoding='utf-8').write(GOOD_DRAFT.replace('status: ready', 'status: drafting'))
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.relpath(dp, ROOT)], capture_output=True, text=True)
    check('drafting (not ready) draft refused', r.returncode == 1 and 'status' in r.stdout, r.stdout + r.stderr)
    shutil.rmtree(d)

    print('story_register (isolated full-write fixture):')
    fx = tempfile.mkdtemp()
    for sub in ('content/stories', 'content/principles', 'content/structure',
                'docs/enrichment/batons', 'docs/enrichment/bands'):
        os.makedirs(os.path.join(fx, sub))
    open(os.path.join(fx, 'content', '_order.json'), 'w').write(
        json.dumps(['content/stories/ST001 — Old.md']))
    open(os.path.join(fx, 'content', 'stories', 'ST001 — Old.md'), 'w').write('x')
    book = ('---\nid: "ST"\ntype: "book"\n---\n\n## Contents\n\n'
            '- [[ST-S01 — Part I]]\n'
            '  - [[ST-S01.01 — I.1 First Principles]]\n'
            '    - [[ST001 — Old]]\n'
            '    - [[ST002 — Older]]\n')
    open(os.path.join(fx, 'content', 'structure', 'ST — Stories of Genuine Flourishing.md'), 'w').write(book)
    open(os.path.join(fx, 'content', 'principles', 'P001 — Test Principle.md'), 'w').write(
        '---\nid: "P001"\ntype: "principle"\n---\nbody\n\n## Sources\n- x\n')
    open(os.path.join(fx, 'docs', 'enrichment', 'bands', 'p1x-manifest.json'), 'w').write(
        json.dumps({'band': 'p1x', 'principles': ['P001']}))
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds')
    old_iso = '2020-01-01T00:00:00+00:00'

    draft = GOOD_DRAFT.replace('"D005"', '"P001"').replace(
        '[[D005 — Expect reversal — extremes turn into their opposites|D5. Expect reversal]]',
        '[[P001 — Test Principle|P1 Test principle]]')
    open(os.path.join(fx, 'draft.md'), 'w').write(draft)
    # stale baton -> free target
    open(os.path.join(fx, 'docs', 'enrichment', 'batons', 'p1x.json'), 'w').write(
        json.dumps({'baton': 'p1x', 'agent': 'w', 'clocked_in': old_iso, 'released': False}))
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.join(fx, 'draft.md'), '--root', fx, '--write',
                        '--chapter', 'ST-S01.01', '--id', '2'], capture_output=True, text=True)
    check('write succeeds (stale band)', r.returncode == 0, r.stdout + r.stderr)
    nb = open(os.path.join(fx, 'content', 'structure', 'ST — Stories of Genuine Flourishing.md')).read()
    check('Contents children not duplicated',
          nb.count('- [[ST001 — Old]]') == 1 and nb.count('- [[ST002 — Older]]') == 1, nb)
    check('new story line inserted once', nb.count('- [[ST002 — A Test Story]]') == 1, nb)
    ord2 = json.load(open(os.path.join(fx, 'content', '_order.json')))
    check('order entry added once', ord2.count('content/stories/ST002 — A Test Story.md') == 1)
    pt = open(os.path.join(fx, 'content', 'principles', 'P001 — Test Principle.md')).read()
    check('backlink appended once', pt.count('- [[ST002 — A Test Story|2. A Test Story]]') == 1, pt)
    check('backlink lands in Stories section', '## Stories' in pt and pt.index('## Stories') < pt.index('[[ST002'))
    # re-run: file exists -> refused, no double writes
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.join(fx, 'draft.md'), '--root', fx, '--write',
                        '--chapter', 'ST-S01.01', '--id', '2'], capture_output=True, text=True)
    check('re-register refused', r.returncode == 1 and 'exists' in r.stdout, r.stdout + r.stderr)
    # same ST number with a DIFFERENT title -> refused (duplicate-id collision)
    dup = draft.replace('title: A Test Story', 'title: Another Story')
    open(os.path.join(fx, 'dup.md'), 'w').write(dup)
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.join(fx, 'dup.md'), '--root', fx, '--write',
                        '--chapter', 'ST-S01.01', '--id', '2'], capture_output=True, text=True)
    check('duplicate ST number refused (different title)',
          r.returncode == 1 and 'already used' in r.stdout, r.stdout + r.stderr)
    # fresh baton -> live band deferral, nothing written
    shutil.rmtree(os.path.join(fx, 'content', 'stories'))
    os.makedirs(os.path.join(fx, 'content', 'stories'))
    open(os.path.join(fx, 'docs', 'enrichment', 'batons', 'p1x.json'), 'w').write(
        json.dumps({'baton': 'p1x', 'agent': 'w', 'clocked_in': now_iso, 'released': False}))
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.join(fx, 'draft.md'), '--root', fx, '--write',
                        '--chapter', 'ST-S01.01', '--id', '3'], capture_output=True, text=True)
    check('live band deferred, refused', r.returncode == 1 and 'LIVE-BAND' in r.stdout, r.stdout + r.stderr)
    check('no partial write on refusal',
          not os.path.exists(os.path.join(fx, 'content', 'stories', 'ST003 — A Test Story.md')))
    # released baton -> free target
    open(os.path.join(fx, 'docs', 'enrichment', 'batons', 'p1x.json'), 'w').write(
        json.dumps({'baton': 'p1x', 'agent': 'w', 'clocked_in': now_iso, 'released': True}))
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'story_register.py'),
                        os.path.join(fx, 'draft.md'), '--root', fx, '--write',
                        '--chapter', 'ST-S01.01', '--id', '3'], capture_output=True, text=True)
    check('released band treated as free', r.returncode == 0, r.stdout + r.stderr)
    shutil.rmtree(fx)

    print('save-path guard (isolated git fixture):')
    fxg = tempfile.mkdtemp()
    bare = tempfile.mkdtemp()
    subprocess.run(['git', 'init', '-q', '--bare', '-b', 'main', bare], check=False)
    subprocess.run(['git', 'clone', '-q', bare, fxg], check=True)
    os.makedirs(os.path.join(fxg, 'scripts'))
    shutil.copy(os.path.join(ROOT, 'scripts', 'story_guard.py'), os.path.join(fxg, 'scripts'))
    shutil.copy(os.path.join(ROOT, 'scripts', 'enrich_save.sh'), os.path.join(fxg, 'scripts'))
    open(os.path.join(fxg, 'handoff.md'), 'w').write('x')
    # populate dirs that enrich_save.sh's `git add -A content docs scripts sources handoff.md`
    # references (a non-matching pathspec makes git add fail silently and add nothing)
    os.makedirs(os.path.join(fxg, 'content', 'principles'), exist_ok=True)
    open(os.path.join(fxg, 'content', 'principles', 'P001 — X.md'), 'w').write('x')
    os.makedirs(os.path.join(fxg, 'sources'), exist_ok=True)
    open(os.path.join(fxg, 'sources', 'note.md'), 'w').write('x')
    os.makedirs(os.path.join(fxg, 'docs', 'enrichment'), exist_ok=True)
    open(os.path.join(fxg, 'docs', 'enrichment', 'x.md'), 'w').write('x')
    base_env = dict(os.environ)
    base_env.pop('STORY_ROLE', None)
    base_env.pop('STORY_LANE', None)

    def fx_save(env, msg='fixture save'):
        return subprocess.run(['bash', 'scripts/enrich_save.sh', msg], cwd=fxg,
                              env=env, capture_output=True, text=True)

    # seed the bare origin with an initial commit (empty clone has no main ref yet)
    subprocess.run(['git', 'config', 'user.name', 'Fixture'], cwd=fxg, check=True)
    subprocess.run(['git', 'config', 'user.email', 'fixture@example.org'], cwd=fxg, check=True)
    subprocess.run(['git', 'add', '-A'], cwd=fxg, check=True)
    subprocess.run(['git', 'commit', '-qm', 'seed'], cwd=fxg, check=True)
    subprocess.run(['git', 'push', '-q', '-u', 'origin', 'main'], cwd=fxg, check=True)
    # commit the fixture baseline first (as worker, allowed: no story paths)
    r = fx_save(base_env, 'baseline')
    check('fixture baseline save ok', r.returncode == 0, r.stdout + r.stderr)
    # 1. unset role + story-path change -> refused
    open(os.path.join(fxg, 'content', 'stories', 'x.md'), 'w') if os.path.isdir(
        os.path.join(fxg, 'content', 'stories')) else os.makedirs(os.path.join(fxg, 'content', 'stories'))
    open(os.path.join(fxg, 'content', 'stories', 'ST999 — X.md'), 'w').write('x')
    r = fx_save(base_env, 'bad story path')
    check('unset role + story path refused', r.returncode == 1 and 'guard' in (r.stdout + r.stderr),
          r.stdout + r.stderr)
    # 2. worker + story tool change -> refused
    os.remove(os.path.join(fxg, 'content', 'stories', 'ST999 — X.md'))
    open(os.path.join(fxg, 'scripts', 'story_check.py'), 'a').write('\n# touched\n')
    r = fx_save(base_env, 'bad tool path')
    check('worker + story tool refused', r.returncode == 1 and 'guard' in (r.stdout + r.stderr),
          r.stdout + r.stderr)
    # 3. storyteller + own-lane change -> allowed
    worker_env = dict(base_env)
    worker_env['STORY_ROLE'] = 'supervisor'
    r = fx_save(worker_env, 'restore tools')
    check('supervisor can commit tool changes', r.returncode == 0, r.stdout + r.stderr)
    st_env = dict(base_env)
    st_env['STORY_ROLE'] = 'storyteller'
    st_env['STORY_LANE'] = 's1a'
    os.makedirs(os.path.join(fxg, 'docs', 'enrichment', 'drafts', 's1a'), exist_ok=True)
    open(os.path.join(fxg, 'docs', 'enrichment', 'drafts', 's1a', 's1a-001.md'), 'w').write('draft')
    r = fx_save(st_env, 'lane work')
    check('storyteller own-lane save allowed', r.returncode == 0, r.stdout + r.stderr)
    # 4. storyteller + shared content change -> refused before commit
    open(os.path.join(fxg, 'content', 'stories', 'ST999 — X.md'), 'w').write('x')
    r = fx_save(st_env, 'bad content')
    check('storyteller content change refused', r.returncode == 1 and 'guard' in (r.stdout + r.stderr),
          r.stdout + r.stderr)
    shutil.rmtree(fxg)
    shutil.rmtree(bare)

    print(f'{PASS} passed, {FAIL} failed')
    return 1 if FAIL else 0


if __name__ == '__main__':
    sys.exit(main())
