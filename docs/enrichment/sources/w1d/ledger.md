# w1d sources ledger

## Recovery item: "Working memory capacity limits" (2026-10-20, worker-p1f-b7894e46)

**Provenance.** The owner reported dead sessions; a stale-band sweep found the w1d band ~15 h stale with an orphaned in-progress marker ("Working memory capacity limits" — no draft, file untouched since the integration commit). Completed by the p1f worker to the owner's fast-band minimal bar (one authoritative source + accurate synthesis), QC-repaired across three rounds.

**Source opened.** Cowan, N. (2001). "The magical number 4 in short-term memory: A reconsideration of mental storage capacity." Behavioral and Brain Sciences 24(1), 87-114 — author PDF opened and read: https://memory.psych.missouri.edu/assets/doc/articles/2001/cowan-bbs-2001.pdf. Only this source was fetched for the item; the original marker's other candidate sources (if any) were not opened.

**Supported passages (verbatim, re-checked against the extracted PDF text on 2026-10-20).**
- Abstract: "Miller (1956) summarized evidence that people can remember about seven chunks in short-term memory (STM) tasks."
- Abstract: "that number was meant more as a rough estimate and a rhetorical device than as a real capacity limit"
- Abstract: "Others have since suggested that there is a more precise capacity limit, but that it is only three to five chunks."
- Abstract: "A single, central capacity limit averaging about four chunks is implicated along with other, noncapacity-limited sources."
- Abstract: "Four basic conditions in which chunks can be identified and capacity limits can accordingly be observed are: (1) when information overload limits chunks to individual stimulus items, (2) when other steps are taken specifically to block the recoding of stimulus items into larger chunks, (3) in performance discontinuities caused by the capacity limit, and (4) in various indirect effects of the capacity limit."
- Abstract: "Under these conditions, rehearsal and long-term memory cannot be used to combine stimulus items into chunks of an unknown size; nor can storage mechanisms that are not capacity-limited, such as sensory memory, allow the capacity-limited storage mechanism to be refilled during recall."
- Introduction: "Miller's (1956) theoretical review of a 'magical number seven, plus or minus two' is probably the most seminal paper in the literature for investigations of limits in short-term memory (STM) storage capacity." and "Miller's reference to a magical number, however, was probably a rhetorical device."
- Body (basic assumptions of the theoretical framework): "the focus of attention is capacity-limited"; "the limit in this focus averages about four chunks in normal adult humans"; "no other mental faculties are capacity-limited, although some are limited by time and susceptibility to interference."

**What the review does NOT say (kept out of the page).** No estimate for children; no three-to-five-chunk finding for everyday performance; no fixed allowance for every memory task; the abstract's "averaging about four chunks" concerns the conditions the review specifies.

**Page quote check (2026-10-20, second audit).** The page's two quoted fragments were re-verified verbatim against the PDF text: "was meant more as a rough estimate and a rhetorical device than as a real capacity limit" and "A single, central capacity limit averaging about four chunks is implicated along with other, noncapacity-limited sources." The page's other sections are paraphrase, not quotation.

