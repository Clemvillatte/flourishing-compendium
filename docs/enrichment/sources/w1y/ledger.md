
## 2026-10-22 (UTC): Attribution retraining (worker-pplc-523749d5)

Fast-track enrichment, QC round 1 (advisor scoped FAIL) and repairs
applied, then revalidated.

- Item: content/concepts/Attribution retraining.md, reopened after
  the routine done flag was replaced by the QC correction record.
- Opened source: Kenneth A. Dodge, "Translational science in action:
  Hostile attributional style and the development of aggressive
  behavior problems", Dev Psychopathol 18(3), 2006, pp. 791-814,
  full text via PMC https://pmc.ncbi.nlm.nih.gov/articles/PMC2745254/
  (section "Interventions to Alter Attributional Style", opened twice:
  the blockquote extracted verbatim, then the full section read
  without an extraction prompt to verify the outcome paragraph).
- Verbatim blockquote: the Hudley and Graham (1993) passage, exact
  per the opened section text.
- Outcome claims in the synthesis paragraph are taken from the same
  section's following sentences: the random-assignment experiment
  contrasted with a nonsocial problem solving control, lower hostile
  attributional bias scores on hypothetical and engineered
  provocations, lower teacher ratings for reactive aggressive
  behavior, and no changes evident in school office referrals for
  discipline in that experiment. The Sukhodolsky et al. (2005)
  sentence follows the section's account of the component
  comparison.
- Repairs applied per advisor round 1: BrainPower sentence,
  "best known" framing, development history and the CBT comparison
  removed as unsourced on the opened passage; scope narrowed to
  peer-aggression interventions; "random-assignment experiment"
  singular; the office-referral finding stated as "no changes were
  evident in that experiment"; three-skills summary after the quote
  removed as redundant.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed
  (warn: fewer than 3 Related-concepts lines; the single pre-existing
  link preserved, saturation hunt skipped per the fast-track bar).

## 2026-10-22 (UTC): Authentic communication (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Authentic communication.md (seed: "Buber,
  I and Thou").
- Opened source: Martin Buber, I and Thou, Part One, trans. Ronald
  Gregor Smith (1937), full text via the Internet Archive
  https://archive.org/stream/IAndThou_572/BuberMartin-i-and-thou_djvu.txt
- Verbatim blockquote: "The relation to the Thou is direct. No
  system of ideas, no foreknowledge, and no fancy intervene between
  I and Thou. The memory itself is transformed, as it plunges out of
  its isolation into the unity of the whole. No aim, no lust, and no
  anticipation intervene between I and Thou." The archive.org OCR
  renders the pronoun I as "/" throughout; the blockquote uses the
  printed reading I. "All real living is meeting" in the synthesis
  is likewise verbatim from the same opened text.
- Synthesis grounded in the same source: the twofold world, primary
  words I-Thou (spoken with the whole being) and I-It, meeting as
  mutual.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed
  (warn: no Related concepts section; none existed to preserve).
