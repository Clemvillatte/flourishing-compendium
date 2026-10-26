"""Offline regressions; all Git mutations use disposable repositories."""
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import check_conflict_markers as guard


class MarkerRecognitionTests(unittest.TestCase):
    def test_open_close_and_diff3_markers(self):
        blob = b"Text\n<<<<<<< HEAD\nours\n||||||| base\nold\n=======\ntheirs\n>>>>>>> branch\n"
        self.assertEqual(guard.marker_lines(blob), [2, 4, 8])

    def test_configurable_marker_size_and_crlf(self):
        self.assertEqual(guard.marker_lines(b"<<<<<<<< feature\r\n>>>>>>>> main\r\n"), [1, 2])

    def test_markdown_equals_heading_and_quoted_demonstration_are_allowed(self):
        blob = b"Heading\n=======\n> <<<<<<< HEAD\n`>>>>>>> main`\n"
        self.assertEqual(guard.marker_lines(blob), [])

    def test_binary_is_not_decoded_as_text(self):
        self.assertEqual(guard.marker_lines(b"\0\n<<<<<<< HEAD\n"), [])

    def test_non_utf8_text_does_not_hide_a_marker(self):
        self.assertEqual(guard.marker_lines(b"\xff\n<<<<<<< HEAD\n"), [2])


class GitSnapshotTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.git("init", "-q")
        self.git("config", "user.email", "fixture@example.invalid")
        self.git("config", "user.name", "Offline fixture")
        self.write("baseline.md", "Baseline.\n")
        self.git("add", "-A")
        self.git("commit", "-qm", "baseline")
        self.base = self.git("rev-parse", "HEAD").strip()

    def git(self, *args):
        return subprocess.check_output(["git", *args], cwd=self.root, text=True)

    def write(self, path, content):
        target = self.root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding="utf-8")

    def test_staged_blob_not_clean_worktree_is_checked(self):
        self.write("notes.md", "<<<<<<< HEAD\n")
        self.git("add", "notes.md")
        self.write("notes.md", "Clean working copy, not staged.\n")
        self.assertEqual(guard.check(self.root), [("notes.md", [1])])

    def test_clean_staged_blob_not_dirty_worktree_is_checked(self):
        self.write("notes.md", "Clean staged blob.\n")
        self.git("add", "notes.md")
        self.write("notes.md", "<<<<<<< HEAD\n")
        self.assertEqual(guard.check(self.root), [])

    def test_deleted_file_is_not_read(self):
        self.git("rm", "-q", "baseline.md")
        self.assertEqual(guard.check(self.root), [])

    def test_unicode_space_and_newline_paths_are_preserved(self):
        path = "notes/évidence with\nnewline.md"
        self.write(path, "Text.\n>>>>>>> topic\n")
        self.git("add", "-A")
        self.assertEqual(guard.check(self.root), [(path, [2])])

    def test_committed_delta_is_checked(self):
        self.write("new.md", "Text.\n<<<<<<< HEAD\n")
        self.git("add", "-A")
        self.git("commit", "-qm", "bad checkpoint")
        self.assertEqual(guard.check(self.root, self.base), [("new.md", [2])])

    def test_unchanged_historical_defect_is_not_unrelated_work_blocker(self):
        self.write("old.md", "<<<<<<< HEAD\n")
        self.git("add", "-A")
        self.git("commit", "-qm", "historical defect")
        base = self.git("rev-parse", "HEAD").strip()
        self.write("new.md", "Clean new work.\n")
        self.git("add", "-A")
        self.assertEqual(guard.check(self.root), [])
        self.git("commit", "-qm", "new checkpoint")
        self.assertEqual(guard.check(self.root, base), [])


if __name__ == "__main__":
    unittest.main()
