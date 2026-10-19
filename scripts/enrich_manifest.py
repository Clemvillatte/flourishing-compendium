#!/usr/bin/env python3
"""Freeze a band's concept list into a committed manifest, so band ownership survives
queue regeneration (ranks shift as entries get enriched). Bands are defined by their
manifest, not by live rank position.
Usage: python3 scripts/enrich_manifest.py w1a 1 30   # ranks from the CURRENT committed queue
"""
import sys, os, json, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
q = json.load(open(os.path.join(ROOT, 'docs/enrichment/queue-concepts.json'), encoding='utf-8'))
band, start, end = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
head = subprocess.run(['git', 'rev-parse', '--short', 'HEAD'], cwd=ROOT, capture_output=True, text=True).stdout.strip()
ids = [c['id'] for c in q[start-1:end]]
path = os.path.join(ROOT, 'docs/enrichment/bands', f'{band}-manifest.json')
os.makedirs(os.path.dirname(path), exist_ok=True)
json.dump({"band": band, "source_queue_commit": head, "ranks": [start, end],
           "concepts": ids}, open(path, 'w', encoding='utf-8'), indent=1)
open(path, 'a', encoding='utf-8').write('\n')
print(f'manifest written: {path} ({len(ids)} concepts, queue@{head})')
