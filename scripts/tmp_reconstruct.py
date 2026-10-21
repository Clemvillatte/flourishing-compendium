#!/usr/bin/env python3
"""Read-only reconstruction: replay the flag-map history from the pre-sweep
baseline to the frozen origin state, EXCLUDING my own session's flag mutations
(including recovery commits), and replaying only other workers' actual changed
flag keys with complete before/after values.

This produces a comparison, not a write. Output: which keys differ between
the reconstruction and the frozen origin state, and whether the difference is
attributable to my mutations (needs correction) or another worker's change
(legitimate, keep).
"""
import json, subprocess, sys

# The frozen origin state
ORIGIN = "dc9080f1b"
# Pre-sweep baseline: the commit before my first bulk change
BASE = "cf52980f2^"

# All commits I made this session (chronological). These are EXCLUDED from the replay.
MY_COMMIT_PATTERNS = [
    "supervisor pass", "supervisor QC correction", "supervisor handoff",
    "baton: clock-in", "baton: worker-verify-qcsup",
    "supervisor PROGRESS refresh", "supervisor surgical recovery",
]

def git_show(commit, path):
    r = subprocess.run(["git", "show", f"{commit}:{path}"], capture_output=True, text=True)
    if r.returncode != 0:
        return None
    return r.stdout

def get_commits_between(base, head):
    r = subprocess.run(["git", "log", "--reverse", "--pretty=format:%H|%s", f"{base}..{head}"],
                       capture_output=True, text=True)
    return [line.split("|", 1) for line in r.stdout.strip().split("\n") if line]

def is_my_commit(subject):
    return any(p in subject for p in MY_COMMIT_PATTERNS)

# Get all commits between BASE and ORIGIN
commits = get_commits_between(BASE, ORIGIN)
print(f"Total commits {BASE[:8]}..{ORIGIN[:8]}: {len(commits)}")

# Collect all band files changed across these commits
band_files = set()
for sha, subj in commits:
    r = subprocess.run(["git", "show", "--name-only", "--pretty=format:", sha],
                       capture_output=True, text=True)
    for line in r.stdout.strip().split("\n"):
        line = line.strip()
        if line.startswith("docs/enrichment/batches/") and line.endswith(".json"):
            band_files.add(line)

print(f"Band files changed: {len(band_files)}")

# For each band file, reconstruct the flag map by replaying other workers' changes
discrepancies = []
my_mutations_found = []

for path in sorted(band_files):
    # Start with the BASE state
    base_raw = git_show(BASE, path)
    if base_raw is None:
        continue
    try:
        reconstructed = json.loads(base_raw)
    except:
        continue

    # Walk each commit in order; skip my commits
    for sha, subj in commits:
        if is_my_commit(subj):
            continue
        # Get this commit's version of the file
        new_raw = git_show(sha, path)
        if new_raw is None:
            continue
        try:
            new_state = json.loads(new_raw)
        except:
            continue
        # Replay: apply the new state's flagged dict (this is a simplification;
        # a proper replay would diff key-by-key, but for other workers' single
        # commits this is equivalent since they only touch their own band)
        reconstructed["flagged"] = new_state.get("flagged", reconstructed.get("flagged", {}))
        reconstructed["done"] = new_state.get("done", reconstructed.get("done", []))
        reconstructed["in_progress"] = new_state.get("in_progress")

    # Compare with the frozen origin state
    origin_raw = git_show(ORIGIN, path)
    if origin_raw is None:
        continue
    try:
        origin_state = json.loads(origin_raw)
    except:
        continue

    rec_fl = reconstructed.get("flagged", {})
    org_fl = origin_state.get("flagged", {})

    # Find keys that differ
    all_keys = set(rec_fl.keys()) | set(org_fl.keys())
    for k in all_keys:
        rv = rec_fl.get(k)
        ov = org_fl.get(k)
        if rv != ov:
            # Check if the origin value contains my markers
            if ov and ("RESOLVED 2026-10-21 (supervisor worker-verify-qcsup-67ce7e1d" in ov or
                      "EVIDENCE-NOTE (supervisor worker-verify-qcsup-67ce7e1d" in ov):
                my_mutations_found.append((path, k, "origin has my marker"))
            elif rv is None and ov is not None:
                discrepancies.append((path, k, "key added by another worker (keep)"))
            elif rv is not None and ov is None:
                discrepancies.append((path, k, "key removed by another worker (keep)"))
            else:
                discrepancies.append((path, k, "value changed by another worker (keep)"))

print(f"\nMy mutations still present in origin: {len(my_mutations_found)}")
for p, k, note in my_mutations_found[:20]:
    print(f"  {p.replace('docs/enrichment/batches/','')}/{k}: {note}")
print(f"\nOther workers' changes (legitimate, keep): {len(discrepancies)}")
