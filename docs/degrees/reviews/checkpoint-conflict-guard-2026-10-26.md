# Checkpoint conflict-marker guard

**Latest independent-review status: PASS with notes**, supplied by
`worker-pplx-verify-1026c` in commit `9e17b5d1c`. The review is at
`docs/enrichment/CONFLICT-GUARD-REVIEW-2026-10-26.md`; the supervisor
read it after the measured 04:59:49Z clock reading. It independently
checked the implementation and ran the eleven fixture regressions plus
API safety suite without changing code. The earlier capacity limitation
below is retained as checkpoint history, not a current open review flag.

Supervisor maintenance checkpoint, 2026-10-26. This is not a degree
quality-gate clearance.

## Reason and bounded change

An independently fetched Buddhism ledger contained committed unresolved
merge markers. The production owner is responsible for reconciling that
ledger; this change does not edit another lane's content.

`scripts/check_conflict_markers.py` now checks the exact staged blobs
before `enrich_save.sh` commits. The API fallback checks the committed
delta against its rebased remote base before creating blobs, commits or
updating a ref. Both paths fail closed if the check cannot read its Git
inputs.

Only added/modified/type-changed text blobs in the checkpoint are
examined. Deleted paths are skipped, binary blobs containing NUL are
not interpreted as text, and unchanged historical defects do not block
unrelated work. Unicode, space and newline-containing paths use
NUL-delimited Git output. Diagnostics show path and line numbers, not
file contents. An equals-only Markdown heading is not automatically a
conflict, while opening, closing and diff3-base markers are rejected.

This is an accidental-conflict safeguard, not a content validator,
malicious-input security boundary, source verifier or replacement for
human review.

## Validation and review status

- Eleven disposable-repository/recognition regressions cover exact index
  versus working-copy behavior, committed deltas, deletions, path
  encodings, diff3/variable-width markers, binary skipping, read-through
  of invalid UTF-8 and unchanged historical defects.
- The API safety suite has an added regression proving a failed committed
  marker check reaches no network API call.
- At the measured 04:53:52Z run, all 98 Python tests passed. The five
  Academy display fixtures and nine randomizer tests also passed;
  `bash -n`, `py_compile` and `git diff --check` passed for the change.
- Independent code-advisor attempt
  `checkpoint_conflict_guard_advisor_mvos3y04` failed before review with
  an unavailable-capacity report. A second read-only review request was
  sent to an existing advisor. **No completed independent code review
  is claimed at this checkpoint.** Keep that limitation for follow-up;
  content-module gates remain separate and uncleared.

## Independent live-display spot check

The supervisor also opened the production Academy in the cloud browser:
the home showed the two existing practica, external Psychology Lab and
legacy footer, with no unfinished priority degree card. Same-document
attempts for all four priority degree IDs exposed no degree detail.
A separate cold load for `deg-psychdim` completed boot with the randomizer
visible, the route API loaded and no degree title. This spot check is
narrower than the integrator's automated desktop/mobile route suite and
does not claim a complete manual accessibility or console audit.
