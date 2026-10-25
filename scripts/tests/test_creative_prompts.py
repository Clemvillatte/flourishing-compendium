#!/usr/bin/env python3
"""Structural gate for the Creative Spark bank (site/assets/prompts-bank.json).

Owner intent (2026-10-25 rework): the generator feeds an essayist/video creator.
- No poetry/fiction/memoir genres; sparks are essay/video-neutral conceptual openings.
- No workshop fields (done_when, move, word counts, constraint rules).
- Each spark is short (a "foot in the door", not a homework assignment) and didactic:
  it carries connections to real principles/kernels in content/ plus a published dossier.
- No hallucination: every connection ref and title must match an actual card file,
  and the dossier must be in the published set.
"""
import json
import os
import re
import sys
import unittest

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
BANK = os.path.join(ROOT, 'site', 'assets', 'prompts-bank.json')

REQUIRED = ('id', 'family', 'text', 'connections', 'dossier')
WORD_BOUNDS = (3, 60)  # a spark, not a workshop prompt; 60 is a hard ceiling


def load():
    with open(BANK, encoding='utf-8') as f:
        return json.load(f)


def principle_ids():
    out = {}
    for fn in os.listdir(os.path.join(ROOT, 'content', 'principles')):
        m = re.match(r'^([A-Z]{1,3}\d+)\s+—\s+(.*)\.md$', fn)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def kernel_ids():
    out = {}
    for fn in os.listdir(os.path.join(ROOT, 'content', 'kernels')):
        m = re.match(r'^(K\d+)\s+—\s+(.*)\.md$', fn)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def published_dossiers():
    with open(os.path.join(ROOT, 'docs', 'enrichment', 'dossiers', 'registry.json'), encoding='utf-8') as f:
        reg = json.load(f)
    return {d['id'] for d in reg['dossiers'] if d.get('status') == 'published'}


class BankShape(unittest.TestCase):
    def setUp(self):
        self.doc = load()
        self.p = self.doc['prompts']

    def test_not_empty_and_unique_ids(self):
        self.assertGreaterEqual(len(self.p), 12)
        ids = [x['id'] for x in self.p]
        self.assertEqual(len(ids), len(set(ids)))

    def test_required_fields(self):
        for x in self.p:
            for k in REQUIRED:
                self.assertIn(k, x, f"{x.get('id')} lacks {k}")
            for k in ('text', 'family'):
                self.assertTrue(isinstance(x[k], str) and x[k].strip(), f"{x['id']} empty {k}")
            self.assertIsInstance(x['sensitive'], bool, x['id'])
            self.assertTrue(x['connections'], f"{x['id']} names no connection")
            self.assertTrue(x['dossier'], f"{x['id']} names no dossier")

    def test_no_workshop_or_genre_fields(self):
        banned = ('genre', 'done_when', 'move', 'title', 'target', 'word_count', 'constraint')
        for x in self.p:
            for k in banned:
                self.assertNotIn(k, x, f"{x['id']} still carries the workshop field {k!r}")

    def test_no_poetry_fiction_memoir_families(self):
        banned = ('poetry', 'fiction', 'memoir')
        for x in self.p:
            self.assertNotIn(x['family'], banned, f"{x['id']} family is a banned form")

    def test_length_bounds(self):
        for x in self.p:
            n = len(x['text'].split())
            lo, hi = WORD_BOUNDS
            self.assertTrue(lo <= n <= hi, f"{x['id']} text is {n} words")

    def test_all_declared_families_present(self):
        declared = {f['id'] for f in self.doc['families']}
        used = {x['family'] for x in self.p}
        self.assertTrue(used <= declared, f"undeclared families used: {used - declared}")
        self.assertTrue(declared <= used, f"declared families unused: {declared - used}")

    def test_every_connection_resolves_and_matches_title(self):
        principles = principle_ids()
        kernels = kernel_ids()
        for x in self.p:
            for c in x['connections']:
                self.assertIn(c.get('kind'), ('principle', 'kernel'), f"{x['id']} bad connection kind")
                pool = principles if c['kind'] == 'principle' else kernels
                self.assertIn(c['ref'], pool, f"{x['id']} names unknown {c['kind']} {c['ref']}")
                self.assertEqual(pool.get(c['ref']), c['title'],
                                 f"{x['id']} {c['ref']} title mismatch")

    def test_every_dossier_is_published(self):
        pub = published_dossiers()
        for x in self.p:
            self.assertIn(x['dossier'], pub, f"{x['id']} names unpublished dossier {x['dossier']}")


if __name__ == '__main__':
    sys.exit(unittest.main())
