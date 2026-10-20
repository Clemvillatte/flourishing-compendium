#!/usr/bin/env python3
"""Supervisor tool: publish a ready storyteller draft as a new story page.

  python3 scripts/story_register.py docs/enrichment/drafts/s1a/s1a-002.md            # dry-run (default)
  python3 scripts/story_register.py docs/enrichment/drafts/s1a/s1a-002.md --write \\
      --chapter ST-S03.01 [--agent name] [--id 342] [--root /path/to/fixture]

Supervisor only. Storytellers never run this. Validation happens entirely before any
write; target principles held by a LIVE band baton are deferred, never edited.
After --write: run story_check.py --context published, build.py, then commit+push.
"""
import sys, os, re, json, argparse, datetime

STALE_MIN = 20  # baton freshness window, mirrors baton.py


class Env:
    def __init__(self, root):
        self.root = root
        self.stories = os.path.join(root, 'content', 'stories')
        self.order = os.path.join(root, 'content', '_order.json')
        self.book = os.path.join(root, 'content', 'structure',
                                 'ST — Stories of Genuine Flourishing.md')
        self.batons = os.path.join(root, 'docs', 'enrichment', 'batons')
        self.bands = os.path.join(root, 'docs', 'enrichment', 'bands')


def split(t):
    end = t.find('\n---\n', 4)
    return t[:end + 5], t[end + 5:]


def parse_baton(env, band):
    """('fresh'|'stale'|'released'|'none', holder) from the baton file."""
    p = os.path.join(env.batons, f'{band}.json')
    if not os.path.exists(p):
        return 'none', None
    try:
        b = json.load(open(p, encoding='utf-8'))
        if b.get('released'):
            return 'released', b.get('agent')
        last = datetime.datetime.fromisoformat(b['clocked_in'])
        if last.tzinfo is None:
            last = last.replace(tzinfo=datetime.timezone.utc)
        age = (datetime.datetime.now(datetime.timezone.utc) - last).total_seconds() / 60
        return ('fresh' if age < STALE_MIN else 'stale'), b.get('agent')
    except Exception:
        return 'none', None


def principle_bands(env):
    """Map principle ID -> [band, ...] from band manifests (keys: principles/concepts)."""
    m = {}
    if not os.path.isdir(env.bands):
        return m
    for f in sorted(os.listdir(env.bands)):
        if not f.endswith('-manifest.json'):
            continue
        band = f[:-len('-manifest.json')]
        try:
            data = json.load(open(os.path.join(env.bands, f), encoding='utf-8'))
        except Exception:
            continue
        for key in ('principles', 'concepts', 'items'):
            for it in data.get(key, []) if isinstance(data, dict) else []:
                pid = str(it).split(' — ')[0].strip().removesuffix('.md')
                m.setdefault(pid, []).append(band)
    return m


def next_free_id(env):
    used = set()
    if os.path.isdir(env.stories):
        for f in os.listdir(env.stories):
            mm = re.match(r'ST(\d{3}) — ', f)
            if mm:
                used.add(int(mm.group(1)))
    n = 1
    while n in used:
        n += 1
    return n


def chapter_insert_line(lines, chapter, fname):
    """Insert '- [[fname]]' after the last child of the chapter's Contents list.
    Returns a NEW list; raises if the chapter line is not found."""
    ci = next((i for i, l in enumerate(lines)
               if re.match(rf'^\s*- \[\[{re.escape(chapter)}[^\]]*\]\]\s*$', l)), None)
    if ci is None:
        raise ValueError(chapter)
    indent = re.match(r'^(\s*)', lines[ci]).group(1) + '  '
    j = ci + 1
    while j < len(lines) and (not lines[j].strip() or lines[j].startswith(indent)):
        j += 1
    out = lines[:j] + [f'{indent}- [[{fname}]]'] + lines[j:]
    return out


