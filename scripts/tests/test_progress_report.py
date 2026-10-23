#!/usr/bin/env python3
"""Regression tests for the progress-report reconcile logic.

Added 2026-10-23 (supervisor-pplx-8c47a5) after phantom-count fixes:
kernel bare K-IDs, thinker-band names, path-form concept records and
maintenance 'X recreation' notes must classify correctly, and genuinely
unknown IDs must STAY VISIBLE (an exclusion must never hide a real gap).

Run: python3 -m unittest scripts.tests.test_progress_report -v
  (or: python3 scripts/tests/test_progress_report.py)
"""
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from enrich_progress_report import reconcile

PRINCIPLES = {"A063", "S010", "K296"}  # note K296 is NOT a principle prefix page here
CONCEPTS = {"Ubuntu", "Nonattachment", "Non-attachment", "Grit"}
KERNELS = {"K109 — Something", "K418 — Six Healing Sounds",
           "K419 — Microcosmic orbit"}
THINKERS = {"T002 — Aristotle"}
NOTES = {"K060 recreation"}


class ReconcileTests(unittest.TestCase):
    def test_existing_bare_kernel_id_not_unmatched(self):
        # K109 exists as a kernel page — recording it done must not surface
        # as a phantom unmatched principle.
        pr, co, pru, cou = reconcile(
            {"K109", "A063"}, set(), PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertEqual(pru, [])
        self.assertIn("A063", pr)

    def test_unknown_id_stays_visible(self):
        # A K-ID with no kernel page is a real gap — it must remain visible.
        pr, co, pru, cou = reconcile(
            {"K999"}, set(), PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertEqual(pru, ["K999"])

    def test_path_form_concept_record_counts_done(self):
        # A done record stored as a path must COUNT as a done concept,
        # not vanish from both the done set and the unmatched list.
        pr, co, pru, cou = reconcile(
            set(), {"content/concepts/Ubuntu.md"}, PRINCIPLES, CONCEPTS,
            KERNELS, THINKERS, NOTES)
        self.assertIn("Ubuntu", co)
        self.assertEqual(cou, [])

    def test_verify_suffixed_record_counts_done(self):
        pr, co, pru, cou = reconcile(
            set(), {"Grit (verify-abc123: locator fixed)"}, PRINCIPLES,
            CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertIn("Grit", co)
        self.assertEqual(cou, [])

    def test_siblings_stay_distinct(self):
        # Nonattachment and Non-attachment are different pages; a done record
        # for one must not mark the other done.
        pr, co, pru, cou = reconcile(
            set(), {"Nonattachment"}, PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertIn("Nonattachment", co)
        self.assertNotIn("Non-attachment", co)

    def test_thinker_names_not_concept_unmatched(self):
        # Thinker-band done entries (short forms like 'Aristotle' or full
        # thinker page titles) are not concept titles.
        pr, co, pru, cou = reconcile(
            set(), {"Aristotle", "T002 — Aristotle"}, PRINCIPLES, CONCEPTS,
            KERNELS, THINKERS, NOTES)
        self.assertEqual(cou, [])
        self.assertNotIn("Aristotle", co)

    def test_kernel_page_entries_not_concept_unmatched(self):
        pr, co, pru, cou = reconcile(
            set(), {"K419 — Microcosmic orbit", "content/kernels/K418 — Six Healing Sounds.md"},
            PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertEqual(cou, [])

    def test_maintenance_note_not_counted(self):
        # 'K060 recreation' describes recreation work on K060, not a page.
        pr, co, pru, cou = reconcile(
            set(), {"K060 recreation"}, PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertEqual(pru, [])
        self.assertEqual(cou, [])

    def test_genuine_missing_concept_still_visible(self):
        pr, co, pru, cou = reconcile(
            set(), {"No such page anywhere"}, PRINCIPLES, CONCEPTS, KERNELS, THINKERS, NOTES)
        self.assertEqual(cou, ["No such page anywhere"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
