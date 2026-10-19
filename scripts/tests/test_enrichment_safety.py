"""Isolated safety regressions. Never runs integration against the real corpus."""
import collections
import contextlib
import datetime
import io
import json
import pathlib
import sys
import tempfile
import unittest
from unittest import mock

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
import enrich_apply as apply
import enrich_validate as validate


class IntegrationSafety(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = pathlib.Path(self.temp.name)
        for folder in ('bands', 'batches', 'batons', 'proposals', 'applied'):
            (self.root / 'docs/enrichment' / folder).mkdir(parents=True)
        self.now = datetime.datetime(2026, 10, 19, 12, tzinfo=datetime.timezone.utc)
        self.states = {'p1a': {'in_progress': None}}
        self.members = {'P1': 'p1a'}

    def write(self, path, value):
        path = self.root / path
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(value), encoding='utf-8')

    def baton(self, age=0, released=False, name='p1a'):
        self.write(f'docs/enrichment/batons/{name}.json', {
            'agent': 'worker', 'released': released,
            'clocked_in': (self.now - datetime.timedelta(minutes=age)).isoformat()
        })

    def busy(self):
        return apply.band_busy('P1', self.members, self.states, str(self.root), self.now)

    def test_principle_and_concept_membership(self):
        self.write('docs/enrichment/bands/p1a-manifest.json',
                   {'band': 'p1a', 'principles': ['P1']})
        self.write('docs/enrichment/bands/w1a-manifest.json',
                   {'band': 'w1a', 'concepts': ['Concept']})
        with mock.patch.object(apply, 'ROOT', str(self.root)):
            self.assertEqual(apply.band_of(), {'P1': 'p1a', 'Concept': 'w1a'})

    def test_duplicate_membership_rejected(self):
        for band in ('p1a', 'p1b'):
            self.write(f'docs/enrichment/bands/{band}-manifest.json',
                       {'band': band, 'principles': ['P1']})
        with mock.patch.object(apply, 'ROOT', str(self.root)):
            with self.assertRaises(ValueError):
                apply.band_of()

    def test_fresh_baton_protects_between_items(self):
        self.baton()
        self.assertTrue(self.busy())

    def test_legacy_baton_name_protects(self):
        self.baton(name='worker-p1a')
        self.assertTrue(self.busy())

    def test_stale_baton_without_work_is_free(self):
        self.baton(age=20)
        self.assertFalse(self.busy())

    def test_released_baton_is_free(self):
        self.baton(released=True)
        self.assertFalse(self.busy())

    def test_inflight_work_protected_even_with_stale_baton(self):
        self.baton(age=30)
        self.states['p1a']['in_progress'] = 'P1'
        self.assertTrue(self.busy())

    def test_malformed_baton_fails_closed(self):
        self.write('docs/enrichment/batons/p1a.json',
                   {'agent': 'worker', 'clocked_in': 'not a date'})
        self.assertTrue(self.busy())

    def test_legacy_proposal_schema(self):
        self.assertEqual(apply.proposal_fields(
            {'target': 'P1', 'concept': 'C', 'why': 'reason'}, 'reciprocal', str),
            ('P1', 'C'))

    def test_conflicting_aliases_rejected(self):
        with self.assertRaises(ValueError):
            apply.proposal_fields({'into': 'P1', 'target': 'P2',
                                   'link': 'C', 'why': 'reason'}, 'reciprocal', str)

    def fixture(self, record):
        text = '---\nid: "P1"\ntype: "principle"\n---\n> Original statement\n\nBody.\n'
        path = self.root / 'content/principles/P1.md'
        path.parent.mkdir(parents=True)
        path.write_text(text, encoding='utf-8')
        self.write('docs/enrichment/bands/p1a-manifest.json',
                   {'band': 'p1a', 'principles': ['P1']})
        self.write('docs/enrichment/proposals/test.json', {'reciprocal': [record]})
        entries = {
            'P1': {'fm': {'file': 'P1'}, 'path': 'content/principles/P1.md',
                   'body': '\n> Original statement\n\nBody.\n'},
            'C': {'fm': {'file': 'C'}, 'path': 'content/concepts/C.md', 'body': '\n'}
        }
        return path, text, entries

    def run_fixture(self, entries):
        with mock.patch.object(apply, 'ROOT', str(self.root)), \
             mock.patch.object(apply, 'PDIR', str(self.root / 'docs/enrichment/proposals')), \
             mock.patch.object(apply, 'APPLIED', str(self.root / 'docs/enrichment/applied')), \
             mock.patch.object(apply.enrich_stats, 'load', return_value=entries), \
             contextlib.redirect_stdout(io.StringIO()), \
             contextlib.redirect_stderr(io.StringIO()):
            return apply.main()

    def test_invalid_preflight_writes_nothing(self):
        path, text, entries = self.fixture({'into': 'P1', 'link': 'missing', 'why': 'reason'})
        proposal = self.root / 'docs/enrichment/proposals/test.json'
        before = proposal.read_bytes()
        self.assertEqual(self.run_fixture(entries), 1)
        self.assertEqual(path.read_text(), text)
        self.assertEqual(proposal.read_bytes(), before)

    def test_live_principle_deferred_not_archived(self):
        path, text, entries = self.fixture({'into': 'P1', 'link': 'C', 'why': 'reason'})
        self.baton(age=-1000000)  # Future timestamp remains protected.
        self.run_fixture(entries)
        self.assertEqual(path.read_text(), text)
        proposal = self.root / 'docs/enrichment/proposals/test.json'
        self.assertTrue(proposal.exists())
        self.assertEqual(len(json.loads(proposal.read_text())['reciprocal']), 1)
        self.assertFalse((self.root / 'docs/enrichment/applied/test.json').exists())

    def test_legacy_path_target_applies_in_isolated_fixture(self):
        path, text, entries = self.fixture({
            'target': 'content/principles/P1.md', 'concept': 'C', 'why': 'reason'})
        self.run_fixture(entries)
        self.assertIn('[[C]]', path.read_text())
        self.assertTrue(path.read_text().startswith(text.split('\n---\n')[0] + '\n---\n'))
        self.assertTrue((self.root / 'docs/enrichment/applied/test.json').exists())


class PreservationSafety(unittest.TestCase):
    original = '> Principle\n\nText [[C|label]].\n<!-- fc: reflections\nkeep me\n-->\n'

    def errors(self, replacement):
        return validate.protected_errors(self.original, replacement, 'principle')

    def test_unchanged_is_valid(self):
        self.assertEqual(self.errors(self.original), [])

    def test_statement_change_rejected(self):
        self.assertIn('principle statement changed or missing',
                      self.errors(self.original.replace('> Principle', '> New')))

    def test_reflection_change_rejected(self):
        self.assertIn('reflections block changed',
                      self.errors(self.original.replace('keep me', 'changed')))

    def test_alias_change_rejected(self):
        self.assertIn('original wikilink markup changed or removed',
                      self.errors(self.original.replace('C|label', 'C|different')))


if __name__ == '__main__':
    unittest.main()
