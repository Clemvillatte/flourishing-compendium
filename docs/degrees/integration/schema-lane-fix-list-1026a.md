# Schema-lane fix list — learner-visible assignment defects (deg-fix-content, 2026-10-26)

Produced by deg-fix-content after the semantic locator sweep (published
values diffed against the doc-verified manifests). The learner audit
checks presence, not wording, so it cannot catch these. Each fix is a pure
splice from the verified manifests — no judgement calls needed.

STATUS (checked against app.js at commit 82d459d, 2026-10-26): items 1, 2
and 5 below. Item 1 was fixed by the schema lane's ef654d0 reconciliation.
Items 2, 3 and 5 are LIVE (still present in the published state).

## 1. PRAG-M3-04 (mod-prag-3, requiredMedia) — RESOLVED, no action

The schema lane's reconciliation (commit ef654d0, 2026-10-26) fixed this:
the published locator now correctly reads "Lecture VI, four short
selections totalling 157 words ... printed in full in the module's second
step; the selections are not contiguous in the lecture". The transient
PRAG-M3-05 mint was also dropped. No further action.

## 2. PRAG-M4-01 (mod-prag-4, requiredMedia) — RETRACTED, no action

An earlier version of this list instructed the schema lane to add a
476-word second passage to PRAG-M4-01's locator. That instruction was
WRONG and is retracted: the m4 doc's Read section assigns Reading B (the
476-word deliberation passage) to Human Nature and Conduct (PRAG-M4-02),
not to How We Think. The published locator (778-word How We Think passage
only) is correct. The error was in this lane's manifest entry (both
passages merged into How We Think); the manifest was corrected in commit
904b02b and PRAG-M4-02's assignment made spliceable with the doc's exact
bounds.

## 3. PD-M2-04 (mod-pd-2, requiredMedia) — whole-BODY figure as assignment

- CURRENT assignment: `Hwang and Matsumoto, Functions of Emotions (Noba) - opening sections through social/cultural functions; closing excerpt (~2,794 words)`
- CURRENT locator: `The opening sections through the social and cultural functions of emotion, plus the closing excerpt (about 2,794 words)`
- WHY WRONG: the ~2,794-word figure is the ledger's whole-BODY measurement;
  the m2 doc's Read section assigns about 450 words of specific excerpts
  ("not the whole module"). The manifest's assignment field now carries the
  full spliceable bounded text.
- FIX (UPDATED): the published entries no longer carry an `assignment` field (the ef654d0
  restructure made `locator` the operative learner-visible field for text
  sources) - replace the LOCATOR with the manifest's
  mod-pd-2 PD-M2-04 assignment (bounded excerpts: the 'Interpersonal
  Functions of Emotion' opening paragraph; 'Cultural transmission of the
  meaning and information system' through 'culture also influences how
  people experience them as well'; the next paragraph's first three
  sentences from 'Because one of the major functions' through 'once we
  have them'; about 450 words total).

## 4. PD-M3-02 (mod-pd-4, requiredMedia, revisit) — extra segment

- CURRENT segments: `[{start: 47:26, end: 54:53}, {start: 18:06, end: 39:15}]`
- WHY WRONG: the m4 doc assigns ONLY the 47:26-54:53 window for the m4
  retrieval; the 18:06-39:15 window is m3's own assignment and is already
  carried by mod-pd-3's PD-M3-02. The published `assignment` field is
  already correct (names only the 47:26-54:53 window).
- FIX: drop the second segment; keep only `{start: 47:26, end: 54:53}`.

## 5. BUD-B2-02 (mod-bud-2 and mod-bud-5, requiredMedia) — stale word label

- CURRENT published locator (mod-bud-2): `The whole discourse (about 1,100 words); mark each truth and the task attached to it`
- WHY WRONG: the recount receipt
  (docs/degrees/verify/deg-wol-buddhism-locator-recount-1026c.md) measured
  the page body at 994 words; "about 1,000 words" is the accurate label (the
  earlier estimate was about 10 percent high). The assignments file already
  says 1,000; the manifest was synced this session.
- FIX: re-apply the assignments to app.js (the recount receipt notes this
  pending re-application).

## Verified correct (no action)

- PRAG-M3-04 (mod-prag-3): fixed by the schema lane's ef654d0 reconciliation.
- PD-M3-03 (mod-pd-3): the verified window 13:22-18:27 is correctly published
  in the segments structure. (An earlier flag from this lane was based on
  checking the wrong field and has been retracted.)
- PRAG-M4-01 (mod-prag-4): the published locator is correct; see item 2's
  retraction.

- Video windows: re-checked schema-aware this session (receipt:
  docs/degrees/verify/video-windows-recheck-1026a.md) - 36 bounded video
  assignments compared against the verified manifests; all match once
  optional/required roles are honoured (several sources split a required
  window and an optional-remainder entry, which is correct). The one
  extra-segment case (mod-pd-4's PD-M3-02) is item 4 above. An earlier
  blanket PASS on this was based on a vacuous check and was withdrawn
  before this re-check.

## 6. PD-M1-07 (mod-pd-8) — REMOVED in error, re-add

- The schema lane removed PD-M1-07 (Woolley et al. 2025) from mod-pd-8's
  published capstone-return set, following this lane's manifest claim that
  it is "NOT cited in m8 prose". That claim was WRONG: the m8 doc cites
  the paper in prose by LINK, not by name (line 221, "original adherence
  research" = PMC13428958, the Woolley adherence paper that m1 and m6
  assign).
- FIX: re-add PD-M1-07 to mod-pd-8 as a capstone-return entry, e.g.
  locator: `The adherence research: reuse the passages you already read`.
  (PD-M7-10 / Vohs is NOT cited in the m8 doc in any form - its removal
  stands.)
