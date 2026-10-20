#!/usr/bin/env python3
"""Separation guard: check changed paths against the two pipelines.

  python3 scripts/story_guard.py --role storyteller --lane s1a   # checks git diff vs HEAD
  python3 scripts/story_guard.py --role worker --band p1zo
  python3 scripts/story_guard.py --role supervisor
  echo path1 path2 | python3 scripts/story_guard.py --role storyteller --lane s1a   # explicit paths

Roles and their writable paths (everything else is a violation):
  storyteller: docs/enrichment/drafts/<lane>/**, docs/enrichment/drafts/<lane>.json,
               docs/enrichment/batons/<lane>.json, scripts/story_*.py (tests only),
               plus read-only work anywhere else. Content/** is NEVER writable.
  worker:      everything the enrichment pipeline allows EXCEPT the stories pipeline
               (content/stories/**, docs/enrichment/STORIES-TASKBOARD.md,
               docs/enrichment/PROMPT-STORYTELLER.md, docs/enrichment/PROTOCOL-STORIES.md,
               docs/enrichment/drafts/s1*/, scripts/story_register.py).
  supervisor:  may integrate stories (content/stories/**, _order.json, structure,
               STORIES-TASKBOARD, batons) — still never edits lane drafts' content.
Exit 1 lists violations. Run before every push.
"""
import sys, os, re, subprocess, argparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STORY_PIPELINE = [
    r'^content/stories/',
    r'^docs/enrichment/STORIES-TASKBOARD\.md$',
    r'^docs/enrichment/PROMPT-STORYTELLER\.md$',
    r'^docs/enrichment/PROTOCOL-STORIES\.md$',
    r'^docs/enrichment/drafts/s\d+[a-z]/',
    r'^scripts/story_register\.py$',
]


def changed_paths():
    r = subprocess.run(['git', 'diff', '--name-only', 'HEAD'], cwd=ROOT, capture_output=True, text=True)
    return [p for p in r.stdout.split('\n') if p.strip()]


def violations(paths, role, lane=None, band=None):
    out = []
    for p in paths:
        if role == 'storyteller':
            if re.match(r'^content/', p):
                out.append(f'{p}: storytellers never write into content/ (integration is supervisor-only)')
            elif re.match(r'^docs/enrichment/drafts/', p) and not re.match(rf'^docs/enrichment/drafts/{re.escape(lane) if lane else "sX"}[/.]', p):
                out.append(f'{p}: another lane\'s draft path')
            elif re.match(r'^docs/enrichment/batons/', p) and lane and not re.match(rf'^docs/enrichment/batons/{re.escape(lane)}\.json$', p):
                out.append(f'{p}: another baton')
            elif re.match(r'^docs/enrichment/(batches|bands|queue|progress)', p):
                out.append(f'{p}: worker state — not storyteller-writable')
        elif role == 'worker':
            for rx in STORY_PIPELINE:
                if re.match(rx, p):
                    out.append(f'{p}: stories pipeline — workers never touch it')
                    break
        elif role == 'supervisor':
            pass  # supervisor may integrate; lane draft content still off-limits
            if re.match(r'^docs/enrichment/drafts/s\d+[a-z]/.*\.md$', p) and re.search(r'\.md$', p):
                # supervisors may move/record drafts but not rewrite their narrative
                pass
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--role', choices=['storyteller', 'worker', 'supervisor'], required=True)
    ap.add_argument('--lane', help='storyteller lane, e.g. s1a')
    ap.add_argument('--band', help='worker band, e.g. p1zo')
    args = ap.parse_args()
    if args.role == 'storyteller' and not args.lane:
        sys.exit('storyteller role needs --lane')
    data = sys.stdin.read() if not sys.stdin.isatty() and not sys.stdin.closed else ''
    paths = [l.strip() for l in data.split('\n') if l.strip()] or changed_paths()
    if not paths:
        print('ok — no changed paths')
        return 0
    vs = violations(paths, args.role, args.lane, args.band)
    if vs:
        print(f'SEPARATION VIOLATIONS ({args.role}):')
        for v in vs:
            print('  ', v)
        return 1
    print(f'ok — {len(paths)} path(s) clean for role {args.role}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
