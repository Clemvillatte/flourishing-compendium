# p1m milestone advisor QC 02: P123, P130, P147, P184, B010

Reviewer: independent advisor (read-only). Date: 2026-10-20 Sydney. Repo HEAD reviewed: 29d58110. I made no repo edits, commits, state changes or batons.

## Method

- Diffed each page against the pre-enrichment baseline `c2a3ee47`. Ran `scripts/enrich_validate.py --base c2a3ee47` on all five: 5 checked, 0 failed. The only warnings are the standard principle ones (no Sources URL, no Related concepts).
- Prose words (`enrich_stats.prose_words`): P123 239, P130 245, P147 259, P184 238, B010 242. All are within 40-300.
- Protected sections, checked by script against the baseline: front matter, the `> **Principle N**` statement, the multiset of `[[wikilinks]]` and the reflections block (after rstrip) are all identical for all five. The only diff in those areas is the trailing newline after `-->`.
- Plain words:
  - None of the five shares a 5-gram with the rest of its own page (all show 0 overlap). They were on the replicates list at 64/38/52/51/33%; that is now cleared.
  - Cross-page check over all principles (6-grams): none matches, except one stock phrase that P130 shares with P111, "The compendium's practical suggestion is to". This is not a clone, but a later pass could vary the wording.
- Sources: I opened every one myself and did not use LLM-extracted locators.
  - CCEL VRE Lecture VIII and Lecture XX pages: raw HTML, with the `LECTURE XX / CONCLUSIONS` heading confirmed.
  - Gutenberg *A Pluralistic Universe* raw HTML. I set lecture boundaries from the body headings.
  - Garfield MMK XXIV PDF and Barad 2003 PDF: run through `pdftotext -layout`, using the printed running-head page numbers.
  - OUP Addams excerpt: raw HTML.
  - Huta & Ryan PDF.
  - Abstracts: PubMed (Tellegen 1988, Pettigrew & Tropp 2006), T&F (Tedeschi & Calhoun 2004), Wiley (Kristof-Brown 2005), SAGE (Butler 2011), PMC full text (Kashdan & Rottenberg 2010).

## Verdicts

| Item | Verdict |
|---|---|
| P184 | PASS |
| P147 | PASS |
| B010 | PASS on the body. FIX on the ledger (1 sentence) |
| P123 | PASS (ledger hygiene only) |
| P130 | FIX (minor: restore the dropped Allport attribution). Optional precision |

## P184: PASS (priority item)

