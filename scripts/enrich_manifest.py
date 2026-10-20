#!/usr/bin/env python3
"""Freeze collision-free bands without changing queues or existing ownership.

Legacy: python3 scripts/enrich_manifest.py w1a 1 30
Priority reserve: python3 scripts/enrich_manifest.py p1i --type principle --priority --count 30
Priority means exact B/D/P numeric principle IDs, retaining degree order within that pool.
"""
import argparse
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parent.parent


def select(queue, manifests, kind, start=None, end=None, count=None, priority=False, disciplines=None):
    key = kind + 's'
    assigned = {item for manifest in manifests for item in manifest.get(key, [])}
    ranked = list(enumerate(queue, 1))
    if count is not None:
        ranked = [(rank, item) for rank, item in ranked if item['id'] not in assigned]
        if priority:
            ranked = [(rank, item) for rank, item in ranked
                      if re.fullmatch(r'[BDP]\d+', item['id'])]
        if disciplines:
            wanted = {d.strip() for d in disciplines.split(',') if d.strip()}
            def disc_of(item):
                text = (ROOT / item['path']).read_text(encoding='utf-8')
                m = re.search(r'^discipline: ?"?([^"\n]+?)"?$', text, re.M)
                return m.group(1) if m else None
            ranked = [(rank, item) for rank, item in ranked if disc_of(item) in wanted]
        ranked = ranked[:count]
        if len(ranked) != count:
            raise ValueError(f'only {len(ranked)} eligible unassigned items; requested {count}')
    else:
        if start is None or end is None or not 1 <= start <= end <= len(queue):
            raise ValueError('provide valid inclusive ranks, or --count')
        ranked = ranked[start - 1:end]
    ids = [item['id'] for _, item in ranked]
    if len(ids) != len(set(ids)):
        raise ValueError('duplicate IDs in selected queue records')
    overlap = assigned.intersection(ids)
    if overlap:
        raise ValueError(f'already assigned: {sorted(overlap)}')
    return ranked


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('band')
    parser.add_argument('start', type=int, nargs='?')
    parser.add_argument('end', type=int, nargs='?')
    parser.add_argument('--type', choices=['concept', 'principle'], default='concept')
    parser.add_argument('--count', type=int)
    parser.add_argument('--priority', action='store_true')
    parser.add_argument('--disciplines', help='comma-separated exact discipline names (front-matter); requires --count')
    args = parser.parse_args()
    if args.disciplines and args.count is None:
        parser.error('--disciplines requires --count')
    if not re.fullmatch(r'[a-z][a-z0-9]*', args.band):
        parser.error('invalid band name')
    if args.count is not None and (args.count < 1 or args.start is not None or args.end is not None):
        parser.error('--count must be positive and cannot be combined with ranks')
    if args.priority and (args.type != 'principle' or args.count is None):
        parser.error('--priority requires --type principle and --count')
    band_dir = ROOT / 'docs/enrichment/bands'
    path = band_dir / f'{args.band}-manifest.json'
    if path.exists():
        parser.error(f'refusing to overwrite {path}')
    queue_path = ROOT / f'docs/enrichment/queue-{args.type}s.json'
    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    manifests = [json.loads(p.read_text(encoding='utf-8'))
                 for p in band_dir.glob('*-manifest.json')]
    try:
        ranked = select(queue, manifests, args.type, args.start, args.end, args.count, args.priority, args.disciplines)
    except ValueError as ex:
        parser.error(str(ex))
    head = subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=ROOT, capture_output=True,
                          text=True, check=True).stdout.strip()
    ranks = [rank for rank, _ in ranked]
    manifest = {'band': args.band, 'source_queue': queue_path.name,
                'source_queue_commit': head, 'ranks': [min(ranks), max(ranks)],
                args.type + 's': [item['id'] for _, item in ranked]}
    if args.count is not None:
        manifest['selected_ranks'] = ranks
        if args.disciplines:
            manifest['selection'] = f'unassigned, disciplines [{args.disciplines}], degree order'
        else:
            manifest['selection'] = 'unassigned B/D/P principles, degree order' if args.priority else 'unassigned, degree order'
    band_dir.mkdir(parents=True, exist_ok=True)
    with path.open('x', encoding='utf-8') as handle:
        json.dump(manifest, handle, indent=1, ensure_ascii=False)
        handle.write('\n')
    print(f'manifest written: {path} ({len(ranked)} {args.type}s, queue@{head[:8]})')


if __name__ == '__main__':
    main()
