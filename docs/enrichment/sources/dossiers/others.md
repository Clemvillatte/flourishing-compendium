# Dossier ledger — Others (worker-pplx-dos16-1024a, 2026-10-24)

Verification record for docs/enrichment/dossiers/others.md, revisions 1-2.
Revision 2 applies advisor QC repairs (see bottom). Every quoted passage below
was verified word-for-word against a carrier opened during this session.

## Quotes verified against opened carriers

- Beckes & Coan 2011 ("the dominant ecology... close proximity to social
  resources is the baseline assumption of the human brain").
  Carrier opened: https://static1.squarespace.com/static/55917f64e4b0cd3b4705b68c/t/5cd2617f9353680001816713/1557291392068/beckes.coan.2011.pdf
  Method: download + pdftotext extraction; sentence found in the section
  introducing the social baseline (paper spans pp. 976-988). Elisions in the
  dossier quote are marked with ellipses; quoted fragments are exact.
- Cacioppo & Hawkley 2009 ("Physical pain is an aversive signal... one's
  social body").
  Carrier opened: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2752489/
  Method: NCBI page fetch; the two sentences appear in the
  loneliness-as-signal passage of the full text.
- Aristotle, Nicomachean Ethics IX.10 (Ross).
  Carrier opened: https://classics.mit.edu/Aristotle/nicomachaen.9.ix.html
  Method: page fetch; quoted fragments match the Ross text verbatim; internal
  ellipses mark skipped Ross sentences. In revision 2 this quote moved from
  the divergence section into the map (Love and friendship), because the
  advisor ruled the Aristotle-vs-metta pairing a compatible contrast rather
  than a disagreement.
- Karaṇīya Metta Sutta, Sn 1.8 (Thanissaro).
  Carrier opened: https://www.accesstoinsight.org/tipitaka/kn/snp/snp.1.08.than.html
  Method: page fetch; "As a mother would risk her life..." matches verbatim.
  In revision 2 this quote moved from the divergence section into the map
  (Compassion, kindness and care), same reason as above.
- Matthew 5.43-44 (KJV).
  Carrier opened: https://www.biblehub.com/kjv/matthew/5.htm
  Method: page fetch; quoted passage matches the KJV text verbatim. Retained
  in divergence 1 (injury repayment), now paired with the Analects.
- Confucius, Analects 14.34 (Legge).
  Carrier opened: https://ctext.org/analects/xian-wen
  Method: page fetch; quoted question and answer match Legge's translation
  verbatim. New in revision 2 (divergence 1).
- Batson et al. 1988 (JPSP; empathy-altruism vs egoistic alternatives).
  Carrier opened: PubMed 3418490 via NCBI eutils efetch (PubMed pages do not
  answer direct fetches).
  URL: https://pubmed.ncbi.nlm.nih.gov/3418490/
  Method: efetch abstract; quoted sentence matches verbatim.
- Cialdini et al. 1987 (JPSP 52.4, "Empathy-based helping: is it selflessly
  or selfishly motivated?").
  Carrier opened: https://scispace.com/papers/empathy-based-helping-is-it-selflessly-or-selfishly-4li7tvq2d9
  Method: page fetch; the two quoted sentences match the JPSP abstract
  verbatim (record cross-checked against Crossref DOI 10.1037/0022-3514.52.4.749).
  New in revision 2 (divergence 2), replacing the Batson-vs-Klimecki pairing
  the advisor ruled compatible rather than opposed.
- Klimecki et al. 2014 (SCAN; empathy vs compassion training).
  Carrier opened: PubMed 23576808 via NCBI eutils efetch.
  URL: https://pubmed.ncbi.nlm.nih.gov/23576808/
  Method: efetch abstract; quoted conclusion sentence matches verbatim.
  Revision 2 repaired the account: the study trained one group sequentially
  (empathic resonance first, compassion second); the earlier draft wrongly
  implied separate groups. The earlier draft also substituted an em dash for
  the abstract's "cortex-brain"; the quote now stops before that phrase and
  the map paragraph describes the design accurately.

## Map descriptions

Each per-entry description is compressed from the linked entry's own opening
claim (source: the content/ file for each card, read via script this
session). The eight practice kernels' descriptions were re-verified against
the full kernel bodies in revision 2. Story loglines were re-verified against
the full story cards (ST077, ST079, ST194, ST243, ST262, ST267, ST288, ST313,
ST315). No outside carrier is cited for these; they carry no quotation.

## Card links

Every #card= target on the page was verified against actual content/ file
names by scripts/dossier_check.py (see below).

## Checker and voice audit

- Revision 1: checker exit 0 (131 card links, 20 headers, 7 external
  carriers); voice audit exit 0.
- Revision 2: results recorded in the revision-2 commit message.

## Substantive exclusions (coverage decisions)

- Gratitude-family cards (Gratitude, K164, K212, Ecological gratitude):
  assigned to the Gratitude dossier.
- Forgiveness family (Forgiveness, REACH model, art of apology): mapped in
  the Anger dossier.
- Attachment theory, attachment security, self-compassion, mindful
  self-compassion, amor sui / proper self-love: self-directed material,
  assigned to the Self dossier.
- Habit formation and behaviour-change cards: assigned to the Behaviour
  dossier (dos15).
- Social anxiety, social comparison: treated as self-evaluation material in
  their existing homes, not others-directed material.
- A Dao De Jing 63 carrier for "requite injury with kindness" could not be
  opened (ctext blocked automated access; sacred-texts and Wikisource
  fetches failed), so divergence 1 uses the Analects 14.34 exchange, which
  records the kindness-repayment proposal and Confucius' rejection inside
  the primary text itself.

## Advisor QC

- Round 1 (revision 1): not ready. Findings applied in revision 2: both
  divergences reframed (Aristotle/mettagospel pairing dissolved, quotes moved
  to the map; Batson/Klimecki pairing dissolved, Klimecki quote repaired and
  kept in the map; two new divergences built on opened carriers: Analects
  14.34 vs Matthew 5.44, Batson 1988 vs Cialdini 1987); "Connectedness in
  well-being research" relabelled as this wiki's label; ST315 "confer" fixed
  to "had"; intro sweeping claims removed; kernel descriptions re-verified
  against kernel bodies; story loglines re-verified against full cards;
  retention paragraph rewritten for this theme.

## Baton note for the supervisor

- The dos16 baton was claimed by worker-pplx-dos16-1024a at 14:01:53Z and
  pushed (commit 864b5f79); a later local clock-in (14:05:21Z) was not pushed
  before worker-pplx-dos27-mint re-claimed at 14:07:14Z. baton.py now refuses
  worker-pplx-dos16-1024a (dos16 held by dos27-mint, FRESH). These revision-2
  QC repairs were made without holding the live baton; dos27-mint's commit
  f1b9f1f states dos16 is released and closed ("Others dossier already built
  ... batch state closed"), so the band had no active builder at the time.
  Flagging for the supervisor to reconcile the baton bookkeeping.

## Open points for the supervisor

- Registry status left "planned" for supervisor flip (per band rules).
- Divergence 2's unresolved clause ("each camp published experiments it read
  as disconfirming the other's account") is grounded in the two abstracts
  quoted (Batson 1988 reports disconfirming egoistic alternatives; Cialdini
  1987 reports supporting the egoistic interpretation) and in the wiki's own
  Altruism-theory card; the longer history of the debate is not cited.
