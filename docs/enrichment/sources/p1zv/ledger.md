# p1zv source ledger

Band: p1zv (Stoic principles S039–S126, ranks 1172–1201). Worker: worker-p1zv-c139f997.

## S039 — Be a good family member (Principle 161)

**Sources opened and raw-verified:**

1. Marcus Aurelius, Meditations, George Long translation, Project Gutenberg #15877 — https://www.gutenberg.org/cache/epub/15877/pg15877.txt — raw text downloaded to qc/med-long.txt (fetch_url crawler blocked; curl used).
   - Severus fragment: "From my brother Severus, to love my kin, and to love truth, and to love justice" — Book I section 14 in Long's numbering (verified: last section marker before the passage is "14."). The source sentence continues with a semicolon after "justice", so the published quote ends without terminal punctuation. FULL MATCH with the editor's footnote marker ([A]) stripped.
   - Mother full sentence: "From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich." — Book I section 3 in Long's numbering; complete sentence ending in a period in the source. FULL MATCH with the editor's footnote marker ([C]) stripped.
   - In the opened Long translation, the Severus passage is I.14 and the mother passage is I.3; both section markers were checked directly. Locators on the page use these verified section numbers; no cross-edition comparison is claimed.
2. Musonius Rufus, Lecture XIV, "Is marriage a handicap for the pursuit of philosophy?" — Cora Lutz translation.
   - Text verified against two raw downloads: TheStoicLife.org (qc/musonius14.html) and StoicSource (qc/musonius14-stoicsource.html). Both spans FULL MATCH in both.
   - Translator credit verified: StoicSource structured data names "Chapter XIV (Cora E. Lutz translation)"; TheStoicLife parent page (qc/musonius-index.html) credits "Introduction, and Translation by Cora E. Lutz. From Volume X of the Yale Classical Studies, Yale University Press 1947". Cited URL is StoicSource (text and credit on one page).
   - "Again when someone said that marriage ... better philosophers than these." — complete sentence, ends with a period in the source.
   - "marriage, if anything, is manifestly in accord with nature" — inline fragment, FULL MATCH.

**QC round 1 (advisor FAIL, repairs applied):**
- Removed invented chronology ("A century later") and "student" attribution (source says "someone"); replaced with "Musonius discusses whether marriage interferes with philosophy:".
- Severus quote ends without invented terminal punctuation (fragment continues in source); mother quote extended to the full verified sentence.
- "The debt runs in both directions" (unsupported reciprocity claim) replaced with "Marcus also names what he learned from his mother:".
- Removed guaranteed outcome ("duties stop reading as interruptions"), superlatives ("first classroom ... hardest one"), and "cannot swap for easier ones"; body closing replaced with advisor's sentence; Plain words replaced with advisor's re-derivation.
- Translator credit established from opened pages before naming Lutz.
- Citation locator line replaced with verified locators only: "(Med. Book I, George Long translation; Musonius Rufus, Lecture XIV, Cora Lutz translation.)" — protocol protects the locator style, not the inherited unchecked references (Epictetus Disc. II.10/III.7, Seneca Letters) which were dropped since the body no longer claims them.
- "For example:" de-italicised per advisor.
- Oikeiosis proposal why-clause narrowed to "listed for comparison with concern for family members".
- Process notes moved from the page's Sources section to this ledger.

**Validator:** ok on both versions (first run FAILED: the mother quote as an inline fragment triggered the "not only ... but" staging-pattern check; standalone blockquotes are exempt).

**Proposals:** 1 reciprocal — Oikeiosis (page read; does not cite S039).

**Verification note:** all quoted spans verified against raw files in qc/ (med-long.txt, musonius14.html, musonius14-stoicsource.html, musonius-index.html) with whitespace-normalized matching; footnote-marker stripping disclosed.

## S043 — Be patient with difficult people (Principle 165)

**Source opened and raw-verified:**
1. Marcus Aurelius, Meditations, Book II, section 1, George Long translation, Project Gutenberg #15877 — https://www.gutenberg.org/cache/epub/15877/pg15877.txt (raw text already in qc/med-long.txt).
   - "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil." — FULL MATCH (complete sentences, no footnote markers).
   - "For we are made for co-operation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another, then, is contrary to nature; and it is acting against one another to be vexed and to turn away." — FULL MATCH with the editor's footnote marker ([A] after "teeth.") stripped, per the disclosed convention.

**Validator:** ok on first run.

**Saturation:** mention search "difficult people" — Emotion regulation, Gentleness (praotes) and Non-contention concept pages already cite S043; no reciprocal needed for them. Premeditatio malorum and The rehearsal of virtue (both read) do not cite S043.

**Proposals:** 2 reciprocals — Premeditatio malorum, The rehearsal of virtue.

**QC:** advisor round 2 for S039 directed "continue to S043 without another research round"; milestone QC due at S072 (every 5th item: S039, then S043+S049+S052+S054+S058 → milestone at S058? Count: first-item QC at S039, then every 5th item: S043, S049, S052, S054, S058 — next advisor milestone after S058).

## S049 — Replace first movements with considered responses (Principle 171)

