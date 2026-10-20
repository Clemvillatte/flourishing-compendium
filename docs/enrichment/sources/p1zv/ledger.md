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
   - "Anger is that which goes beyond reason ... proceeds from choice and deliberate resolve." (II.3) — FULL MATCH (curly apostrophe in "man’s"). Previously used quotation, removed at milestone QC; the current second quotation is the II.4 stages passage: "Furthermore ... whether or no." — FULL MATCH; the raw text contains a printed page marker "{80}" after "injured," which is stripped per the disclosed convention; inner quotation marks are the source's curly doubles, reproduced verbatim.
   - "The greatest remedy for anger is delay" (II.29, inline fragment) — FULL MATCH.
   - Section numbers are Stewart's own Book II section markers (II, III, XXIX), checked directly in the raw text.

**Validator:** first run FAILED ("original wikilink markup changed or removed") — I had shortened the parallel aliases; restored the original wikilink markup exactly and dropped only the claim-bearing clause ("the gap between stimulus and response as the site of regulation"). Second run ok.

**Saturation:** mention "first movement" — S061 and S129 are principles (S061 is in this band). Corrected check (milestone QC): the concept pages The discipline of assent, Urge surfing and Emotion regulation already cite S049; an earlier note claiming they did not was based on a shell-quoting bug and is an error.

**Proposals:** none remaining — the The discipline of assent reciprocal was withdrawn as a duplicate at milestone QC.

## S052 — Practise the view from above (Principle 174)

**Source opened and raw-verified:**
1. Marcus Aurelius, Meditations, George Long translation, Project Gutenberg #15877 (raw text already in qc/med-long.txt).
   - "Look down from above on the countless herds of men ... nor reputation, nor anything else." — Long's Book IX, section 30. FULL MATCH, complete sentences. (An earlier entry said "Book VII, section 30"; that was a locator error from assuming standard numbering, corrected after a direct book-heading check in the raw text.)
   - "Thou art a little soul bearing about a corpse, as Epictetus used to say" — Long's Book IV, section 41. FULL MATCH as a fragment; the source continues with Long's editorial citation "(i. c. 19)" which is omitted from the quote, and the quote ends without terminal punctuation for that reason. Quotation discarded at milestone QC (unnecessary for the principle); recorded here for verification history only. (An earlier entry said "Book XII, section 41"; locator error, corrected.)
   - Seed's standard-edition locators (Med. IV.1, VII.48, IX.30, XII.24) replaced with the verified Long locator (IX.30); translator named in each locator. The earlier Book VII/XII locators were my mistakes, not demonstrated differences between editions.

**Validator:** ok. (Seed had two philosophy parallels jammed on one line; split into two lines, wikilink markup unchanged.)

**Saturation:** mention "view from above" — the concept pages The view from above and Self-distancing already cite S052; only Awe does not. (An earlier entry said Self-distancing did not cite S052; based on the shell-quoting bug, error.)

**Proposals:** 1 reciprocal — Awe (the Self-distancing reciprocal was withdrawn as a duplicate at milestone QC).

## S054 — Distinguish between facts and interpretations (Principle 176)

**Source opened and raw-verified:**
1. Epictetus, Encheiridion, chapter 5, George Long translation, Project Gutenberg #10661 — https://www.gutenberg.org/cache/epub/10661/pg10661.txt — raw text downloaded to qc/epictetus-long.txt.
   - "Men are disturbed not by the things which happen ... is the terrible thing." (Ench. V) — FULL MATCH. The chapter continues with an em dash ("but ourselves—that is, our opinions"), so the quote ends at the complete sentence before it. The quote's "not by ... but by" structure sits inside a standalone blockquote, which the validator exempts (S039 precedent).

**Validator:** ok on first run.

**Saturation:** mention "interpretation" (full untruncated search inspected at verification round): the Cognitive defusion concept page already cites S054 (an earlier note claimed it did not; shell-quoting bug, error); the Mindfulness page does not cite S054 but is too broad to propose. Strong uncited candidates found and proposed at the verification round: Cognitive mediation of distress and Appraisal theory.

**Proposals:** 2 reciprocals (added at verification round) — Cognitive mediation of distress, Appraisal theory. The earlier Cognitive defusion reciprocal was withdrawn as a duplicate at milestone QC.

**QC:** this is the 5th item of the band; milestone advisor QC follows this item (covers S043, S049, S052, S054).

## Milestone QC (advisor, after 5th item) — repairs applied to S043, S049, S052, S054, S039 ledger

