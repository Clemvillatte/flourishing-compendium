# QC continuation 2026-10-25 (storyteller-pplx-s1b-1025z)

Verification round on ready-unpublished drafts across lanes (mechanical + quote fidelity):

- s1b-034 (Hakuin on the Ice Sheet, Terebess/Yampolsky): "great was my distress" and
  "frozen solid in an ice sheet" spans verbatim. CORRECTION 2026-10-25: an earlier
  pass reported the temple-bell span as "as if" vs the source's "as though" and
  "fixed" it (commit 4b0bc9bcd); a direct raw-fetch exact-match then proved the
  source reads "as if a sheet of ice" — the fix was an error and was REVERTED
  (commit 33aa597d4) with the correction recorded in the draft's QC notes. The
  draft's wording was verbatim all along.
- s1d-006 (The Diamond That Was Never Scratched, Peirce's maxim via peirce.org
  p119): both quoted spans verbatim.
- s1d-010 (Kalamas, Thanissaro via Access to Insight): 4/4 checked spans verbatim;
  duplicate-narrative finding vs ST466 routed in s1d HANDOFF.
- Earlier same session (s1a/s1c lanes): s1a-031, s1a-043, s1c-039 quotes verbatim;
  published-page samples ST466/ST469 verbatim; full mechanical sweep logged in
  s1c/QC-sweep-2026-10-25.md.

## Round 3 (same session)

- s1d-009 (The Man Who Carried His Raft, MN 22 Thanissaro via Access to Insight):
  both quoted spans verbatim against the live page.
- s1b-037 (The Vessel in the Zhou Temple, ctext.org Shuoyuan Jing Shen): the
  source page is currently bot-walled to automated re-opening (broken_content_ip_block),
  so an independent re-fetch was not possible this session; the ledger's access event
  (2026-10-24, full-string verification recorded) stands as the teller's own
  verification. No defect found; flagged for awareness only.

## Round 4 (same session)

- s1d-007 (The Vina Player Who Bled Through His Feet, AN 6.55 Thanissaro via
  Access to Insight): both quoted spans verbatim ("return to the lower life" as the
  source reads; the vina taut/loose exchange confirmed present).
- s1b-035 (Fan Li Takes the Boat, suntzu-artofwar.org Fan Li page): both quoted
  spans verbatim.

Session verification tally: 9 ready-unpublished drafts + 2 published pages quote-checked
across lanes; 1 false-positive fidelity "fix" made and reverted (s1b-034 — the draft
was verbatim all along; lesson: exact-match raw carrier text, never trust a
prompt-extraction's rendering); 3 duplicate-narrative dispositions routed (s1c-039 vs
ST430, s1d-010 vs ST466, s1d-008 vs ST433 — the last found in a later sweep); 1
source bot-walled (s1b-037, ctext).

## Closing verification pass (2026-10-25, same teller)

Re-ran `story_check --context draft` on all 14 drafts touched this session across
lanes (s1a-031/032/042/043, s1b-034/035/037/038, s1c-039, s1d-006/007/008/009/010):
all 14 pass with 0 errors after this session's edits (fm reconciliations, the
reverted-and-corrected s1b-034, the two publication holds, the QC note additions).

## Cross-check of the launched storyteller's output (2026-10-25, logged from s1b)

The second storyteller (Path A launch, holding s1e then s1c) cleared all six s1e
qc_pending items to ready this session. I spot-verified two of the six against their
live carriers:
- s1e-003 (Brother Lawrence, Gutenberg #13871): both key quotes verbatim (the
  leafless-tree conversion sentence and the kitchen-cook sentence).
- s1e-007 (Herrigel, Zen in the Art of Archery, Wake Forest PDF): the breath
  instruction quote matches the carrier (the PDF's text layer drops one space after
  "That's" — consistent with an extraction artifact; the rendered PDF was not
  separately checked).
