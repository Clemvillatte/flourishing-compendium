# DEGREE VERIFICATION RECEIPT — Phase A behavior checks + replay-hazard finding

- Receipt id: deg-phasea-behavior-qc-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton, claimed this session)
- Date: 2026-10-26 (push time = this receipt's git commit; the sandbox clock was
  verified against the GitHub API Date header at 11:54:04Z)

## Behavioral checks on the LIVE site — ALL PASS

Done in a cloud browser against https://clemvillatte.github.io/flourishing-compendium/
(read-only for the repo; the browser's own localStorage was used and cleared after).

1. **Completion isolation + persistence — PASS.** In mod-dao-1 the Eno Daodejing
   ref (DAO-M1-04, teach, chapters 1/8/76) was marked watched; the stored key is
   the full per-assignment key `mod-dao-1::DAO-M1-04::teach::Chapters 1, 8 and
   76 in full (288 words in all); ...`. Navigating to mod-dao-5 showed the SAME
   source (capstone-return, chapters 20/44/50/67) NOT marked; reloading
   mod-dao-1 showed the mark persisted. Completion is per module + per
   assignment, as designed.
2. **Multi-window player generation — PASS.** Opening the Komjathy video
   (DAO-M1-01, windows 0:01:17–0:10:35 and 0:20:02–0:24:06) generates the embed
   `youtube.com/embed/_12aeIvlHhM?autoplay=1&rel=0&modestbranding=1&start=77&end=635`
   — the first assigned window's boundaries, with all windows printed in the
   row and the assignment line in the player head.

## Gate-logic regression check — NO REGRESSION

Unit check of the audit's duplicate detection after this session's seg_key
refinement (texts distinguished by role+passage): true text duplicates still
collide; distinct text assignments still differ; true video duplicates still
collide; distinct video windows still differ. The refinement did not weaken
the gate.

## FINDING — replay hazard in the apply pipeline (for the deg-fix-schema lane)

Re-running `scripts/degrees_apply_assignments.py --write` for all four degrees
against the CURRENT origin/main data (isolated copy, /tmp) does NOT reproduce
the current data block. Three drifts observed:

1. **Field loss:** refs on origin carry `role` and `assignment` text (e.g.
   mod-dao-1 DAO-M1-01) that the current assignments JSONs omit; a replay
   rebuilds each ref from the JSON only and DROPS those fields, which would
   re-open role/assignment defects at the gate.
2. **Structure drift:** the daoism JSON's optional "further viewing" entries
   are re-added to mod-dao-1 optionalMedia (currently empty on origin).
3. **Mixed correction state:** the buddhism JSON carries the deg-fix-text
   corrections for BUD-B4-01 (title "Introduction to Meditation: Session 1",
   33:55) and BUD-B5-01 (amaravati.org collection URL) that are NOT yet in the
   origin data block — a replay would apply them (wanted), while also
   reverting anything else the JSONs lag behind.

Recommendation for the schema lane: make the apply script merge-by-field
(preserve existing ref fields the JSON omits) or bring the JSONs back to
full-fidelity, and re-apply buddhism once, before anyone relies on replay as
a recovery path. The gate on origin/main remains at 4 defects (the four
owner-routed wiki_readings lines) — the replay hazard does not affect the
currently published data; it affects FUTURE replays.

No module, ledger, band or shared board edited by this receipt (finding
flagged to the schema lane via the OWNER-BOARD).
