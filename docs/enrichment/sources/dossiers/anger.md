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