def append_backlink(pt, fname, number, title):
    bl = f'- [[{fname}|{number}. {title}]]'
    if bl in pt:
        return pt, False
    m = re.search(r'^## Stories\s*$', pt, re.M)
    if m:
        sect = re.search(r'(## Stories\n)(.*?)(\n## |\Z)', pt, re.S)
        body_s = sect.group(2).rstrip()
        return pt.replace(sect.group(0),
                          sect.group(1) + body_s + '\n' + bl + sect.group(3), 1), True
    anchor = (re.search(r'^## Psychology parallels\s*$', pt, re.M)
              or re.search(r'^## Sources\s*$', pt, re.M))
    if anchor:
        return pt.replace(anchor.group(0), f'## Stories\n{bl}\n\n' + anchor.group(0), 1), True
    return pt.rstrip() + f'\n\n## Stories\n{bl}\n', True


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('draft', help='draft path (repo-relative or absolute)')
    ap.add_argument('--write', action='store_true', help='actually write (default: dry-run)')
    ap.add_argument('--id', type=int, help='ST number (default: next free)')
    ap.add_argument('--chapter', help='structure chapter id, e.g. ST-S03.01 (required with --write)')
    ap.add_argument('--agent', help='supervisor name for the ledger note')
    ap.add_argument('--root', default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    help='repo root (tests use a fixture tree)')
    args = ap.parse_args()
    env = Env(args.root)

    dp = args.draft if os.path.isabs(args.draft) else os.path.join(env.root, args.draft)
    if not os.path.exists(dp):
        sys.exit(f'FAIL draft not found: {args.draft}')
    text = open(dp, encoding='utf-8').read()
    fm, body = split(text)

    errs = []
    status = re.search(r'^status:\s*(\S+)', fm, re.M)
    if not status or status.group(1) != 'ready':
        errs.append(f'draft status is {status.group(1) if status else "missing"} — only "ready" drafts can be published')
    mt = re.search(r'^title:\s*"?([^"\n]+?)"?\s*$', fm, re.M)
    if not mt:
        errs.append('draft front matter missing title')
        title = '???'
    else:
        title = mt.group(1)
    if not re.search(r'^lane:\s*(\S+)', fm, re.M):
        errs.append('draft front matter missing lane')

    n = args.id or next_free_id(env)
    stid = f'ST{n:03d}'
    fname = f'{stid} — {title}'
    fpath = os.path.join(env.stories, fname + '.md')
    if os.path.exists(fpath):
        errs.append(f'target file exists: {fpath}')
    # the ST number itself must be free, whatever the title (duplicate-id collision)
    if os.path.isdir(env.stories):
        for existing in os.listdir(env.stories):
            if re.match(rf'ST{n:03d} — ', existing):
                errs.append(f'ST number {n:03d} already used by {existing}')
                break
    order = json.load(open(env.order, encoding='utf-8'))
    entry = f'content/stories/{fname}.md'
    if entry in order:
        errs.append(f'{entry} already in _order.json')

    # target principles (IDs) + band protection
    pm = re.search(r'\*\*Principles:\*\*(.*?)(\n\n|\Z)', body, re.S)
    targets = re.findall(r'^- \[\[([^\]|]+)', pm.group(1), re.M) if pm else []
    if not targets:
        errs.append('no **Principles:** links found in the draft body')
    bands = principle_bands(env)
    deferred, free = [], []
    for t in targets:
        pid = t.strip().split(' — ')[0]
        tf = None
        if os.path.isdir(os.path.join(env.root, 'content', 'principles')):
            for cand in sorted(os.listdir(os.path.join(env.root, 'content', 'principles'))):
                if cand.startswith(pid + ' —') or cand == pid + '.md':
                    tf = os.path.join(env.root, 'content', 'principles', cand)
                    break
        if not tf:
            errs.append(f'target principle file not found: {t}')
            continue
        state, holder = 'none', None
        for band in bands.get(pid, []):
            s, h = parse_baton(env, band)
            if s == 'fresh':
                state, holder = s, h
                break
            if s == 'stale':
                state, holder = 'stale', h
        if state == 'fresh':
            deferred.append((pid, holder))
        else:
            free.append((pid, tf))
    if deferred:
        errs.append('LIVE-BAND TARGETS (defer, do not edit): ' +
                    ', '.join(f'{p} (band held by {h})' for p, h in deferred))

    book = open(env.book, encoding='utf-8').read()
    if args.write and not args.chapter:
        errs.append('--chapter is required with --write (e.g. ST-S03.01)')
    if args.chapter:
        if not re.search(rf'^\s*- \[\[{re.escape(args.chapter)}[^\]]*\]\]\s*$', book, re.M):
            errs.append(f'chapter {args.chapter} not found in the Stories book structure')

    if errs:
        print('DRY-RUN FAILED — nothing written:')
        for e in errs:
            print('  ERR', e)
        return 1

    pub_body = re.sub(r'\n## QC notes.*', '', body, flags=re.S).rstrip() + '\n'
    legacy_ch = args.chapter
    if args.chapter:
        cm = re.search(rf'- \[\[{re.escape(args.chapter)} — ([^\]]+)\]\]', book)
        if cm:
            legacy_ch = f'{args.chapter} — {cm.group(1)}'
    pub_fm = ('---\nschema: 0\n'
              f'id: "{stid}"\ntype: "story"\n'
              f'title: "{n}.  {title}"\n'
              f'file: "{fname}"\n'
              'navigation: {"track": "shared", "primaryPath": ["NAV-SHARED", "NAV-SHARED-ST"], "alternatePaths": []}\n'
              f'legacy: {{"volume": "Volume III — Stories of Genuine Flourishing", "book": "ST — Stories of Genuine Flourishing", '
              f'"chapter": "{legacy_ch}", "parent": ""}}\n---\n')

    print(f'{"WRITE" if args.write else "DRY-RUN"} {args.draft} -> content/stories/{fname}.md')
    print(f'  id {stid}, chapter {args.chapter or "(dry-run: none)"}, free targets: ' +
          ', '.join(p for p, _ in free or []))
    if deferred:
        print('  deferred (live bands):', ', '.join(f'{p} ({h})' for p, h in deferred))
    if not args.write:
        print('  dry-run ok — re-run with --write --chapter <id> to publish')
        return 0

    # ---- write phase: all contents computed first, then written ----
    story_page = pub_fm + pub_body
    new_order = order + [entry]
    new_book = '\n'.join(chapter_insert_line(book.split('\n'), args.chapter, fname))
    backlinks = []
    for pid, tf in free:
        pt = open(tf, encoding='utf-8').read()
        npt, _ = append_backlink(pt, fname, n, title)
        backlinks.append((tf, npt))

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(story_page)
    with open(env.order, 'w', encoding='utf-8') as f:
        json.dump(new_order, f, indent=1, ensure_ascii=False)
        f.write('\n')
    with open(env.book, 'w', encoding='utf-8') as f:
        f.write(new_book)
    for tf, npt in backlinks:
        with open(tf, 'w', encoding='utf-8') as f:
            f.write(npt)
        print(f'  backlink appended: {os.path.basename(tf)}')

    print(f'PUBLISHED {stid} — run story_check.py "content/stories/{fname}.md" --context published,')
    print('  python3 scripts/build.py, then commit+push.')
    print(f'  ledger: published by {args.agent or "supervisor"} from {args.draft} at '
          f'{datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
