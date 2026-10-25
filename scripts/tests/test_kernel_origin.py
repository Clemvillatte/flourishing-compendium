#!/usr/bin/env python3
"""Regression tests for origin metadata and the non-destructive migration."""
import importlib.util
from pathlib import Path
import re
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("origins", ROOT / "scripts/kernel_origin_migrate.py")
origins = importlib.util.module_from_spec(spec)
spec.loader.exec_module(origins)


class KernelOriginTests(unittest.TestCase):
    def test_migration_preserves_body_and_is_idempotent(self):
        prefix = '---\nschema: 0\nid: "K123"\n---\n'
        body = '> **Kernel K123** — Example\n\nA body with [[a link]].\n\n'
        footer = '## Sources\n\n- https://example.com\n'
        old = prefix + body + '> **Therapeutic approach: DBT**\n\n' + footer
        new, label = origins.migrate(old)
        self.assertEqual(label, origins.LABELS["DBT"])
        self.assertEqual(
            new,
            prefix + "Practice: **Dialectical behaviour therapy (DBT)**\n\n" + body + footer,
        )
        self.assertEqual(origins.migrate(new)[0], new)

    def test_general_is_omitted(self):
        text = '---\nid: "K100"\n---\n> Opening\n\n> **Therapeutic approach: general**\n\n## Sources\n'
        new, label = origins.migrate(text)
        self.assertEqual(label, "omitted")
        self.assertNotIn("Practice:", new)
        self.assertNotIn("Therapeutic approach", new)

    def test_raft_is_an_adaptation_not_a_therapy(self):
        text = '---\nid: "K136"\n---\n> Opening\n\n> **Therapeutic approach: general**\n'
        new, _ = origins.migrate(text)
        self.assertIn("Practice: **Buddhist-inspired practice**\n\n> Opening", new)

    def test_unsupported_inherited_origin_is_removed(self):
        text = '---\nid: "K357"\n---\nPractice: **Acceptance and commitment therapy (ACT)**\n\n> Opening\n'
        new, _ = origins.migrate(text)
        self.assertNotIn("Practice:", new)
        self.assertIn("---\n> Opening", new)

    def test_epictetus_sorting_is_not_relabelled_cbt(self):
        text = '---\nid: "K311"\n---\n> Opening\n\n> **Therapeutic approach: CBT**\n'
        new, _ = origins.migrate(text)
        self.assertIn("Practice: **Stoic-inspired practice**", new)
        self.assertNotIn("Cognitive behavioural", new)

    def test_entire_corpus_has_no_legacy_footer(self):
        paths = list((ROOT / "content/kernels").glob("*.md"))
        self.assertEqual(len(paths), 316)
        for path in paths:
            text = path.read_text()
            self.assertNotIn("Therapeutic approach:", text, str(path))
            labels = re.findall(r"^Practice: \*\*(.*?)\*\*$", text, re.M)
            self.assertLessEqual(len(labels), 1, str(path))
            if labels:
                body = text.split("\n---\n", 1)[1]
                self.assertTrue(body.startswith("Practice: **"), str(path))
                self.assertNotIn("general", labels[0].lower(), str(path))

    def test_renderer_outputs_unboxed_metadata_before_quote(self):
        src = (ROOT / "site/assets/app.js").read_text()
        start = src.index("function mdToHtml(src)")
        end = src.index("\nfunction table(", start)
        js = (
            "const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');"
            "const inline = esc;\n" + src[start:end] +
            "\nconsole.log(mdToHtml('Practice: **Buddhist-inspired practice**\\n\\n> Opening'));"
        )
        result = subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True)
        self.assertEqual(
            result.stdout.strip(),
            '<p class="kernel-origin">Buddhist-inspired practice</p><blockquote><p>Opening</p></blockquote>',
        )


if __name__ == "__main__":
    unittest.main()
