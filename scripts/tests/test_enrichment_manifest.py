import sys
from pathlib import Path
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from enrich_manifest import select


class ManifestSelection(unittest.TestCase):
    def setUp(self):
        self.queue = [{'id': value} for value in ['A001', 'D001', 'BI001', 'B001', 'P001', 'PP001']]

    def test_priority_excludes_other_prefixes_and_assigned(self):
        picked = select(self.queue, [{'principles': ['D001']}], 'principle',
                        count=2, priority=True)
        self.assertEqual([(rank, item['id']) for rank, item in picked],
                         [(4, 'B001'), (5, 'P001')])

    def test_explicit_overlap_rejected(self):
        with self.assertRaises(ValueError):
            select(self.queue, [{'principles': ['D001']}], 'principle', 1, 3)

    def test_short_reserve_rejected(self):
        with self.assertRaises(ValueError):
            select(self.queue, [], 'principle', count=4, priority=True)

    def test_legacy_concept_ranks(self):
        self.assertEqual([item['id'] for _, item in
                          select(self.queue, [], 'concept', 2, 3)], ['D001', 'BI001'])

    def test_duplicate_queue_ids_rejected(self):
        with self.assertRaises(ValueError):
            select([{'id': 'D001'}, {'id': 'D001'}], [], 'principle', count=2)


if __name__ == '__main__':
    unittest.main()
