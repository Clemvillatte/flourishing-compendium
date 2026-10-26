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
    "api_push", Path(__file__).with_name("api_push.py"))
api_push = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(api_push)


class PushSafetyTests(unittest.TestCase):
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
