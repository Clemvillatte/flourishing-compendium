#!/usr/bin/env python3
"""Thinker interconnection engine.

Scans the corpus for entries that mention a thinker and resolves them to
real files/titles, producing:
  -t/--thinker "Name"      grouped inventory of entries mentioning the thinker
                           (for the thinker page's interconnection section)
  --reciprocal "Name"     entries that mention the thinker but do not yet
                           wikilink to the thinker's Txxx file
  --id "Txxx"             required for --reciprocal (the thinker file id)

Mention matching: surname (case-insensitive) with optional aliases, excluding
the thinker's own page. Titles resolve to actual files, so no hallucinated
targets are possible.
"""
import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
TYPES = ("principles", "concepts", "kernels", "stories", "sayings", "thinkers")


def load_all():
    """Return list of dicts: type, path, filename, title, file, id, text, links."""
    entries = []
    for t in TYPES:
        d = os.path.join(CONTENT, t)
        if not os.path.isdir(d):
            continue
        for fn in sorted(os.listdir(d)):
            if not fn.endswith(".md"):
                continue
            p = os.path.join(d, fn)
            text = open(p, encoding="utf-8").read()
            fm = {}
            m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
            if m:
                for line in m.group(1).splitlines():
                    mm = re.match(r'^(\w+):\s*"?(.*?)"?$', line)
                    if mm:
                        fm[mm.group(1)] = mm.group(2)
            body = text[m.end():] if m else text
            links = re.findall(r"\[\[([^\]|]+)(?:\|[^\]]*)?\]\]", body)
            entries.append({
                "type": t,
                "path": p,
                "rel": os.path.relpath(p, ROOT),
                "title": fm.get("title", fn[:-3]),
                "file": fm.get("file", fn[:-3]),
                "id": fm.get("id", fn[:-3]),
                "text": text,
                "body": body,
                "links": [l.strip() for l in links],
            })
    return entries


def mentions(entry, patterns):
    """True if any pattern matches the entry body (excluding wikilink targets only)."""
    return any(re.search(pat, entry["body"], re.I) for pat in patterns)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("-t", "--thinker", help="thinker name to inventory")
    ap.add_argument("--aliases", default="", help="extra regex patterns, comma-separated")
    ap.add_argument("--reciprocal", help="thinker name: emit missing backlinks")
    ap.add_argument("--id", help="thinker node id, e.g. T001 (for --reciprocal)")
    args = ap.parse_args()

    name = args.thinker or args.reciprocal
    if not name:
        ap.error("need -t/--thinker or --reciprocal")

    surname = name.split()[-1]
    patterns = [r"\b" + re.escape(surname) + r"\b"]
    # avoid matching the thinker's own page
    if args.aliases:
        patterns += [a for a in args.aliases.split(",") if a.strip()]

    entries = load_all()
    self_files = {
        e["file"] for e in entries
        if e["type"] == "thinkers" and re.search(r"\b" + re.escape(surname) + r"\b", e["title"], re.I)
    }

    hits = []
    for e in entries:
        if e["file"] in self_files:
            continue
        if mentions(e, patterns):
            hits.append(e)

    if args.thinker:
        by_type = {}
        for e in hits:
            by_type.setdefault(e["type"], []).append(e)
        print(f"Inventory for {name} ({sum(len(v) for v in by_type.values())} entries):")
        for t in TYPES:
            if t not in by_type:
                continue
            print(f"\n### {t.capitalize()} ({len(by_type[t])})")
            for e in by_type[t]:
                print(f"- [[{e['file']}|{e['title']}]]")
        sys.exit(0)

    if args.reciprocal:
        if not args.id:
            ap.error("--reciprocal requires --id Txxx")
        # find thinker's file field to know what backlink target looks like
        target_links = set()
        for e in entries:
            if e["type"] == "thinkers" and e["id"] == args.id:
                target_links.add(e["file"])
                target_links.add(e["title"])
        if not target_links:
            ap.error(f"thinker {args.id} not found in content/thinkers/")
        missing = []
        for e in hits:
            if not any(tl in e["links"] for tl in target_links):
                missing.append(e)
        out = []
        for e in missing:
            out.append({
                "page": e["rel"],
                "id": e["id"],
                "title": e["title"],
                "add_link": f"[[{target_links.pop() if not target_links else e['file']}]]",
            })
        print(json.dumps({
            "proposed_reciprocal": [
                {"page": e["rel"], "id": e["id"], "title": e["title"],
                 "thinker": args.id, "add": "Add thinker wikilink in Related/See-also"}
                for e in missing
            ]
        }, indent=2))
        print(f"\n# {len(missing)} entries mention {name} without a backlink to {args.id}",
              file=sys.stderr)


if __name__ == "__main__":
    main()
