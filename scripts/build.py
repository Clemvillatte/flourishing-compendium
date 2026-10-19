#!/usr/bin/env python3
"""Build the Flourishing Compendium data files from markdown sources.

content/**/*.md + data-src/*.json -> site/data/{wikiData,fcAuthored,randData}.json.gz
Deterministic output: gzip with mtime=0 so repeated builds are byte-identical.
Usage: python3 scripts/build.py [--src /path/to/repo] [--version sha]
"""
import sys, os, gzip, json, re, argparse

SCHEMAS = [
    ('_legacy', '_navigation', 'book', 'chapter', 'content', 'discipline', 'file', 'id', 'number', 'parent', 'tags', 'title', 'type', 'volume'),
    ('_legacy', '_navigation', 'book', 'chapter', 'content', 'discipline', 'file', 'id', 'number', 'parent', 'reflections', 'tags', 'title', 'type', 'volume'),
    ('_navigation', 'content', 'discipline', 'file', 'id', 'number', 'tags', 'title', 'type'),
    ('_navigation', 'book', 'chapter', 'content', 'discipline', 'file', 'id', 'number', 'parent', 'tags', 'title', 'type', 'volume'),
    ('_navigation', 'content', 'field', 'file', 'id', 'tags', 'title', 'type'),
]

def gz_json(obj, path):
    raw = json.dumps(obj, ensure_ascii=False).encode('utf-8')
    with open(path, 'wb') as f:
        with gzip.GzipFile(fileobj=f, mode='wb', mtime=0) as gz:
            gz.write(raw)

def parse_md(text):
    if not text.startswith('---\n'):
        raise ValueError('missing front-matter')
    end = text.find('\n---\n', 4)
    if end < 0:
        raise ValueError('unterminated front-matter')
    fm_text = text[4:end]
    rest = text[end + 5:]
    fm = {'schema': 0}
    for line in fm_text.split('\n'):
        if not line.strip():
            continue
        k, _, v = line.partition(': ')
        if not _:
            k, _, v = line.partition(':')
        k = k.strip()
        if k == 'schema':
            fm['schema'] = int(v)
        else:
            fm[k] = json.loads(v)
    # reflections block (exact reversal of the writer)
    refl = None
    m = re.search(r'\n\n<!-- fc: reflections\n(.*)\n-->$', rest, re.S)
    if m:
        refl = m.group(1).split('\n%%\n')
        rest = rest[:m.start()]
    if rest.startswith('\n'):
        rest = rest[1:]
    return fm, rest, refl

def entry_from_md(text):
    fm, body, refl = parse_md(text)
    sid = fm.get('schema', 0)
    keys = list(SCHEMAS[sid]) if sid < len(SCHEMAS) else list(SCHEMAS[0])
    e = {}
    for k in keys:
        if k == 'reflections':
            if refl is not None:
                e['reflections'] = refl
            continue
        if k == 'content':
            e['content'] = body
            continue
        if k in ('_navigation', '_legacy'):
            fmkey = 'navigation' if k == '_navigation' else 'legacy'
            if fm.get(fmkey) is not None:
                e[k] = fm[fmkey]
            continue
        if k in fm and fm[k] is not None:
            e[k] = fm[k]
        elif k == 'tags':
            e['tags'] = []
        else:
            e[k] = ''
    # 'field' key only exists in schema 4; only set when present in fm
    if 'field' in fm and fm['field'] is not None and 'field' not in e:
        e['field'] = fm['field']
    # tags missing from fm but in keys -> handled above
    return e

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    ap.add_argument('--version', default=None)
    args = ap.parse_args()

    root = args.src
    content = os.path.join(root, 'content')
    datasrc = os.path.join(root, 'data-src')
    sitedata = os.path.join(root, 'site', 'data')
    os.makedirs(sitedata, exist_ok=True)

    order = json.load(open(os.path.join(content, '_order.json'), encoding='utf-8'))
    by_path = {}
    for dirpath, _, files in os.walk(content):
        for fn in files:
            if fn.endswith('.md'):
                p = os.path.join(dirpath, fn)
                by_path[os.path.relpath(p, root)] = p
    missing = [p for p in order if p not in by_path]
    if missing:
        raise SystemExit(f'manifest references missing files: {missing[:5]}')

    entries = []
    for rel in order:
        entries.append(entry_from_md(open(by_path[rel], encoding='utf-8').read()))

    new_files = sorted(set(by_path) - set(order))
    for rel in new_files:
        e = entry_from_md(open(by_path[rel], encoding='utf-8').read())
        entries.append(e)
        print(f'  + new entry: {e.get("id")} ({rel})')

    ids = [e['id'] for e in entries]
    dupes = {i for i in ids if ids.count(i) > 1}
    if dupes:
        raise SystemExit(f'duplicate ids after build: {dupes}')

    fa_src = json.load(open(os.path.join(datasrc, 'fcAuthored.json'), encoding='utf-8'))
    fa = {}
    for e in entries:
        if e.get('reflections') or e['id'] in fa_src:
            fa[e['id']] = dict(fa_src.get(e['id'], {}))
            if e.get('reflections'):
                fa[e['id']]['reflections'] = e['reflections']

    rand = json.load(open(os.path.join(datasrc, 'randData.json'), encoding='utf-8'))

    gz_json(entries, os.path.join(sitedata, 'wikiData.json.gz'))
    gz_json(fa, os.path.join(sitedata, 'fcAuthored.json.gz'))
    gz_json(rand, os.path.join(sitedata, 'randData.json.gz'))
    print(f'built {len(entries)} entries, fcAuthored {len(fa)} ({len(order)} manifest + {len(new_files)} new)')

    if args.version:
        ih = os.path.join(root, 'site', 'index.html')
        s = open(ih, encoding='utf-8').read()
        s = re.sub(r"window\.FC_VER = '[^']*'", f"window.FC_VER = '{args.version}'", s)
        s = re.sub(r"\?v=[0-9a-zA-Z]+", f'?v={args.version}', s)
        open(ih, 'w', encoding='utf-8').write(s)
        print(f'FC_VER set to {args.version}')

if __name__ == '__main__':
    main()
