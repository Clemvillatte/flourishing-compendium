#!/usr/bin/env python3
"""Regression tests for the enrich_validate structural pure-ToC exemption.

A structural page that is a pure table of contents (no prose words) is exempt
from the content bar (prose minimum/maximum, banned words, staging, Sources
URL, bold in prose) but NOT from the protected-markup checks. Structural pages
that carry prose, and all concept/principle pages, remain fully subject to
the bar. These tests pin both directions.
"""
import os
import re
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))

import enrich_validate as ev


def harness(path, old=None):
    """Run validate() with git_show patched to a chosen baseline."""
    E = ev.load()
    byfile = {e['fm'].get('file'): i for i, e in E.items()}
    byid = {e['fm'].get('id'): i for i, e in E.items()}
    new = open(os.path.join(ev.ROOT, path), encoding='utf-8').read()
    base = old if old is not None else new
    ev.git_show = lambda p, b: base
    return ev.validate(path, byfile, byid), new


class StructuralExemption(unittest.TestCase):
    def test_pure_toc_structural_page_exempt_from_content_bar(self):
        # The Stories book Contents page: type "book", zero prose words.
        path = 'content/structure/ST — Stories of Genuine Flourishing.md'
        (errs, warns), _ = harness(path)
        self.assertEqual([e for e in errs if 'prose' in e or 'Sources' in e], [])

    def test_pure_toc_structural_page_keeps_markup_protection(self):
        # Removing a wikilink from the same Contents page must still FAIL the
        # protected-markup check (checked directly via protected_errors).
        path = 'content/structure/ST — Stories of Genuine Flourishing.md'
        new = open(os.path.join(ev.ROOT, path), encoding='utf-8').read()
        lines = new.split('\n')
        victim = next(i for i, l in enumerate(lines) if re.match(r'^    - \[\[ST\d', l))
        reduced = '\n'.join(lines[:victim] + lines[victim + 1:])
        errs = ev.protected_errors(new, reduced, 'book')
        self.assertTrue(any('markup' in e for e in errs))
        # and the reverse direction: the intact page vs itself is clean
        self.assertEqual(ev.protected_errors(new, new, 'book'), [])

    def test_concept_short_prose_still_fails(self):
        # The exemption must not leak: a concept-type page with short prose FAILs.
        path = 'content/concepts/Fear.md'
        new = open(os.path.join(ev.ROOT, path), encoding='utf-8').read()
        fm, body = ev.split(new)
        head = '\n'.join(body.split('\n')[:12])
        old = fm + '\n' + head + '\n'
        (errs, warns), _ = harness(path, old=old)
        self.assertTrue(any('prose too short' in e for e in errs))


if __name__ == '__main__':
    unittest.main()
