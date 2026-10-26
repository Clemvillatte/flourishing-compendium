#!/usr/bin/env python3
"""Offline regression checks: a failed save must never report push success."""
import contextlib
import importlib.util
import io
from pathlib import Path
import subprocess
import unittest
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location(
    "api_push", Path(__file__).resolve().parents[1] / "api_push.py")
api_push = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(api_push)


class PushSafetyTests(unittest.TestCase):
    def test_status_parser_preserves_deletions_and_unicode_paths(self):
        raw = "A\0new.py\0D\0old.py\0M\0notes/évidence.md\0".encode()
        with patch.object(api_push.subprocess, "check_output",
                          return_value=raw) as output:
            self.assertEqual(api_push.changed_files("base", "head"), [
                ("A", "new.py"), ("D", "old.py"),
                ("M", "notes/évidence.md")])
            self.assertIn("--no-renames", output.call_args.args[0])

    def test_proxy_rename_tree_includes_old_path_deletion(self):
        def output(args, **kwargs):
            if "rev-parse" in args:
                if args[-1] == "local^{tree}":
                    return "new-tree\n"
                return "local\n" if args[-1] == "HEAD" else "remote\n"
            if "diff" in args:
                return b"D\0old.py\0A\0new.py\0"
            if "show" in args:
                self.assertEqual(args[-1], "local:new.py")
                return b"new content\n"
            return "test metadata\n"

        trees = []

        def api(path, method="GET", data=None):
            if path == "/ref/heads/main":
                return 200, {"object": {"sha": "remote"}}
            if path == "/commits/remote":
                return 200, {"tree": {"sha": "base-tree"}}
            if path == "/trees":
                trees.append(data)
                return 201, {"sha": "new-tree"}
            if path == "/commits":
                return 201, {"sha": "pushed"}
            if path == "/refs/heads/main":
                return 200, {}
            self.fail("unexpected network operation: " + path)

        with patch.object(api_push, "git_ready_for_push", return_value=True), \
                patch.object(api_push, "PROXY_AUTH", True), \
                patch.object(api_push, "load_cache", return_value=set()), \
                patch.object(api_push, "save_cache"), \
                patch.object(api_push, "api_call", side_effect=api), \
                patch.object(api_push.subprocess, "check_output",
                             side_effect=output), \
                patch.object(api_push.subprocess, "run",
                             return_value=subprocess.CompletedProcess([], 0)), \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 0)
        self.assertEqual(len(trees), 1)
        self.assertIn({"path": "old.py", "mode": "100644",
                       "type": "blob", "sha": None}, trees[0]["tree"])
        self.assertTrue(any(item["path"] == "new.py" and
                            item.get("content") == "new content\n"
                            for item in trees[0]["tree"]))

    def test_tree_mismatch_never_creates_commit_or_updates_ref(self):
        def output(args, **kwargs):
            if "show" in args:
                return b"new content\n"
            return {"HEAD": "local\n", "origin/main": "remote\n",
                    "local^{tree}": "expected-tree\n"}[args[-1]]

        responses = [(200, {"object": {"sha": "remote"}}),
                     (200, {"tree": {"sha": "base-tree"}}),
                     (201, {"sha": "wrong-tree"})]
        with patch.object(api_push, "git_ready_for_push", return_value=True), \
                patch.object(api_push, "changed_files",
                             return_value=[("A", "new.py")]), \
                patch.object(api_push, "PROXY_AUTH", True), \
                patch.object(api_push, "load_cache", return_value=set()), \
                patch.object(api_push, "save_cache"), \
                patch.object(api_push, "api_call",
                             side_effect=responses) as call, \
                patch.object(api_push.subprocess, "check_output",
                             side_effect=output), \
                patch.object(api_push.subprocess, "run",
                             return_value=subprocess.CompletedProcess([], 0)), \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 1)
            self.assertEqual(call.call_count, 3)
            self.assertFalse(any(c.args[0] in ("/commits", "/refs/heads/main")
                                 for c in call.call_args_list))

    def ready(self, operation=None, dirty=0):
        def output(args, **kwargs):
            return ".git/" + args[-1] + "\n"

        with patch.object(api_push.subprocess, "check_output",
                          side_effect=output), \
                patch.object(api_push.os.path, "exists",
                             side_effect=lambda p: p == ".git/" + operation
                             if operation else False), \
                patch.object(api_push.subprocess, "run",
                             return_value=subprocess.CompletedProcess([], dirty)):
            return api_push.git_ready_for_push()

    def test_unfinished_operations_block_push(self):
        for operation in ("rebase-merge", "rebase-apply", "MERGE_HEAD",
                          "CHERRY_PICK_HEAD", "REVERT_HEAD"):
            with self.subTest(operation=operation):
                self.assertFalse(self.ready(operation=operation))

    def test_uncommitted_tracked_changes_block_push(self):
        self.assertFalse(self.ready(dirty=1))

    def test_clean_tree_is_allowed(self):
        self.assertTrue(self.ready())

    def test_failed_pull_never_reaches_network_api(self):
        def run(args, **kwargs):
            return subprocess.CompletedProcess(args, 1 if "pull" in args else 0)

        with patch.object(api_push, "git_ready_for_push", return_value=True), \
                patch.object(api_push.subprocess, "run", side_effect=run), \
                patch.object(api_push, "api_call") as call, \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 1)
            call.assert_not_called()

    def test_pending_operation_never_fetches_or_claims_success(self):
        with patch.object(api_push, "git_ready_for_push", return_value=False), \
                patch.object(api_push.subprocess, "run") as run, \
                patch.object(api_push, "api_call") as call, \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 1)
            run.assert_not_called()
            call.assert_not_called()

    def test_post_pull_dirty_state_never_claims_success(self):
        with patch.object(api_push, "git_ready_for_push",
                          side_effect=[True, False]), \
                patch.object(api_push.subprocess, "run",
                             return_value=subprocess.CompletedProcess([], 0)), \
                patch.object(api_push, "api_call") as call, \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 1)
            call.assert_not_called()

    def test_clean_synced_tree_can_report_success(self):
        with patch.object(api_push, "git_ready_for_push", return_value=True), \
                patch.object(api_push.subprocess, "run",
                             return_value=subprocess.CompletedProcess([], 0)), \
                patch.object(api_push.subprocess, "check_output",
                             return_value="same-clean-sha\n"), \
                patch.object(api_push, "api_call") as call, \
                patch.object(api_push.sys, "argv", ["api_push.py", "1"]):
            self.assertEqual(api_push.main(), 0)
            call.assert_not_called()


if __name__ == "__main__":
    with contextlib.redirect_stdout(io.StringIO()):
        unittest.main(verbosity=2)
