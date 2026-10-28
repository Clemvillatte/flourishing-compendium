#!/usr/bin/env python3
"""Offline regression: new claims explicitly override upstream released state."""
import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[2]


def load_script(name):
    spec = importlib.util.spec_from_file_location(name, ROOT / "scripts" / f"{name}.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class ClaimStateTests(unittest.TestCase):
    def test_free_and_released_claims_are_explicitly_held(self):
        for name in ("baton", "degree_baton"):
            module = load_script(name)
            for previous in (
                None,
                {"agent": None, "takeovers": []},
                {"agent": "previous", "released": True,
                 "released_at": "2026-10-28T14:00:00+00:00", "takeovers": []},
            ):
                with self.subTest(script=name, previous=previous):
                    with patch.object(module, "remote_read", return_value=previous), \
                            patch.object(module, "local_write") as write:
                        self.assertEqual(module.clock_in("test-lane", "new-agent"), 0)
                    baton, state = write.call_args.args
                    self.assertEqual(baton, "test-lane")
                    self.assertIs(state["released"], False)
                    self.assertNotIn("released_at", state)
                    self.assertEqual(state["agent"], "new-agent")

    def test_fresh_holder_cannot_be_displaced(self):
        for name in ("baton", "degree_baton"):
            module = load_script(name)
            state = {"agent": "other", "clocked_in": module.iso(), "released": False}
            with self.subTest(script=name):
                with patch.object(module, "remote_read", return_value=state), \
                        patch.object(module, "local_write") as write:
                    self.assertEqual(module.clock_in("test-lane", "new-agent"), 1)
                    write.assert_not_called()


if __name__ == "__main__":
    unittest.main()
