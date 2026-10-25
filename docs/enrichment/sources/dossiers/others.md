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
  empathy-altruism hypothesis claims...") was verified by literal comparison
  against the full PubMed XML record fetched during the 2026-10-24 session;
  the sentence matches the record's AbstractText exactly.
  Correction history: revision 2 quoted a sentence beginning "Emotional
  arousal elicited by witnessing..." under the 1988 label; that sentence
  was withdrawn in revision 3 and the 1988 abstract's own definition
  sentence is now used. The withdrawn sentence's record of origin is
  deliberately not asserted here: a later literal-match check against PMID
  1941512 returned a different abstract opening ("Three experiments tested
  whether empathy evokes egoistic motivation to share vicariously in the
  victim's joy..."), so the provenance claim previously recorded here was
  removed as unverified.
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
were read in full, including their protocols and evidence notes. All nine
story cards used (ST077, ST079, ST194, ST243, ST262, ST267, ST288, ST313,
ST315) were read in full. No outside carrier is cited for these; they carry
no quotation.

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
  assignment verified present: registry art field "others.jpg", Renoir's promenade au bord de la mer per ART-GALLERY.md; my earlier pending flag was wrong).
- Divergence 2's unresolved clause is now bounded to the two opened
  abstracts and the wiki's own Altruism-theory card; the longer history of
  the Batson-Cialdini debate is not cited.
## Revision 4 (advisor round 3 + humanizer bridging)

- Divergence 1: "commands the opposite economy" lead-in replaced; the
  analysis no longer claims the Gospel "removes the separation" and now
  states each position's own prescription, with the unresolved point being
  how enemy-love relates to justice.
- Divergence 2: "the same laboratory situation" replaced with a bounded
  description; the sentence "and each camp ran its own tests of the other's
  account" was left in place grounded in the two abstracts, each of which
  reports its own tests.
- Analects block quote now preserves the carrier's punctuation exactly
  (inner double quotes as in the Legge text on ctext; no outer wrapper).
- ST315 logline now displays the effect as the paper reports it: higher
  survival odds, OR 1.50, with the 50 per cent phrasing attributed to the
  authors.
- Held description rewritten without the invented ranking ("come second").
- Nearby terms: attachment claim corrected (attachment theory and attachment
  security are now map entries in this dossier); "dossier-grade" wording
  removed.
- Map subthemes now open with a bridging line that poses the subtheme's
  question, per the 2026-10-24 owner directive in HUMANIZER-SKILL.md.
- Checker exit 0 (133 card links, 9 external carriers); voice audit exit 0.
## Revision 5 (advisor round 4)

- Divergence 2: the clause "and each camp ran its own tests of the other's
  account" was removed; the sentence now ends at "relief from the helper's
  own sadness," grounded in the two abstracts alone.
- The Batson 1988 quotation was verified by literal comparison against the
  full PubMed XML record; the withdrawn revision-2 sentence's provenance
  claim was removed from this ledger as unverified (see the Batson entry
  above).
- The map lead-ins were rewritten without the numbered-question scaffold
  (first/second/third, causal/constitutive/epistemic): each subsection now
  opens with a topic-specific line that connects its entries.
- Reading records completed: ST262, ST288, ST313 and ST315 read in full
  including the 800-1200 character ranges; HUMANIZER-SKILL.md read in full
  (all 626 lines, unfiltered).
- Checker exit 0 (133 card links, 9 external carriers); voice audit exit 0.
## Revision 6 (advisor round 5)

- The Confucius-Matthew comparison moved out of the divergences section and
  into the map (What one person owes another), with both quotations and the
  bounded discussion preserved; the open question it leaves (incompatible
  answers to one question, or answers to two different questions) is now
  framed as a comparison, not a disagreement. Batson-Cialdini is the sole
  entry under the genuine-disagreement header.
- The eight generic map lead-ins ("These entries...") were removed; the map
  returns to the exemplar's card-list format.
- The Batson verification timestamp in this ledger was replaced with the
  session date and method (the literal verification stands; its previously
  recorded time did not match the session clock).
- Checker exit 0 (133 card links, 9 external carriers, 19 headers); voice
  audit exit 0.
## Advisor QC verdict

- Round 6 (revision 6, commit af75b204): QC-passed. No further content
  rewrite required. Outstanding supervisor actions: registry flip from
  "planned" and art assignment per ART-GALLERY.md.

### Post-QC polish (2026-10-24, worker-pplx-dos16-1024a)

One humanizer tell found in a final read of my own text after the round-6 verdict: the ST267 story entry still carried an "is not X" contrast construction. Rewritten affirmatively ("the face addresses me as more than an object among objects"); checker and voice audit re-run, exit 0.

### Carrier note (2026-10-24, 14:29Z)

ctext.org returns 403 to command-line clients (bot wall); the Analects 14.34 quote was verified against the Legge carrier through the in-session fetch tool, and the URL serves normally in a browser. Biblehub and AccessToInsight carriers re-checked this minute (HTTP 200).

## Quote-fidelity pass (2026-10-24, supervisor-pplx-1024c-dossiers, dossiers baton)

The dossier's eight verbatim quotations were checked against their
carriers this session, all word-for-word: Beckes and Coan 2011
(squarespace PDF: "dominant ecology" sentence and social-baseline
phrase); Cacioppo and Hawkley 2009 (PMC2752489: social-pain
definition); Klimecki et al. 2014 (PubMed 23576808: compassion
training conclusion); Karaṇīya Metta Sutta (accesstoinsight,
Thanissaro: mother-and-child passage); Aristotle NE IX.10 (MIT
Classics, Ross: great-friend passage); Matthew 5.43-44 KJV (Biblehub);
Batson et al. 1988 (PubMed 3418490: empathy-altruism definition);
Cialdini et al. 1987 (PubMed 3572736: both sentences; the abstract's
mid-sentence "we hypothesized" is quoted with a sentence-initial
capital, standard quotation practice, wording otherwise exact).
No corrections needed; body unchanged. (Worker note: this pass
counted the eight blockquotes that open with a quotation mark; the
ninth verbatim quote, Analects 14.34, opens with "Some one said" and
is covered in the worker's pass below.)

### Quote-fidelity pass (2026-10-24, 14:40Z, worker-pplx-dos16-1024a, consolidated)

All nine verbatim quotes in the dossier re-verified word-for-word this session: Beckes and Coan 2011 (parts and em-dash join, against the opened PDF text); Cacioppo and Hawkley 2009 (PMC page re-fetched); Klimecki et al. 2014 (PubMed eutils re-fetch); Karaṇīya Metta Sutta (AccessToInsight re-fetched); Aristotle NE IX.10 (MIT Ross re-fetched, both parts); Matthew 5.43-44 (Biblehub re-fetched; the two verses match exactly, verse numbers elided as is standard); Batson et al. 1988 (full PubMed XML record); Cialdini et al. 1987 (PubMed eutils re-fetch, both parts); Analects 14.34 (ctext blocks crawlers; cross-verified word-for-word against Legge's translation on Gutenberg no. 4094 and sacred-texts.com, and verified earlier this session against the ctext carrier itself through the fetch tool). Two independent passes, same verdict: all quotes exact.

## Method qualification (2026-10-24, advisor QC correction, supervisor-pplx-1024c-dossiers)

My earlier pass above located each quotation's distinctive phrases in
the opened carrier; "word-for-word" there means the located phrases
matched exactly, not a character-by-character comparison of every
complete quotation block. The dos16 consolidated pass above is the
stronger record (full re-fetches, XML records, the Analects 14.34
quote my blockquote-pattern count missed). Both passes, same verdict:
the quotes are exact.

## Supervisor cold-read (2026-10-25, supervisor-pplx-1024c)

EDITORIAL review (card fidelity not rechecked this pass; no cards
or external carriers reopened). Full read of the manuscript.
Findings: the opening states the double question plainly; the map's
groups (what others do, the social self, empathy, compassion,
love/friendship, obligation, altruism debates, relationship
structures) hold glosses that read as consistent with their cards;
the Confucius-versus-Matthew passage quotes both and leaves open
whether they answer one question or two — exactly the honest
handling the project asks for; the Batson-versus-Cialdini section
quotes both sides and names the shared measurement crux as
unresolved; the practice Retention paragraph speaks in the owner's
voice ("Of the kernels above I would keep two"). ST315 appears in
both the map's story group and the Story section with different
facts from the same meta-analysis — the established pattern, no
contradiction. No defects found at reader level; no edits. Checker
exit 0.

## GF-model conversion (worker-pplx-dos24-1025a, 2026-10-25)

The dossier was restructured per the 2026-10-25 owner orders: the old
map format (one `## The map:` section with per-term gloss lines) was
dissolved into an interwoven thread with question-style subsection
headings. The map header was renamed to `## Where others sit in a
life`, and every subsection (what other people do, how the self is
built from others, empathy, compassion and care, love and friendship,
what one person owes another, helping, relationships and communities,
the stories and sayings) was converted from gloss lists to connected
prose: each card link is now embedded in a natural sentence rather
than standing in a `label: description` line. The Story section
retains its one-line loglines as the format allows. Checker exit 0
(133 card links resolve, 19 headers, 9 external carriers); density
check 0 dense; 59 paragraphs, 2.0 card links per paragraph. Commits:
b4abf67c, 84b9d123, 4c284076, 74d15032, f078cb97, 23b9621b,
a596f761, a88f916d, b4aa9b4e (passes 1-9).

## Disagreement section 1 to 3 questions (worker-pplx-dos30-1025l, 2026-10-25, baton dos16)

Two questions added under "Where the traditions genuinely disagree".

Q2, what is owed to someone who has done harm. The Analects 14.34 and
Matthew 5.43-44 passages already in the dossier were moved from the
"What one person owes another" subsection into this question, and
Matthew 5.45 was added as the stated reason. All three re-opened this
session: Legge's Analects 14.34 on the Chinese Text Project (fetched
text matches), KJV Matthew 5 on biblehub (page text matches, checked by
normalised substring). The comparison and lean are the author's and
flagged as such; limit stated: English translations only.

Q3, partiality toward kin. Sources opened this session: Mei's
translation of Mozi Universal Love II (themozi.org ch15: "Mozi said: It
is to regard the state of others as one's own, the houses of others as
one's own, the persons of others as one's self.") and Universal Love III
(ch16: the "Should I first love others' parents..." passage), both found
by script; Legge's Mencius, Teng Wen Gong I (Yi Zhi's "love all without
difference of degree; but the manifestation of love must begin with our
parents" and Mencius' "one root ... two roots" reply, from the fetched
page) and Teng Wen Gong II (the "Mo's principle is 'to love all
equally,' which does not acknowledge the peculiar affection due to a
father" sentence, read in the full fetched chapter). Not done: the
Chinese was not read, and secondary scholarship on jian ai was seen only
in search snippets, so it is not cited.

Checks: dossier_check exit 0 (133 card links, 21 headers); density 0
dense. dossier_quote_verify flags the Legge and KJV quotes as not found
(PDF/nested-quote and apostrophe false positives; the same text was
matched by hand against the fetched pages as above). Note for the
supervisor: the Mozi translation site (themozi.org) reproduces Mei's
translation sourced from the Chinese Text Project, which was
unreachable for direct fetch of the Mozi chapters this session.

Humanizer pass (2026-10-25, worker-pplx-dos16-1025m): reader-level
repair of page/dossier self-description, four edits. (1) Nearby terms:
"are treated inside this dossier" became "are treated here" (scope
guidance kept). (2) Batson/Cialdini disagreement: "My page on the
program records Batson's summary judgment ... with the limits kept on
record there" became a card-grounded sentence — the [altruism theory
Batson empathy] card (opened this session) records the summary
judgment ("the book's summary judges the support 'remarkably strong
and consistent,' forcing the tentative conclusion that
empathy-induced altruism is within the human repertoire"), and the
sentence now carries that judgment with its tentative conclusion and
a card citation; the card does not record separate "limits", so that
word was dropped per advisor QC. (3) Mozi/Mencius close: "So the page
cannot say that either has refuted the other" became "I cannot
conclude from these passages that either side has refuted the other"
(advisor QC: inability to conclude refutation is not a verdict that
none occurred — same distinction as the motivation pass). (4) Limits
sentence: "is not something this page decides" became "is left open"
(the translator-difference and no-Chinese limits stand immediately
before it). Quote text unchanged; one card citation was added (the
Batson card link in the disagreements section). Checks:
dossier_check exit 0 (134 card links, 21 headers); dossier_density 0
dense; dossier_quote_verify 15 checked, 8 not found — verifier misses
against blocked carriers (ctext.org bot wall, PubMed, Biblehub),
covered by the prior ledger verification recorded above (two
independent passes, all spans exact against opened carriers); no quote
was newly verified in this pass and no quote text was touched.
Others is published; the site data does not change until a supervisor
rebuild, so this is flagged: re-splice others when convenient.
