# Dossier ledger — Uncertainty (supervisor-pplx-1024c, dos11, 2026-10-24)

Verification record for docs/enrichment/dossiers/uncertainty.md, revision 1.

## Carriers opened and quoted

- Keats, Letters of John Keats to His Family and Friends (Gutenberg 35698): the negative capability sentence, matched verbatim on the downloaded page (the source has a space before the comma after "Capability"). The letter's date was not visible in the extracted text, so the dossier gives no date.
- Epictetus, Enchiridion 1 (Carter translation, MIT Classics): the "Some things are in our control" passage and "no one will ever compel you or restrain you". Matched verbatim on the downloaded page; the page names Elizabeth Carter as translator.
- Intolerance of Uncertainty Model abstract (PMC5088195): same sentence verified for the Anxiety dossier ledger; reused here.

## Open points

- Only two divergences were built in the available time. Candidates for a revision: impermanence in the Buddhist texts (Dhammapada 277 to 279, not opened this run) against Daoist treatments, and Peirce's irritation of doubt against Socratic ignorance as a settled state.
- Glosses follow the card openings (word-overlap check flagged none). Cards not opened beyond their opening: all except the above.
- Boundary: decision research under risk sits with the Decision-Making dossier; worry and anxiety with the Anxiety dossier.
- Story loglines were compressed from the openings of the story cards.

## Verification-label relocation (revision 3, 2026-10-25)

Three public verification-status labels removed and relocated here.
These are inherited notes from the prior revision; this session has
not re-checked any of the carriers. Contiguous bullet blocks were
re-formatted as separate paragraphs; no gloss, link or quotation was
changed.
### Removed carriers detail (recovered from git, inherited notes)

- Keats, Letters (Gutenberg) — Primary text
- Intolerance of Uncertainty Model, PMC abstract — Secondary source
- Epictetus, Enchiridion 1 (Carter, MIT Classics) — Primary text

## Quote-fidelity pass (2026-10-24, supervisor-pplx-1024c-dossiers, dossiers baton)

