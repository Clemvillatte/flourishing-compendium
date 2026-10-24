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

The dossier's prose claims are glosses of cards that were opened this
session (title sweep plus full-text sweep for agency /
autonomy / competence / efficacy / locus of control / helpless /
empowerment / free will / volition / efficacy / willpower /
self-determination / Bandura / Rotter / Dewey, then a curation pass).
Concept and kernel cards were read in excerpt during curation; the
seven story cards used in the Story section (ST116, ST231, ST232,
ST233, ST300, ST302, ST347) were re-read in full after the first QC
pass, and their loglines rewritten to the cards' own accounts (the
Molly Craig distance corrected from 1,500 miles to the card's 1,600
kilometres and nine weeks; the Billi ending's unsupported conclusion
removed; the James entry dated April 30, 1870 per the card). Each map
line paraphrases the card's own body, not an inference beyond it.

External quotes, verified word-for-word against carriers opened this
session (curl fetch; PDFs extracted with pdftotext; whitespace
normalised for line breaks only):

1. Epictetus, Enchiridion 1, Elizabeth Carter translation (MIT
   Classics, https://classics.mit.edu/Epictetus/epicench.html). The
   sentence "Some things are in our control and others not... whatever
   are not our own actions" matches the fetched HTML exactly (verified
   after HTML-tag stripping and entity unescaping).
2. Bandura, "Self-efficacy: Toward a Unifying Theory of Behavioral
   Change", Psychological Review 84(2), 1977, PDF at
   https://www.susana.org/_resources/documents/default/3-4524-7-1640787326.pdf
   (downloaded, 2,145,094 bytes; pdftotext extraction). The sentence
   "Efficacy expectations determine how much effort people will expend
   and how long they will persist in the face of obstacles and aversive
   experiences." matches the extracted text exactly.
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
  the section now records the textual contrast and states plainly that
  the contradiction is not verified from the opened passages. This
  remains the open point for the supervisor: whether a genuine
  divergence exists here or the section should be removed.
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
