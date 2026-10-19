#!/usr/bin/env python3
"""Live state machine for enrichment bands. Prevents data loss, duplicate work and
lost in-flight tasks when a session dies suddenly (end of trial, crash, etc).

State lives in docs/enrichment/batches/<band>.json:
{ "batch": "w1a", "done": ["Ubuntu"], "in_progress": "Freedom",
  "flagged": {...}, "missing_concepts": [], "sources_checked": 0, "updated": "..." }

Usage (run from repo root, then ALWAYS push via scripts/enrich_save.sh):
  python3 scripts/enrich_state.py w1a start Freedom   # before writing anything
  python3 scripts/enrich_state.py w1a done Freedom    # after validate passes + saved
  python3 scripts/enrich_state.py w1a flag Freedom "ambiguous: ..."   # record a caveat
  python3 scripts/enrich_state.py w1a missing "Ethics of care" "Noddings 1984" "why"
  python3 scripts/enrich_state.py w1a show
"""
import sys, os, json, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANDS = os.path.join(ROOT, 'docs', 'enrichment', 'batches')


def load(band):
    path = os.path.join(BANDS, f'{band}.json')
    if os.path.exists(path):
        return path, json.load(open(path, encoding='utf-8'))
    return path, {"batch": band, "done": [], "in_progress": None,
                  "flagged": {}, "missing_concepts": [], "sources_checked": 0}


def save(path, st):
    st["updated"] = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(st, f, indent=1, ensure_ascii=False)
        f.write('\n')


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 1
    band = args[0]
    if 'show' in args:
        found = False
        for b in sorted(os.listdir(BANDS)):
            if b.endswith('.json'):
                print(b, '->', json.dumps(json.load(open(os.path.join(BANDS, b))), ensure_ascii=False)[:400])
                found = True
        if not found:
            print('no state files yet')
        return 0
    cmd = args[1] if len(args) > 1 else ''
    path, st = load(band)
    if cmd == 'init':
        st.setdefault('done', []); st['in_progress'] = None
        save(path, st)
        print(f'band state initialised: {path} (now push via enrich_save.sh)')
        return 0
    if cmd == 'start' and len(args) >= 3:
        concept = args[2]
        if concept in st["done"]:
            print(f'ERROR: {concept} already marked done in {band}; duplicate work blocked')
            return 1
        st["in_progress"] = concept
    elif cmd == 'done' and len(args) >= 3:
        concept = args[2]
        if st.get("in_progress") not in (None, concept):
            print(f'WARNING: in_progress was {st.get("in_progress")}, not {concept}')
        if concept in st["done"]:
            print(f'ERROR: {concept} already done; duplicate work blocked')
            return 1
        st.setdefault("done", []).append(concept)
        st["in_progress"] = None
    elif cmd == 'flag' and len(args) >= 4:
        st.setdefault("flagged", {})[args[2]] = ' '.join(args[3:])
    elif cmd == 'missing' and len(args) >= 4:
        st.setdefault("missing_concepts", []).append(
            {"title": args[2], "seed": args[3], "why": ' '.join(args[4:])})
    elif cmd == 'finish':
        st['band_done'] = True; st['in_progress'] = None
    elif cmd == 'sources' and len(args) >= 3:
        st["sources_checked"] = st.get("sources_checked", 0) + int(args[2])
    else:
        print(__doc__)
        return 1
    save(path, st)
    print(f'state updated: {path}')
    print('NOW PUSH: scripts/enrich_save.sh "state: {band} {cmd} {args[2] if len(args)>2 else ""}"')
    return 0


if __name__ == '__main__':
    sys.exit(main())
