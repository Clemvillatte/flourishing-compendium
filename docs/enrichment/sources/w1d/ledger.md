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

**Sources opened (4 works).** (1) Dweck 1986, "Motivational Processes Affecting Learning," American Psychologist 41(10):1040-1048, PDF at https://gwern.net/doc/psychology/personality/1986-dweck.pdf (downloaded; printed page markers verified for locators p. 1040, p. 1041). (2) Elliot & Church 1997, JPSP 72(1):218-232, Semantic Scholar record https://www.semanticscholar.org/paper/a4482ae1eeaaaed5df0d72b14e93f484104ddda4 (OCR artifacts in the abstract: "ach.ievement", "performanceavoidance" — paraphrased, never quoted). (3) OpenAlex record for the same 1997 paper, https://api.openalex.org/works/doi:10.1037/0022-3514.72.1.218 (full abstract; the classroom results sentence is grounded here). (4) Elliot 2006, "The Hierarchical Model of Approach-Avoidance Motivation," Motivation and Emotion 30:111-116, PDF https://link.springer.com/content/pdf/10.1007/s11031-006-9028-7.pdf (approach/avoidance definition quoted from p. 111). Record-only (not page support): Cury et al. 2006 OpenAlex record https://api.openalex.org/works/doi:10.1037/0022-3514.90.4.666 (2x2 crossing history only; the page's 2x2 sentence was removed after QC).

**QC history (4 advisor rounds, all repairs applied).** Round 1 FAIL: synthesis overreach, OpenAlex/Cury evidence not integrated, Dweck qualifications stripped, flow/self-handicapping links unverified, proposal direction wrong. Repairs applied. Round 2 FAIL: 2x2 crossing claim without opened page support; causal language ("led to", "predicts") from correlational design; design inference ("associations", "not adopted at random"); bare page numbers without source links; Elliot citation lacking locator; missing OpenAlex link at the results sentence; Hope/Goal-adjustment links beyond evidence. Repairs applied (two silent edit failures caught by re-reading the file). Round 3 FAIL: rhetorical "mastery is good and performance is bad" contrast removed; "Evidence and limits" section replaced with the non-generalization scope sentence; Dweck sentences given direct PDF links with p. 1040/p. 1041; trichotomous paragraph linked to the OpenAlex record; Achievement-motivation-theory proposal clause narrowed. Round 4: seed-wikilink conflict surfaced (advisor had asked to remove six seed links; the validator's E-NL-01 forbids removing seed wikilinks) — resolved per advisor: seed links kept as bare bullets, MO020/MO019 given neutral clauses, all added glosses on the other six removed. Advisor verdict: scoped PASS.

**Validation.** Baseline: true pre-enrichment seed commit f7839571b163a22f873402f696b638384de07311 (the pushed round-1 baseline contained my own additions, which made removals of my own links false-positive ERRs). `enrich_validate.py --base f7839571... "content/concepts/Achievement goal theory (Dweck, Elliot).md"`: 1 ok. sources_checked reconciled to 4 (state tool's `sources` command adds its integer argument; +1 then +3). Pushed via API (commits e2062b2a done, a0d8b185 clock-in). Note: my earlier ledger notes for this item were lost in a push_api.py rebase; this entry recreates them.

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
