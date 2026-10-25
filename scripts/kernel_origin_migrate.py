#!/usr/bin/env python3
"""Replace the legacy footer modality callout with quiet opening metadata.

Specific classifications are retained after a source/context audit, with
unsupported and unresolved inherited affiliations omitted. K136 is an adaptation
of MN 22: https://www.accesstoinsight.org/tipitaka/mn/mn.022.than.html
Run with --write to apply; the default is a read-only preview.
"""
import argparse
from collections import Counter
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
LEGACY = re.compile(r"^> \*\*Therapeutic approach: (.+?)\*\*\s*$", re.M)
MODERN = re.compile(r"^Practice: \*\*(.+?)\*\*\s*$", re.M)
LABELS = {
    "ACT": "Acceptance and commitment therapy (ACT)",
    "CBT": "Cognitive behavioural therapy (CBT)",
    "DBT": "Dialectical behaviour therapy (DBT)",
    "MI": "Motivational interviewing (MI)",
    "CFT": "Compassion-focused therapy (CFT)",
    "BA": "Behavioural activation (BA)",
    "MBCT": "Mindfulness-based cognitive therapy (MBCT)",
    "MBSR": "Mindfulness-based stress reduction (MBSR)",
    "Stoic": "Stoic practice",
}
# Advisor audit: do not turn a neighbouring therapy/manual citation into
# provenance for an editorial exercise. None means unresolved/unsupported.
CORRECTIONS = {
    "K136": "Buddhist-inspired practice",
    "K200": None,
    "K311": "Stoic-inspired practice",
    "K315": None,
    "K320": "Stoic-inspired practice",
    "K357": None,
    "K368": None,
    "K374": "Trauma-informed practice",
    "K385": None,
    "K386": None,
    "K387": None,
    "K388": LABELS["ACT"],
    "K396": None,
    "K397": None,
    "K398": "Mindfulness practice",
    "K415": "Mindfulness practice",
}


def migrate(text):
    matches = list(LEGACY.finditer(text))
    modern = False
    if not matches:
        matches = list(MODERN.finditer(text))
        modern = True
    if not matches:
        return text, None
    if len(matches) != 1:
        raise ValueError("Expected one legacy modality line")
    value = matches[0].group(1)
    label = None
    if modern:
        label = value
    elif value.lower() != "general":
        label = " · ".join(LABELS[x.strip()] for x in value.split(","))
    ident = re.search(r'^id: "([^"]+)"$', text, re.M)
    if ident and ident.group(1) in CORRECTIONS:
        label = CORRECTIONS[ident.group(1)]
    # Remove only the obsolete callout and its surrounding blank separator.
    start, end = matches[0].span()
    separator = "\n" if modern else "\n\n"
    text = text[:start].rstrip("\n") + separator + text[end:].lstrip("\n")
    if label:
        front_end = text.index("\n---\n", 4) + len("\n---\n")
        text = text[:front_end] + "Practice: **" + label + "**\n\n" + text[front_end:].lstrip("\n")
    return text, label or "omitted"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    counts = Counter()
    for path in sorted((ROOT / "content/kernels").glob("*.md")):
        before = path.read_text()
        after, label = migrate(before)
        if after != before:
            counts[label] += 1
            if args.write:
                path.write_text(after)
    print(("Migrated" if args.write else "Would migrate"), sum(counts.values()), "kernels")
    for label, count in sorted(counts.items()):
        print(f"{count:3} {label}")


if __name__ == "__main__":
    main()
