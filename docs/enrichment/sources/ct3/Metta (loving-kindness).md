# Metta (loving-kindness) — ct3 rebuild (2026-10-23, worker-pplx-ct3-1023a)

Full rebuild of a never-pipelined legacy page per the owner's ct2/ct3 directive.

## What was done

- Body rebuilt on the current Concept framework: opening definition + verbatim blockquotes with hyperlinked carriers, `###` subheadings, In-the-compendium bullet list, Related concepts with how-clauses, hyperlinked Sources.
- Broken legacy structure repaired: duplicated "Cited in philosophy parallels" sections (one rendered as a broken `- - - - -` line), stray evidence fragment ("reduces anger and increases positive affect (Fredrickson et al., 2008)"), an empty Related-kernels section, and floating citation fragments — all folded into clean sections. Every original wikilink preserved (link-set diff verified against HEAD; one alias restored exactly: `[[Right speech|the affective basis of right speech]]`).

## Quote verification (all carriers opened this session)

1. Karaṇīya Metta Sutta passage — the original page quoted "Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings", which does NOT match Thanissaro's translation. Replaced with the verbatim Thanissaro wording ("As a mother would risk her life to protect her child...") from the opened AccessToInsight carrier (Sn 1.08, snp.1.08.than.html). The conduct-prelude fragments ("capable, upright, & straightforward"; "the wise would later censure") also verbatim from the same opened page.
2. "Metta is a wish for happiness — true happiness — and the Buddha says to develop this wish for ourselves and everyone else." — verbatim from the opened Thanissaro essay "Metta Means Goodwill" (AccessToInsight).
3. Nyanaponika training-sequence passage — verbatim from the opened "The Four Sublime States" (BPS Wheel 6, AccessToInsight); ellipsis marked where the carrier's emphasis italics were dropped; "break[s] down the barriers" bracket repair disclosed by the brackets; the sima-sambheda sentence checked against the same page.
4. Fredrickson et al. 2008 abstract sentence — verbatim from the opened PubMed record (PMID 18954193). The legacy stray line claimed the study showed metta "reduces anger and increases positive affect"; the abstract supports positive-emotion increases and reduced depressive symptoms, NOT anger reduction, so the claim was rewritten to the carrier's own wording with an honest scope note (the study does not test metta as an antidote to ill will; the sequence comes from the commentarial tradition).

## Notes

- The self-link `[[Metta (loving-kindness)]]` in Related concepts is an original link (preserved per the link rule) but points to this page; flagged for a future maintenance sweep of legacy self-links.
- "Hofmann et al., 2011" and "Santideva, Bodhicaryavatara" kept as original citation lines without URLs (no body claim rests on them; not opened this session).
- Validator: ok (prose within 150-480, dash budget respected, no banned phrases, Sources carry URLs).

## QC round 1 (advisor-directed repairs, applied and pushed)

- All four retained carriers re-fetched as RAW text (no extraction prompts) and every quotation re-compared word-for-word: all now exact, including punctuation.
- Thanissaro essay quote extended to the complete sentence (the colon continuation "With metta for the entire cosmos, cultivate a limitless heart.' (Snp 1.8)" restored; the earlier version had substituted a period for the continuation).
- Nyanaponika quote now opens with the carrier's own lead-in "For instance, when meditating on loving-kindness, one starts..." (mid-sentence lowercase preserved; no editorial capital).
- Fredrickson quote extended to the complete sentence ("Results showed that this meditation practice...").
- The bracketed "break[s] down" repair removed: the barriers sentence recast so the carrier's unchanged phrase "break down the barriers" (sima-sambheda) fits verbatim.
- Unsupported interpretation deleted: "the mind's home when ill will is gone" (replaced with the sutta-grounded reading), "teachers insist" narrowed to Thanissaro (who translates the sutta's title as "Good Will"), the "felt rather than willed / small enough to be honest" closer deleted, the "self-reported / antidote to ill will" inferences replaced with the abstract-anchored scope note, and the Broaden-and-build gloss corrected (the experiment tested the theory's build hypothesis, not metta "against" the theory).
- Related glosses grounded: Care aligned to its page's own definition; Equanimity gloss replaced with Nyanaponika's "guiding and restraining power for the other three"; Ahimsa and Self-compassion added (both already link Metta).
- Saturation: reciprocal proposals minted in docs/enrichment/proposals/ct3.json (Broaden-and-build, Compassion).
- Validator vs pre-rebuild baseline (45cd1320^): ok.
