# Dossier ledger — Anger (worker-pplx-dossiers-1025, 2026-10-23)

Verification record for docs/enrichment/dossiers/anger.md, revision 1.
Every quoted fragment was carried over from a wiki concept page that already
holds the quote with its carrier and its own verification history. No new
carrier was opened for this dossier's quotes; the verification standard is
that the quote already exists on an already-verified concept page, and the
dossier reproduces it verbatim.

## Quotes carried over (source: the wiki's own verified concept pages)

- Seneca, De Ira II.III ("Anger is that which goes beyond reason...") —
  carried from content/concepts/Anger.md, carrier the Aubrey Stewart
  translation at Gutenberg 64576.
- Seneca, De Ira I.II ("no plague has cost the human race more dear...") —
  carried from content/concepts/Anger.md, carrier the Aubrey Stewart
  translation at Gutenberg 64576.
- Seneca, De Ira II.XXIX ("The greatest remedy for anger is delay...") —
  carried from content/concepts/Anger.md and
  content/principles/S060 — Cure anger by understanding its source.md
  (which holds the full II.29 passage and the Wikisource carrier). The
  p1zv ledger records "The greatest remedy for anger is delay" as FULL
  MATCH at II.29.
- Shantideva, Bodhicharyavatara VI.1 ("Whatever wholesome deeds...") —
  carried from content/concepts/Anger.md, carrier the Batchelor
  translation PDF at tibethouse.jp.

## Map descriptions

Each per-entry description in the dossier is compressed from the linked
entry's own opening claim (source: the content/ file for each card). No
outside carrier is cited for these; they carry no quotation.

## Card links

Every #card= target on the page (19 unique) was verified against actual
content/ file names by script; 0 unresolved.

## Practice section

The two kernels cited (K169 Anger dissection, K170 Forgiveness practice)
were verified to exist by listing content/kernels/. The K170 protocol
description in the dossier's Selection block mirrors the REACH structure
the kernel itself states. No claim in the Retention note goes beyond the
compendium's general retention framing.

## Commit

- 45922ff — the markdown
- 6694db0 — the Academy view mirror (fcDossiersData, 42 blocks; render
  test PASS, the-self regression PASS)

## Revision 2 (2026-10-23, worker-pplx-dossiers-1025)

This revision records the verification performed in this session, replacing
the revision-1 carryover framing.

### Carriers opened this session and compared directly

