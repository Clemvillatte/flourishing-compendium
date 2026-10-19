# p1m milestone QC 04: items 16-20 (B070 B077 B079 B081 B087)

Independent read-only QC of `/home/user/workspace/flourishing-compendium` at HEAD 92c3af25. I made no repo edits, state or baton changes, or commits. The working tree is clean.

## Verdict: PASS (no blocking corrections)

There are two optional wording notes (N1, N2) at the end. Neither blocks the milestone.

## Mechanical checks (vs c2a3ee47; B081 also vs f48bb380)

| Item | Front matter | Statement | Wikilinks | Reflections | prose_words |
|---|---|---|---|---|---|
| B070 | identical | identical | identical (3) | identical | 235 |
| B077 | identical | identical | identical (3) | identical | 233 |
| B079 | identical | identical | identical (2) | identical | 244 |
| B081 | identical | identical | identical (6, incl. 4 kernels) | identical | 236 |
| B087 | identical | identical | identical (3) | identical | 242 |

- I ran `enrich_validate.py --base c2a3ee47` on all five files: 5 checked, 0 failed. The only warnings are the standard ones (no Sources URL section, no Related concepts section).
- All 17 wikilink targets resolve to exactly one file each.
- In the diff against c2a3ee47, the only removed lines are the old summary, the inherited citation line, the old Plain words / For example and the old psychology bullets. All of these were meant to be replaced.
- Each Plain words section is new text. It does not repeat the body or the old text.
- B081 vs f48bb380: the advisor-repaired distinction is kept. MN 10 is cited for the hindrance list and SN 46.53 for the remedy. The long SN 46.53 block quote was cut to its exact final sentence, attributed with "referring to the three factors above". The fire simile and the restless-mind reversal are now stated in the body. The Practice kernels list is unchanged.

## Per-item source checks (all sources opened in this QC)

### B070: MN 18 (Thanissaro, © 1999)
- The quote "What one perceives, one thinks about. What one thinks about, one objectifies." matches Mahā Kaccāna's analysis exactly. The Buddha later endorses it.
- The translator's material is kept separate from the discourse:
  - The introduction gives "objectification" as the chosen rendering and lists "proliferation" among acceptable alternatives.
  - The introduction's remedy is attending to whether skillful or unskillful qualities increase, which is analysis of processes and not discarding thought. The body attributes this to the "introduction". It does not attribute it to the sutta.
- "Arguments ... divisive tale-bearing" comes from the Buddha's brief statement. Glossing "relish, welcome, or remain fastened to" as "attachment" is fair.
- The rumination parallel is not equated with papañca.
- Nolen-Hoeksema, Wisco and Lyubomirsky 2008 abstract: it covers the depression links and "distinction between rumination and more adaptive forms of self-reflection". Supported.
- Kircanski 2015 manuscript: the Borkovec 1983 definition and the verbal-avoidance theory (reviewed in Borkovec et al. 2004) both appear before the "Page 2" footer, so "manuscript p. 2" is correct. The page frames the avoidance view as theory ("theorized", "thought to support"). PASS.

### B077: SN 12.2 (Thanissaro, © 1997)
- The ignorance definition matches exactly. It specifies all four truths in the translator's "stress" wording, and ignorance heads the dependent co-arising sequence.
- "Not-seeing" is explicitly labelled the compendium's gloss.
- The page explicitly says it does not attribute every instance of suffering to someone failing to look. There is no blame of the sufferer and no claim about intelligence.
- Pronin, Lin and Ross 2002 abstract: "Three studies" on the self/other asymmetry. Accurate.
- Nisbett and Wilson 1977: the printed p. 231 abstract says people "will sometimes be able to report accurately". Pp. 232-233 discuss limits on access to higher-order processes. The printed page markers 231-233 are correct. PASS.