- S043: Plain words and For example replaced with advisor's versions (no "removes the surprise" outcome claim, no fixed-label rehearsal); opening sentence de-overclaimed.
- S049: II.3 definition quote replaced with II.4 stages passage (raw-verified; contains a printed page marker "{80}" after "injured," which is stripped per the disclosed convention; inner curly double quotes reproduced verbatim); "second movement" removed as my own label (in Seneca's stages the second is a wish for revenge, not the considered response); "or any other vice" removed; closing replaced with advisor's source-grounded sentence; Plain words and example now demonstrate reconsideration (draft checked, accusations verified) rather than a delay that guarantees nothing.
- S052: book locators corrected after direct heading check in the raw text — "Look down from above" is Book IX section 30 (my earlier "VII.30" came from assuming standard numbering; the raw-text book positions prove IX); "Thou art a little soul" is Book IV section 41. Corpse quote removed per advisor (unnecessary for the principle; its framing unsupported). Empirical clause after the Self-distancing wikilink dropped, markup kept. Outcome assertions ("gives proportion rather than comfort", "loses the whole screen") replaced with the advisor's purpose sentence; Plain words closing softened to the exercise description. Awe proposal narrowed, no empirical claim.
- S054: "states the whole doctrine" replaced; "largest case" removed; "every event arrives with an opinion" softened to "what often arrives as one thing"; Plain words replaced with advisor's missed-call re-derivation; For example labelled imagined; SATURATE mention search run ("interpretation": no new concept candidates; Mindfulness page does not cite S054 but is too broad to propose).
- S039 ledger: false numbering-discrepancy sentence deleted (advisor's round-2 instruction was replacement, not append).
- Shell bug fixed: earlier concept-citation checks used single-quoted paths so the loop variable did not expand; all checks redone with correct quoting. Result: The discipline of assent, Urge surfing, Emotion regulation, Self-distancing and Cognitive defusion concept pages ALREADY cite their respective principles; the three duplicate proposals (S049/The discipline of assent, S052/Self-distancing, S054/Cognitive defusion) were withdrawn from proposals/p1zv.json (now revision 6, 4 records: Oikeiosis, Premeditatio malorum, The rehearsal of virtue, Awe). Earlier ledger absence claims corrected.
- All four pages re-validated ok; states reopened and re-done.

## S058 — Practise reframing (Principle 180)

**Source opened and raw-verified:**
1. Marcus Aurelius, Meditations, Book V, section 20, George Long translation, Project Gutenberg #15877 (raw text already in qc/med-long.txt; book position checked directly against the twelve book-heading markers; section marker "20." immediately precedes the passage).
   - "the mind converts and changes every hindrance to its activity into an aid; and so that which is a hindrance is made a furtherance to an act; and that which is an obstacle on the road helps us on this road." — FULL MATCH; fragment quoted from "the mind converts" (the source sentence continues after a colon; the quoted span ends at the sentence's period). Long's V.20 matches the standard V.20 locator the seed and the parallel line use.

**Validator:** ok on first run.

**Saturation:** mention "obstacle" (concept hits inspected) — Cognitive reappraisal and Narrative redemption sequences concept pages already cite S058; Amor fati (read) does not.

**Proposals:** 1 reciprocal — Amor fati.

## S061 — Recognise the three stages of anger (Principle 183)

**Source opened and raw-verified:**
1. Seneca, On Anger (De Ira), Book II, section 4, Aubrey Stewart translation (1900), Project Gutenberg #64576 (raw text in qc/seneca-minor-dialogs.txt).
   - The II.4 three-stages passage — FULL MATCH (verified for S049, reused here as the direct source for the stages; the raw text's printed page marker "{80}" after "injured," is stripped per the disclosed convention; inner curly double quotes reproduced verbatim). The passage is shared with S049's page; both principles draw on De Ira II.4, as the seed citations for both indicate.

**Validator:** ok on first run. (Seed had two philosophy parallels jammed on one line; split, markup unchanged.)

**Saturation:** Apatheia, The discipline of assent and Urge surfing concept pages already cite S061; The doctrine of the mean (read) does not.

**Proposals:** 1 reciprocal — The doctrine of the mean.

## S063 — Do not fear what you cannot control (Principle 185)

**Source opened and raw-verified:**
1. Seneca, Moral Letters to Lucilius, Letter 13, "On groundless fears", Richard Mott Gummere translation, Wikisource — https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_13 — raw HTML downloaded to qc/seneca13.html; translator credit verified on the page ("Moral letters to Lucilius by Seneca, translated by Richard Mott Gummere").
   - "There are more things, Lucilius, likely to frighten us than there are to crush us; we suffer more often in imagination than in reality." (opening) — FULL MATCH in raw HTML.
   - "What I advise you to do is, not to be unhappy before the crisis comes; since it may be that the dangers before which you paled as if they were threatening you, will never come upon you; they certainly have not yet come." (§4) — FULL MATCH in raw HTML.

**Validator:** first run FAILED ("front-matter changed") — my typo introduced an em dash into the legacy chapter field ("Layer V — Emotions" instead of "Layer V - Emotions"); corrected and ok on the second run.

**Saturation:** Courage and Self-efficacy concept pages already cite S063; Graded exposure systematic desensitisation (Wolpe) (read) does not, and its Cited in philosophy parallels section lists no Stoic principles.

**Proposals:** 1 reciprocal — Graded exposure systematic desensitisation (Wolpe).

**Note:** the seed body's strong claim ("the second is always false, because your capacity for virtue is always intact") was not carried forward verbatim; the rewrite grounds the fear/control distinction in the two verified Letter 13 passages (imagination vs reality; do not pre-suffer).

## S064 — Build the inner citadel (Principle 186)

**Source opened and raw-verified:**
1. Marcus Aurelius, Meditations, Book VIII, section 48 and Book IV, section 3, George Long translation, Project Gutenberg #15877 (raw text in qc/med-long.txt; book positions and section markers checked directly).
   - "Therefore the mind which is free from passions is a citadel ... does not fly to this refuge is unhappy." (VIII.48) — FULL MATCH.
   - "For nowhere either with more quiet or more freedom from trouble does a man retire ... nothing else than the good ordering of the mind." (IV.3) — FULL MATCH; quoted from "For nowhere" (the sentence's opening clause "But this is altogether..." precedes via a period; the quoted span is the complete sentence ending at the period after "mind.").

**Validator:** ok on first run. (Seed had two philosophy parallels jammed on one line; split, markup unchanged.)

**Saturation:** mention "citadel" (concept hits inspected) — The inner citadel, The observing self, Self-as-context, Psychological flexibility concept pages already cite S064; Passions as judgments links to the inner citadel concept but not S064.

**Proposals:** 1 reciprocal — Passions as judgments.

**Note:** the phrase "inner citadel" as a term is associated with Pierre Hadot's study of Marcus; the page attributes only the citadel image to Marcus, quoting VIII.48 directly, and makes no claim about the phrase's origin.
