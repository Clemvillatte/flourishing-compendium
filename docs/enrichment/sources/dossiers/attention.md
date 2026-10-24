# Dossier ledger — Attention (worker-pplx-dos4-1024c, 2026-10-24)

Verification record for docs/enrichment/dossiers/attention.md, revision 1
(QC pass applied: two divergences rewritten, source limits restored, coverage
extended by body-text sweep, per-entry glosses tightened).

## Method

- Map construction: fresh title sweep over content/ (44 attention-title
  concept files) plus the dos4-manifest inventory, plus a body-text sweep
  (concept files not titled with "attention" that use the word 12+ times),
  screened by reading each card's opening claim. Stragglers added on reading:
  Flow, Mind wandering, Right concentration, The noticing-wandering-returning
  cycle in meditation, Open-monitoring meditation, Anapanasati, Walking
  meditation, Vigilance decrement, Vigilance theory (manifest-scope),
  Posner's three-network model, Heavy media multitasking, Spiritual vigilance,
  Body scan in MBSR (Kabat-Zinn), Executive function theory Miyake (body sweep).
  Excluded from the body sweep as off-theme: Wu wei (action concept).
- Every per-entry description in the dossier is a compressed restatement of the
  linked entry's own opening claim, taken from its content/ file. No
  description carries a quotation.
- Every quoted fragment was verified word-for-word this session against a
  carrier opened for it. For each carrier the full fetched text was compared
  against the dossier quote. The passages inspected are named below.
- Card links: 90 links, 83 unique targets, all resolved by
  scripts/dossier_check.py (exit 0; 14 headers, 18 external carriers).

## Carriers opened and compared (URLs)

1. https://psychclassics.yorku.ca/James/Principles/prin11.htm — James,
   Principles of Psychology ch. 11. Passages inspected and compared
   word-for-word: the "Every one knows what attention is..." definition;
   "My experience is what I agree to attend to. Only those items which I
   notice shape my mind — without selective interest, experience is an utter
   chaos." Note: the source italicises phrases in the second passage; the
   dossier drops the italics markers, wording unchanged.
2. https://www.gutenberg.org/cache/epub/57634/pg57634.txt — James,
   Principles of Psychology vol. 2, ch. XXVI. Passages compared word-for-word:
   "Effort of attention is thus the essential phenomenon of will."; "The
   essential achievement of the will, in short, when it is most 'voluntary,'
   is to attend to a difficult object and hold it fast before the mind."
