#!/usr/bin/env python3
"""Separation guard: check changed paths against the two pipelines.

  python3 scripts/story_guard.py --role storyteller --lane s1a   # checks git status vs HEAD
  python3 scripts/story_guard.py --role worker --band p1zo
  python3 scripts/story_guard.py --role supervisor
  echo path1 path2 | python3 scripts/story_guard.py --role storyteller --lane s1a   # explicit paths

Roles and writable paths (everything else is a violation):
  storyteller: DEFAULT-DENY. Only these are writable:
               docs/enrichment/drafts/<lane>/**, docs/enrichment/drafts/<lane>.json,
               docs/enrichment/batons/<lane>.json.
               content/** is never writable; worker state and shared pipeline files are
               not writable (they are the supervisor's).
  worker:      enrichment-pipeline paths allowed (own band per OPERATIONS.md), EXCEPT the
               stories pipeline: content/stories/**, drafts/s1*/, STORIES-TASKBOARD,
               PROMPT-STORYTELLER, PROTOCOL-STORIES, scripts/story_register.py.
  supervisor:  may integrate stories (content/stories/**, _order.json, structure,
               STORIES-TASKBOARD, batons, scripts) — still never rewrites a lane draft's
               narrative content.
Uses `git status --porcelain` so untracked files are included. Exit 1 lists violations.
Run before every push.
"""
import sys, os, re, subprocess, argparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STORY_PIPELINE = [
    r'^content/stories/',
    r'^docs/enrichment/STORIES-TASKBOARD\.md$',
    r'^docs/enrichment/PROMPT-STORYTELLER\.md$',
    r'^docs/enrichment/PROTOCOL-STORIES\.md$',
    r'^docs/enrichment/drafts/s\d+[a-z]/',
    r'^docs/enrichment/batons/s\d+[a-z]\.json$',
    r'^scripts/story_(check|state|guard|register)\.py$',
    r'^scripts/test_story_tools\.py$',
]


def changed_paths():
    r = subprocess.run(['git', 'status', '--porcelain'], cwd=ROOT, capture_output=True, text=True)
    out = []
    for line in r.stdout.split('\n'):
        if not line.strip():
            continue
        # XY path — rename lines ("XY old -> new") use the new path
        p = line[3:].strip().split(' -> ')[-1].strip('"')
        if p:
            out.append(p)
    return out


def violations(paths, role, lane=None):
    out = []
    lane_re = re.escape(lane) if lane else 'sX'
    if role == 'storyteller':
        allow = [
            rf'^docs/enrichment/drafts/{lane_re}[/.]',
            rf'^docs/enrichment/batons/{lane_re}\.json$',
        ]
        for p in paths:
            if not any(re.match(a, p) for a in allow):
                out.append(f'{p}: not a {lane or "lane"}-owned path (storytellers write '
                           f'only their lane drafts and baton)')
    elif role == 'worker':
        for p in paths:
            for rx in STORY_PIPELINE:
                if re.match(rx, p):
                    out.append(f'{p}: stories pipeline — workers never touch it')
                    break
    elif role == 'supervisor':
        for p in paths:
            m = re.match(r'^docs/enrichment/drafts/(s\d+[a-z])/', p)
            if m and p.endswith('.md'):
                out.append(f'{p}: supervisor moves/records drafts but never rewrites their narrative')
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--role', choices=['storyteller', 'worker', 'supervisor'], required=True)
    ap.add_argument('--lane', help='storyteller lane, e.g. s1a')
    ap.add_argument('--band', help='worker band, e.g. p1zo')
    args = ap.parse_args()
    if args.role == 'storyteller' and not args.lane:
        sys.exit('storyteller role needs --lane')
    if not sys.stdin.isatty():
        data = sys.stdin.read()
        paths = [l.strip() for l in data.split('\n') if l.strip()]
    else:
        paths = []
    if not paths:
        paths = changed_paths()
    if not paths:
        print('ok — no changed paths')
        return 0
    vs = violations(paths, args.role, args.lane)
    if vs:
        print(f'SEPARATION VIOLATIONS ({args.role}):')
        for v in vs:
            print('  ', v)
        return 1
    print(f'ok — {len(paths)} path(s) clean for role {args.role}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
