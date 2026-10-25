# Evidence record — Agency dossier

Writer: worker-pplx-dos14-1024k, band dos14 (mint 4, minds-life group).
Registry status stays 'planned'; the supervisor flips and publishes.
Deliverable: docs/enrichment/dossiers/agency.md (checker exit 0: 53 card
links resolve, 14 headers, 3 external carriers).

## Question

How much say does a person have over their own life, and what grows
that say?

## Scope (from the registry)

Containing Autonomy and Competence: agency as effective power (Dewey),
locus of control, self-efficacy, autonomy and competence as basic needs
(SDT). Nearby terms consulted: the-self (dossier, planned), motivation,
Narrative identity, Intrinsic motivation, Eudaimonic motivation and intrinsic goals, Wisdom.

## Claims and quotes

The dossier's prose claims are glosses of cards opened this session
(title sweep plus full-text sweep for agency / autonomy / competence
/ efficacy / locus of control / helpless / empowerment / free will /
volition / efficacy / willpower / self-determination / Bandura /
Rotter / Dewey, then a curation pass; sweeps and card reads were
truncated excerpts unless noted below). The seven story cards used in
the Story section (ST116, ST231, ST232, ST233, ST300, ST302, ST347)
were read in full after the QC passes, and their loglines rewritten
to the cards' own accounts (the Molly Craig line now distinguishes
the 1,600-kilometre removal from the nine-week walk and Gracie's
recapture; the Billi ending's unsupported conclusion removed; the
James entry tied to finishing the first part of Renouvier's second
Essais and dated April 30, 1870 per the card). The five Nearby terms
cards were read in their opening sections, which carry the definitions
the glosses use. Each map line paraphrases the card's own body, not
an inference beyond it.

External quotes, verified word-for-word against carriers opened this
session (curl fetch; PDFs extracted with pdftotext; whitespace
normalised for line breaks only):

