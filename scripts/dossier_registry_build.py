#!/usr/bin/env python3
"""Compile the dossier registry (and newly published dossiers) into the
Academy view's data block.

Reads docs/enrichment/dossiers/registry.json and splices the navigation
fields (groups, per-dossier group/art/status, roadmap, featured) into the
window.fcDossiersData JSON block inside site/assets/app.js.

When a registry dossier is marked 'published' but is not yet in the
app.js data, it is COMPILED from its markdown of record
(docs/enrichment/dossiers/<id>.md) into the renderer's block format.
Already-present dossiers are only augmented (group/art/status/featured):
their existing hand-checked blocks are never regenerated.

This step is READ-ONLY with respect to the markdown of record. The older
scripts/dossier_build.py regenerates markdown from its own MAP/OVERRIDES
and can overwrite hand-polished glosses; do not run it just to refresh
the view data. Run this script instead after registry or markdown
changes. Deterministic: two runs produce identical output.

Run from the repo root: python3 scripts/dossier_registry_build.py
"""
import json
import re
import sys

APP = 'site/assets/app.js'
REGISTRY = 'docs/enrichment/dossiers/registry.json'
ART_DIR = 'assets/dossier-art/'
SITE_BASE = 'https://clemvillatte.github.io/flourishing-compendium/#card='


def extract_data_block(src):
    """JSON-aware extraction of the fcDossiersData object.

    Returns (obj, start, end) where start/end bracket the object literal,
    or (None, -1, -1) if not found. Uses raw_decode so braces inside
    quoted strings cannot break the scan.
    """
    m = re.search(r'window\.fcDossiersData\s*=\s*', src)
    if not m:
        return None, -1, -1
    i = src.index('{', m.end())
    try:
        obj, end = json.JSONDecoder().raw_decode(src, i)
    except ValueError:
        return None, -1, -1
    return obj, i, end


def card_links_to_data(text):
    """Markdown card URLs -> renderer card: links."""
    return text.replace('](' + SITE_BASE, '](card:')


def compile_markdown(md):
    """Compile a dossier markdown of record into the data schema."""
    lines = md.split('\n')
    # front-matter strip (not currently used, defensive)
    if lines and lines[0].strip() == '---':
        for i, l in enumerate(lines[1:], 1):
            if l.strip() == '---':
                lines = lines[i + 1:]
                break
    blocks = []
    intro = []
    title = None
    question = None
    para = []
    n_counter = 0
    seen_header = False

    def flush():
        nonlocal para
        if para:
            text = card_links_to_data(' '.join(para).strip())
            if text:
                # convention of the live data: pre-header paragraphs are
                # leading 'p' blocks (intro stays empty)
                blocks.append({'t': 'p', 'x': text})
            para = []

    for raw in lines:
        line = raw.rstrip()
        s = line.strip()
        if not s:
            flush()
            continue
        if s.startswith('# ') and title is None:
            title = s[2:].strip()
            continue
        if s.startswith('> ') and question is None and not seen_header:
            # the dossier question, quoted right under the title
            question = s[2:].strip()
            continue
        if s.startswith('## '):
            flush()
            seen_header = True
            blocks.append({'t': 'h', 'x': s[3:].strip()})
            continue
        if s.startswith('### '):
            flush()
            seen_header = True
            blocks.append({'t': 'h2', 'x': s[4:].strip()})
            continue
        if s.startswith('> '):
            flush()
            seen_header = True
            blocks.append({'t': 'q', 'x': card_links_to_data(s[2:].strip()), 's': None})
            continue
        m = re.match(r'^::(\w+)::\s+(.*)$', s)
        if m:
            flush()
            seen_header = True
            blocks.append({'t': 'vs', 'l': m.group(1), 'x': card_links_to_data(m.group(2).strip())})
            continue
        m = re.match(r'^(\d+)\.\s+(.*)$', s)
        if m:
            flush()
            seen_header = True
            n_counter += 1
            blocks.append({'t': 'n', 'i': n_counter, 'x': card_links_to_data(m.group(2).strip())})
            continue
        para.append(s)
    flush()
    return title, question, intro, blocks


