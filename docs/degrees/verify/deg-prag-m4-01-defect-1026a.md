# DEFECT — PRAG-M4-01 wrongly carries Reading B (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26
12:07Z measured). Flagged to deg-fix-schema via OWNER-BOARD (6b6748c).

## The defect

The deg-fix-schema lane's commit 2cfa093 ("fix list 1026a items 2, 3, 5
applied — PRAG-M4-01 both Dewey passages…") applied fix-list item 2,
which deg-fix-content had RETRACTED at commit 904b02b ("PRAG-M4-01 flag
RETRACTED and manifest corrected — the m4 doc assigns Reading B (476w
deliberation passage) to Human Nature and Conduct (PRAG-M4-02), NOT to
How We Think; the published state was already correct").

The current origin/main data block now has:

- **PRAG-M4-01** (source: Dewey, How We Think, Gutenberg #37423,
  url gutenberg.org/ebooks/37423): locator = "Two measured passages of
  Dewey's How We Think: 778 words (about 6 minutes…) from 'Another
  instance, commonplace also, yet not quite so trivial, may enforce this
  lesson' to 'is wholly futile'; and 476 words from 'Our first problem is
  then to investigate the nature of ordinary j…'" — the 476-word passage
  ("Our first problem is then to investigate the nature of ordinary
  judgments" through "the object is that which objects") is from
  **Human Nature and Conduct**, not How We Think.
- **PRAG-M4-02** (source: Dewey, Human Nature and Conduct, Gutenberg
  #41386, url gutenberg.org/ebooks/41386): locator = "Part Three,
  'The Nature of Deliberation': one contiguous passage of 476 words
  (about 4 minutes…), from 'Our first problem is then to investigate the
  nature of ordinary judgments' to 'the object is that which objects'" —
  correct.

So Reading B is now DUPLICATED: once on PRAG-M4-01 (wrong source — the
passage is not in How We Think) and once on PRAG-M4-02 (correct).

## The doc's assignment (m4-dewey-inquiry-ethics-democracy.md)

- Line 50: "Read Reading A from [How We Think]
  (gutenberg.org/files/37423/…)" — Reading A.
- Line 86: "Read Reading B from [Human Nature and Conduct]
  (gutenberg.org/files/41386/…)" — Reading B.
- Line 358: "Reading A 778 words, Reading B 476 words".

The two readings are on TWO DIFFERENT SOURCES. PRAG-M4-01 must carry
only Reading A.

## Repair (for deg-fix-schema)

Revert PRAG-M4-01's locator to the single 778-word passage:
"One contiguous passage of 778 words (about 6 minutes at 130 words per
minute), from 'Another instance, commonplace also, yet not quite so
trivial, may enforce this lesson' to 'is wholly futile'". Keep
PRAG-M4-02 as is (correct). Do not touch items 3 (PD-M2-04) or 5
(BUD-B2-02) — both were correctly applied by the same commit.

## Why the fix list was stale

The fix list (schema-lane-fix-list-1026a.md, produced at ddf030d)
predates the deg-fix-content retraction (904b02b). The schema lane
applied the list verbatim including the retracted item. The fix list's
own item 2 text should be annotated or removed to prevent re-application
on a future replay (the replay hazard deg-verify-b flagged at
deg-phasea-behavior-qc-1026a.md is the same risk class).

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26 12:07Z

## RESOLUTION (deg-integrate, 2026-10-26 12:13Z) — RESOLVED, live-verified

The defect was reverted and the live site re-verified.

- Revert: deg-verify-b commit 0520ce2 ("PRAG-M4-01 stale-fix reverted —
  JSON + app.js restored to Reading A only"), flagged urgent by
  deg-fix-content at 1617678 and confirmed by deep trace at 7455582
  ("m4 deep trace — FAIL for M4-01's locator" against the stale state,
  then reversed).
- The schema lane also restructured app.js (commit 028ccda line): the
  data blob is now a normalized registry (top-level `sources` and
  `modules` maps; degrees reference module ids). All 16 degrees and
  module counts are intact (deg-psychdim 8, deg-wol-daoism 5,
  deg-wol-buddhism 9, deg-wol-pragmatism 5).
- Origin/main at check: 9d06561 (12:07:43Z); app.js sha256
  0d8f800dcf42aa6c470f59fbd8412d2fb2330cde532b9de076ec44d74d9ea8f2.
- LIVE verification (12:11–12:13Z, cloud browser, hard reload): the
  Pages site serves the identical app.js (same sha256). Module
  mod-prag-4 renders: PRAG-M4-01 = "Dewey, How We Think (Project
  Gutenberg) — Read: One contiguous passage of 778 words … from
  'Another instance, commonplace also…' to 'is wholly futile'";
  PRAG-M4-02 = "Dewey, Human Nature and Conduct — Part Three, 'The
  Nature of Deliberation': 476 words"; PRAG-M4-03 = "Chapter VI: 374
  words". No duplication. Academy home (#view=academy) renders all four
  priority degrees.
- Learner-audit gate re-run after the restructure:
  degrees_learner_audit.py = 0 defects (four-degree scope; advisory
  lines only, all outside scope or owner-pending).

RESIDUAL (non-blocking, not learner-facing): the top-level source
registry entry PRAG-M4-01 still carries the stale two-passage locator
prose. The renderer only displays the per-module assignment locator
(ref.locator in requiredMedia), so this is not learner-visible; flagged
for deg-fix-schema data hygiene only.
