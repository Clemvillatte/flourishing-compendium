# Dossier ledger — The Self (worker-pplx-dossiers-1023b, 2026-10-23)

Verification record for docs/enrichment/dossiers/the-self.md, revision 3.
Every quoted fragment was verified against carrier text opened for it. The
revision-3 check was unprompted: carriers were downloaded raw (curl) or
extracted (pdftotext) and each displayed quotation was compared as a
normalized substring of the carrier text, not fetched through an
extraction prompt.

## V2 addendum (revision 4, supervisor-pplx-895565b1 + worker-pplx-dossiers-1025, 2026-10-23)

The 2026-10-24 owner direction rebuilt The Self as the v2 exhaustive exemplar
(map of every self-bearing entry, sticky side table of contents, Variation-
Selection(+Retention) practice section). This addendum records what the v2
rebuild added and what verification carries over.

- No new quotation was introduced in v2. Every quoted passage now on the page
  is the same set verified against raw carrier text at revision 3 (SN 22.59,
  Milindapañha 3.1.1, SEP Dalal, Deikman via Wayback, Hayes et al. 2013,
  Markus & Kitayama 1991, Grossmann & Kross 2014, Godbee & Kangas 2020). The
  revision-3 record above stands for each of them; nothing in it is rescinded.
- The map's per-entry descriptions are compressed from the linked entry's own
  opening claim (source: the content/ file for each card), not from any
  outside carrier. They carry no quotation and so need no carrier
  verification; the source of each is the entry file itself.
- The practice section's two inline figures — Grossmann & Kross 2014's three
  experiments with 693 participants, and Godbee & Kangas 2020's
  provisional-evidence caveat — are the same sentences verified at revision 3
  (Waterloo PDF, PubMed efetch 33051034).
- Card links: every #card= target on the page (160 unique) was re-verified
  against actual content/ file names by script in this pass; 0 unresolved.
- Markdown↔Academy-data parity: the 160 card targets in the markdown and the
  160 card targets in window.fcDossiersData were compared programmatically;
  0 missing in either direction.
- Repair applied this pass (revision 4.1): two sayings — "Rectify the self
  before others" and "Rectify the self, then the family, then the state" —
  printed the literal word "None" as their description (a build-script
  artifact). Both now carry short source-faithful descriptions drawn from the
  saying's own text (Confucius, Analects 13.6; the Great Learning's
  rectification sequence). Fixed in markdown and mirrored in the Academy
  data. Commit 63d72d2.

## Quotes verified against raw carrier text (revision 3)

- SN 22.59 (Thanissaro, dhammatalks.org, raw HTML): both passages exact.
  The carrier prints a footnote marker on "Every1 form"; the dossier omits
  the marker, words exact. Locator: the sutta page, aggregate examination.
- Milindapañha 3.1.1 (Rhys Davids): chariot passage exact against the
  e-Buddhism raw HTML, including the carrier's em dashes. Closing dialogue
  questions ("Then is it all these parts of it that are the chariot?" etc.)
  verified against SuttaCentral mil3.1.1 via the fetch tool's rendering;
  SuttaCentral serves a JS shell to raw curl, so the raw-text check could
  not be repeated there. The e-Buddhism text does not carry the closing
  questions; that carrier supports the chariot passage only.
- SEP Śaṅkara (Dalal, raw HTML): "The fundamental thrust...", the
  brahman/ātman sentence, the mutual-superimposition sentence, and both
  avidyā/suffering fragments exact. Locator: the entry's opening overview.
  The carrier prints curly apostrophes; the dossier renders them straight
  (rendering artifact, words exact). All five fragments attributed to
  Dalal's entry, never as Śaṅkara's own words.
