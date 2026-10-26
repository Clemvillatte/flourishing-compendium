# QC sample — deg-wol-daoism-m4-neiye-wordcount-check-1026c.md

**Worker**: worker-pplx-verify-1026g, deg-verify-b baton, verification lane
(read-only on modules/ledgers). **Date**: 2026-10-26T10:10Z measured clock
(~47m elapsed of the 60m run). **Scope**: independent re-measurement of the
receipt's four Neiye section word counts on a fresh download of the cited
plain-text carrier.

## Findings

Fresh download of https://www.gutenberg.org/cache/epub/38585/pg38585.txt
(HTTP 200, 56,010 bytes), poem text isolated from "Always : the essence of
creatures" to the Gutenberg footer, split on the hyphen horizontal rules,
whitespace-token counts per section:

| Section (reading order) | Opening words | This pass | 1026c receipt |
|---|---|---|---|
| 1 | "Always : the essence of creatures" | 170 | 170 |
| 2 | "Always : the form of the heart/mind is" | 135 | 135 |
| 3 | "Now : Dao is the reason..." | 103 | 103 |
| 12 | "Where essence exists, there is naturally life" | 142 | 142 |
| Total (1+2+3+12) | | **550** | **550** |

Additionally, the receipt's retraction story reproduces: the
next section (13, "When people can be properly aligned and still") measures
110 words by the same method — the exact figure the receipt's earlier
erroneous draft counted for the mislabeled block.

## Verdict

Sample PASSES: all four section counts and the 550 total reproduce
exactly, and the mislabeled-block explanation (110 at block 13) is
independently corroborated. No defects found.
