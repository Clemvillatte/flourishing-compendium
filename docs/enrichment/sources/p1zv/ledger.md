# p1zv source ledger

Band: p1zv (Stoic principles S039–S126, ranks 1172–1201). Worker: worker-p1zv-c139f997.

## S039 — Be a good family member (Principle 161)

**Sources opened and raw-verified:**

1. Marcus Aurelius, Meditations, George Long translation, Project Gutenberg #15877 — https://www.gutenberg.org/cache/epub/15877/pg15877.txt — raw text downloaded to qc/med-long.txt (fetch_url crawler blocked; curl used).
   - Severus fragment: "From my brother Severus, to love my kin, and to love truth, and to love justice" — Book I section 14 in Long's numbering (verified: last section marker before the passage is "14."). The source sentence continues with a semicolon after "justice", so the published quote ends without terminal punctuation. FULL MATCH with the editor's footnote marker ([A]) stripped.
   - Mother full sentence: "From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich." — Book I section 3 in Long's numbering; complete sentence ending in a period in the source. FULL MATCH with the editor's footnote marker ([C]) stripped.
   - Long's Book I numbering differs from the seed's citation (seed cites Med. I.5 for Severus; Long has it at I.14), so quotes are located as "Book I, George Long translation" without section numbers.
   - Post-QC correction: in the opened Long translation, the Severus passage is I.14 and the mother passage is I.3; both section markers were checked directly. Locators on the page use these verified section numbers; no cross-edition comparison is claimed.
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
