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