**Validation and QC history** (consistent with the session's saved advisor outputs and the closure verdict):
1. First pass (commit b20024da): minimal accurate treatment; validator ok; w1d marked done. First advisor round FAILED (synthesis overreach; compendium clauses asserted unsupported relationships).
2. Second pass (commit cf026bed): abstract-grounded section added; validation then FAILED on link-count (my own first-pass enrichment was the baseline). Second advisor round FAILED with the real fix: validate against the true pre-enrichment seed baseline.
3. Third pass (commit 034d9e2e): section replaced with the advisor-supplied "What the estimate measures" text; CO003 clause corrected; D037/SE068/AF028/Y064/Y034 reduced to bare links. Validated with `enrich_validate.py --base b20024da^`: 1 ok. Advisor closure round: "Scoped prose PASS for all five reviewed pages."
4. Audit round (2026-10-20): the first version of this ledger contained quote fragments reconstructed from session memory rather than the PDF; several failed re-verification ("a critical review concludes...", "the traditional estimate of 7 +/− 2 was...", "recode (group) them into a larger number of chunks", "a critical review of 40 years of quantitative studies", "the capacity limit appears to hold only under conditions..."). All were removed or replaced above with verified fragments. The misplaced "known limits" paragraph naming Mackenzie/Oshana, Seneca, Meditations, Musonius and Buber (material belonging to the p1f principle items, not this concept) was removed.

**Accurate file description.** The In-the-compendium bullets for D037, SE068, AF028, Y064, Y034 are retained as bare links (contexts not read, no invented clauses); those wikilinks each appear twice in the page (Cited-in section + In-the-compendium section). Validated against the pre-enrichment seed baseline b20024da^ (1 ok). The FAST-TRACK bar per owner directive was met (one authoritative source + accurate synthesis).

**Ledger incident note.** Earlier "appends" to this ledger in this session silently failed because `docs/enrichment/sources/w1d/` did not exist (the `&&`-chained and standalone `cat >>` calls targeted a missing directory; stderr was not surfaced in the tool outputs). This file was created from scratch on 2026-10-20 to close that audit gap; no prior w1d ledger content existed in git history.

---

## Achievement goal theory (Dweck, Elliot) — completed 2026-10-20 (worker-w1d-4c8e1b3a)

**Sources opened (3 distinct works plus one record).** (1) Dweck 1986, "Motivational Processes Affecting Learning," American Psychologist 41(10):1040-1048, PDF at https://gwern.net/doc/psychology/personality/1986-dweck.pdf (downloaded; printed page markers verified for locators p. 1040, p. 1041). (2) Elliot & Church 1997, JPSP 72(1):218-232 — ONE work consulted via two records: the Semantic Scholar record https://www.semanticscholar.org/paper/a4482ae1eeaaaed5df0d72b14e93f484104ddda4 (OCR artifacts in the abstract: "ach.ievement", "performanceavoidance" — paraphrased, never quoted) and the OpenAlex record https://api.openalex.org/works/doi:10.1037/0022-3514.72.1.218 (full abstract; the classroom results sentence is grounded here); these two records are not separate works. (3) Elliot 2006, "The Hierarchical Model of Approach-Avoidance Motivation," Motivation and Emotion 30:111-116, PDF https://link.springer.com/content/pdf/10.1007/s11031-006-9028-7.pdf (approach/avoidance definition quoted from p. 111). Record-only (not page support): Cury et al. 2006 OpenAlex record https://api.openalex.org/works/doi:10.1037/0022-3514.90.4.666 (2x2 crossing history only; the page's 2x2 sentence was removed after QC).

**QC history (4 advisor rounds, all repairs applied).** Round 1 FAIL: synthesis overreach, OpenAlex/Cury evidence not integrated, Dweck qualifications stripped, flow/self-handicapping links unverified, proposal direction wrong. Repairs applied. Round 2 FAIL: 2x2 crossing claim without opened page support; causal language ("led to", "predicts") from correlational design; design inference ("associations", "not adopted at random"); bare page numbers without source links; Elliot citation lacking locator; missing OpenAlex link at the results sentence; Hope/Goal-adjustment links beyond evidence. Repairs applied (two silent edit failures caught by re-reading the file). Round 3 FAIL: rhetorical "mastery is good and performance is bad" contrast removed; "Evidence and limits" section replaced with the non-generalization scope sentence; Dweck sentences given direct PDF links with p. 1040/p. 1041; trichotomous paragraph linked to the OpenAlex record; Achievement-motivation-theory proposal clause narrowed. Round 4: seed-wikilink conflict surfaced (advisor had asked to remove six seed links; the validator's E-NL-01 forbids removing seed wikilinks) — resolved per advisor: seed links kept as bare bullets, MO020/MO019 given neutral clauses, all added glosses on the other six removed. Advisor verdict: scoped PASS.

**Validation.** Baseline: true pre-enrichment seed commit f7839571b163a22f873402f696b638384de07311 (the pushed round-1 baseline contained my own additions, which made removals of my own links false-positive ERRs). `enrich_validate.py --base f7839571... "content/concepts/Achievement goal theory (Dweck, Elliot).md"`: 1 ok. sources_checked for this item: 4 source records (state tool's `sources` command adds its integer argument; +1 then +3). Pushed via API (commits e2062b2a done, a0d8b185 clock-in). Correction (2026-10-20, advisor round-4): the original enumeration said "four works"; the Semantic Scholar and OpenAlex records are one work, not two. sources_checked stands at 4 counted source records for this item.

---

## Action commitment — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15) per `enrich_find.py neighbors`; no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1 work).** Hayes, Luoma, Bond, Masuda and Lillis 2006, "Acceptance and commitment therapy: Model, processes and outcomes," Behaviour Research and Therapy 44(1):1-25, full PDF at https://anxietyinstitute.com/wp-content/uploads/2021/12/Hayes-et-al.-2006.pdf (downloaded; printed page markers verified per PDF page: flexibility definition p. 7, committed-action paragraph pp. 8-9 with the page-9 running header stripped during verification). Blockquote is the full committed-action paragraph, verified verbatim portion-by-portion against PDF pages 8 and 9. Inline fragments verified: "clear the path for a more vital, values consistent life" (p. 8); psychological flexibility definition paraphrased from p. 7.

**Scope notes.** Saturation hunt and cross-link proposals skipped per §1a (no obviously missing reciprocal). In-the-compendium bullets are bare links (principle contexts not read). Related concepts clauses are grounded in the opened source. Seed source line "Hayes et al., 2006" kept; opened-URL line added. Validator: `enrich_validate.py --fast-track`: 1 ok. PubMed abstract (PMID 16300724) seen in search results only; its "broadly supportive, but the literature is not mature" sentence was NOT used (not verified in the PDF's own abstract text).

---

## Action over intention — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (2).** (1) SN 45.8, Magga-vibhanga Sutta, Thanissaro Bhikkhu translation, http://www.dhammatalks.net/accesstoinsight/html/tipitaka/sn/sn45/sn45.008.than.html — blockquote definition of right action and the right-resolve definition quoted verbatim from the opened page. (2) Access to Insight study page "Right Action: samma kammanto," https://www.accesstoinsight.org/ptf/dhamma/sacca/sacca4/samma-kammanto/index.html — the fourth-factor/virtue-division sentence. The .wlth alternate translation URL failed to fetch (client error); the dhammatalks.net mirror of the .than translation opened fine.

**Scope notes.** The page presents the conduct-vs-resolve contrast as grounded in the two definitions side by side; it does not claim the Buddha said action outranks intention. Karma related-concept clause kept navigational. Saturation hunt and cross-link proposals skipped per §1a (no obviously missing reciprocal). The seed's bare psychology-parallel link block under Sources was given the standard "## Cited in psychology parallels" header (all original links preserved, none deleted). Validator --fast-track: 1 ok (re-run after final edit).

---

## Active listening — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (2).** (1) Rogers and Farson, Active Listening (1957), excerpt PDF at https://wholebeinginstitute.com/wp-content/uploads/Rogers_Farson_Active-Listening.pdf (excerpt via Communicating in Business Today 1987; no page numbers in the excerpt — locators given as the excerpt itself). Blockquote and both inline fragments verified verbatim against the opened PDF: "Basically, it requires that we get inside the speaker..."; "You can do this by reflecting in your own words..."; "assume that you never really understand until you can communicate this understanding to the others satisfaction." (2) Weger, Castle Bell, Minei and Robinson 2014 abstract record at https://stars.library.ucf.edu/scopus2010/9657/ (full abstract; experiment with 115 participants and 10 trained confederates; results summarized noncausally per the abstract's wording).

**Scope notes.** The seed body line "paraphrasing and validating predicts satisfaction (Weger et al., 2014)" was replaced: the opened abstract does not mention paraphrasing or validating, and describes an experiment (not a correlational prediction). The 2014 results are stated with the abstract's own qualifiers (small effect sizes; no active-listening advantage over advice on satisfaction/social attractiveness; initial interactions only). Seed source lines kept; Rogers 1961 and Rogers 1951 were NOT opened (kept as seed lines only). Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Activity scheduling (BA) — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK, advisor milestone QC round 5)

**Eligibility.** Graph degree 11 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a. This was the every-5th-item advisor QC milestone.

**Sources opened (2).** (1) Dimidjian, Barrera, Martell, Muñoz and Lewinsohn 2011, Annual Review of Clinical Psychology 7:1-38 — AVAILABLE TEXT EXCERPT via https://docslib.org/doc/11508311/the-origins-and-current-status-of-behavioral-activation-treatments-for-depression (the PDF download link returns HTML; the docslib page text truncates mid-sentence in the strategies passage, so only the verified fragment "self-monitoring of activities and mood, activity scheduling, activity structuring, problem solving" is used). BA definition quoted verbatim as a blockquote. (2) University of Washington training module "Meta-Competency 7-d: Behavioral Activation," https://bhss-wa.psychiatry.uw.edu/wp-content/uploads/2025/08/MC7D-Behavioral-Activation.pdf — the "weekly activity schedule" glossary-entry definition (used as the locator) and the procedure steps, quoted verbatim.

**Milestone QC outcome.** Advisor round FAIL with repairs, all applied: opening rewritten to distinguish the weekly UW protocol from activity scheduling generally, with immediate citations on both sentences; Dimidjian BA definition moved to a blockquote with its source link; "the treatment's developers" characterization removed; "tools for the first of those aims" replaced with the review's own listing sentence; "before becoming depressed" restored to the source's "before experiencing depressive symptoms"; "plans and ratings are reviewed" corrected to plans reviewed (the opened passage does not establish ratings review); the two inherited Related-concept glosses removed as unsupported (links kept, per the seed-preservation rule); "full text" corrected to "available text excerpt" here and in Sources.

**Milestone record corrections.** sources_checked reconciled across items 2-5 (state tool `sources 7` added: 1 + 2 + 2 + 2). The Achievement goal theory entry's "four works" enumeration corrected to three distinct works plus one record (Semantic Scholar and OpenAlex records of the same 1997 paper are one work); the asserted rebase-loss explanation for the missing earlier ledger notes was removed. The advisor noted this review does not certify the three intervening fast-track pages (Action commitment, Action over intention, Active listening); they were worked to the same §1a bar and remain subject to later spot checks. Validator --fast-track: 1 ok.

---

## Acts of kindness (Lyubomirsky) — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 10 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Curry, Rowland, Van Lissa, Zlotowitz, McAlaney and Whitehouse 2018, "Happy to help? A systematic review and meta-analysis of the effects of performing acts of kindness on the well-being of the actor," Journal of Experimental Social Psychology 76:320-329, open-access PDF at https://research-portal.uu.nl/ws/files/247379826/1-s2.0-S0022103117303451-main.pdf (downloaded and read in full). Blockquote is the abstract's result sentences, verified against the PDF text with PDF-extraction ligature/spacing artifacts normalized (ﬀ ect -> effect, "( δ = 0.28)" -> "(δ = 0.28)"); the limits paragraph follows the review's discussion section (under-powered studies, WEIRD samples, motive not manipulated).

**Scope notes.** Lyubomirsky et al. 2005 was NOT opened — kept as a seed source line only; the seed body claim "performing kind acts increases well-being" was rewritten to the meta-analytic finding with its small-to-medium qualifier and the review's own limits. Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Adaptation to life transitions research — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Diener, Lucas and Scollon 2006, "Beyond the hedonic treadmill: Revising the adaptation theory of well-being," American Psychologist 61(4):305-314 — read in full inside the collected-reprints volume "The Science of Well-Being" PDF at https://www.its.caltech.edu/~squartz/Dienerbook.pdf (the SMU repository direct-download link returned HTML; the Caltech book PDF contains the full article). Blockquote is the German-panel life-events passage, verified verbatim against the PDF text (extraction ligature artifacts normalized); locator given as the collected-reprints PDF's own printed pages (pp. 109-110) since the reprint's pagination differs from the journal's. The Brickman et al. reanalysis (0.75 SD) and the five revisions are also from the opened article text. The seed body's "reorganize goals and routines" phrasing was replaced: it is not supported by the opened source.

**Scope notes.** Saturation hunt and cross-link proposals skipped per §1a. A stray front-matter line introduced during writing (duplicate file_path key) was caught and removed before validation. Validator --fast-track: 1 ok.

---

## Anger examined early — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 10 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Seneca, Of Anger (De Ira), Book II, Aubrey Stewart translation (1900), https://en.wikisource.org/wiki/Of_Anger/Book_II — opened twice with targeted extraction prompts; chapter I (anger requires the mind's approval), chapter XXII (the first-causes blockquote), and chapter XXIX (delay as the remedy) all verified verbatim from the opened page. Note: the well-known "first incitement / city gates" passage (from another translation circulating as a PDF) does NOT appear in the Stewart Wikisource text and was not used; only Stewart-verified wording appears on the page.

**Scope notes.** The seed's bare psychology-parallel link block under Sources was given the standard "## Cited in psychology parallels" header (all original links preserved). Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Anchors in focused attention meditation — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK; entry reconstructed)

**Eligibility.** Graph degree 12 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Lutz, Slagter, Dunne and Davidson 2008, "Attention regulation and monitoring in meditation," Trends in Cognitive Sciences 12(4):163-169, full PDF at https://chm-web.files.svdcdn.com/production/files-publications/LutzAttentionTrendsInCognitiveSciences.pdf (downloaded and read). Blockquote is the Box 1 "FA meditation" passage, verified verbatim against the PDF text (extraction ligature artifacts normalized); the FA definition sentence, the Table 1 "e.g. breath sensation" example, and the three-regulative-skills passage are also from the opened text.

**Incident record.** The first close-out attempt FAILED validation (ERR: 4 dashes in prose, max 3). The validator's nonzero exit stopped the `&&` chain, so `enrich_state done` and the ledger append did NOT run — but the second command line (git add -A && commit && push) ran anyway, pushing the page and the start-marker state with a "fast-track done" commit message. The page was repaired (breath-sensation example sentence rephrased), revalidated ok, and pushed; the item is marked done only NOW, after verification that the repaired page validates. An unrestricted `str.replace` during the fix misattributed the dash-failure note to the Active listening and Acts of kindness entries; both were reverted to their original wording. The seed's "stable anchors" phrasing was handled carefully: the source supports stability as what the practice cultivates in attention, not a claim that the breath object itself is stable; the page keeps the object open per the definition. Tang et al. 2015 was NOT opened — kept as a seed source line only. Saturation hunt and cross-link proposals skipped per §1a.

---

## Arousal regulation — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK, advisor milestone QC rounds 10a-10c)

**Eligibility.** Graph degree 10 (< 15); inside owned band w1d. Fast-track per PROTOCOL.md §1a. This was the every-10th-item advisor QC milestone (every 5th since the last).

**Sources opened (2).** (1) Yerkes and Dodson 1908, full text at the York University Classics in the History of Psychology archive, https://psychclassics.yorku.ca/Yerkes/Law/ — fetched twice; the point-2 blockquote re-verified character-for-character (including "The relation of the strength..."); locators are the numbered summary points. (2) Marc V. Jones, "Emotion Regulation and Performance," The Oxford Handbook of Sport and Performance Psychology (2012), https://academic.oup.com/edited-volume/28200/chapter/213158566 — the modern source opened after QC round 10a required sourcing the arousal-regulation concept itself; all four Jones quotes verified verbatim from the opened page.

**QC history (3 rounds).** Round 10a FAIL: arousal-regulation concept itself unsourced (the 1908 paper supports only a stimulation-intensity finding); blockquote missing "the" before "strength"; "tentatively" fragment over-generalized; citations not at claims; PEN Model gloss unsupported; plus bookkeeping (Anchors state verification, ledger misattribution). Round 10b FAIL: remaining historical bridge ("takes its name", "later textbook tradition's") and locator-only citations. Round 10c: final patch applied verbatim (section renamed "A historical experiment"; advisor-supplied results paragraph with per-point links; Limits paragraph replaced; Jones citation on the first definition sentence). Scoped PASS per the advisor's final message.

**Incidents.** ONE dash-limit validation failure on this item (4 dashes in prose, max 3), caught before any state change or push and fixed. (The Anchors dash failure is recorded under its own entry.) The Anchors done-marking cleared this item's in_progress marker; restored via the state tool before closing.

**Scope notes.** The seed body line "postural and environmental interventions for low energy (Yerkes-Dodson)" was replaced — not supported by the opened sources. sources_checked +6 already applied (items 6-10 plus the Jones source); not repeated. Validator --fast-track: 1 ok.

---

## Attachment theory — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 12 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Shaver and Mikulincer 2005, "Attachment theory and research: Resurrection of the psychodynamic approach to personality," Journal of Research in Personality 39:22-45, full PDF at https://adultattachment.faculty.ucdavis.edu/wp-content/uploads/sites/66/2015/09/Shaver_2005_Attachment-theory-and-research.pdf (downloaded and read; 24 pages). Blockquote (the Bowlby 1982/1969 behavioral-system passage) and all inline fragments (core sense of security, two secondary strategies, working-models sentence) verified verbatim against the PDF text with Elsevier extraction artifacts normalized (W->fi ligature, broken spacing).

**Scope notes.** The seed page contained hub-import fragments after "## Cited in philosophy parallels" (bold entries, a "## Field" header, orphan links); all nine seed wikilinks (S039, SP013 twice, SE048, E090, SP086, SE047, D104, PP034, SE029) are preserved in the Cited-in psychology list, with SP013 kept twice to match the seed's occurrences. The seed's non-wikilink fragment prose was replaced by the sourced body. Bowlby's own texts and Mikulincer & Shaver 2007 were NOT opened — kept as seed source lines only. Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Attention Network Test (ANT) — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Fan, McCandliss, Sommer, Raz and Posner 2002, "Testing the Efficiency and Independence of Attentional Networks," Journal of Cognitive Neuroscience 14(3):340-347, full PDF at https://w3.ual.es/personal/tdaza/Fan%20y%20cols.pdf (downloaded and read; 8 pages). Blockquote is the abstract's result sentences, verified verbatim; the task-description passage and the "functionally orthogonal constructs" passage are also from the opened PDF text.

**Scope notes.** The seed body's "distinct developmental trajectories" claim (attributed to Rueda et al. 2004) was dropped: Rueda et al. 2004 was NOT opened and is kept as a seed source line only. The subtraction method is described without naming specific arithmetic beyond what the paper states. Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Attention restoration — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 11 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** Kaplan 1995, "The restorative benefits of nature: Toward an integrative framework," Journal of Environmental Psychology 15(3):169-182, full-text OCR'd scan PDF at https://new.censusatschool.org.nz/wp-content/uploads/2013/09/restorative-benefits-of-nature.pdf (downloaded and read; 14 pages; the Michigan Deep Blue official copy's bitstream link returns HTML — the censusatschool scan is the same paper with printed page headers visible). Abstract (p. 169), the hard/soft fascination passage (p. 172), and the four-components passage (p. 173) quoted with ellipses between the numbered components; OCR hyphenation artifacts normalized and noted in the locator. A typo introduced during writing ("restorable" for "restorative" inside the blockquote) was caught and fixed before validation.

**Scope notes.** Kaplan & Berman 2010 and Ohly et al. 2016 were NOT opened — kept as seed source lines only. The seed's Related-concepts glosses (Sabbath, Peak experiences) and the Facets line are seed-authored and kept as found. Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Attentional bias research — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK)

**Eligibility.** Graph degree 9 (< 15); no unresolved QC findings; inside owned band w1d. Fast-track per PROTOCOL.md §1a.

**Sources opened (1).** MacLeod, Rutherford, Campbell, Ebsworthy and Holker 2002, "Selective attention and emotional vulnerability: Assessing the causal basis of their association through the experimental manipulation of attentional bias," Journal of Abnormal Psychology 111(1):107-123 — PubMed record with full abstract at https://pubmed.ncbi.nlm.nih.gov/11866165/ (opened; blockquote is the abstract verbatim, verified against the fetched page).

**Date correction.** The seed attributes the body claim to "MacLeod et al., 1995"; the study described (bias induction via modified dot probe, stress-task vulnerability) is the 2002 paper. The seed source line "MacLeod et al., 1995" is kept as found; the page cites the 2002 study with its PubMed record.

**Scope notes.** The seed body line "attention determines affect and behavior" was rewritten to the study's own causal finding ("induction of attentional bias should serve to modify emotional vulnerability"), direction-neutral as the abstract states it. An unsourced "mixed record" clause about attention-bias-modification training was removed before validation. Saturation hunt and cross-link proposals skipped per §1a. Validator --fast-track: 1 ok.

---

## Attentional control theory (Eysenck) — completed 2026-10-20 (worker-w1d-4c8e1b3a, FAST-TRACK, advisor milestone QC rounds 15a-15b)

**Eligibility.** Graph degree 13 (< 15); inside owned band w1d. Fast-track per PROTOCOL.md §1a. Every-5th-item advisor QC milestone.

**Sources opened (1).** Eysenck, Derakshan, Santos and Calvo 2007, "Anxiety and cognitive performance: Attentional control theory," Emotion 7(2):336-353, full PDF at https://tu-dresden.de/die_tu_dresden/fakultaeten/fakultaet_mathematik_und_naturwissenschaften/fachrichtung_psychologie/i1/allgpsy/lehre/pruefungsliteratur_KN_2013/Eysenck-2007.pdf (downloaded and read; 18 pages). All quotes verified verbatim against the extracted text; printed-page locators verified by page-by-page extraction: the abstract passages (assumption; efficiency/effectiveness) are on p. 336 (PDF page 0), the two-systems and balance passages on p. 338 (PDF page 2). Eysenck & Derakshan 2011 was NOT opened — kept as a seed source line only.

**QC history (2 rounds).** Round 15a FAIL: predecessor attribution corrected to "Eysenck and Calvo's (1992)"; the central assumption moved into a blockquote with the "abstract, p. 336" locator; the two-systems and balance quotes given their own source links with p. 338 locators; the "more time" gloss removed and replaced with the theory's own compensatory-strategies phrasing, cited to p. 336; the original AT070 wikilink restored beneath "Cited in philosophy parallels" (its seed location); the Miyake related-concept gloss made neutral ("inhibition and shifting as executive functions"). Round 15b: repairs applied; scoped PASS.

**Scope notes.** sources_checked +5 for items 11-15 (one source each; not previously counted). Validator --fast-track: 1 ok after repairs. Manifest check: 70 items in docs/enrichment/bands/w1d-manifest.json; this is the last remaining item, so the band completes with it.
