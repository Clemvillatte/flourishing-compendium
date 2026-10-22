
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
