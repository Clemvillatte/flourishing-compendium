# Verification receipt: canonical m4 Neiye word counts: current assignment and 550-word total confirmed; earlier miscount retracted

- Worker: worker-pplx-daoism-1026c (verification assist; this receipt edits no module, ledger, band or shared board; the file checked belongs to the live deg-wol-daoism lane holder, so findings are flagged rather than fixed)
- Scope: independent QC of the canonical m4-yangsheng-neiye.md's measured word counts, supporting the supervisor's routed module-QC.

## Method and boundary check (the step that matters)

The module numbers the Neiye's unnumbered sections itself: "The translation prints no section numbers; sections are separated by horizontal rules, and this module numbers them in reading order: section 1 begins 'Always : the essence of creatures', section 2 begins 'Always : the form of the heart/mind is', and the fourth assigned section begins 'Where essence exists, there is naturally life'."

This pass downloaded the cited source directly (Project Gutenberg plain text, https://www.gutenberg.org/cache/epub/38585/pg38585.txt, plus the images-HTML render cited in the module) and split it on the horizontal rules, numbering the poem sections in reading order exactly as the module's rule describes. Under that rule, the module's "section 12" is the section beginning "Where essence exists, there is naturally life", which is the twelfth rule-separated section. An earlier draft of this receipt counted a different section ("When people can be properly aligned and still :", the thirteenth in reading order, which a prompted extraction had mislabeled "XII"); that count was withdrawn after the boundary check, and this receipt replaces it.

## Counts (raw source, module's own numbering rule)

| Module's section | Opening words | Measured words |
|---|---|---|
| 1 | "Always : the essence of creatures" | 170 |
| 2 | "Always : the form of the heart/mind is" | 135 |
| 3 | "Now : Dao is the reason that the form [of the heart/mind] is full!" | 103 |
| 12 | "Where essence exists, there is naturally life" | 142 |
| Total | | **550** |

Bracketed note markers in these sections are attached to words ("vast lake[O]") and do not change whitespace-token counts. All four counts match the module's workload-arithmetic section exactly ("170 + 135 + 103 + 142 = 550 words measured on the assigned sections").

## Finding: superseded by a live revision; the module is currently correct and no repair is needed

An earlier draft of this receipt (and the commit message pushing it) stated that section 12 measured 110 words and that the module's 142/550 figures were wrong. That was this worker's error (a mis-identified section, as documented above), and it briefly propagated: the lane owner consumed the flag at 06:17:43Z (commit cad1d8387, "Neiye section-12 word count corrected per QC flag (110 not 142; 518 total...)") and then retracted it themselves at 06:23:20Z (commit 5afb2be35, "RETRACTION: Neiye correction (cad1d8387) was based on a mislabeled block (block 13, not the assigned block 12 'Where essence exists'); original 550/142/25-min/3h20 figures restored, corroborated by deg-verify-a and re-measured"). The current module state (checked after rebase onto origin/main): Step 2 reads "550 assigned words" in both places, the arithmetic section reads 550, and the "Passage versus application, on section 12" worked example quotes the "Where essence exists..." passage, fully consistent with the numbering rule and the raw-source count. No repair is needed by the lane owner; the miscount and its downstream edit are both resolved.

The earlier draft's speculation about the "likely origin of the module's Step 2 figure" is withdrawn: matching arithmetic does not establish how a figure was arrived at, and in this case the 518 figure originated from this worker's own erroneous flag, not from the module's author.

## Postscript: module prose word count

The module's other measured figure, "module teaching prose on this page (2,922 words measured, excluding the rubric table rows and this arithmetic section)", was not reproduced by this pass: counting with table rows and the workload-arithmetic section stripped (sources section kept) gives 2,984. After this pass's postscript was pushed, the lane owner re-measured the figure per the module's own stated method and updated it to 2,937 (commit 042ecce94, "prose count re-measured per the module's own stated method (2,937, was 2,922; minutes unchanged)"). This pass's 2,984 still differs from both figures; the cause is unresolved and no method is asserted to explain it. The timing impact is small either way, roughly one minute after the ×3 multiplier, and the module's minutes are unchanged by the owner's re-measurement. Note on counting method: this pass's whitespace-token counts include inline translator additions (e.g. "[to their original nature]") as ordinary words; attached footnote labels such as "lake[O]" do not add separate tokens. The Neiye section counts above are on that basis.

Flagged for the supervisor in the commit message; no files other than this receipt were touched.
