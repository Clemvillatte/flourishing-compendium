#!/usr/bin/env python3
"""Locate contrast scaffolds for editorial review, never certify prose quality."""
import argparse
import json
import re
from pathlib import Path

PATTERNS = {
    "not-X-but-Y": re.compile(r"\bnot\b[^.!?\n]{1,240}\bbut\b", re.I),
    "negative-then-redefinition": re.compile(
        r"\bnot\b[^.!?\n]{1,240}[.;]\s*(?:it|this|they|these|that)\s", re.I
    ),
    "rather-than": re.compile(r"\brather than\b", re.I),
    "neither-nor": re.compile(r"\bneither\b[^.!?\n]{1,180}\bnor\b", re.I),
}


def audit(text):
    """Flag candidates, retaining evidence caveats and quotes for human judgment."""
    findings = []
    for line_no, line in enumerate(text.splitlines(), 1):
        if not line.strip() or line.lstrip().startswith(("#", ">")):
            continue
        plain = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", line)
        kinds = [name for name, pattern in PATTERNS.items() if pattern.search(plain)]
        if kinds:
            findings.append({"line": line_no, "patterns": kinds, "text": plain})
    return findings


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", nargs="?", default="docs/enrichment/dossiers")
    args = parser.parse_args()
    for path in sorted(Path(args.directory).glob("*.md")):
        if path.stem != path.stem.lower():
            continue
        findings = audit(path.read_text())
        print(json.dumps({
            "dossier": path.stem, "flagged_lines": len(findings),
            "findings": findings,
            "scope": "structural candidates only; human review required"
        }, ensure_ascii=False))


if __name__ == "__main__":
    main()