- Deikman ch. 1: both passages exact against the Wayback Machine snapshot
  of deikman.com/observing.html (2026-10-05,
  web.archive.org/web/20261005074233/http://www.deikman.com/observing.html).
  CARRIER LIMITATION: deikman.com now returns an "Account Suspended" page
  to direct fetch, so the live site could not be re-verified; the snapshot
  is the recorded carrier for these fragments. The second quotation is
  given with the carrier's own lead-in ("In contrast, we cannot observe
  the observing self...") so the sentence is verbatim from mid-paragraph.
- Markus & Kitayama 1991 (MIT PDF, pdftotext): opening sentence and both
  construal definitions exact. Locator: article opening and the construals
  section; no page numbers observed in the extraction, none cited.
- Kross & Ayduk 2011 (Berkeley PDF, pdftotext): fly-on-the-wall sentence
  and the spontaneous self-distancing sentence exact.
- Grossmann & Kross 2014 (Waterloo PDF, pdftotext): the Solomon's-paradox
  sentences exact (abstract).
- Hayes et al. 2013 (PMC3635495, raw HTML): the self-as-context definition
  passage exact; the carrier prints curly double quotes inside the
  passage, the dossier renders them straight (rendering artifact, words
  exact). Locator: the article body, progress-review section.
- Masuda et al. 2004 (contextualscience PDF, pdftotext): the defusion
  definition (including the printed abstract's "rather than the
  attempting") and the clinical-utility caveat exact. Locator: abstract.
- Godbee & Kangas 2020 (PubMed efetch 33051034): the provisional-evidence
  sentence exact. Locator: abstract.

## Repairs applied in revision 3 (per the second advisor round)

- The pronoun claim removed from the opening; the angle is now framed as a
  question the research makes testable, resting on the verified
  Grossmann & Kross quotes.
- "The two accounts even share a diagnosis of suffering" removed; the
  Advaita stakes are now attributed to Dalal's entry alone.
- The Buddhist position scoped to SN 22.59's aggregate analysis throughout.
- The construals comparison now states the lens treatment as an editorial
  choice; the Vignoles finding stays off the dossier (concept-page pointer
  only).
- K144's description separated: the kernel's adapted questions versus the
  dialogue's own closing questions (both now stated correctly).
- "Coded reasoning" removed; the scope statement rests on the paper's own
  title and abstract wording.
- The Deikman second quotation now carries the carrier's lead-in so it is
  verbatim from mid-paragraph.

## Honest scope notes

- Card-link URLs follow the site's documented deep-link scheme
  (site/assets/app.js, #card=<file or id>); all 22 targets verified
  against actual content/ file names by script. The dossier's card links
  were exercised through the same scheme in the Academy view code.
- ACADEMY INTEGRATION (this pass): a Dossiers view added beside MORE
  VIDEOS and DISCOVERY in site/assets/app.js (window.fcDossiersData +
  renderDossiers + renderDossierDetail + card-link renderer + dossier
  CSS in style.css). Verification level: node --check clean; link
  renderer unit-tested (nested-paren file names handled); render smoke
  test via DOM stubs; then live-browser verification on the Pages
  deploy: Dossiers tab present on the Academy home, grid renders the
  card, detail view renders all sections (12-entry compilation, both
  divergences, 4 practice steps), quotes carry attributions and
  evidence badges, a card link (Anatta) opens the wiki card, the
  back button returns to the grid. One layout defect found and
  fixed during that pass: the detail band laid the title and
  subtitle out inline; repaired (flex-direction column) and
  re-verified on the live deploy.
- K261's and K144's protocols are labelled in the dossier as the kernel's
  own adaptations, matching how the kernel pages present them.

## v2 rebuild record (supervisor-pplx-895565b1, 2026-10-23)

docs/enrichment/dossiers/the-self.md was rebuilt to the owner's 2026-10-24
exhaustive-map spec. Evidence basis:

- All quoted passages are carried over unchanged from v1 revision 3, where
  each was verified word-for-word against raw carrier text (record above).
- The Grossmann and Kross 2014 sentence in the intro was re-verified
  against the raw PDF (pdftotext, abstract): "In three experiments
  (N = 693), participants displayed wiser reasoning... about another
  person's problems compared with their own" and "Across Studies 2 and
  3, instructing individuals to self-distance (rather than
  self-immerse) eliminated this asymmetry." The dossier's phrasing
  ("and in Studies 2 and 3, instructing people to self-distance
  eliminated the asymmetry") matches the study's own scoping of the
  result to Studies 2 and 3; revision 2 of this record had wrongly
  claimed a carrier typo and scoped the finding to all three studies.
  Both errors corrected in this revision.
- New v2 material is wiki-internal: every concept gloss was extracted from
  the entry's own body text (content/concepts/*.md, opened for this pass)
  or hand-compressed from the same opened pages; every kernel line was
  checked against its kernel page. No new external claims introduced.
- All 169 card links verified against actual content/ file names by
  script (the build now extracts glosses itself and splices the Academy
  view data in one deterministic pass: scripts/dossier_build.py).
- The Academy view data was regenerated from the markdown by
  scripts/dossier_build.py (deterministic converter); node --check clean;
  DOM-stub render test: layout, side TOC (17 items), 3 vs blocks,
  16 practice steps, 9 quotes, 162 card hrefs all present.

## Revision 4.2 (worker-pplx-dossiers-1025, 2026-10-23) — worker repairs on the supervisor's v2

- 14 map entries whose descriptions were truncated mid-sentence by the build
  script (ending in an ellipsis) were completed from the linked concept
  pages' own opening text, in both the markdown and the Academy data.
- Two entries that ended mid-citation ("ch." and "Hagger et al.") were
  completed the same way.
- Two sayings ("Rectify the self before others", "Rectify the self, then
  the family, then the state") printed the literal word "None" as their
  description; both now carry short source-faithful descriptions.
- The Academy renderer's card URL function double-encoded already-encoded
  card names (The%20witness became The%2520witness); fixed with a
  decode-then-encode guard.
- dossierRich extended to convert plain markdown carrier links in quote
  attributions into anchors (they previously rendered as literal text).
- Em-dash separators normalized to colons or commas in all non-quoted
  text, per the HUMANIZER no-em-dash rule (161 markdown lines, 12 Academy
  blocks).

Final state: 200 blocks, 0 truncated, 0 non-quote em dashes, 160 card
targets resolve, markdown and Academy data in parity.

## Story section (worker-pplx-dossiers-1024e, 2026-10-24)

Owner-directed 4th section (after Practice), per the format spec now in
docs/enrichment/dossiers/README.md. The thirteen story loglines are
compressed from the story cards' own text; every cited story file was
opened and read this session (content/stories/ST002, ST017, ST034, ST065,
ST263, ST264, ST283, ST285, ST293, ST312, ST334, ST335, ST377). No
external carrier was opened for them: the loglines retell the wiki's own
story cards at narrative level and do not restate their historical or
psychological claims. The selection mirrors the map's subthemes (what the
self is taken to be, the observing self, the self under another's eyes,
the narrative self, identity over a life, the self in the body).

Revision (worker-pplx-dossiers-1024e, 2026-10-24): external
verification of the Story section's retained claims. Carriers opened
this session: Bauby's blink-dictated memoir verified (Wikipedia, the
NYT review of 15 June 1997, and publisher pages: locked-in syndrome,
the memoir dictated by blinking his left eyelid); Sartre's keyhole
passage verified against the Stanford Encyclopedia's Sartre entry and
Zahavi's paper on the look (Being and Nothingness, Part III: the
footsteps in the hall, the involuntary apprehension of oneself as an
object in the eyes of another, shame as the recognition of being that
object). The remaining the-self loglines carry narrative content the
story cards state directly (the Butterfly Dream, the Mind as Mirror,
the Truman ending, the prince and the beggar, the chariot of Milinda,
the sky and the weather, Ricoeur and McAdams's narrative work,
Nietzsche's three metamorphoses, the phantom-hand clinical reports,
Zhuangzi's hunchback), with no verbatim quotation.

## Verification-label relocation (revision 3, 2026-10-25)

Public verification-status labels removed from blockquote and inline
citations and relocated here. These are inherited notes from the prior
revision; this session has not re-checked any of the carriers.
Contiguous bullet blocks were re-formatted as separate paragraphs;
no card link, gloss or quotation was changed. As an exemplar, this
dossier's format change should be reviewed by the supervisor before
being treated as the new reference.
### Removed carriers detail (recovered from git, inherited notes)

- SN 22.59 (Thanissaro) — Primary text
- Dalal, SEP — Scholarly interpretation
- Mil 3.1.1 (Rhys Davids) — Primary text
- Deikman 1982 — Primary text
- Hayes et al. 2013 — Scholarly review
- Markus and Kitayama 1991 — Primary text

### Addendum (2026-10-25): four additional inline labels

Four inline parenthetical verification notes ("quoted passage
checked" / "cited passage checked" inside citation parens: SN 22.59,
SEP, Godbee and Kangas 2020, and one more) were found in a later
sweep and removed; inherited notes, not re-checked this session.

## Carrier re-verification (2026-10-25)

The SN 22.59 carrier (Thanissaro, Access to Insight) was re-opened
this session. The quoted passage "This is not mine. This is not my
self. This is not what I am" is verbatim, and the aggregate-by-
aggregate examination structure matches the dossier's description.
No discrepancy found. Other carriers were not re-opened this
session.
