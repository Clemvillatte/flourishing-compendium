#!/usr/bin/env python3
"""Compile the dossier registry into the Academy view's data block.

Reads docs/enrichment/dossiers/registry.json and splices the navigation
fields (groups, per-dossier group/art/status, roadmap) into the
window.fcDossiersData JSON block inside site/assets/app.js.

This step is deliberately READ-ONLY with respect to the dossier markdown
of record (docs/enrichment/dossiers/*.md). The older scripts/dossier_build.py
regenerates markdown from its own MAP/OVERRIDES and can overwrite
hand-polished glosses; do not run it just to refresh the view data. Run
this script instead after registry or markdown changes.

Run from the repo root: python3 scripts/dossier_registry_build.py
"""
import json
import re
import sys

APP = 'site/assets/app.js'
REGISTRY = 'docs/enrichment/dossiers/registry.json'
ART_DIR = 'assets/dossier-art/'


def main():
    reg = json.load(open(REGISTRY, encoding='utf-8'))
    src = open(APP, encoding='utf-8').read()
    m = re.search(r'window\.fcDossiersData = (\{.*?\});\n', src, re.S)
    if not m:
        sys.exit('fcDossiersData block not found in ' + APP)
    # The block is JSON; the closing brace before ';' at line start of the
    # next statement. Use a brace-matched scan instead of the regex to be safe.
    start = m.start(1)
    depth, i = 0, start
    while i < len(src):
        if src[i] == '{':
            depth += 1
        elif src[i] == '}':
            depth -= 1
            if depth == 0:
                break
        i += 1
    block = src[start:i + 1]
    data = json.loads(block)

    groups = sorted(reg['groups'], key=lambda g: g['order'])
    data['groups'] = [{'id': g['id'], 'label': g['label']} for g in groups]
    by_id = {d['id']: d for d in reg['dossiers']}

    for d in data.get('dossiers', []):
        r = by_id.get(d['id'])
        if not r:
            print('WARN dossier in app.js not in registry:', d['id'], file=sys.stderr)
            continue
        d['group'] = r['group']
        d['status'] = r['status']
        d['art'] = ART_DIR + r['art']

    roadmap = []
    for r in reg['dossiers']:
        if r['status'] == 'planned':
            roadmap.append({'id': r['id'], 'title': r['title'], 'group': r['group']})
    data['roadmap'] = roadmap

    new_block = json.dumps(data, indent=2, ensure_ascii=False)
    out = src[:start] + new_block + src[i + 1:]
    open(APP, 'w', encoding='utf-8').write(out)
    print('spliced registry into fcDossiersData:',
          len(data['dossiers']), 'published entries,',
          len(roadmap), 'roadmap entries,',
          len(data['groups']), 'groups')


if __name__ == '__main__':
    main()
