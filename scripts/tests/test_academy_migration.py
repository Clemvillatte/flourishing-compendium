"""Academy schema migration tests (deg-integrate, owner directive 2026-10-25).

Checks the fcAcademyData block in site/assets/app.js after the
degree-versus-practicum migration:
  - schemaVersion 2, updated date present
  - the three practica carry kind "practicum" (qigong, cmp, psych-101 bridge)
  - the seven new degrees exist with EMPTY module lists (no fabricated data)
  - the legacy degrees (including psychology-101) are flagged legacy
  - referential integrity: every degree module id resolves, every module's
    degree exists, every attached media source id resolves
  - sources, modules and topicMappings are untouched by the migration
    (compared against the pre-migration block recovered from git history)
"""
import json
import os
import re
import subprocess
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APP_JS = os.path.join(ROOT, 'site', 'assets', 'app.js')
MARKER = 'window.fcAcademyData = '

PRACTICA = ('deg-qigong', 'deg-cmp', 'deg-psychology-101')
LEGACY = ('deg-philosophy', 'deg-contemplative', 'deg-relational', 'deg-mind',
          'deg-wellbeing', 'deg-therapeutic', 'deg-psychology-101')
NEW_DEGREES = (
    ('deg-psychdim', 'Psychological Dimensions'),
    ('deg-wol-daoism', 'A Walk of Life: Daoism'),
    ('deg-wol-buddhism', 'A Walk of Life: Buddhism'),
    ('deg-wol-greek', 'A Walk of Life: Greek Philosophy'),
    ('deg-wol-pragmatism', 'A Walk of Life: Pragmatism'),
    ('deg-wol-existentialism', 'A Walk of Life: Existentialism and Existential Therapy'),
    ('deg-wol-positive', 'A Walk of Life: Positive Psychology'),
)
PSYCH_LAB_URL = 'https://the-psychology-lab.vercel.app/'


def decode_block(text):
    """raw_decode the real fcAcademyData block; return (data, start, consumed)."""
    decoder = json.JSONDecoder()
    for m in re.finditer(re.escape(MARKER), text):
        try:
            data, consumed = decoder.raw_decode(text[m.end():])
        except ValueError:
            continue
        if isinstance(data, dict) and 'degrees' in data and 'modules' in data:
            return data, m.end(), consumed
    raise AssertionError('fcAcademyData block not found or not decodable')


def load_current():
    with open(APP_JS, encoding='utf-8') as f:
        return decode_block(f.read())[0]


def load_pre_migration():
    """The block as it was before the migration, from git history (HEAD~ if
    the migration commit is HEAD, else HEAD)."""
    for rev in ('HEAD~1', 'HEAD~2', 'HEAD'):
        try:
            out = subprocess.run(
                ['git', 'show', f'{rev}:site/assets/app.js'],
                cwd=ROOT, capture_output=True, text=True, check=True)
        except subprocess.CalledProcessError:
            continue
        data = decode_block(out.stdout)[0]
        if data.get('schemaVersion') == 1:
            return data
    raise AssertionError('pre-migration block not found in git history')


class AcademyMigrationTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.data = load_current()
        cls.pre = load_pre_migration()
        cls.degrees = {d['id']: d for d in cls.data['degrees']}

    def test_schema_version_bumped(self):
        self.assertEqual(self.data['schemaVersion'], 2)
        self.assertTrue(re.fullmatch(r'\d{4}-\d{2}-\d{2}', self.data['updated']))

    def test_degree_ids_unique(self):
        ids = [d['id'] for d in self.data['degrees']]
        self.assertEqual(len(ids), len(set(ids)))

    def test_practica_kinds(self):
        for did in PRACTICA:
            self.assertEqual(self.degrees[did]['kind'], 'practicum', did)

    def test_new_degrees_present_with_no_modules(self):
        for did, title in NEW_DEGREES:
            d = self.degrees.get(did)
            self.assertIsNotNone(d, did)
            self.assertEqual(d['title'], title, did)
            self.assertEqual(d['modules'], [], did)
            self.assertEqual(d['status'], 'in-development', did)

    def test_new_degrees_not_in_module_map(self):
        new_ids = {did for did, _ in NEW_DEGREES}
        for mid, mod in self.data['modules'].items():
            self.assertNotIn(mod.get('degree_id'), new_ids, mid)

    def test_legacy_flags(self):
        for did in LEGACY:
            self.assertTrue(self.degrees[did].get('legacy'), did)
        for did in ('deg-qigong', 'deg-cmp'):
            self.assertFalse(self.degrees[did].get('legacy'), did)

    def test_psych_bridge_target_in_data(self):
        sources = {s['source_id']: s for s in self.data['sources']}
        refs = (self.data['modules']['mod-psych-101-1'].get('requiredMedia') or [])
        urls = [sources[r['source_id']]['url'] for r in refs if r['source_id'] in sources]
        self.assertIn(PSYCH_LAB_URL, urls)

    def test_referential_module_ids(self):
        for d in self.data['degrees']:
            for mid in d.get('modules') or []:
                self.assertIn(mid, self.data['modules'], mid)

    def test_referential_module_degree_backrefs(self):
        degree_ids = set(self.degrees)
        for mid, mod in self.data['modules'].items():
            self.assertIn(mod.get('degree_id'), degree_ids, mid)
            for r in (mod.get('requiredMedia') or []) + (mod.get('optionalMedia') or []):
                self.assertIn(r.get('source_id'),
                              {s['source_id'] for s in self.data['sources']}, mid)

    def test_practicum_content_untouched(self):
        """The migration is presentation only: sources, modules, topicMappings
        and every pre-existing degree's own content are byte-for-byte equal
        to the pre-migration block (modulo the added kind/legacy fields)."""
        for key in ('sources', 'modules', 'topicMappings'):
            self.assertEqual(self.data[key], self.pre[key], key)
        for d in self.pre['degrees']:
            after = self.degrees[d['id']]
            expected = dict(d)
            expected['kind'] = 'practicum' if d['id'] in PRACTICA else 'degree'
            if d['id'] in LEGACY:
                expected['legacy'] = True
            self.assertEqual(after, expected, d['id'])

    def test_counts_unchanged(self):
        self.assertEqual(len(self.data['modules']), len(self.pre['modules']))
        self.assertEqual(len(self.data['sources']), len(self.pre['sources']))
        self.assertEqual(len(self.data['degrees']), len(self.pre['degrees']) + 7)


if __name__ == '__main__':
    unittest.main()
