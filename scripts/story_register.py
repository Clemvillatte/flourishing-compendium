#!/usr/bin/env python3
"""Supervisor tool: publish a ready storyteller draft as a new story page.

  python3 scripts/story_register.py docs/enrichment/drafts/s1a/s1a-001.md            # dry-run (default)
  python3 scripts/story_register.py docs/enrichment/drafts/s1a/s1a-001.md --write \\
      --chapter ST-S01.01 [--agent name] [--id 342]

Publishes atomically-ish and refuses to touch protected targets:
  1. validates the draft (status: ready, links resolve, id free, chapter exists);
  2. checks every target principle's band baton — LIVE bands are DEFERRED, never edited;
  3. with --write: creates content/stories/ST### — Title.md, appends to _order.json,
     adds the Contents line under the chapter section, and appends the backlink
     "- [[ST### — Title|###. Title]]" to each free-band principle's ## Stories section.

Supervisor only. Storytellers never run this. Run story_check.py --context published and
build.py afterwards, then commit+push.
"""
import sys, os, re, json, argparse, datetime, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STORIES = os.path.join(ROOT, 'content', 'stories')
ORDER = os.path.join(ROOT, 'content', '_order.json')
BOOK = os.path.join(ROOT, 'content', 'structure', 'ST — Stories of Genuine Flourishing.md')
BATONS = os.path.join(ROOT, 'docs', 'enrichment', 'batons')
BANDS = os.path.join(ROOT, 'docs', 'enrichment', 'bands')
STALE_MIN = 20  # baton freshness window, mirrors baton.py


def split(t):
    end = t.find('\n---\n', 4)
    return t[:end + 5], t[end + 5:]


def baton_state(band):
    """fresh / stale / none, using the baton file's last clock-in."""
    p = os.path.join(BATONS, f'{band}.json')
    if not os.path.exists(p):
        return 'none', None
    try:
        b = json.load(open(p, encoding='utf-8'))
        last = datetime.datetime.fromisoformat(b['last_clock_in'])
        age = (datetime.datetime.now(datetime.timezone.utc) - last).total_seconds() / 60
        return ('fresh' if age < STALE_MIN else 'stale'), b.get('holder')
    except Exception:
        return 'none', None


def principle_bands():
    """Map principle file name -> [band, ...] from band manifests."""
    m = {}
    if not os.path.isdir(BANDS):
        return m
    for f in os.listdir(BANDS):
        if not f.endswith('.json'):
            continue
        band = f[:-5]
        try:
            data = json.load(open(os.path.join(BANDS, f), encoding='utf-8'))
        except Exception:
            continue
        items = data if isinstance(data, list) else data.get('items', [])
        for it in items:
            if isinstance(it, str):
                m.setdefault(it, []).append(band)
    return m