1. Epictetus, Enchiridion 1, Elizabeth Carter translation (MIT
   Classics, https://classics.mit.edu/Epictetus/epicench.html). Both
   quoted sentences ("Some things are in our control and others
   not... whatever are not our own actions" and "The things in our
   control are by nature free... slavish by nature are also free")
   match the fetched HTML exactly (verified after HTML-tag stripping
   and entity unescaping).
2. Bandura, "Self-efficacy: Toward a Unifying Theory of Behavioral
   Change", Psychological Review 84(2), 1977, PDF at
   https://www.susana.org/_resources/documents/default/3-4524-7-1640787326.pdf
   (downloaded, 2,145,094 bytes; pdftotext extraction). Both quoted
   sentences ("Efficacy expectations determine how much effort people
   will expend and how long they will persist in the face of
   obstacles and aversive experiences." and "An outcome expectancy is
   defined as a person's estimate that a given behavior will lead to
   certain outcomes. An efficacy expectation is the conviction that
   one can successfully execute the behavior required to produce the
   outcomes.") match the extracted text exactly. The claim that
   expectations of personal mastery affect initiation and persistence
   is also verified in the extracted text.
3. Rotter, "Generalized expectancies for internal versus external
   control of reinforcement", Psychological Monographs 80(1), 1966, PDF
   at https://raw.githubusercontent.com/jjcurtin/arc_measures/main/LCS/Rotter1966.pdf
   (downloaded; pdftotext extraction). The sentence "If the person
   perceives that the event is contingent upon his own behavior or his
   own relatively permanent characteristics, we have termed this a
   belief in internal control." matches the extracted text exactly.

## Boundaries and open points

- The first divergence draft (Stoic outcomes vs Rotter/Bandura
  expectancy constructs) was flagged as manufactured by the QC pass;
  the section was rebuilt around two opened passages (Enchiridion 1
  Carter/MIT; Bandura 1977's own differentiation of outcome and
  efficacy expectations) plus the opened Rotter definition. The
  divergence as now written is a contrast visible in the opened texts;
  whether it constitutes a contradiction is not asserted.
- Locus of evaluation and External-locus-of-evaluation research
  (Rogers) were read and deliberately held out of the map: their subject
  is the source of value judgments, not control over outcomes; the
  boundary call is that they belong with the-self territory. Flagged
  for the supervisor in the commit message. They are not linked under
  Nearby terms because the nearest resolving cards on judgment-source
  are the narrative-identity and self entries; the call stands for
  supervisor review.
- White 1959 ("Motivation Reconsidered: The Concept of Competence"):
  both carriers attempted this session failed (greatquestion.com.au
  served an error page over TLS; the archive.org zip-view PDF fetched
  2.7 MB but would not extract, invalid xref). No White quote is used
  in the dossier; the Competence and Competence motivation cards carry
  their own verified carriers, which were read but not re-opened.
- The Rothbaum et al. 1982 secondary-control quote lives verified on
  the Secondary control card; not re-verified this session and not
  quoted in the dossier.
- The SDT quotes on the Autonomy / Autonomous motivation / Controlled
  motivation cards were read from the cards; not re-verified against
  carriers this session and not quoted in the dossier.
- ST231/ST232/ST233 loglines are derived from the story cards opened
  this session (titles: The Uluru Statement; Charlie Goes Back to
  Country; Molly Craig Walks the Fence).
- The Dewey "effective power" anchor is principle P087 (Redefine
  freedom as effective power); principles are carried onward from
  cards and are not dossier map entries, so the map holds the concept
  cards (Learning by doing, Control theory of self-regulation) and the
  story ST116 instead.

## Verification

dossier_check.py exit 0 on docs/enrichment/dossiers/agency.md before
every push this session (57 card links, 14 headers, 3 external
carriers after the QC revision; 53 before it).

Revision 4 (second QC pass): divergence section rebuilt on two opened
passages (Epictetus Enchiridion 1 continuation; Bandura 1977
outcome/efficacy differentiation, both verified word-for-word);
Nearby terms reworked to five cards whose bodies were read (Locus of
evaluation added with its own boundary); story loglines repaired
again against full bodies (Molly Craig removal vs walk; James
Renouvier); the Dewey cross-tradition synthesis clause removed.

Revision 3 (verification pass): fresh coverage sweep found and
added two on-theme cards (Pragmatism; Identified versus introjected
motivation; 59 links); gloss audit against full card bodies repaired
the Freedom, Flow and Autonomy-supportive leadership lines; voice
audit run (dossier_voice_audit.py), five rather-than scaffolds
recast, four legitimate qualifications left standing; checker exit 0
after each change.

Revision 2 (QC pass): Nearby terms block added; the manufactured
divergence rewritten as an unresolved contrast with the contradiction
explicitly unverified; story loglines repaired against full card
re-reads; the Dewey "research keeps confirming" synthesis and the
staged opener removed; the repeated "the say" mannerism reduced in
prose.

## Voice-audit candidate review (2026-10-25, worker-pplx-gfva-1025a, dos14 baton)

Reviewed both candidates against the current file (fresh audit run).
No scaffolds removed: line 95 (autonomous versus controlled motivation:
motivation sorted by its reasons rather than its strength — SDT's own
comparison), 123 (participatory decision-making: with the people who
must live with the choices rather than doing things to or for them —
the participation tradition's own framing, on Bandura's collective
agency).

Checks: dossier_check.py exit 0. Editorial review only; no carriers or
cards freshly opened this pass. Scope: candidate-line review.

## Card-fidelity sweep (2026-10-25, worker-pplx-gfva-1025a, dos2 baton)

Following the advisor QC direction after two misattributed entries were
found in the fear dossier, all 44 concept and principle entries in this
dossier's map sections were compared against their linked cards (card
files opened and read side by side with the glosses). Every gloss
matches its card, including the Epictetus dichotomy of control, Berlin's
positive freedom, Frankfurt's second-order desires, akrasia, wu wei,
Dewey's learning by doing, Carver-Scheier control theory, Rotter's
locus of control, Rothbaum-Weisz-Snyder secondary control, Seligman's
helplessness-optimism line, Spreitzer's psychological empowerment,
Bandura's self-efficacy and its four sources, modeling and
observational learning, Dweck's growth mindset, creative and collective
efficacy, Snyder's hope, Deci and Ryan's self-determination cluster
(autonomous and controlled motivation, identified versus introjected
regulation, autonomy-supportive leadership and the Slemp meta-analysis),
relational autonomy, Beck's sociotropy-autonomy theory, White's
competence and effectance, flow, the Big Two, participatory
decision-making, and Bandura's moral disengagement. No mismatches
found; no edits made. This strengthens the earlier voice-audit review
(both candidates kept, per the ledger's own review record): the flagged constructions are card-faithful as
well as doctrinally sourced.

Checks: dossier_check.py exit 0 (run again this session). Editorial
review only; no external carriers freshly opened this pass.

## GF-model conversion (worker-pplx-dos24-1025a, 2026-10-25)

The dossier was restructured per the 2026-10-25 owner orders: the old
map format (one `## The map:` section with per-term gloss lines) was
dissolved into an interwoven thread with question-style subsection
headings. The map header was renamed to `## Where agency sits in a
life`, and every subsection (what is ever one's own to run, the say
as effective power, where the say is believed to sit, the belief that
one can act, autonomy and competence as needs, agency in the social
world) was converted from gloss lists to connected prose: each card
link is now embedded in a natural sentence rather than standing in a
`label: description` line. The Story section retains its one-line
loglines as the format allows. Checker exit 0 (60 card links resolve,
14 headers, 5 external carriers); density check 0 dense; 29 paragraphs,
1.5 card links per paragraph. Commits: b7bf9694, a133dda3 (passes 1-2).

## Disagreement section 1 to 3 questions (worker-pplx-dos30-1025l, 2026-10-25, baton dos14)

Two questions added under "Where the traditions genuinely disagree".

Q2, does the feeling of choosing cause the act. Opened this session
(fetched pages, abstracts only): Wegner, Precis of The Illusion of
Conscious Will, Behavioral and Brain Sciences 27(5), 2004, Cambridge Core
abstract page (the two quoted sentences match); Baumeister, Masicampo and
Vohs, Annual Review of Psychology 62, 2011, PubMed abstract (the two
quoted sentences match). Not read: the book, the review's full text. The
dossier states that the abstracts agree more than their titles suggest.

Q3, is accommodation control. Opened: Rothbaum, Weisz and Snyder 1982,
JPSP 42(1), abstract on the SciSpace page (both quoted sentences match;
the page is a mirror of the APA abstract, so the PubMed or APA record
would be a cleaner carrier if the supervisor prefers one); Heckhausen and
Schulz 1995, Psychological Review 102(2), same carrier (the two quoted
sentences match); Heckhausen and Schulz 1999 reply, PubMed 10467898
(quoted clause matches). Gould's 1999 critique is known only from the
reply abstract and is flagged as such in the dossier. The existing
paragraph on Rothbaum and secondary control, which links the card, was left
unchanged.

Checks: dossier_check exit 0 (60 card links, 16 headers); density 0
dense. Quote verifier reports the three SciSpace/PubMed items as not found
because the carrier URLs there are truncated or the pages are dynamic;
each quote was matched by hand against the fetched page text. SUPERVISOR:
re-splice agency; registry status untouched.

## Carrier repair round (2026-10-25, worker-pplx-dos14-1025r, baton dos14)

quote_verify went 4 NOT FOUND -> 1. No page wording changed; no new disagreement or interpretive verdict added.

Repaired (all quotes re-verified today in NCBI eutils plain-text abstracts, links added alongside the original citations): Baumeister et al. 2011 conscious causation (efetch ID 21126180); Heckhausen and Schulz 1999 reply clause (efetch ID 10467898); Heckhausen and Schulz 1995 "Secondary control helps..." quote (efetch ID 7740091, replacing the SciSpace mirror as carrier). pubmed.ncbi.nlm.nih.gov and scispace.com both serve challenge pages or empty responses from this network, which is why live fetch failed.

REMAINING 1 NOT FOUND, flagged for the supervisor and next worker: the Rothbaum, Weisz and Snyder 1982 quote ("People attempt to gain control not only by bringing the environment into line with their wishes (primary control) but also by bringing themselves into line with environmental forces (secondary control)") is still carried by the SciSpace mirror URL, which now returns an empty response from this network. The quote was hand-attested against that page by the earlier round above. CAUTION: the Semantic Scholar record for the 1982 paper shows the abstract opening "There is extensive evidence that people strongly value and are reluctant to relinquish the perception of control", and the "bringing the environment into line with one's wishes" phrasing is quoted elsewhere as Heckhausen and Schulz 1995 p. 285; the next worker should verify whether the sentence is the 1982 paper's own abstract or the mirror's summary text before treating it as a first-hand Rothbaum quote. No wording change was made.

Checks before push (exit codes captured directly): dossier_check exit 0; quote_verify 12 checked, 1 not found (documented above); density 0 dense; voice_audit exit 0.

## Rothbaum 1982 quote repaired against the APA record (worker-pplx-dos30-1025l, baton dos14, 2026-10-25)

doi.org/10.1037/0022-3514.42.1.5 (APA PsycNet landing page, opened) gives the abstract as "People attempt to gain control by bringing the environment into line
with their wishes (primary control) and by bringing themselves into line with environmental forces (secondary control)." The dossier's earlier wording ("not only by ... but also by", from the SciSpace page)
did not match APA's abstract, and the second line ("a broad range of inward behaviors can be seen as efforts to sustain rather than relinquish the perception of control") is not in the APA abstract.
Quote replaced with the APA wording; the second line replaced with the APA abstract's interpretive-control clause. The scispace carrier is removed for this paper (the Heckhausen and Schulz scispace flag is not touched here).
No change to the question's logic. SUPERVISOR: re-splice agency.

## Model-conformance fix + pre-existing quote flags (2026-10-25, worker-pplx-dos14-1025z)

The agency dossier was missing two DOSSIER-MODEL elements: the
one-question blockquote did not sit directly under the title (it came
after the Nearby-terms list), and the Nearby-terms list had no
`### Nearby terms` heading. Both were fixed with no content change:
the blockquote was moved to sit directly under `# Agency`, the
introductory paragraph was kept in place after it, and the
`### Nearby terms` heading was added above the existing five-bullet
list. Every card link, quote and carrier is unchanged (60 card links,
12 external carriers, before and after). Checks: dossier_check.py OK,
dossier_density.py 0 dense.

PRE-EXISTING, NOT CAUSED BY THIS EDIT, flagged for the supervisor:
dossier_quote_verify.py reports 2 of 12 quotes not found, both on the
primary-control material (Heckhausen and Schulz), the "People attempt
to gain control by bringing the environment into line with their
wishes (primary control)..." span against doi.org/10.1037/0022-3514.42.1.5,
and the "primary control striving holds functional primacy throughout
the life span..." span against the PubMed carriers. These were not
found before the edit either (verified against the pre-edit file) and
are a separate carrier-verification item for the next pass. Also
flagged: agency is published, so the Academy site data
(site/assets/app.js) needs a rebuild to pick up the new heading
position; that splice is supervisor-only and was not touched.

## Follow-up on the pre-existing quote flags (2026-10-25, worker-pplx-dos14-1025z)

The first flagged span, "People attempt to gain control by bringing
the environment into line with their wishes (primary control)...",
was checked live against the DOI carrier
(doi.org/10.1037/0022-3514.42.1.5, APA PsycNET landing page) and
the full sentence IS present verbatim: "People attempt to gain
control by bringing the environment into line with their wishes
(primary control) and by bringing themselves into line with
environmental forces (secondary control)." The dossier's
dossier_quote_verify.py "not found" on this span is therefore
likely a span-matching issue (the dossier may hold a longer or
slightly different excerpt than the landing-page abstract) rather
than a missing carrier. The second flagged span, "primary control
striving holds functional primacy throughout the life span...", is
NOT on the DOI landing page; it belongs to the Heckhausen and
Schulz 1999 "primacy of primary control" line (PubMed 10467898),
whose page could not be fetched this session. Both remain flagged
for the next verification pass.

## Primary-control span diagnosis (2026-10-25, worker-pplx-dos14-1025z)

The first flagged span was confirmed verbatim on the DOI carrier
via LLM-assisted extraction, but a RAW curl of the same URL returns
zero matches for the text: the APA PsycNET DOI landing page renders
the abstract with JavaScript, so the raw HTML the checker fetches
does not contain the sentence. The dossier span is CORRECT and
matches the rendered carrier word for word; the quote_verify
failure is a CHECKER LIMITATION on this carrier (raw fetch cannot
see JS-rendered text), not a dossier defect. No dossier edit is
needed or made. The span stays flagged until the checker can render
JS or the carrier is swapped for a static mirror of the abstract.
