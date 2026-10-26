#!/usr/bin/env python3
"""Reject unresolved merge markers in staged or newly committed text blobs.

Only changed blobs are inspected. Historical files outside the checkpoint are
not rewritten or made a blocker for unrelated work. Standalone equals-sign
headings are valid Markdown, so a separator alone is not treated as a conflict.
"""
import argparse
from pathlib import Path
import re
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[1]
MARKER = re.compile(r"^(?:<{7,}|>{7,}|\|{7,})(?:[ \t].*)?$")


def marker_lines(blob):
    """Return one-based marker locations without exposing file contents."""
    if b"\0" in blob:
        return []
    return [
        number
        for number, line in enumerate(blob.decode("utf-8", errors="replace").splitlines(), 1)
        if MARKER.fullmatch(line)
    ]


def changed_blobs(root, base=None, head="HEAD"):
    """Read the index, or exactly the changed blobs in base..head."""
    args = ["git", "diff", "--name-only", "-z", "--no-renames",
            "--diff-filter=ACMT"]
    if base is None:
        args.append("--cached")
    else:
        args.extend([base, head])
    args.append("--")
    paths = subprocess.check_output(args, cwd=root).split(b"\0")
    for raw_path in paths:
        if not raw_path:
            continue
        path = raw_path.decode("utf-8", errors="surrogateescape")
        revision = f":{path}" if base is None else f"{head}:{path}"
        blob = subprocess.check_output(["git", "show", revision], cwd=root)
        yield path, blob


def check(root=ROOT, base=None, head="HEAD"):
    findings = []
    for path, blob in changed_blobs(root, base, head):
        lines = marker_lines(blob)
        if lines:
            findings.append((path, lines))
    return findings


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", help="scan committed changes from this ref")
    parser.add_argument("--head", default="HEAD", help="committed target (default HEAD)")
    args = parser.parse_args(argv)
    try:
        findings = check(base=args.base, head=args.head)
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"ERROR: conflict-marker check could not complete: {error}", file=sys.stderr)
        return 1
    for path, lines in findings:
        locations = ", ".join(str(number) for number in lines)
        print(f"ERROR: unresolved merge marker: {path} (line(s) {locations})", file=sys.stderr)
    if findings:
        print("Resolve the changed file; no commit/push is safe yet.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
