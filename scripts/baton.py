#!/usr/bin/env python3
"""Baton system: supervisor + worker batons with a clock-in heartbeat and 20-minute
staleness takeover. See docs/enrichment/OPERATIONS.md for the rules.

Baton files (one per role, to avoid git conflicts):
  docs/enrichment/batons/supervisor.json        - the supervisor baton
  docs/enrichment/batons/worker-<band>.json     - one worker baton per band

Reads baton state from origin/main (after a fetch) so decisions reflect what is on
GitHub, not a stale local checkout. Writes locally; push via scripts/enrich_save.sh.

Usage:
  python3 scripts/baton.py clock-in supervisor AgentA
  python3 scripts/baton.py clock-in w1b AgentB          # worker baton named by band
  python3 scripts/baton.py release w1b AgentB
  python3 scripts/baton.py status
"""
import sys, os, json, datetime, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BATDIR = 'docs/enrichment/batons'
STALE_MIN = 20  # a baton with no clock-in for this long is free for takeover


def now():
    return datetime.datetime.now(datetime.timezone.utc)


def iso():
    return now().isoformat(timespec='seconds')


def remote_read(baton):
    subprocess.run(['git', 'fetch', '-q', 'origin'], cwd=ROOT)
    r = subprocess.run(['git', 'show', f'origin/main:{BATDIR}/{baton}.json'],
                       cwd=ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        return None
    try:
        return json.loads(r.stdout)
    except Exception:
        return None


def local_write(baton, st):
    d = os.path.join(ROOT, BATDIR)
    os.makedirs(d, exist_ok=True)
    p = os.path.join(d, f'{baton}.json')
    with open(p, 'w', encoding='utf-8') as f:
        json.dump(st, f, indent=1)
        f.write('\n')


def age_min(st):
    t = datetime.datetime.fromisoformat(st['clocked_in'])
    return (now() - t).total_seconds() / 60.0


def clock_in(baton, agent):
    st = remote_read(baton)
    if st is None or st.get('released') or st.get('agent') is None:
        prev = (st or {}).get('agent')
        reason = 'free' if st is None else ('released' if st.get('released') else 'free')
        st = {"baton": baton, "agent": agent, "clocked_in": iso(), "takeovers": st.get('takeovers', []) if st else []}
        st['takeovers'].append({"by": agent, "at": iso(), "from": prev, "reason": reason})
        local_write(baton, st)
        print(f'CLAIMED {baton} baton (was {reason}). Now push: scripts/enrich_save.sh "baton: {agent} claims {baton}"')
        return 0
    if age_min(st) >= STALE_MIN:
        prev = st['agent']
        st.setdefault('takeovers', []).append({"by": agent, "at": iso(), "from": prev, "reason": f'stale ({age_min(st):.0f} min)'})
        st.update({"baton": baton, "agent": agent, "clocked_in": iso(), "released": False})
        local_write(baton, st)
        print(f'TAKEOVER of {baton} from {prev} (stale, {age_min(st):.0f} min). '
              f'Resume from handoff.md + the band state file + TASKBOARD. Now push: scripts/enrich_save.sh "baton: {agent} takes over {baton}"')
        return 0
    if st['agent'] == agent:
        st['clocked_in'] = iso()
        local_write(baton, st)
        print(f'clocked in, still holding {baton}. Now push: scripts/enrich_save.sh "baton: {agent} clock-in"')
        return 0
    print(f'REFUSED: {baton} is held by {st["agent"]} (clocked in {age_min(st):.0f} min ago, threshold {STALE_MIN}). '
          f'Stand by or take a different free baton.')
    return 1


def release(baton, agent):
    st = remote_read(baton)
    if st is None:
        print(f'{baton} baton is not held; nothing to release')
        return 0
    if st.get('agent') != agent:
        print(f'REFUSED: {baton} is held by {st.get("agent")}, not {agent}')
        return 1
    st['released'] = True
    st['released_at'] = iso()
    local_write(baton, st)
    print(f'released {baton}. Now push: scripts/enrich_save.sh "baton: {agent} releases {baton}"')
    return 0


def status():
    subprocess.run(['git', 'fetch', '-q', 'origin'], cwd=ROOT)
    r = subprocess.run(['git', 'ls-tree', '-r', '--name-only', 'origin/main', BATDIR],
                       cwd=ROOT, capture_output=True, text=True)
    names = [os.path.splitext(os.path.basename(n))[0] for n in r.stdout.splitlines() if n.endswith('.json')]
    if not names:
        print('no batons held; all free')
        return 0
    for baton in sorted(names):
        st = remote_read(baton)
        if st is None:
            continue
        if st.get('released'):
            print(f'{baton:12s} RELEASED (was {st.get("agent")})')
        else:
            print(f'{baton:12s} held by {st.get("agent")} — clocked in {age_min(st):.0f} min ago '
                  f'({"FRESH" if age_min(st) < STALE_MIN else "STALE — free for takeover"})')
    return 0


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 1
    cmd = args[0]
    if cmd == 'clock-in' and len(args) >= 3:
        return clock_in(args[1], args[2])
    if cmd == 'release' and len(args) >= 3:
        return release(args[1], args[2])
    if cmd == 'status':
        return status()
    print(__doc__)
    return 1


if __name__ == '__main__':
    sys.exit(main())
