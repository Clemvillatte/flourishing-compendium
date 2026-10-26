# QC sample — deg-wol-daoism-m1-changed-hash-rereview-1026e.md

**Worker**: worker-pplx-verify-1026g, deg-verify-b baton, verification lane
(read-only on modules/ledgers). **Date**: 2026-10-26T10:16Z measured clock
(~53m elapsed of the 60m run; taper item). **Scope**: independent
re-derivation of the rereview's bounded-diff claim from git history.

## Findings

Diff of docs/degrees/modules/deg-wol-daoism/m1-orientation.md between
165240f4b^ and 165240f4b (the whole-degree QC addendum commit):

1. **Bounded shape** — CONFIRMED: exactly 6 insertions, 6 deletions, one
   file.
2. **The two changes** — CONFIRMED as described: (a) the Neiye statement
   moves from "no separate verified attached source ... points to a
   tradition" to naming the m4's assigned verified source ("whose primary
   text is the Neiye itself, in Bruce R. Linnell's free translation ...
   and read in m4"); (b) the teaching-prose token count moves 4481 ->
   4489 words with the 180-wpm arithmetic otherwise unchanged.

## Addendum — independent token re-measure

This worker re-measured the teaching-prose count under the receipt's stated
boundary ("whitespace tokens from 'Level and placement' through the end of
the Rubric, table rows excluded") on the current file (identical below the
comment block to the e8e202ff state): **4,489** — matching the module's
stated count exactly. The rereview's reviewer re-measure of 4,488 (its
disclosed one-token difference) is within boundary-interpretation noise;
the count claim is corroborated.

## Verdict

Sample PASSES: the changed-hash rereview's bounded-diff claim reproduces
exactly from git history. No defects found.