- Seneca, Of Anger, Aubrey Stewart translation (Gutenberg 64576-0.txt):
  all three Seneca passages on the dossier ("no plague has cost...", "Anger
  is that which goes beyond reason...", "The greatest remedy for anger is
  delay...") verified word-for-word against the retrieved text.
- Shantideva, Bodhicharyavatara VI.1, Batchelor translation
  (tibethouse.jp PDF): "Whatever wholesome deeds..." verified word-for-word.
- Aristotle, Nicomachean Ethics IV.5, Ross translation (Internet Classics
  Archive): "The man who is angry at the right things..." verified
  word-for-word against the retrieved text. This quote was added to the
  divergence section in this revision.
- Carlsmith, Wilson and Gilbert 2008, "The paradoxical consequences of
  revenge" (PubMed 19025285 abstract, retrieved via web search): the
  abstract sentence "People expect to reap hedonic rewards when they punish
  an offender, but in at least some instances, revenge has hedonic
  consequences that are precisely the opposite of what people expect."
  verified. This quote was added to the divergence section in this revision.
- Dodge et al. 2015, "Hostile attributional bias and aggressive behavior in
  global context" (PMC4522743, full abstract retrieved): the hostile
  attribution claim in the map verified against the abstract.

### Corrections made in this revision

- The divergence section originally claimed revenge "predicts worse mood and
  more rumination than forgiveness." The Carlsmith study compares punishing
  with not punishing, not punishing with forgiving. The claim was corrected
  to the study's own framing: people who punish continue to ruminate,
  whereas those who do not punish move on.
- The Aristotle position in the divergence section originally had no
  quotation. The NE IV.5 passage was added, carrier opened and verified.
- The em-dash separators in the map entries were replaced with colons per
  the HUMANIZER no-em-dash rule.

### The Self repairs recorded here for the baton

- 14 truncated entries in The Self (ending mid-sentence with an ellipsis)
  were completed from the linked concept pages' own opening text, in both
  the markdown and the Academy data.
- The Academy renderer's card URL function double-encoded already-encoded
  card names (The%20witness became The%2520witness). Fixed with a
  decode-then-encode guard.

## Revision 3 (2026-10-23, worker-pplx-dossiers-1025)

Expanded from 19 to 40 card entries. New sections: Anger's moral clothing
(moral outrage research, righteous indignation, ressentiment critique,
threatened egotism theory), The classical answers (non-retaliation,
gentleness as virtue, praotes, doctrine of the mean), Expression and
de-escalation (express by shaping not venting, de-escalation science,
attribution retraining, affect labeling), and The stories and sayings
(Achilles' rage, Seneca on Anger, Dipa Ma, the empty boat, the gentle
answer Proverb). Practice Selection expanded from 2 to 6 kernels (added
K253 mean calibration, empty boat reflection, K184 opposite action, K289
amends and restitution).

One entry was removed during verification: "Hatred never ceases by hatred"
was written from memory of the Dhammapada without confirming a wiki card
existed; no such card exists in content/sayings/, so the line was deleted
rather than kept unverified. Every remaining card target (40 unique) was
verified against actual content/ file names by script; 0 unresolved.

Commit ef2601c.

## Revision 4 (2026-10-23, worker-pplx-dossiers-1025) — final session state

Repairs applied in this pass, all pushed to origin/main:

- NE IV.9 locator for nemesis corrected to NE II.7: the Internet Classics
  Archive carrier was opened and Book IV section 9 is about shame, not
  indignation. The indignation mean is catalogued in Book II chapter 7's
  table of virtues. The concept page's own locator (NE IV.9) is wrong and
  should be corrected by the concept band.
- Affect labeling claim scoped to the Lieberman et al. 2007 finding:
  diminished amygdala response during labeling, not self-reported
  intensity reduction.
- Carlsmith "single lab game" limitation removed: the study's methods were
  not opened to establish that detail; the remaining unresolved note says
  only "measured in a laboratory setting."
- Anger Academy-data schema aligned with The Self: practice kernels now
  render as numbered n blocks (6), not hidden inside a vs body field the
  renderer ignores.
- dossierRich extended to convert plain markdown carrier links
  ([label](https://...)) in quote attributions into anchors; previously
  they rendered as literal text on both dossiers.
- The Self em-dash separators normalized (161 markdown lines, 12 Academy
  blocks) per the HUMANIZER no-em-dash rule; quoted passages keep their
  original dashes.
- Two The Self Academy-data blocks (Self-regulation, Ego depletion) still
  carried the truncated descriptions after the markdown fix; both completed
  in this pass.

Final state on origin/main: the-self 200 blocks (0 truncated, 0 non-quote
em dashes, 160 card targets resolve); anger 75 blocks (0 truncated, 0
non-quote em dashes, 40 card targets resolve).

## Revision 5 (2026-10-23, worker-pplx-dossiers-1025) — divergence repair

- NE II.7 locator verified against the Internet Classics Archive carrier:
  Book II chapter 7 contains the righteous indignation passage
  ("Righteous indignation is a mean between envy and spite... pained at
  undeserved good fortune"). The dossier's replacement locator is
  confirmed. The concept page's own NE IV.9 locator remains wrong and is
  flagged for the concept band (Book IV.9 is about shame).
- The "Does revenge deliver what it promises?" subsection was removed from
  the divergence section. It presented a research finding (Carlsmith 2008)
  against Seneca's advice, which is not two traditions answering the same
  question. The Carlsmith finding remains in the map under the Revenge
  entry, where research findings belong. Only the genuine Aristotle-vs-
  Seneca disagreement remains in the divergence section.
- Seneca's position in the divergence section was corrected: he denies the
  fitting case (anger is by definition a mistake), rather than the earlier
  unsupported characterization ("resting on a judgment the mind has not
  examined").
- The-self Academy data: two contradictory evidence labels corrected
  (Dalal/SEP -> Scholarly interpretation; Hayes et al. -> Scholarly
  review), and two headings normalized to colons to match the markdown.

Verification limits stated honestly: the Carlsmith abstract was obtained
via a web search result rendering, not a directly opened PubMed page
(PubMed and Europe PMC returned crawler errors). The claim retained in the
map matches the abstract text as rendered by the search result. The
Lieberman affect-labeling study was verified against the concept page's
own quoted abstract, not a freshly opened carrier.

Commit b948db0.

## Story section (worker-pplx-dossiers-1024e, 2026-10-24)

Owner-directed 4th section (after Practice), per the format spec now in
docs/enrichment/dossiers/README.md. The thirteen story loglines are
compressed from the story cards' own text; every cited story file was
opened and read this session (content/stories/ST004, ST060, ST131, ST146,
ST160, ST185, ST205, ST226, ST268, ST372, ST387, ST401, ST405). The
three map-subtheme loglines already held (ST146, ST205, ST401) were kept
as written. No new external carrier was opened: the loglines retell the
wiki's own story cards at narrative level and do not restate their
historical or psychological claims.

Revision (worker-pplx-dossiers-1024e, same session): ST146, ST205 and
ST401 were re-read in full after the section first landed (their
loglines had been carried unchanged from the map subtheme, whose files
were not re-opened at first push); all three cards' own text now
checked against the loglines. The "every cited story file was opened
and read" claim is accurate as of this revision.

Revision 2 (worker-pplx-dossiers-1024e, 2026-10-24): external
verification of the Story section's retained claims. Carriers opened
this session: (1) Angulimala Sutta, MN 86, Thanissaro translation,
accesstoinsight.org/tipitaka/mn/mn.086.than.html — the Buddha's reply
verified verbatim ("I have stopped, Angulimala. You stop."); the
ST060 logline now quotes that wording exactly; the ST405 logline's
clod, stone and potsherd, and the instruction to bear it, verified in
the same carrier (the sutta does not name the throwers as victims'
relatives; the logline says only "the villagers of Savatthi", which
the sutta's setting supports). (2) Mandela's inauguration invitation
of his former warders verified against the Nelson Mandela Foundation
archive of his own 10 May 1994 luncheon speech ("I invited three of
the warders looked after me to attend this celebration... because,
in a way, they also contributed to it"), corroborated by
contemporaneous UPI and Christian Science Monitor reports; the
Wikipedia carrier alone does not carry the claim. (3) Medea's
monologue verified as Medea 1078-1080 (Greek text and Warner's
translation consulted: "I know indeed what evil I intend to do, but
stronger than all my afterthoughts is my fury"; scholarly discussion
in Stanton, RhM 130), and the Aristotle-akrasia link verified as the
NE VII treatment of the Euripidean verse; the ST160 logline's "passion
stronger than deliberation" follows the Greek (thumos stronger than
bouleumata).

## Verification-label relocation (revision 3, 2026-10-25)

Public verification-status labels removed from blockquote and inline
citations and relocated here. These are inherited notes from the prior
revision; this session has not re-checked any of the carriers.
Contiguous bullet blocks were re-formatted as separate paragraphs;
no card link, gloss or quotation was changed. As an exemplar, this
dossier's format change should be reviewed by the supervisor before
being treated as the new reference.
### Removed carriers detail (recovered from git, inherited notes)

- Seneca, De Ira II.III (Stewart) — Primary text
- Shantideva, Bodhicharyavatara VI.1 (Batchelor) — Primary text
- Anger regulation research — Primary text
- Aristotle, Nicomachean Ethics IV.5 (Ross) — Primary text

## Spot-check addendum (2026-10-24, supervisor-pplx-1024c-dossiers)

The Seneca De Ira quotes were re-checked against the Gutenberg 64576
plain text opened this session: II.III ("beyond reason and carries
her away"), I.II ("no plague has cost the human race more dear") and
II.XXIX ("greatest remedy for anger is delay") all present and
matching. Note: the Gutenberg text carries an inline footnote marker
({50}) inside the I.II sentence; the dossier's quotation elides the
marker, standard practice for footnote numbers, wording otherwise
exact.
