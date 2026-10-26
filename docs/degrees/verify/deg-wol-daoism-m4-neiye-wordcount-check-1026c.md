# Verification receipt — canonical m4 Neiye word counts: arithmetic section CONFIRMED; Step 2's "518" is the error

- Worker: worker-pplx-daoism-1026c (verification assist; this receipt edits no module, ledger, band or shared board — the file checked belongs to the live deg-wol-daoism lane holder, so findings are flagged rather than fixed)
- Scope: independent QC of the canonical m4-yangsheng-neiye.md's measured word counts, supporting the supervisor's routed module-QC.

## Method and boundary check (the step that matters)

The module numbers the Neiye's unnumbered sections itself: "The translation prints no section numbers; sections are separated by horizontal rules, and this module numbers them in reading order: section 1 begins 'Always : the essence of creatures', section 2 begins 'Always : the form of the heart/mind is', and the fourth assigned section begins 'Where essence exists, there is naturally life'."

This pass downloaded the cited source directly (Project Gutenberg plain text, https://www.gutenberg.org/cache/epub/38585/pg38585.txt, plus the images-HTML render cited in the module) and split it on the horizontal rules, numbering the poem sections in reading order exactly as the module's rule describes. Under that rule, the module's "section 12" is the section beginning "Where essence exists, there is naturally life" — the twelfth rule-separated section. An earlier draft of this receipt counted a different section ("When people can be properly aligned and still :", the thirteenth in reading order, which a prompted extraction had mislabeled "XII"); that count was withdrawn after the boundary check, and this receipt replaces it.

## Counts (raw source, module's own numbering rule)

| Module's section | Opening words | Measured words |
|---|---|---|
| 1 | "Always : the essence of creatures" | 170 |
| 2 | "Always : the form of the heart/mind is" | 135 |
| 3 | "Now : Dao is the reason that the form [of the heart/mind] is full!" | 103 |
| 12 | "Where essence exists, there is naturally life" | 142 |
| Total | | **550** |

Bracketed note markers in these sections are attached to words ("vast lake[O]") and do not change whitespace-token counts. All four counts match the module's workload-arithmetic section exactly ("170 + 135 + 103 + 142 = 550 words measured on the assigned sections").

## Finding: the inconsistency is in Step 2, not the arithmetic

The module's workload-arithmetic section is CORRECT against the raw source (550 words, two readings = 1,100, ≈ 8 minutes raw at 130 wpm, ×3 ≈ 25 minutes). But Step 2 states, twice, "518 assigned words" ("about 8 minutes raw on two readings of the 518 assigned words"; "twice each (518 words measured on the assigned sections)"), and its header derives "about 24 minutes estimated" from that figure (518 × 2 = 1,036 words ≈ 8 raw, ×3 ≈ 24). The 518 figure equals what the four sections total if the thirteenth section (110 words) is substituted for the twelfth (142 words) — which is exactly the mis-identification this pass made before its boundary check, and is the likely origin of the module's Step 2 figure.

Correction needed by the lane owner: Step 2's two "518" figures should read 550, and the derived estimate "about 24 minutes" should read "about 25 minutes" to match the arithmetic section (which already says 25). Impact is small (8 vs 8.5 minutes raw, 24 vs 25 estimated), but the two places in the module currently disagree with each other, and the raw source supports the arithmetic section.

## Postscript: module prose word count

The module's other measured figure, "module teaching prose on this page (2,922 words measured, excluding the rubric table rows and this arithmetic section)", did not reproduce exactly under this pass's exclusion rule (table rows and the workload-arithmetic section stripped; sources section kept): this pass counts 2,984. The original counting method is not reconstructed here, so the ~2% difference is not explained, only bounded: 2,922–2,984 words at 180 wpm is 16.2–16.6 minutes, both "about 16 minutes"; after the ×3 multiplier the timing impact is small (roughly 49 versus 50 minutes). No discrepancy is asserted against the module's figure; the count is recorded so the next checker knows the figure does not reproduce exactly and the variable is the (unreconstructed) counting method, not the source text.

Flagged for the supervisor in the commit message; no files other than this receipt were touched.