Child output sample: the selected quotation spans checked in each draft were
verbatim; this is a sample of spans, not a verification of every quotation,
assertion and mapping in the drafts. (Its two "published" items predate the launch
and are not this session's output.)

- s1e-008 (Andrew Wiles / Fermat's Last Theorem, PBS NOVA "The Proof" transcript):
  both quoted spans (the seven-years sentence, the September-19 desk-checking
  passage) verbatim against the live transcript. Child sample now 3/3 clean.

- s1e-006 (Ramana Maharshi, Arunachala Ashrama "Life" page): all three 1896
  death-experience spans verbatim against the live page. Child sample 4/4 clean.

- s1e-005 (George Fox, Journal ch. VI at CCEL): the ocean-of-darkness-and-light
  span verbatim against the live page. Child sample 5/5 clean.

- s1e-004 (Marva Collins): the "right to be average" and "phenomenal that day" spans
  verified verbatim against the live NPR transcript (the correct carrier per the
  ledger — an initial check against the Reason interview was the wrong carrier, not
  a defect). Child sample COMPLETE: selected quotation spans in all six drafts verified
verbatim against live carriers (sample of spans, not full-item verification).

## Full quote review s1b-035 (2026-10-25, same teller)

All four English-language ledger quotes verified verbatim against the live
suntzu-artofwar.org Fan Li page ("soaring birds... hunting dog is boiled", "a man you
can share hardship with but not ease", the small-boat sentence, and Wen Zhong's
fate). The two Chinese spans from ctext.org (Shiji 129) cannot be independently
re-opened this session (source bot-walled); the ledger's recorded access event
stands. D066 has no story backlinks; entity sweep found no existing Fan Li page.
VERDICT: clean on all checked dimensions, ready for registration.

## Published-page sample note (2026-10-25, same teller)

- ST409 (Eighty Years of Two Preludes and Fugues, Casals): both carriers were
  tested and are not re-openable from this session's fetcher — cellobello.org
  (robots-walled) and the NYT 1961 archive page (blocked by robots to the automated
  fetcher; paywall status not determinable). No re-verification possible; the
  registration's own validation stands. No defect found; awareness note only.
  Published-page samples this session: ST466 and ST469 verified verbatim; ST409
  walled.


## ERRATUM — story-page sweep accounting (2026-10-25, storyteller-pplx-s1b-1025z)

The full 491-page sweep results were first logged in s1c/QC-sweep-2026-10-25.md,
whose ST184 paragraph is now known STALE (it describes the failure as an applied
upgrade; in fact git history shows ST184 is an unmodified legacy-format page from
the 2026-10-18 import and the s1a-028 upgrade was never applied). The s1c file
cannot be corrected from this session because the s1c baton is held fresh by the
launched storyteller. Corrected accounting for the recorded 491-page snapshot:
146 pages pass; 344 legacy-format failures (including ST184, which also misses the
word floor); 1 new-pipeline failure (ST432, 481 > 480 words). The corrected ST184
disposition lives in s1a/ROUTE.md (2026-10-25 entries). Routing note for the s1c
holder and the supervisor: s1c/QC-sweep-2026-10-25.md's ST184 bullet should be
updated to match this erratum when that lane is next free.

## s1a-042 Vajira verse — direct retrieval (2026-10-25, logged from s1b)

The closing verse was directly retrieved verbatim from the live sacred-texts page
on this pass: "Just as it is by the condition precedent of the co-existence of its
various parts that the word 'chariot' is used, just so is it that when the Skandhas
are there we talk of a 'being.'" (the page's trailing footnote marker after "being"
is furniture). With this, all six s1a-042 ledger quotes are verified by direct
retrieval; the s1a QC continuation's accounting stands.

## s1e published-page sample — ST408 (2026-10-25, logged from s1b)

ST408 (The Material Told Her Where to Go, McClintock) — three quotation
spans checked, each verbatim by directed retrieval: the "time to look" passage and the
"I don't feel I really know the story" sentence against the Keller excerpt PDF
(epistemologies.wordpress.com, open); "The material just tells you where to go.
The maize cases were so spectacular that I just had to follow them." against Wu
2024 (pmc.ncbi.nlm.nih.gov/articles/PMC11393105, open). ST409 (Casals) remains
carrier-walled, as recorded above. This completes the s1e published-page sample
started in the child cross-check.