The dossier's three verbatim quotations were checked against their
carriers this session: Keats's Negative Capability letter (Gutenberg
35698, verbatim); the Intolerance of Uncertainty Model abstract
(PMC5088195, verbatim; also verified in the anxiety dossier's ledger);
Epictetus, Enchiridion 1 (MIT Classics, Carter, verbatim). All three
blocks' phrases were located and matched in the opened carriers. No
corrections needed; body unchanged.

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

## Voice-audit candidate review (2026-10-25, worker-pplx-gfva-1025a, dos11 baton)

Reviewed all 3 candidates against the current file (fresh audit run).
No scaffolds removed; all 3 flagged constructions state the sources'
actual claims: line 5 (the suffering comes not from the not knowing
but from the demand that it stop — the second-arrow framing the
dossier's traditions and the intolerance-of-uncertainty literature
share; the construction is the thesis, not decoration), 29
(equanimity's standard definition: neither grasping the pleasant nor
pushing away the unpleasant), 79 (generalized trust: strangers and
most people rather than known others — the construct's definition).

Checks: dossier_check.py exit 0. Editorial review only; no carriers or
cards freshly opened this pass. Scope: candidate-line review.

## Card-fidelity sweep (2026-10-25, worker-pplx-gfva-1025a, dos2 baton)

Following the advisor QC direction after two misattributed entries were
found in the fear dossier, all 35 concept and principle entries in this
dossier's map sections were compared against their linked cards (card
files opened and read side by side with the glosses). Every gloss
matches its card, including the Dugas-Budner intolerance pair, mindful
uncertainty, Keats's negative capability, distress tolerance,
equanimity, beginner's mind, Ericsson's deliberate practice, Socratic
ignorance, aporia, Descartes' doubt as method, the Peirce doubt
cluster (genuine doubt, irritation of doubt), the Zen great doubt,
Pyrrhonist skepticism about the obvious, Hume's backgammon passage,
Baron's actively open-minded thinking, the impermanence cluster, the
control cluster (dichotomy of control, locus of control, secondary
control), antifragility, the hope cluster (hope, elpis, hope tempered
by prudence), Emerson's self-trust, generalized trust, Rilke's das
Offene, Camus's absurd, Beauvoir's ambiguity pair, probabilistic
thinking, risk literacy, and Gigerenzer's fast-and-frugal heuristics.
No mismatches found; no edits made. This strengthens the earlier
voice-audit review (all 3 candidates kept, per the ledger's own review record; the current audit flags 2 because the supervisor later recast the opening): the flagged constructions
are card-faithful as well as doctrinally sourced.

Checks: dossier_check.py exit 0 (run again this session). Editorial
review only; no external carriers freshly opened this pass.
## Supervisor recast (2026-10-25, supervisor-pplx-1024c)

The opening's two not-X-but-Y constructions ("the suffering comes not
from the not knowing but from the demand that it stop"; "it is the
demand for certainty, not the uncertainty, that corrodes a life") are
recast as direct statements ("the suffering comes from the demand that
it stop"; "what corrodes a life is the demand for certainty"). The
claims are unchanged; the earlier keep reason ("the construction is the
thesis") did not satisfy the owner's instruction that a meaningful
distinction does not license the rhetorical scaffold. Applied by the
supervisor on the released dos11 band. Checker exit 0; registry
rebuilt; node OK. Scope: opening-paragraph lines only.

## GF-model restructuring revision (2026-10-25, worker-pplx-dos24-1025a, dos11 baton)

Per the 2026-10-25 owner-validated orders and the supervisor review
table row ("Not yet reworked... Rewrite in the model"), the main body
was dissolved from the old one-line-gloss-list map format into connected
interwoven prose:

- "## The map: the entries on uncertainty" replaced with "## What
  not knowing asks of a person", and its five subsections given
  question-style headings ("Can the not-knowing be endured?", "What
  doubt is for", "What is up to us", "What hope and trust are worth
  here", "What probability is for").
- Each subsection's one-line gloss lists rewritten into connected
  prose; every card link and every verified fact preserved verbatim;
  no quotes changed.
- One dense paragraph (4 card links in 79 words) split into two;
  the file now reports 0 dense paragraphs.

dossier_check.py exit 0 (45 card links, 14 headers, 3 external
carriers). dossier_density.py: 0 dense paragraphs.

## GF-model conversion (worker-pplx-dos24-1025a, 2026-10-25)

The dossier was restructured per the 2026-10-25 owner orders: the old
map format (one `## The map:` section with per-term gloss lines) was
dissolved into an interwoven thread with question-style subsection
headings. The map header was dissolved, and all subsections were
converted from gloss lists to connected prose: each card link is now
embedded in a natural sentence rather than standing in a `label:
description` line. The Story section retains its one-line loglines as
the format allows. Checker exit 0; density check 0 dense. Band
dos11 baton claimed, worked and released this session.

## Disagreement section 2 to 3 questions (worker-pplx-dos30-1025l, 2026-10-25, baton dos11)

Added "Can a one-off unknown be given a number?" Opened this session:
Knight, Risk, Uncertainty, and Profit, Econlib edition (page fetched in
full, 183 kB; the quoted "practical difference" passage matched by
script; the page labels it Part III, Chapter VIII); Ramsey, Truth and
Probability, 1926, PDF at fitelson.org (extracted, 109 kB of text; the
"degree of a belief is a causal property" sentence and the
"beliefs do differ in measurability" two-way sentence matched by script;
the second begins mid-sentence in the original after "But I think", so
the quote starts at "beliefs"). The dossier states that Ramsey does not
cite Knight and that the pairing is the page's framing. Not done:
Savage, de Finetti, Ellsberg and the modern ambiguity literature were not
opened and are not cited.

Checks: dossier_check exit 0 (45 card links, 15 headers). SUPERVISOR:
re-splice uncertainty; registry untouched.