def next_free_id():
    used = set()
    if os.path.isdir(STORIES):
        for f in os.listdir(STORIES):
            mm = re.match(r'ST(\d{3}) — ', f)
            if mm:
                used.add(int(mm.group(1)))
    n = 1
    while n in used:
        n += 1
    return n


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('draft', help='draft path (repo-relative)')
    ap.add_argument('--write', action='store_true', help='actually write (default: dry-run)')
    ap.add_argument('--id', type=int, help='ST number (default: next free)')
    ap.add_argument('--chapter', help='structure chapter section id, e.g. ST-S01.01 (required to write)')
    ap.add_argument('--agent', help='supervisor name for the ledger note')
    args = ap.parse_args()

    dp = os.path.join(ROOT, args.draft)
    if not os.path.exists(dp):
        sys.exit(f'FAIL draft not found: {args.draft}')
    text = open(dp, encoding='utf-8').read()
    fm, body = split(text)

    plan = []
    errs = []

    status = re.search(r'^status:\s*(\S+)', fm, re.M)
    if not status or status.group(1) != 'ready':
        errs.append(f'draft status is {status.group(1) if status else "missing"} — only "ready" drafts can be published')
    title = re.search(r'^title:\s*"?([^"\n]+)"?\s*$', fm, re.M)
    if not title:
        errs.append('draft front matter missing title')
        title = None
    lane = re.search(r'^lane:\s*(\S+)', fm, re.M)
    if not lane:
        errs.append('draft front matter missing lane')

    n = args.id or next_free_id()
    stid = f'ST{n:03d}'
    fname = f'{stid} — {title.group(1)}' if title else f'{stid} — ???'
    fpath = os.path.join(STORIES, fname + '.md')
    if os.path.exists(fpath):
        errs.append(f'target file exists: {fpath}')
    order = json.load(open(ORDER, encoding='utf-8'))
    entry = f'content/stories/{fname}.md'
    if entry in order:
        errs.append(f'{entry} already in _order.json')

    # target principles + band protection
    targets = re.findall(r'^- \[\[([^\]|]+)', re.search(r'\*\*Principles:\*\*(.*?)(\n\n|\Z)', body, re.S).group(1), re.M) \
        if re.search(r'\*\*Principles:\*\*', body) else []
    if not targets:
        errs.append('no **Principles:** links found in the draft body')
    bands = principle_bands()
    deferred, free = [], []
    for t in targets:
        tf = None
        for cand in os.listdir(os.path.join(ROOT, 'content', 'principles')):
            if cand.startswith(t.strip() + ' ') or cand == t.strip() + '.md':
                tf = os.path.join(ROOT, 'content', 'principles', cand)
                break
        if not tf:
            errs.append(f'target principle file not found: {t}')
            continue
        st, holder = 'none', None
        for band in bands.get(os.path.basename(tf), []):
            s, h = baton_state(band)
            if s == 'fresh':
                st, holder = s, h
                break
            if s == 'stale':
                st, holder = 'stale', h
        if st == 'fresh':
            deferred.append((t, holder))
        else:
            free.append((t, tf))
    if deferred:
        errs.append('LIVE-BAND TARGETS (defer, do not edit): ' +
                    ', '.join(f'{t} (held by {h})' for t, h in deferred))

    # chapter section in the structure book
    book = open(BOOK, encoding='utf-8').read()
    if args.write and not args.chapter:
        errs.append('--chapter is required with --write (e.g. ST-S01.01)')
    chapter_ok = False
    if args.chapter:
        m = re.search(rf'^(\s*)- \[\[{re.escape(args.chapter)}[^\]]*\]\]\s*$', book, re.M)
        if not m:
            errs.append(f'chapter {args.chapter} not found in the Stories book structure')
        else:
            chapter_ok = True

    if errs:
        print('DRY-RUN FAILED — nothing written:')
        for e in errs:
            print('  ERR', e)
        return 1

    # ---- write phase -------------------------------------------------------
    # body for the published page: draft body minus the QC-notes scaffolding
    pub_body = re.sub(r'\n## QC notes.*', '', body, flags=re.S).rstrip() + '\n'
    pub_fm = ('---\nschema: 0\n'
              f'id: "{stid}"\ntype: "story"\n'
              f'title: "{n}.  {title.group(1)}"\n'
              f'file: "{fname}"\n'
              'navigation: {"track": "shared", "primaryPath": ["NAV-SHARED", "NAV-SHARED-ST"], "alternatePaths": []}\n'
              f'legacy: {{"volume": "Volume III — Stories of Genuine Flourishing", "book": "ST — Stories of Genuine Flourishing", '
              f'"chapter": "{args.chapter} — {stid}", "parent": ""}}\n---\n')
    # resolve the chapter display name for legacy.chapter
    if args.chapter:
        cm = re.search(rf'- \[\[{re.escape(args.chapter)} — ([^\]]+)\]\]', book)
        legacy_ch = f'{args.chapter} — {cm.group(1)}' if cm else args.chapter
        pub_fm = pub_fm.replace(f'"chapter": "{args.chapter} — {stid}"', f'"chapter": "{legacy_ch}"')

    print(f'{"WRITE" if args.write else "DRY-RUN"} {args.draft} -> content/stories/{fname}.md')
    print(f'  id {stid}, chapter {args.chapter or "(none — dry-run)"}, targets: ' + ', '.join(t for t, _ in free or targets))
    if deferred:
        print('  deferred (live bands):', ', '.join(f'{t} ({h})' for t, h in deferred))
    if not args.write:
        print('  dry-run ok — re-run with --write --chapter <id> to publish')
        return 0

    # 1. story page
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(pub_fm + pub_body)
    # 2. _order.json
    order.append(entry)
    with open(ORDER, 'w', encoding='utf-8') as f:
        json.dump(order, f, indent=1, ensure_ascii=False)
        f.write('\n')
    # 3. structure book: append under the chapter's child list
    lines = book.split('\n')
    out, done = [], False
    for i, l in enumerate(lines):
        out.append(l)
        if re.match(rf'^\s*- \[\[{re.escape(args.chapter)}[^\]]*\]\]\s*$', l):
            indent = re.match(r'^(\s*)', l).group(1) + '  '
            # skip to the end of this chapter's child list
            j = i + 1
            while j < len(lines) and (not lines[j].strip() or lines[j].startswith(indent)):
                out.append(lines[j]); j += 1
            out.append(f'{indent}- [[{fname}]]')
            done = True
    if not done:
        sys.exit('FAIL chapter line vanished — aborting after partial write; inspect git status')
    with open(BOOK, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    # 4. backlinks into free-band principle files
    for t, tf in free:
        pt = open(tf, encoding='utf-8').read()
        bl = f'- [[{fname}|{n}. {title.group(1)}]]'
        if bl in pt:
            continue
        m = re.search(r'^## Stories\s*$', pt, re.M)
        if m:
            sect = re.search(r'(## Stories\n)(.*?)(\n## |\Z)', pt, re.S)
            body_s = sect.group(2).rstrip()
            pt = pt.replace(sect.group(0), sect.group(1) + body_s + '\n' + bl + sect.group(3), 1)
        else:
            anchor = re.search(r'^## Psychology parallels\s*$', pt, re.M) or re.search(r'^## Sources\s*$', pt, re.M)
            if anchor:
                pt = pt.replace(anchor.group(0), f'## Stories\n{bl}\n\n' + anchor.group(0), 1)
            else:
                pt = pt.rstrip() + f'\n\n## Stories\n{bl}\n'
        with open(tf, 'w', encoding='utf-8') as f:
            f.write(pt)
        print(f'  backlink appended: {os.path.basename(tf)}')

    print(f'PUBLISHED {stid} — run story_check.py "content/stories/{fname}.md" --context published,')
    print('  python3 scripts/build.py, enrich_validate.py on touched principles, then commit+push.')
    print(f'  ledger: published by {args.agent or "supervisor"} from {args.draft} at '
          f'{datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