### B079: MN 10 (Thanissaro, ATI ed. © 2008)
- "He discerns how there is the arising of unarisen sensual desire." matches exactly under D. Mental Qualities [1].
- Presence/absence, arising, abandoning and "no future arising" are fairly paraphrased.
- The page explicitly says watching does not automatically weaken desire.
- Field and Cox 2008 abstract: it covers the attention-craving relation and the caution that "some measures ... might reflect multiple underlying processes". Accurate.
- The smoking evidence is contrasted correctly:
  - **Elwafi et al. 2013 (online Dec 2012):** 33 adults, analysis restricted to the MT arm of an RCT. The baseline craving-smoking correlation of r = 0.582 fell to r = 0.126, and informal practice moderated the relationship. This is weak, associational evidence.
  - **Jackson et al. 2022 Cochrane:** 21 studies with 8186 participants. The authors "did not detect a clear benefit" for quit rates, on "low and very low certainty" evidence.
  - The page's wording ("no clear quit-rate benefit overall, with low- or very-low-certainty evidence") is faithful, and does not claim the review proves no effect. PASS.

### B081: SN 46.53 / MN 10
- The quote "The sluggish mind is easy to raise up by those mental qualities." is exact.
- The three raising factors are correct.
- The wet-vs-dry fuel and "blow on it" simile is correctly summarised as "dry fuel and air".
- The calming-factor reversal for a restless mind is correct.
- Yerkes and Dodson 1908 (psychclassics): pp. 459-463 by the site's [p.] markers describe dancing mice, a white/black discrimination task and shock strength. The page correctly says the study did not test posture or meditation.
- Van Dongen et al. 2003 abstract: n = 48. Sleep was restricted to 4 or 6 h for 14 days, and cumulative dose-dependent cognitive deficits resulted. The sleep finding is kept separate from meditation ("does not identify a meditation remedy").
- On overexertion: Plain words says the practice is "not a requirement to override exhaustion", and the example says "does not promise that effort substitutes for sleep". The page does not push practice past exhaustion. PASS.

### B087: AN 1.49-52 (Thanissaro, © 1995)
- The quote "Luminous, monks, is the mind. And it is freed from incoming defilements." is exact ({I,v,10}).
- Note 1 is attributed correctly to the translator. It sets out the disputed bhavaṅga and featureless-consciousness readings, then a practical reading: defilements "are not intrinsic ... not a necessary part of awareness". The body calls this an interpretive account and "not proof of an unchanged clear self". So the contested luminous mind is not presented as an unchanged witness.
- Fredrickson 2001, section "Positive Emotions Undo Lingering Negative Emotions": a speech-preparation anxiety induction, four films, and faster cardiovascular recovery under joy and contentment in three samples. "Not a universal restoration of emotional baseline" is accurate, because the baseline in that section is cardiovascular. The section locator is acceptable, and no page number was invented.
- Bonanno 2004 abstract: resilience is "a distinct trajectory from the process of recovery". Accurate.
- The example keeps responsibility for the harsh speech ("does not excuse the words"). There is no spiritual bypassing. PASS.

## Ledgers (docs/enrichment/sources/p1m)
- All five ledgers match the opened sources.
- They record the replaced uncited references: Nolen-Hoeksema 2000, Borkovec 1983 as the source of the avoidance theory, Dhammapada 153-154, SN 46, Brewer 2013, Walker 2017.
- The supervisor flags are appropriate and leave the protected out-of-band text alone:
  - Arousal regulation concept: wrongly attributes posture interventions to Yerkes-Dodson.
  - Resilience concept: treats resilience as recovery.
  - B087 reflections: protected text asserting a fixed witness.
- No invented quote repairs were found.

## Optional notes (non-blocking)
- **N1 (B079):** "an exploratory analysis" is a fair description, but Elwafi et al. never use the word. A more source-literal option is "an analysis limited to the mindfulness arm of a small trial (n = 33)".
- **N2 (B087):** the quote is specifically AN 1.50 / {I,v,10}. The range citation "AN 1.49-52" is acceptable as is, but a future pass could add the item locator.