def main(argv=None):
    argv = argv if argv is not None else sys.argv[1:]
    rebuild = []
    if argv:
        for a in argv:
            if a.startswith('--rebuild='):
                rebuild = [s for s in a.split('=', 1)[1].split(',') if s]
            elif a == '--rebuild' and len(argv) > 1:
                continue
            else:
                print('usage: dossier_registry_build.py [--rebuild=id1,id2]',
                      file=sys.stderr)
                sys.exit(2)
    reg = json.load(open(REGISTRY, encoding='utf-8'))
    src = open(APP, encoding='utf-8').read()
    data, start, end = extract_data_block(src)
    if data is None:
        sys.exit('fcDossiersData block not found in ' + APP)

    groups = sorted(reg['groups'], key=lambda g: g['order'])
    data['groups'] = [{'id': g['id'], 'label': g['label'], **({'short': g['short']} if g.get('short') else {})} for g in groups]
    by_id = {d['id']: d for d in reg['dossiers']}
    existing = {d['id']: d for d in data.get('dossiers', [])}

    for d in data.get('dossiers', []):
        r = by_id.get(d['id'])
        if not r:
            print('WARN dossier in app.js not in registry:', d['id'], file=sys.stderr)
            continue
        d['group'] = r['group']
        d['status'] = r['status']
        d['art'] = ART_DIR + r['art']
        if r.get('featured'):
            d['featured'] = True
        else:
            d.pop('featured', None)

    # rebuild path: replace specific published dossiers from their markdown
    for rid in rebuild:
        r = by_id.get(rid)
        if not r or r['status'] != 'published':
            print('WARN rebuild target not a published registry dossier:', rid,
                  file=sys.stderr)
            continue
        md_path = 'docs/enrichment/dossiers/%s.md' % rid
        import os
        if not os.path.exists(md_path):
            print('WARN rebuild target missing markdown:', rid, file=sys.stderr)
            continue
        title, question, intro, blocks = compile_markdown(
            open(md_path, encoding='utf-8').read())
        target = None
        for d in data['dossiers']:
            if d['id'] == rid:
                target = d
                break
        if target is None:
            print('WARN rebuild target not in app.js data:', rid, file=sys.stderr)
            continue
        target['title'] = title or target['title']
        target['question'] = question or target['question']
        target['intro'] = intro
        target['blocks'] = blocks
        print('rebuilt from markdown:', rid, '(%d blocks)' % len(blocks))

    # newly published: compile from the markdown of record
    import os
    for r in reg['dossiers']:
        if r['status'] != 'published' or r['id'] in existing:
            continue
        md_path = 'docs/enrichment/dossiers/%s.md' % r['id']
        if not os.path.exists(md_path):
            print('WARN published dossier missing markdown:', r['id'], file=sys.stderr)
            continue
        title, question, intro, blocks = compile_markdown(
            open(md_path, encoding='utf-8').read())
        if not blocks:
            print('WARN empty compile for', r['id'], file=sys.stderr)
            continue
        entry = {
            'id': r['id'],
            'title': title or r['title'],
            'question': question or '',
            'intro': intro,
            'blocks': blocks,
            'group': r['group'],
            'status': 'published',
            'art': ART_DIR + r['art'],
        }
        if r.get('featured'):
            entry['featured'] = True
        data['dossiers'].append(entry)
        print('compiled newly published dossier:', r['id'],
              '(%d blocks)' % len(blocks))

    # featured dossiers render first (the owner's 'at the forefront')
    data['dossiers'].sort(key=lambda d: (not d.get('featured', False)))

    roadmap = []
    for r in reg['dossiers']:
        if r['status'] == 'planned':
            roadmap.append({'id': r['id'], 'title': r['title'], 'group': r['group']})
    data['roadmap'] = roadmap

    new_block = json.dumps(data, indent=2, ensure_ascii=False)
    out = src[:start] + new_block + src[end:]
    open(APP, 'w', encoding='utf-8').write(out)
    print('spliced registry into fcDossiersData:',
          len(data['dossiers']), 'published entries,',
          len(roadmap), 'roadmap entries,',
          len(data['groups']), 'groups')


if __name__ == '__main__':
    main()