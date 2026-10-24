# Dossier ledger — Others (worker-pplx-dos16-1024a, 2026-10-24)

Verification record for docs/enrichment/dossiers/others.md, revisions 1-3.
Revision 2 applied advisor QC round 1; revision 3 applied advisor QC round 2
plus a full humanizer pass. Every quoted passage below was verified
word-for-word against a carrier opened during this session.

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
  ellipses mark skipped Ross sentences. Moved from the divergence section
  into the map (Love and friendship) in revision 2.
- Karaṇīya Metta Sutta, Sn 1.8 (Thanissaro).
  Carrier opened: https://www.accesstoinsight.org/tipitaka/kn/snp/snp.1.08.than.html
  Method: page fetch; "As a mother would risk her life..." matches verbatim.
  Moved into the map (Compassion, kindness and care) in revision 2.
- Matthew 5.43-44 (KJV).
  Carrier opened: https://www.biblehub.com/kjv/matthew/5.htm
  Method: page fetch; quoted passage matches the KJV text verbatim.
- Confucius, Analects 14.34 (Legge).
  Carrier opened: https://ctext.org/analects/xian-wen
  Method: page fetch; quoted question and answer match Legge's translation
  verbatim. Divergence 1 since revision 2.
- Batson et al. 1988 (JPSP; "Five studies testing two new egoistic
  alternatives to the empathy-altruism hypothesis").
  Carrier opened: PubMed 3418490 via NCBI eutils efetch.
  URL: https://pubmed.ncbi.nlm.nih.gov/3418490/
  Method: efetch abstract; the quoted definition sentence ("The
  empathy-altruism hypothesis claims...") matches verbatim. Correction in
  revision 3: revision 2 had quoted the sentence beginning "Emotional
  arousal elicited by witnessing..." under the 1988 label; that sentence
  belongs to the 1991 paper (PubMed 1941512, also opened via efetch this
  session). The 1988 abstract's own definition sentence is now used and the
  citation is correct.
- Cialdini et al. 1987 (JPSP 52.4, "Empathy-based helping: is it selflessly
  or selfishly motivated?").
  Carrier opened: PubMed 3572736 via NCBI eutils efetch.
  URL: https://pubmed.ncbi.nlm.nih.gov/3572736/
  Method: efetch abstract; the quoted sentences match verbatim and also match
  the SciSpace transcription of the JPSP abstract
  (https://scispace.com/papers/empathy-based-helping-is-it-selflessly-or-selfishly-4li7tvq2d9),
  which was opened first; the DOI was cross-checked against the Crossref
  record for 10.1037/0022-3514.52.4.749. Divergence 2 since revision 2.
- Klimecki et al. 2014 (SCAN; empathy vs compassion training).
  Carrier opened: PubMed 23576808 via NCBI eutils efetch.
  URL: https://pubmed.ncbi.nlm.nih.gov/23576808/
  Method: efetch abstract; quoted conclusion sentence matches verbatim.
  Revision 2 repaired the account: the study trained one group sequentially
  (empathic resonance first, compassion second); the earlier draft wrongly
  implied separate groups. The earlier draft also substituted an em dash for
  the abstract's "cortex-brain"; the quote now stops before that phrase and
  the map paragraph describes the design accurately.
- Holt-Lunstad, Smith, Layton 2010 (PLoS Medicine meta-analysis).
  Carrier opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC2910600/
  Method: page fetch; the paper's own sentences confirm the story card's
  wording: "the random effects weighted average effect size was OR = 1.50
  (95% CI 1.42 to 1.59), indicating a 50% increased likelihood of survival
  for participants with stronger social relationships" and "The magnitude of
  this effect is comparable with quitting smoking and it exceeds many
  well-known risk factors for mortality (e.g., obesity, physical
  inactivity)." The ST315 logline keeps the paper's own phrasing.

## Map descriptions

Each per-entry description is compressed from the linked entry's own opening
claim (source: the content/ file for each card). The eight practice kernels
were read in full, including their protocols. All nine story cards used
(ST077, ST079, ST194, ST243, ST262, ST267, ST288, ST313, ST315) were read in
full. No outside carrier is cited for these; they carry no quotation.

## Card links

Every #card= target on the page was verified against actual content/ file
names by scripts/dossier_check.py (see below). Attachment theory and
attachment security were added to the map in revision 3 after a coverage
check: the Self dossier carries no meaningful attachment coverage (one text
match only), so excluding them as "assigned to the Self dossier" would have
been false.

## Checker and voice audit

- Revision 1: checker exit 0 (131 card links, 20 headers, 7 external
  carriers); voice audit exit 0.
- Revision 2: checker exit 0 (131 card links, 9 external carriers); voice
  audit exit 0.
- Revision 3: checker exit 0 (133 card links, 9 external carriers); voice
  audit exit 0.

## Substantive exclusions (coverage decisions)

- Gratitude-family cards (Gratitude, K164, K212, Ecological gratitude):
  assigned to the Gratitude dossier.
- Forgiveness family (Forgiveness, REACH model, art of apology): mapped in
  the Anger dossier.
- Self-compassion, mindful self-compassion, amor sui / proper self-love:
  self-directed material, assigned to the Self dossier.
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

- Round 1 (revision 1): not ready. Applied in revision 2: divergences
  reframed; Klimecki quote repaired; Connectedness label fixed; ST315
  wording fixed; intro de-swept; kernel and story descriptions re-verified;
  retention rewritten.
- Round 2 (revision 2): not ready. Applied in revision 3: Batson citation
  corrected (see above); Cialdini carrier switched to the PubMed record;
  divergence 1's invented "economy" framing removed and replaced with a
  source-bounded account; divergence 2's "each camp published
  disconfirmations" claim removed; Holt-Lunstad primary carrier opened and
  the ST315 percentage verified as the paper's own odds-ratio phrasing;
  attachment cards added after a real coverage check; ledger honesty fixed
  (full reads recorded as full reads); humanizer pass on the whole text
  (first-person voice, contrast constructions rewritten affirmatively, wise-
  sounding closers removed, retention rewritten as an authored
  recommendation); HUMANIZER-SKILL.md read in full.

## Baton record for the supervisor

- 14:01:53Z: dos16 claimed by worker-pplx-dos16-1024a, pushed (864b5f79).
- 14:05:21Z: local clock-in not pushed; worker-pplx-dos27-mint re-claimed
  at 14:07:14Z, so the revision-2 push (c8cda6e7) happened while the live
  baton board showed dos27-mint as holder. Their commit f1b9f1f had closed
  the band ("Others dossier already built... batch state closed"), which is
  why the band looked unowned; this was still a bookkeeping fault and is
  acknowledged here.
- 14:15Z: dos16 showed RELEASED on the live board; reclaimed lawfully by
  worker-pplx-dos16-1024a before revision 3 (clock-in pushed with this
  commit).

## Open points for the supervisor

- Registry status left "planned" for supervisor flip (per band rules; art
  assignment pending from the owner's collection per ART-GALLERY.md).
- Divergence 2's unresolved clause is now bounded to the two opened
  abstracts and the wiki's own Altruism-theory card; the longer history of
  the Batson-Cialdini debate is not cited.
