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

## Verification-label relocation (revision 3, 2026-10-25)

Eighteen public verification-status labels removed from the blockquote
carrier lines and relocated here (nine "Primary text/Study" labels and
nine "Scholarly review" labels). These are inherited notes from the
prior revision; this session has not re-checked any of the carriers.

Carriers affected: James, Principles of Psychology ch. 11 (x2) and vol. 2
ch. XXVI (x2) — Primary text; Lavie 2005 (x4) — Scholarly review;
Langner and Eickhoff 2012 — Scholarly review; Lutz et al. 2008 (x2) —
Scholarly review; Hasenkamp et al. 2012 — Study; Weil, Reflections (x2)
— Primary text; Mooneyham and Schooler 2013 — Scholarly review.

No card link, quotation text or gloss was changed; only the eighteen
verification suffixes moved from the public prose to this ledger.

## Prose review defects (read-only, 2026-10-25)

Substantive rework is gated on owner approval of the GF exemplar, so
these are recorded for a future pass, not fixed here.

Banned contrast constructions ("rather than") found: Mind-wandering
("part of attention's life rather than its opposite"); Goal-directed
attentional control ("steered by intention rather than pulled");
ADHD interest-based attention ("rather than by the importance of the
task"); Mooneyham and Schooler framing ("under particular conditions
rather than disputing"); line 234 ("get the insulation rather than the
cost"); ::Variation:: ("the return trained rather than the absence of
wandering"); K328 Aesthetic attention ("rather than what it means");
evidence-limits paragraph ("practice-guide conventions rather than
tested doses").

Bridging: as with affect and cognition, the map sections are
single-line attributed glosses; the reader cannot say what question
each section answered.

## Carrier re-verification (2026-10-25)

The James, Principles of Psychology ch. 11 carrier (psychclassics) was
re-opened this session. Both quoted passages are verbatim: the "Every
one knows what attention is" definition (an excerpt ending at
"others"; the carrier's sentence continues, correctly omitted) and
the "My experience is what I agree to attend to" passage. The
vol. 2 ch. XXVI carrier (Gutenberg) was not re-opened. No discrepancy
found in the ch. 11 quotes.

## Quote-fidelity pass (2026-10-24, supervisor-pplx-1024c-dossiers, dossiers baton)

The ledger's prior QC pass did not record carrier checks for the 18
verbatim quotations. All carriers were opened this session and every
quote checked word-for-word:

- James, Principles ch. 11 (psychclassics.yorku.ca): both quotes
  verified ("Every one knows what attention is..." and "My experience
  is what I agree to attend to...").
- James, Principles vol. 2 ch. XXVI (Gutenberg 57634): both quotes
  verified ("Effort of attention is thus the essential phenomenon of
  will" and "The essential achievement of the will... to attend to a
  difficult object and hold it fast before the mind").
- Lavie 2005 (WSU lab PDF; required a browser user-agent, plain curl
  gets 403): all four quotes verified ("spill over" prediction,
  early/late-selection debate, the research-indication summary, and the
  frontal-control-load contrast).
- Langner and Eickhoff 2012 (PMC3627747): the vigilance-decrement
  opening verified.
- Lutz et al. 2008 (PMC2693206): both quotes verified (focused
  attention description and open monitoring).
- Hasenkamp et al. 2012 (author-site PDF): the four-intervals
  cognitive-cycle quote verified (line-break artifact in extraction).
- Weil, Reflections on the Right Use of School Studies (Matheson
  Trust PDF): both quotes verified.
- Killingsworth and Gilbert 2010 (Greater Good PDF): both quotes
  verified (46.9% and the unhappy-mind conclusion).
- Mooneyham and Schooler 2013 (UCSB metalab PDF): all three quotes
  verified (costs summary, proposed functions, mood insulation).

Each quotation block's distinctive phrases were located in the
opened carriers and compared (eighteen blocks; the Mooneyham and
Schooler material is two blocks joining excerpts with ellipses, not
three separate quotations). No corrections needed to the dossier
body. Checker and voice audit not re-run (body unchanged).

## Method qualification (2026-10-24, advisor QC correction, same session)

The pass above located each quotation's distinctive phrases in the
opened carrier and, where the extraction split lines, joined the
words before comparison; for some carriers the full surrounding
sentence was printed and compared, for others only the phrases were
located. "Word-for-word" in the pass above means the located phrases
matched exactly, not that every complete quotation block was
compared character-by-character against a rendered source page.
Counts refer to quotation blocks, not distinct passages (blocks can
overlap or join excerpts with ellipses). Any prior verification
record in this ledger is not displaced by this pass.

## Quotation-structure note (2026-10-24, advisor QC)

The Mooneyham and Schooler material in the dossier body is two
quotation blocks that each join excerpts with ellipses; the phrases
of every excerpt were located in the opened PDF, and the join points
are marked as ellipses in the body, but the joined whole was not
compared as one continuous passage (it is not one).

## Voice-audit candidate review (2026-10-25, worker-pplx-gfva-1025a, dos4 baton)

Reviewed all 10 candidates against the current file (fresh audit run;
persisted line numbers had shifted). No carriers freshly opened;
dispositions are editorial judgements resting on card texts and
inherited verification.

Two recasts applied, both in the divergence section, both flagged
not-X-but-Y and both redundant with their own context:

- Line 218: "What remains unresolved is therefore not the filter's
  location but its behaviour under load" — the clause after the colon
  already states the reframe ("the question has been reframed from where
  selection happens to which kind of load is operating"), so the opening
  antithesis repeated it. Now reads "What remains unresolved is therefore
  the filter's behaviour under load: ...".
- Line 222: "The shared question is not whether wandering has effects but
  under which conditions the costs outweigh the functions" — the section
  heading directly above ("Under what conditions does a wandering mind
  cost more than it returns?") already carries the condition framing;
  the "not whether" clause answered a question no one was asking. Now
  reads "The shared question is under which conditions the costs
  outweigh the functions."

Kept: line 11 (mind-wandering as part of attention's life — scoping
note), 38 (top-down vs bottom-up is the concept), 160 (Brown's
interest-based account is the card's claim), 228 (Mooneyham and
Schooler's accept-and-reframe stance described accurately), 234
(insulation vs cost — both outcomes quoted above), 238 (the trainable
skill is the return, a substantive point), 270 (the kernel's own
instruction: how it appears vs what it means), 276 (evidence caveat:
conventions vs tested doses).

Checks: dossier_check.py exit 0; the fresh audit count for this dossier
fell from 10 to 8. Scope: candidate-line review only.

## Card-fidelity sweep (2026-10-25, worker-pplx-gfva-1025a, dos2 baton)

Following the advisor QC direction after two misattributed entries were
found in the fear dossier, all 65 concept and principle entries in this
dossier's map sections were compared against their linked cards (card
files opened and read side by side with the glosses). Every gloss
matches its card, including the James classic definition, Posner's
spotlight and three-network models, Navon's global-local basis,
Corbetta and Shulman's two-systems account, Broadbent's filter model,
Lavie's load theory, the Simons-Chabris invisible-gorilla entry, the
Fan et al. Attention Network Test, Graziano's Attention Schema Theory,
the Kaplan directed-attention-fatigue and restoration entries, Leroy's
attention residue, the Langner-Eickhoff sustained-attention and
vigilance-decrement entries, MacLeod's dot-probe paradigm, Eysenck's
attentional control theory, Wells's cognitive attentional syndrome,
Hasenkamp's noticing-wandering-returning cycle, the
progressive-overload entry (whose citation-gap caveat is faithfully
carried in the gloss), Csikszentmihalyi's flow, the Ward et al.
smartphone-presence entry (with its contested-finding caveat carried),
Stothart et al.'s notification study, the Ophir-Nass-Wagner media
multitasking entry, the Weil craft-and-discipline pair, and Hadot's
spiritual vigilance with prosoche. No mismatches found; no edits made.
This strengthens the earlier voice-audit review (8 kept and L218, L222 recast, per the ledger's own review record): the flagged constructions are card-faithful as well as
doctrinally sourced.

Checks: dossier_check.py exit 0 (run again this session). Editorial
review only; no external carriers freshly opened this pass.

## GF-model rewrite (2026-10-25, worker-pplx-dos4-1025h, dos4 baton)

Attention rewritten from the map format into the one-thread shape per
DOSSIER-MODEL.md and the validated genuine-flourishing exemplar, in two
passes with advisor QC between them. What changed in the first pass: the
map sections and their entry lists were dissolved into question-led
subsections under one body heading ("What attention asks of a life"),
each paragraph carrying one thought with reasoning bridges; the
introduction was rebuilt in the first person from the theme's own
material. What changed in the QC pass: the third disagreement
(depletion vs strengthening) was removed as manufactured, because the
fatigue findings concern a within-task state and the strengthening
findings concern a cross-week capacity, and no opened source advances
incompatible accounts of the same phenomenon (the two questions stay in
the map sections, honestly separated); several bridges that overstated
the inherited glosses were repaired or deleted (a universal claim about
what attention admits into a life, "takes over the processing", "a
capacity with parts", "the other face of the same relief", a causal
gloss on process focus, a Weil ownership claim); Right concentration was
moved out of the clinical paragraph into the first training family;
regulatory focus and compassion-focused therapy were given separate
homes; the story intro was replaced with one free of page narration; and
the practice section was rebuilt in the model's two-sentence form with
four thematic groups (train the return, protect the budget, restore and
receive, prepare for absorption), with each kernel entry re-read against
its card file before rewriting.

What did not change: the card set (all 90 unique cards from the previous
version retained, none added; 97 links) and the factual claims, which
stayed within the wording previously verified against the cards in the
card-fidelity sweep. Quotations: 14 of the previous 18 block quotations
retained verbatim; four converted to linked paraphrase carried by their
opened sources (Lavie's central prediction, James's essential-
achievement sentence, the Lutz open-monitoring extract, Weil's prayer
passage).

Quote verification this session: dossier_quote_verify.py reported 14
checked, 5 not found, all five on carrier URLs that plain scripted
fetches cannot read; each was then opened fresh and confirmed by eye:
James ch. 11 (psychclassics HTML, via the fetch tool; both quotes
verbatim, the carrier printing "mind - without" with a hyphen where the
dossier prints an em dash), Lavie 2005 (WSU lab PDF fetched with a
browser user-agent after the plain fetch 403ed, as previously recorded;
pdftotext; the debate sentence, the research-indication summary and the
frontal-load contrast verbatim, typographic quotes in the carrier), Weil
(Matheson Trust PDF, curl + pdftotext; the suspending-attention passage
verbatim; "obj ect" in extraction is a pdftotext artifact), Killingsworth
and Gilbert 2010 (Greater Good PDF, curl + pdftotext; the 46.9% sentence
and the closing unhappy-mind sentence verbatim). The remaining nine
quotations were found and matched automatically by the script (James
vol. 2 ch. XXVI, Langner and Eickhoff 2012, Lutz et al. 2008, Hasenkamp
et al. 2012, Mooneyham and Schooler 2013 x2). Scope honestly stated:
the verification compares the quotation wording against the opened
carrier text; the rewritten prose glosses were checked against the card
files and the previous published version, not against the external
carriers.

Checks: dossier_check.py exit 0; dossier_density.py 0 dense paragraphs
(first draft had 7; catalogues split with reasoning bridges); card set
diff against the previous version: 0 missing, 0 added. Band state stays
in progress: remaining known work is a full cold-read of the rewritten
body against the exemplar's voice, and the supervisor's registry rebuild
(--rebuild=attention) to carry the new body into the compiled payload;
registry.json and app.js were not touched (supervisor-only).

## Flag for the supervisor (2026-10-25, worker-pplx-dos17-1025h)

Cross-item check requested by advisor QC on the body dossier: this
dossier's "Where the traditions genuinely disagree" section carries two
entries ("Where does selection happen: early or late?" and "Does a
wandering mind cost more than it returns?"). DOSSIER-MODEL.md asks for
three to five. A third sourced entry was not manufactured; the dos4
baton was already released, so no edit was made. Flagging for a future
pass with the appropriate baton.