**Source opened and raw-verified:**
1. Seneca, On Anger (De Ira), Book II, Aubrey Stewart translation (1900), Project Gutenberg #64576 — https://www.gutenberg.org/files/64576/64576-0.txt — raw text downloaded to qc/seneca-minor-dialogs.txt.
   - "all the motions which take place without our volition ... no reasoning can prevent their taking place." (II.2) — FULL MATCH. Note: the source uses curly apostrophes ("Men’s"); the quoted span on the page reproduces them verbatim.
   - "Anger is that which goes beyond reason ... proceeds from choice and deliberate resolve." (II.3) — FULL MATCH (curly apostrophe in "man’s").
   - "The greatest remedy for anger is delay" (II.29, inline fragment) — FULL MATCH.
   - Section numbers are Stewart's own Book II section markers (II, III, XXIX), checked directly in the raw text.

**Validator:** first run FAILED ("original wikilink markup changed or removed") — I had shortened the parallel aliases; restored the original wikilink markup exactly and dropped only the claim-bearing clause ("the gap between stimulus and response as the site of regulation"). Second run ok.

**Saturation:** mention "first movement" — S061 and S129 are principles (S061 is in this band); concept pages The discipline of assent, Urge surfing, Emotion regulation do not cite S049.

**Proposals:** 1 reciprocal — The discipline of assent.

## S052 — Practise the view from above (Principle 174)

**Source opened and raw-verified:**
1. Marcus Aurelius, Meditations, George Long translation, Project Gutenberg #15877 (raw text already in qc/med-long.txt).
   - "Look down from above on the countless herds of men ... nor reputation, nor anything else." — Long's Book VII, section 30. FULL MATCH, complete sentences.
   - "Thou art a little soul bearing about a corpse, as Epictetus used to say" — Long's Book XII, section 41. FULL MATCH as a fragment; the source continues with Long's editorial citation "(i. c. 19)" which is omitted from the quote, and the quote ends without terminal punctuation for that reason.
   - Seed's standard-edition locators (Med. IV.1, VII.48, IX.30, XII.24) replaced with the verified Long locators; translator named in each locator.

**Validator:** ok. (Seed had two philosophy parallels jammed on one line; split into two lines, wikilink markup unchanged.)

**Saturation:** mention "view from above" — the concept page The view from above already cites S052. Self-distancing and Awe concept pages do not.

**Proposals:** 2 reciprocals — Self-distancing, Awe.

## S054 — Distinguish between facts and interpretations (Principle 176)

**Source opened and raw-verified:**
1. Epictetus, Encheiridion, chapter 5, George Long translation, Project Gutenberg #10661 — https://www.gutenberg.org/cache/epub/10661/pg10661.txt — raw text downloaded to qc/epictetus-long.txt.
   - "Men are disturbed not by the things which happen ... is the terrible thing." (Ench. V) — FULL MATCH. The chapter continues with an em dash ("but ourselves—that is, our opinions"), so the quote ends at the complete sentence before it. The quote's "not by ... but by" structure sits inside a standalone blockquote, which the validator exempts (S039 precedent).

**Validator:** ok on first run.

**Saturation:** Cognitive defusion and Mindfulness concept pages do not cite S054; Cognitive defusion is the strong analogue (mindfulness link is broader).

**Proposals:** 1 reciprocal — Cognitive defusion.

**QC:** this is the 5th item of the band; milestone advisor QC follows this item (covers S043, S049, S052, S054).

## Milestone QC (advisor, after 5th item) — repairs applied to S043, S049, S052, S054, S039 ledger

- S043: Plain words and For example replaced with advisor's versions (no "removes the surprise" outcome claim, no fixed-label rehearsal); opening sentence de-overclaimed.
- S049: II.3 definition quote replaced with II.4 stages passage (raw-verified; contains a printed page marker "{80}" after "injured," which is stripped per the disclosed convention; inner curly double quotes reproduced verbatim); "second movement" removed as my own label (in Seneca's stages the second is a wish for revenge, not the considered response); "or any other vice" removed; closing replaced with advisor's source-grounded sentence; Plain words and example now demonstrate reconsideration (draft checked, accusations verified) rather than a delay that guarantees nothing.
- S052: book locators corrected after direct heading check in the raw text — "Look down from above" is Book IX section 30 (my earlier "VII.30" came from assuming standard numbering; the raw-text book positions prove IX); "Thou art a little soul" is Book IV section 41. Corpse quote removed per advisor (unnecessary for the principle; its framing unsupported). Empirical clause after the Self-distancing wikilink dropped, markup kept. Outcome assertions ("gives proportion rather than comfort", "loses the whole screen") replaced with the advisor's purpose sentence; Plain words closing softened to the exercise description. Awe proposal narrowed, no empirical claim.
- S054: "states the whole doctrine" replaced; "largest case" removed; "every event arrives with an opinion" softened to "what often arrives as one thing"; Plain words replaced with advisor's missed-call re-derivation; For example labelled imagined; SATURATE mention search run ("interpretation": no new concept candidates; Mindfulness page does not cite S054 but is too broad to propose).
- S039 ledger: false numbering-discrepancy sentence deleted (advisor's round-2 instruction was replacement, not append).
- Shell bug fixed: earlier concept-citation checks used single-quoted paths so the loop variable did not expand; all checks redone with correct quoting. Result: The discipline of assent, Urge surfing, Emotion regulation, Self-distancing and Cognitive defusion concept pages ALREADY cite their respective principles; the three duplicate proposals (S049/The discipline of assent, S052/Self-distancing, S054/Cognitive defusion) were withdrawn from proposals/p1zv.json (now revision 6, 4 records: Oikeiosis, Premeditatio malorum, The rehearsal of virtue, Awe). Earlier ledger absence claims corrected.
- All four pages re-validated ok; states reopened and re-done.
