#!/usr/bin/env python3
import importlib.util
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location(
    "voice_audit", Path(__file__).parents[1] / "dossier_voice_audit.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class ContrastAuditTests(unittest.TestCase):
    def test_direct_contrast(self):
        self.assertIn("not-X-but-Y", mod.audit("It is not X, but Y.")[0]["patterns"])

    def test_adjacent_sentences(self):
        self.assertIn("negative-then-redefinition",
                      mod.audit("This is not X. It is Y.")[0]["patterns"])

    def test_links_do_not_hide_structure(self):
        self.assertTrue(mod.audit("This is not [X](https://example.com), but Y."))

    def test_quoted_primary_passage_is_not_rewritten(self):
        self.assertFalse(mod.audit('> "It is not X, but Y."'))

    def test_direct_statement(self):
        self.assertFalse(mod.audit("Courage involves judgment about fear and confidence."))

    def test_a_caveat_is_flagged_not_deleted(self):
        text = "This is an association rather than evidence of causation."
        self.assertEqual(mod.audit(text)[0]["text"], text)


if __name__ == "__main__":
    unittest.main()