- **Lecture VIII** ([CCEL varieties.ix](https://ccel.org/ccel/james/varieties.ix.html)) supports the body as written:
  - The once-born world is "a sort of rectilinear or one-storied affair", while the twice-born world is "a double-storied mystery".
  - "In their extreme forms ... the radical extremes are somewhat ideal abstractions, and the concrete human beings whom we oftenest meet are intermediate varieties and mixtures."
  - So "calls the extremes once-born and twice-born, while describing actual people as intermediate varieties and mixtures" is accurate, and the VIII locator is correct.
- **Quote** ([CCEL varieties.xvii](https://ccel.org/ccel/james/varieties/varieties.xvii.html)): "No two of us have identical difficulties, nor should we be expected to work out identical solutions." It is exact, and it sits in the main text of Lecture XX, Conclusions. The page heading reads `LECTURE XX / CONCLUSIONS`.
- **Note 324** (same page) supports the body's "wider and more complete" judgment and its "allowing each temperament its route":
  - "It is indeed true that the outlook upon life of the twice-born—holding as it does more of the element of evil in solution—is the wider and completer."
  - "But the final consciousness which each type reaches of union with the divine has the same practical significance for the individual; and individuals may well be allowed to get to it by the channels which lie most open to their several temperaments."
  - The note also says classification is "a matter of amount and degree", which matches the ledger.
  - The body paraphrases without quotation marks ("wider and more complete"), so it does not need to match word-for-word. That is acceptable.
- **The inherited misstatement is fixed.** The old body said "James is explicit that ... neither route is superior". It is gone. The body now explicitly separates James's comparative judgment from the compendium's practical stance.
  - The Practice line "neither is superior" is protected and retained, and the ledger records that it is compendium guidance.
  - Note 324's "same practical significance" makes the retained Practice line defensible as a statement about routes to peace, not about outlooks.
- **Optional wording**: the body calls the compendium stance a "refusal to rank people's worth by their suffering", while Practice speaks of *routes*. If you want the two to align exactly, write "refusal to rank people or their routes by suffering". This is not required.
- **Psychology bullets**:
  - Tellegen et al. 1988 abstract: MPQ, a four-group twin design, heritabilities .39-.58. "Estimated genetic contributions to personality differences" is accurate, and no positive-affect figure is claimed.
  - Tedeschi & Calhoun 2004 abstract: "We propose a model" and "an ongoing process, not a static outcome". "Propose an account" is accurate. No overclaim in either bullet.
- The ledger is accurate. Its supervisor flag on the reflections is appropriate.

## P147: PASS (priority item)

- **Printed page markers** in the Signs PDF (`S I G N S  Spring 2003 ❙ 8NN` on odd pages, `8NN ❙ Barad` on even pages): p. 814 starts at layout line 619, p. 815 at 666, p. 816 at 715, p. 817 at 763 and p. 818 at 809.
- **Quote**: "Boundaries do not sit still." It is exact (5 words) and sits on **p. 817**, closing the first paragraph ("... the production of new phenomena, and so on. Boundaries do not sit still."). The p. 817 locator is correct.
- **pp. 814-817 for intra-action**:
  - p. 814: the causal relationship "is one of 'agential intra-action.'"
  - p. 815: "It is through specific agential intra-actions that the boundaries and properties of the 'components' of phenomena become determinate"; "relata do not preexist relations".
  - p. 816: implications "beyond those specific to understanding the nature of scientific practices", and "practices through which different distinctions get drawn".
  - p. 817: boundaries "are constituted" through intra-actions.
  - The first-paragraph paraphrase and the pp. 815-817 sentence are both supported. "Developed through her reading of scientific practices" is fair (Bohr and the laboratory apparatus, pp. 814-816).
- **Philosophy vs application**: the body labels Barad's view as a philosophical account and the meeting question as a more modest compendium question. The example explicitly disclaims causal proof.
- **Psychology bullets**:
  - Kristof-Brown et al. 2005: four fit types, outcomes including attitudes, performance, withdrawal, strain and tenure. Butler 2011: TIES, emotion components interact "within the individual but across the partners as well".
  - Both bullets match the abstracts and disclaim equivalence.
- Ledger: accurate, including its statement that *Meeting the Universe Halfway* was not opened. That book survives only as the protected Intra-action parallel.

## B010: PASS on the body. Ledger FIX

- **Root verse** (Garfield, *Fundamental Wisdom of the Middle Way*, ch. XXIV PDF): the running head `304  THE TEXT AND COMMENTARY` precedes verses 18-19. The quote "Whatever is dependently co-arisen / That is explained to be emptiness. / That, being a dependent designation, / Is itself the middle way." is exact, with the slashes standing in for the four line breaks. The p. 304 locator is correct.
  - It is attributed to Nāgārjuna in Garfield's translation. The root verse is kept separate from the commentary, and nothing claims the whole root book.
- **XXIV.18-19, pp. 304-308**:
  - p. 304 rejects the reading that "only emptiness exists".
  - p. 305: "Emptiness and the phenomenal world are not two distinct things"; identity "depends upon verbal conventions".
  - pp. 306-307: "conventionally existent, but empty".
  - p. 308: arising, ceasing and suffering "are possible only if they are empty".
  - This supports "this allows ordinary existence and functioning; emptiness does not mean that nothing exists".
- **XXIV.20-25, pp. 308-310**: verses 20-21 are on p. 308, verses 22-25 on p. 309, and the path commentary continues onto p. 310. Correct.
- **Optional**: the gloss "entirely from their own side" echoes Garfield's p. 298 ("the nature they have from their own side"), not pp. 304-308. Either add p. 298 to the first locator (`pp. 298, 304-308`) or leave it as an unquoted paraphrase. Not required.
- **Psychology bullet**: the Kashdan & Rottenberg 2010 PMC abstract and introduction say psychological flexibility "spans a wide range of human abilities to: recognize and adapt to various situational demands; shift mindsets ...". The bullet is accurate and disclaims identity with emptiness.
- The application is framed as a compendium inquiry. The example disclaims proof and guaranteed change.
- **Ledger FIX** (`docs/enrichment/sources/p1m/B010.md`, "Library and scope"):
  - The ledger says "Heart Sutra, MMK XV, Laozi XI and Garfield's Engaging Buddhism were not opened; retained inherited bibliographic parallels". But the Heart Sutra is **not retained**. The inherited body pointer `(Nagarjuna, MMK; Heart Sutra.)` was removed, and `rg -i "heart sutra"` finds nothing in the page.
  - Change the sentence to: "MMK XV, Laozi XI and Garfield's Engaging Buddhism were not opened and remain as inherited parallels. The inherited body pointer to the Heart Sutra was removed, because it was not opened and the body now cites only the MMK XXIV chapter actually read."
  - Alternative: restore a Heart Sutra pointer as an uncertified parallel. Do not do both.

## P123: PASS (ledger hygiene)

- **Quote** (Gutenberg #11984, raw HTML): "Things are 'with' one another in many ways, but nothing includes everything, or dominates over everything." It is exact, and it falls inside Lecture VIII, Conclusions (VIII body text starts at offset 312517; the quote is at 332573, before the Notes).
- **"Leaves open the rival possibility of a closed whole" (VIII)** is supported:
  - "it is a fully co-ordinate hypothesis with monism. This world may, in the last resort, be a block-universe; but on the other hand it may be a universe only strung-along, not rounded in and closed. ... On that possibility I do insist."
- **Lecture I** supports "without requiring everything to be gathered into a single experience". The pluralistic view "is willing to believe that there may ultimately never be an all-form at all, that the substance of reality may never get totally collected"; "the contrast between these two forms ... is practically the topic of this course".
  - The explicit "defence of the pluralistic against the monistic view" sentence is at the start of Lecture II, recalling Lecture I. "I and VIII" is acceptable.
- **Psychology bullet**: the Huta & Ryan abstract (four studies, "both overlapping and distinct niches") matches the bullet's "distinct and overlapping well-being associations, including different patterns for pleasure and meaning". The old claim that the two "contribute separately" was correctly dropped.
- **Ledger hygiene** (optional but recommended): the ledger says the James text was "fetched with focused extraction". Add: "Quote, Lecture VIII co-ordinate-hypothesis passage and Lecture I all-form/each-form passage rechecked against raw Gutenberg text by milestone advisor QC 02."

## P130: FIX (minor) plus optional precision

- **Quote** (OUP excerpt, raw HTML): "They must be content to live quietly side by side with their neighbors, until they grow into a sense of relationship and mutual interests." It is exact.
- Supported:
  - "scientific patience in the accumulation of facts and the steady holding of their sympathies"
  - "see the needs of their neighborhood as a whole, to furnish data for legislation"
  - "emptied of all conceit of opinion" (residents), which is a fair basis for "willingness to revise their views"
- **Pettigrew & Tropp 2006 abstract**: 713 samples from 515 studies; contact "typically reduces intergroup prejudice". Allport's optimal conditions lead to "even greater reduction" and are "an interrelated bundle". The bullet is accurate.
- **FIX**:
  - The baseline parallel cited "(Allport, 1954; Pettigrew and Tropp, 2006)". The rewrite silently dropped Allport, and the ledger only says Allport was "not separately opened". The opened abstract names Allport's conditions, so you can restore the attribution without a new source.
  - Replace "with larger reductions under a supportive bundle of conditions" with "with larger reductions under Allport's optimal contact conditions, which work as an interrelated bundle".
  - Then add one line to the ledger: "Allport attribution restored via the conditions named in the Pettigrew and Tropp abstract; Allport 1954 not opened."
- **Optional precision**:
  - Addams does not use the word "listening". The body sentence "Listening belongs to a continuing civic responsibility, rather than ending with an outsider's impression of a visit" is a compendium gloss placed before an Addams citation.
  - Suggested rewrite: "Residents are also to 'interpret the public opinion of their neighborhood' and treat this as part of good citizenship; the compendium reads this as continuing responsibility rather than an outsider's impression from a visit." The quoted fragment is exact.
- Ledger: otherwise accurate, including the K221 supervisor flag.

## Summary of actionable fixes

1. **B010 ledger**: correct the "retained inherited bibliographic parallels" sentence. The Heart Sutra pointer was removed, not retained. Wording is given above.
2. **P130 body plus ledger**: restore Allport in the intergroup-contact bullet ("under Allport's optimal contact conditions, which work as an interrelated bundle") and note this in the ledger.
3. **Optional**:
   - P123: ledger recheck note.
   - P130: relabel the "Listening" sentence as a compendium reading.
   - B010: add p. 298 for the "own side" gloss.
   - P184: align "worth" with Practice's "routes".
   - P130: vary the stock phrase it shares with P111.

P184 and P147, the priority items, pass with exact quotes and correct printed-page locators.