3. https://labs.wsu.edu/attention-perception-performance/documents/2016/05/attentional-load-review_lavie_05.pdf
   — Lavie 2005, Trends in Cognitive Sciences. Passages compared
   word-for-word: the load-theory predictions passage ("This led to the
   predictions that high perceptual load..."); the debate sentence ("Mixed
   results as to whether focusing attention on task-relevant stimuli can
   exclude distractors from early perceptual processing..."); the summary
   sentence ("This research indicates that distractor perception can be
   prevented (early selection)..."); and the opposite-effect sentence
   ("Whereas high perceptual load can eliminate distractor processing, high
   load on 'frontal' cognitive control processes increases distractor
   processing."). The dossier's map quote starts at "This led to the
   predictions" — a full sentence of the original, not a mid-sentence
   capitalisation.
4. https://greatergood.berkeley.edu/images/uploads/A_Wandering_Mind_Is_an_Unhappy_Mind.pdf
   — Killingsworth and Gilbert 2010, Science. Passages compared
   word-for-word: "Mind wandering occurred in 46.9% of the samples..."; the
   full closing sentence "In conclusion, a human mind is a wandering mind, and
   a wandering mind is an unhappy mind. The ability to think about what is
   not happening is a cognitive achievement that comes at an emotional cost."
   (the second sentence was retrieved in a second fetch of the same carrier).
5. https://metalab.psych.ucsb.edu/sites/default/files/publications/2013/2013-The-costs-and-benefits-of-mind-wandering-a-review.pdf
   — Mooneyham and Schooler 2013. Passages compared word-for-word: the
   performance-cost sentence; the "attentional cycling, dishabituation, and
   relief from boredom" sentence; the tedium-insulation sentence. The dossier
   quote joins two passages from the review with an ellipsis marking the join.
6. https://pmc.ncbi.nlm.nih.gov/articles/PMC2693206/ — Lutz, Slagter, Dunne
   and Davidson 2008, Trends in Cognitive Sciences. Passages compared
   word-for-word: Box 1 focused-attention passage (from "A widespread style
   of Buddhist practice" through "returns to the intended object"); Box 2
   open-monitoring passage ("One aims to remain only in the monitoring
   state..." and the "effortful selection... replaced by the 'effortless'
   sustaining" sentence). The dossier's OM quote uses an ellipsis inside the
   passage to mark a join; wording between the marks is exact.
7. https://wendyhasenkamp.net/wp-content/uploads/2016/02/hasenkamp-neuroimage-2012.pdf
   — Hasenkamp et al. 2012, NeuroImage. Passage compared word-for-word: "This
   model proposes four intervals in a cognitive cycle: mind wandering,
   awareness of mind wandering, shifting of attention, and sustained
   attention."
8. https://pmc.ncbi.nlm.nih.gov/articles/PMC3627747/ — Langner and Eickhoff
   2012, Psychological Bulletin. Passages compared word-for-word: the opening
   two sentences of the article text ("Maintaining attention for more than a
   few seconds is essential...").
9. https://www.themathesontrust.org/papers/christianity/Weil-Reflections.pdf
   — Weil, "Reflections on the Right Use of School Studies" (in Waiting for
   God). Passages compared word-for-word: the "Attention consists of
   suspending our thought..." passage; "The key to a Christian conception of
   studies is the realization that prayer consists of attention. It is the
   orientation of all the attention of which the soul is capable toward God."
   The dossier's phrase "almost a miracle" in the ST-adjacent line is also
   from this carrier ("it is almost a miracle; it is a miracle"), compared.

## Carriers not opened, and why no repair is needed

- Bruya, Effortless Attention (philarchive via web.archive.org): fetch failed
  (broken content at the archive URL). The Effortless attention entry carries
  no quotation, only a description compressed from the concept page.
- The Flow page's "intrinsically rewarding state of absorption" quote: its
  cited carrier looked mismatched on the concept page, so no quotation from
  Flow is used anywhere in the dossier; the Flow entry is description only.
- All other content in the dossier is either quoted from the nine carriers
  above or compressed description from linked entries (no quotations).

## Source limits restored in revision 1 (per QC)

- The noticing-wandering-returning entry now distinguishes the study's
  measurement (brain signatures) from the compendium's training framing.
- The Progressive overload entry records the citation gap the concept page
  itself records.
- The CAS entry is qualified as within Wells's own model.
- The K190 Flow block gloss notes the steps are the compendium's protocol and
  the conditions Csikszentmihalyi's; the K357 gloss carries the kernel's own
  "shared experiences are stronger than solitary ones" finding.
- The divergence on wandering is framed as boundary conditions (not opposing
  positions), and the divergence on effort/effortlessness was replaced by the
  early-vs-late selection debate, quoted entirely from the Lavie review.

## Practice section

Selection lists 17 kernels: the manifest's three (K163, K328, K357), the
attention-practice kernel cluster found by full-text sweep (K100-K113
on-theme members), and K190 Flow block (cited by the Attention concept page).
Each description is compressed from the kernel's own protocol text. The
evidence-limits paragraph after the list states where the doses are practice
conventions rather than tested values.

## Band state

docs/enrichment/batches/dos4.json updated to done at push. The registry
status for the Attention dossier is left "planned" for the supervisor to
flip and publish, as directed; flagged in the commit message.

## Story section

Added per the updated exemplar (the-self.md, Story section). Every story
card included was opened and read this session; each logline compresses
the story card's own telling, and no story is included from its title
alone.

## Story-section repair (worker-pplx-dos4-1024e, 2026-10-24)

Dos4 baton re-claimed by the dossiers-format supervisor and the routed
QC items repaired in one pass: six logline em dashes restructured
(ST069, ST025, ST018, ST028, ST057, ST432; story text untouched, only
the separator), and the intro line swapped to the exemplar's trimmed
version. No story card was altered; the loglines' claims are unchanged.
