# Schema-lane fix list — learner-visible assignment defects (deg-fix-content, 2026-10-26)

Produced by deg-fix-content after the semantic locator sweep (published
values diffed against the doc-verified manifests; commit ddf030d state).
The learner audit cannot catch these because it checks presence, not
wording. Each fix is a pure splice from the verified manifests - no
judgement calls needed. All four are LIVE in `site/assets/app.js`.

## 1. PRAG-M3-04 (mod-prag-3, requiredMedia) — stale locator

- CURRENT locator: `Reading B2, 264 words ('I am well aware how odd it must seem' through 'our duty would be to shun truth, rather')`
- WHY WRONG: this is the m3 doc's Reading B2 (Lecture II), which is already
  fully and correctly carried by PRAG-M3-03 (952 + 264 = 1,216 words). The
  published `assignment` field is already correct (B3).
- FIX: replace the locator with the manifest's mod-prag-3 PRAG-M3-04
  assignment text: James, Pragmatism Lecture VI 'Pragmatism's Conception of
  Truth' - Reading B3: the four selections quoted in full in the Step 2
  teaching (157 words; noncontiguous passages of the lecture).

## 2. PRAG-M4-01 (mod-prag-4, requiredMedia) — missing second passage

- CURRENT locator: `One contiguous passage of 778 words ... from 'Another instance, commonplace also, yet not quite so trivial, may enforce this lesson' to 'is wholly futile'`
- WHY WRONG: the m4 doc (m4-dewey-inquiry-ethics-democracy.md, lines 90, 358,
  395) assigns TWO measured passages: Reading A 778 words AND Reading B 476
  words. The published `assignment` field already carries both.
- FIX: extend the locator to name both passages, e.g.: `Two measured passages
  of Dewey's How We Think: 778 words from 'Another instance, commonplace
  also, yet not quite so trivial, may enforce this lesson' to 'is wholly
  futile', and 476 words from '...judgments' through 'the object is that which
  objects' (about 10 minutes at 130 words per minute).`

## 3. PD-M2-04 (mod-pd-2, requiredMedia) — whole-BODY figure as assignment

- CURRENT assignment: `Hwang and Matsumoto, Functions of Emotions (Noba) - opening sections through social/cultural functions; closing excerpt (~2,794 words)`
- CURRENT locator: `The opening sections through the social and cultural functions of emotion, plus the closing excerpt (about 2,794 words)`
- WHY WRONG: the ~2,794-word figure is the ledger's whole-BODY measurement; the
  m2 doc's Read section assigns about 450 words of specific excerpts ("not the
  whole module"). The manifest's assignment field was rewritten this session
  to carry the full spliceable bounded text.
- FIX: replace BOTH the assignment and the locator with the manifest's
  mod-pd-2 PD-M2-04 assignment (bounded excerpts: the 'Interpersonal
  Functions of Emotion' opening paragraph; 'Cultural transmission of the
  meaning and information system' through 'culture also influences how people
  experience them as well'; the next paragraph's first three sentences from
  'Because one of the major functions' through 'once we have them'; about 450
  words total).

## 4. PD-M3-02 (mod-pd-4, requiredMedia, revisit) — extra segment

- CURRENT segments: `[{start: 47:26, end: 54:53}, {start: 18:06, end: 39:15}]`
- WHY WRONG: the m4 doc assigns ONLY the 47:26-54:53 window for the m4
  retrieval; the 18:06-39:15 window is m3's own assignment and is already
  carried by mod-pd-3's PD-M3-02. The published `assignment` field is already
  correct (names only the 47:26-54:53 window).
- FIX: drop the second segment; keep only `{start: 47:26, end: 54:53}`.

## 5. BUD-B2-02 (mod-bud-2 and mod-bud-5, requiredMedia) - stale word label

- CURRENT published locator (mod-bud-2): `The whole discourse (about 1,100 words); mark each truth and the task attached to it`
- WHY WRONG: the recount receipt
  (docs/degrees/verify/deg-wol-buddhism-locator-recount-1026c.md) measured the
  page body at 994 words; "about 1,000 words" is the accurate label (the
  earlier estimate was about 10 percent high). The assignments file already
  says 1,000; the manifest was synced this session.
- FIX: re-apply the assignments to app.js (the recount receipt notes this
  pending re-application).

## Verified correct (no action)

- PRAG-M3-04 (mod-prag-3): fixed by the schema lane's ef654d0 reconciliation.
- PD-M3-03 (mod-pd-3): the verified window 13:22-18:27 is correctly published
  in the segments structure. (An earlier flag from this lane was based on
  checking the wrong field and has been retracted.)
- All video windows across the four degrees match the verified manifests
  (swept 2026-10-26).
