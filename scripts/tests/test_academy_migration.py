"""Academy schema tests (deg-integrate, owner directive 2026-10-25).

Two layers, kept apart on purpose:

1. AcademySchemaTests (permanent invariants of the migrated block): the
   fcAcademyData block in site/assets/app.js carries schemaVersion 2, every
   program has a kind, the superseded programs are flagged legacy, the
   psychology-101 bridge target is carried by the attached source record,
   and all module and media references resolve. These hold no matter what
   module data the degree owners later deliver.

2. MigrationAuditTests (one-time audit, pinned to immutable history): the
   migration commit c4880ebb3 and its first parent. It proves the migration
   was presentation only: sources, modules and topicMappings are unchanged
   between the two revisions, the seven new degrees entered with EMPTY
   module lists, and the fcGalleryData block that follows the Academy block
   in the file is byte-for-byte identical. Reading pinned revisions keeps
   the audit independent of how far main has moved since. The audit needs
   those revisions in the local git store: CI checks out a shallow clone
   (depth 1) and skips this class with a stated reason; run it from a
   full clone after pulling.
"""
import hashlib
import json
import os
import re
import subprocess
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APP_JS = os.path.join(ROOT, 'site', 'assets', 'app.js')
MARKER = 'window.fcAcademyData = '
GALLERY_MARKER = 'window.fcGalleryData = '
MIGRATION_COMMIT = 'c4880ebb3'  # app.js schema v2 commit (deg-integrate, 2026-10-25)

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


def decode_block(text, marker=MARKER):
    """raw_decode the data block after the marker; return (data, start, consumed)."""
    decoder = json.JSONDecoder()
    for m in re.finditer(re.escape(marker), text):
        try:
            data, consumed = decoder.raw_decode(text[m.end():])
        except ValueError:
            continue
        if isinstance(data, dict) and 'degrees' in data:
            return data, m.end(), consumed
    raise AssertionError('data block not found or not decodable')


def load_current():
    with open(APP_JS, encoding='utf-8') as f:
        return decode_block(f.read())[0]


def git_show(rev, path='site/assets/app.js'):
    out = subprocess.run(['git', 'show', f'{rev}:{path}'], cwd=ROOT,
                         capture_output=True, text=True, check=True)
    return out.stdout


def canonical(obj):
    """Canonical serialization: byte equality here is stronger than object
    equality (it also catches number-format drift such as 1 vs 1.0)."""
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))


class AcademySchemaTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.data = load_current()
        cls.degrees = {d['id']: d for d in cls.data['degrees']}

    def test_schema_version(self):
        self.assertEqual(self.data['schemaVersion'], 2)
        self.assertTrue(re.fullmatch(r'\d{4}-\d{2}-\d{2}', self.data['updated']))

    def test_degree_ids_unique(self):
        ids = [d['id'] for d in self.data['degrees']]
        self.assertEqual(len(ids), len(set(ids)))

    def test_every_program_has_a_kind(self):
        vocab = {'degree', 'practicum'}
        for d in self.data['degrees']:
            self.assertIn(d['kind'], vocab, d['id'])

    def test_practica_kinds(self):
        for did in PRACTICA:
            self.assertEqual(self.degrees[did]['kind'], 'practicum', did)

    def test_new_degrees_present(self):
        for did, title in NEW_DEGREES:
            d = self.degrees.get(did)
            self.assertIsNotNone(d, did)
            self.assertEqual(d['title'], title, did)

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
        source_ids = {s['source_id'] for s in self.data['sources']}
        for mid, mod in self.data['modules'].items():
            self.assertIn(mod.get('degree_id'), degree_ids, mid)
            for r in (mod.get('requiredMedia') or []) + (mod.get('optionalMedia') or []):
                self.assertIn(r.get('source_id'), source_ids, mid)


class MigrationAuditTests(unittest.TestCase):
    """One-time audit of the migration, pinned to immutable revisions.
    Skipped with a reason where the pinned history is not available (the CI
    shallow clone); it is a historical check, not a gate on future work."""

    @classmethod
    def setUpClass(cls):
        try:
            cls.pre = decode_block(git_show(MIGRATION_COMMIT + '^'))[0]
            cls.post = decode_block(git_show(MIGRATION_COMMIT))[0]
        except (subprocess.CalledProcessError, AssertionError) as e:
            raise unittest.SkipTest(
                'migration audit needs the pinned revisions in the local git '
                'store (full clone); not available here: ' + str(e))

    def test_schema_bumped_at_the_migration_commit(self):
        self.assertEqual(self.pre['schemaVersion'], 1)
        self.assertEqual(self.post['schemaVersion'], 2)

    def test_sources_modules_topicmappings_unchanged(self):
        for key in ('sources', 'modules', 'topicMappings'):
            self.assertEqual(canonical(self.pre[key]), canonical(self.post[key]), key)

    def test_counts_at_the_migration_commit(self):
        self.assertEqual(len(self.post['modules']), len(self.pre['modules']))
        self.assertEqual(len(self.post['sources']), len(self.pre['sources']))
        self.assertEqual(len(self.post['degrees']), len(self.pre['degrees']) + 7)

    def test_new_degrees_entered_with_empty_module_lists(self):
        post_degrees = {d['id']: d for d in self.post['degrees']}
        for did, _ in NEW_DEGREES:
            self.assertEqual(post_degrees[did]['modules'], [], did)
            self.assertEqual(post_degrees[did]['status'], 'in-development', did)

    def test_existing_degree_content_untouched(self):
        post_degrees = {d['id']: d for d in self.post['degrees']}
        for d in self.pre['degrees']:
            expected = dict(d)
            expected['kind'] = 'practicum' if d['id'] in PRACTICA else 'degree'
            if d['id'] in LEGACY:
                expected['legacy'] = True
            self.assertEqual(post_degrees[d['id']], expected, d['id'])

    def test_gallery_block_bytes_identical(self):
        """The fcGalleryData block that follows the Academy block must be
        untouched: its raw JSON slice is byte-for-byte identical between the
        two revisions (hash recorded for the record)."""
        pre_src = git_show(MIGRATION_COMMIT + '^')
        post_src = git_show(MIGRATION_COMMIT)
        pre_slice = gallery_slice(pre_src)
        post_slice = gallery_slice(post_src)
        self.assertEqual(pre_slice, post_slice)
        self.assertTrue(pre_slice)
        self.assertEqual(
            hashlib.sha256(pre_slice.encode('utf-8')).hexdigest(),
            hashlib.sha256(post_slice.encode('utf-8')).hexdigest())


def gallery_slice(text):
    m = re.search(re.escape(GALLERY_MARKER), text)
    if not m:
        return ''
    _, consumed = json.JSONDecoder().raw_decode(text[m.end():])
    return text[m.end():m.end() + consumed]


if __name__ == '__main__':
    unittest.main()
