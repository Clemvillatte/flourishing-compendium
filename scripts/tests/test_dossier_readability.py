#!/usr/bin/env python3
"""Regression floor for the owner's rejection of citation-wall dossiers."""
import importlib.util
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location(
    "dossier_check", ROOT / "scripts/dossier_check.py")
CHECK = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(CHECK)


class DossierReadability(unittest.TestCase):
    def test_rejects_prose_wall(self):
        self.assertTrue(any("prose wall" in p for p in
                            CHECK.readability_problems(" ".join(["claim"] * 151))))

    def test_counts_visible_words_not_urls(self):
        prose = "[A short thought](https://example.com/" + "long/" * 200 + ")"
        self.assertEqual(CHECK.readability_problems(prose), [])

    def test_rejects_verification_badges(self):
        for label in (
            "Secondary source; quoted passage checked",
            "Primary text; quoted passages checked",
            "Study abstract; cited passage checked",
        ):
            self.assertTrue(any("verification-status" in p for p in
                                CHECK.readability_problems(label)))

    def test_short_synthesis_and_selective_quote_allowed(self):
        md = (
            "# A life worth living\n\n"
            "> What makes a life good?\n\n"
            "A good feeling need not settle a moral question. "
            "The distinction is worth keeping open.\n\n"
            "> A brief primary quotation with a [carrier](https://example.com).\n"
        )
        self.assertEqual(CHECK.readability_problems(md), [])

    def test_current_gf_candidate_meets_mechanical_floor(self):
        md = (ROOT / "docs/enrichment/dossiers/genuine-flourishing.md"
              ).read_text(encoding="utf-8")
        self.assertEqual(CHECK.readability_problems(md), [])


if __name__ == "__main__":
    unittest.main()
