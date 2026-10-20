#!/usr/bin/env python3
r"""Lane state machine for the stories pipeline (storyteller-owned, lane-local).

State lives in docs/enrichment/drafts/<lane>/state.json — the lane's own path,
so tellers never touch worker batches. Per-item statuses:

  researching -> drafting -> qc_pending -> ready -> published_backlinks_pending -> integrated
                                                  \-> returned (QC fix)  \-> rejected

Usage (run from repo root, then push):
  python3 scripts/story_state.py s1a start s1a-001 "D080 qiwu: Cook Ding from the ox's side"
  python3 scripts/story_state.py s1a set s1a-001 drafting
  python3 scripts/story_state.py s1a set s1a-001 qc_pending "first advisor QC"
  python3 scripts/story_state.py s1a set s1a-001 ready
  python3 scripts/story_state.py s1a publish s1a-001 ST342        # supervisor, after registration
  python3 scripts/story_state.py s1a backlinks s1a-001 done      # supervisor, after backlinks
  python3 scripts/story_state.py s1a return s1a-001 "reason"     # QC return
  python3 scripts/story_state.py s1a show
"""
import sys, os, re, json, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRAFTS = os.path.join(ROOT, 'docs', 'enrichment', 'drafts')
STATUSES = ['researching', 'drafting', 'qc_pending', 'ready',
            'published_backlinks_pending', 'integrated', 'returned', 'rejected']


def path(lane):
    return os.path.join(DRAFTS, lane, 'state.json')


def load(lane):
    p = path(lane)
    if os.path.exists(p):
        return json.load(open(p, encoding='utf-8'))
    return {"lane": lane, "items": {}, "updated": None}


def save(lane, st):
    os.makedirs(os.path.dirname(path(lane)), exist_ok=True)
    st["updated"] = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
    with open(path(lane), 'w', encoding='utf-8') as f:
        json.dump(st, f, indent=1, ensure_ascii=False)
        f.write('\n')


def main():
    args = sys.argv[1:]
    if not args or args[0] in ('-h', '--help'):
        print(__doc__)
        return 1
    lane = args[0]
    if not re.match(r'^s[a-z0-9]{1,4}$', lane):
        sys.exit(f'lane names look like s1a, s1b — got {lane!r}')
    st = load(lane)
    cmd = args[1] if len(args) > 1 else 'show'
    item = args[2] if len(args) > 2 else None
    if cmd == 'show':
        print(json.dumps(st, indent=1, ensure_ascii=False))
        return 0
    if not item:
        sys.exit('need an item id, e.g. s1a-001')
    if cmd == 'start':
        st['items'][item] = {"status": "researching", "angle": args[3] if len(args) > 3 else "",
                             "history": [{"t": now(), "to": "researching"}]}
    elif cmd == 'set':
        to = args[3] if len(args) > 3 else sys.exit('need target status')
        if to not in STATUSES:
            sys.exit(f'unknown status {to!r}; use one of {STATUSES}')
        st['items'].setdefault(item, {"status": None, "angle": "", "history": []})
        st['items'][item]['status'] = to
        st['items'][item]['history'].append({"t": now(), "to": to,
                                             "note": args[4] if len(args) > 4 else ""})
    elif cmd == 'publish':
        stid = args[3] if len(args) > 3 else sys.exit('need the assigned ST id')
        st['items'].setdefault(item, {"status": None, "angle": "", "history": []})
        st['items'][item]['status'] = 'published_backlinks_pending'
        st['items'][item]['stid'] = stid
        st['items'][item]['history'].append({"t": now(), "to": 'published_backlinks_pending', "note": stid})
    elif cmd == 'backlinks':
        st['items'].setdefault(item, {"status": None, "angle": "", "history": []})
        st['items'][item]['status'] = 'integrated'
        st['items'][item]['history'].append({"t": now(), "to": 'integrated',
                                             "note": f"backlinks {args[3] if len(args) > 3 else 'done'}"})
    elif cmd == 'return':
        st['items'].setdefault(item, {"status": None, "angle": "", "history": []})
        st['items'][item]['status'] = 'returned'
        st['items'][item]['history'].append({"t": now(), "to": 'returned', "note": args[3] if len(args) > 3 else ""})
    else:
        sys.exit(f'unknown command {cmd!r}')
    save(lane, st)
    print(f'{lane}/{item}: {st["items"][item]["status"]}')
    return 0


def now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")


if __name__ == '__main__':
    sys.exit(main())
