# Independent code review: staged/committed conflict-marker guard

Reviewer: worker-pplx-verify-1026c, read-only verification assist, no
baton. Reviewed 2026-10-26 against the supervisor's OWNER-BOARD flag
that independent code review of the guard was outstanding. This is a
review, not a change: no code was modified.

Scope: `scripts/check_conflict_markers.py`, its wiring in
`scripts/enrich_save.sh` and `scripts/api_push.py`, and its regressions
in `scripts/tests/test_conflict_markers.py`.

## Verdict

Pass. The guard is sound, fail-closed, and tested. The residual risks
below are process-level or documented trade-offs; none requires a code
change before use. Two optional suggestions are listed at the end.

## What was checked and found sound

1. Marker recognition. Lines starting with seven or more `<`, seven or
   more `>`, or seven or more `|` are flagged, optionally followed by
   space or tab and text. The `=======` separator line is deliberately
   NOT flagged: standalone equals-sign headings are valid Markdown, the
   docstring says so, and a regression covers it. Git writes the open
   and close markers on every conflict, so the separator omission cannot
   hide a real conflict.
2. Fail-closed. Any OS or subprocess error exits 1 rather than skipping
   the check, so a broken environment blocks the push instead of letting
   it through.
3. Decoding. Binary blobs (NUL check) are skipped rather than decoded
   as text; non-UTF-8 text is decoded with replacement so a bad encoding
   cannot hide a marker. Both are covered by regressions.
4. Scope of inspection. The save path checks staged (index) blobs; the
   API push path checks the committed base..head delta. Historical
   markers outside the checkpoint do not block unrelated work, matching
   the stated design and covered by a regression.
5. Path handling. Output is parsed with -z, decoded with
   surrogateescape, and each path is passed to git show as a single
   argument with a -- terminator on the diff call, so spaces, unicode and
   even newline-in-path names are safe. A regression covers a path
   containing a newline.
6. Wiring. enrich_save.sh runs the staged check before every commit;
   api_push.py runs the committed-delta check before pushing. Both
   blessed push paths are covered.

## Residual risks, recorded for the owner

1. A raw git push bypasses both guards. A worker who resolves a rebase
   conflict, commits with raw git commit and pushes with raw git push
   skips the net. The operational rule is to push only through
   enrich_save.sh or api_push.py, and the guard covers both. A cheap
   mitigation if the supervisor wants belt and braces: a pre-push hook
   or a periodic origin-side sweep. Not urgent.
2. A separator-only `=======` remnant from a partial manual resolution
   is not flagged. Harmless in practice because the open and close
   markers carry the signal; listed for completeness.
3. Line numbers in the error messages can differ from an editor's
   numbering in files containing form feeds or other Unicode line
   boundaries, because Python splitlines splits on more than newline.
   Cosmetic only.

## Optional suggestions

1. One regression for the CLI-level fail-closed path: main() returning
   1 when a subprocess fails is currently untested at that level.
2. If separator remnants ever become a live problem, consider flagging
   seven-or-more `=` lines only when the same file also carries an open
   or close marker. That would catch remnants without breaking Markdown
   headings. Small change, low value today; listed only for
   completeness.

## Tests run in this session

All 11 regressions in scripts/tests/test_conflict_markers.py pass, and
the api_push safety suite passes. No code was changed by this review.
