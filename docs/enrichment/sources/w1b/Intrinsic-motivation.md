# Intrinsic motivation — evidence ledger (w1b, 2026-10-20)

## Sources consulted

- Ryan and Deci 2000, "Intrinsic and Extrinsic Motivations: Classic
  Definitions and New Directions," Contemporary Educational Psychology 25:54-67
  (https://www.selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_IntExtDefs.pdf),
  fetched. Verbatim: the p. 56 intrinsic definition; the extrinsic contrast
  definition; "From birth onward, humans, in their healthiest states, are
  active, inquisitive, curious, and playful creatures..."; "In schools, for
  example, it appears that intrinsic motivation becomes weaker with each
  advancing grade."; the undermining-effect passages (locus of causality;
  "virtually every type of expected tangible reward made contingent on task
  performance does, in fact, undermine intrinsic motivation").
- Ryan and Deci 2000, "Self-Determination Theory and the Facilitation of
  Intrinsic Motivation...," American Psychologist 55:68-78
  (https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf),
  via search extract of the PDF: "the inherent tendency to seek out novelty and
  challenges, to extend and exercise one's capacities, to explore, and to
  learn."

## Decisions

- Facets block (four bare labels, no wikilinks) folded into prose; "Other
  formulations in this library" seed lines folded into Sources (their content
  duplicated the definition); Cited-in lists preserved verbatim.
- Kashdan et al. 2018, Csikszentmihalyi 1990 and the craftsmanship-motivation
  research kept as inherited citation lines; no claims made from them (not
  opened this session).
- MO062 gloss grounded in its title ("reinforcement, not bribery").
- Mention scan: 4 inline proposals (Achievement goal theory, Autonomy-threat
  research, D063, D096); Acquired Needs Theory and Character strengths hits are
  inside wikilink labels (skipped); D017 and Identified-versus-introjected hits
  are inside quotations (skipped); 5 reciprocals proposed (Extrinsic
  motivation, Self-concordance theory, Eudaimonic well-being, Growth mindset,
  Mastery orientation).

## Validation

- enrich_validate.py content/concepts/Intrinsic motivation.md — ok.

## Round-2 repairs (2026-10-20, advisor QC)

- Opening sentences combined into one cited sentence per the advisor's wording.
- "Inherent rather than learned" removed; the quotation now introduced as Ryan
  and Deci's description of exploration and play. "The healthy state does not
  survive every environment" replaced with the reported-pattern framing.
- "Best-known finding" removed; the rewards passage now presented as the
  paper's 2000 summary with its qualifications kept (expected, tangible,
  contingent). MO062 gloss grounded in its body ("as celebration of progress
  rather than as the reason for the behaviour").
- The American Psychologist PDF fetched directly this round; the inherent-
  tendency quotation verified on p. 70.
- Y040 gloss narrowed to its body's content (ethics not performed for
  reputation).
- 4 reciprocals withdrawn to drafts/w1b/intrinsic-motivation-proposals-deferred.md
  (Self-concordance theory, Eudaimonic well-being, Growth mindset, Mastery
  orientation); the four Related lines are now bare links; the Extrinsic
  motivation contrast stands.
- Inline proposal phrases changed to the plain "intrinsic motivation".

## Round-3 repairs (2026-10-20, advisor QC)

- Printed page numbers located in the definitions PDF for every retained
  quotation: intrinsic definition p. 56; exploration/play p. 56; schools
  decline p. 60; undermining verdict p. 59; extrinsic definition p. 60. The
  opening's dual citation corrected (intrinsic p. 56, extrinsic contrast
  p. 60).
- First rewards sentence given its own citation (p. 59); "with the
  qualifications kept" drafting commentary removed; MO062 now wikilinked with
  its body's verbatim phrase; the American Psychologist anchor made
  descriptive ("author-hosted PDF").
- Baseline validation run as instructed: `python3 scripts/enrich_validate.py
  "content/concepts/Intrinsic motivation.md" --base '634e50be^'` — ok, 1
  checked, 0 failed.
- Inline-phrase verification: the resolver wraps the FIRST plain-text
  occurrence, skipping lines where the phrase is already in a link; checked all
  four targets (Achievement goal theory line 29 prose; Autonomy-threat
  research line 10 prose; D063 line 41 bullet; D096 line 47 bullet) — each
  first occurrence is the intended unlinked text.

## Round-4 addendum (2026-10-20, advisor QC)

- The "locus of causality" fragment paraphrased per the advisor's wording (no
  printed-page locator on the paraphrase; the verified p. 59 kept on the
  rewards quotation). The blockquote's generic [PDF] anchor replaced with a
  descriptive author/title label. Baseline validation re-run: ok, 1 checked,
  0 failed. Item accepted.
