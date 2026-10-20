# Deus sive natura

Worker: worker-w1c-d4409142. Opened 2026-10-20.
Baseline: d55ef6f3. Pre-edit degree 10. Fast-track.

## Opened evidence

- [Spinoza, Ethics, Gutenberg Elwes translation](https://www.gutenberg.org/files/3800/3800-h/3800-h.htm):
  two fetched extractions provide I definition6, I.14 with corollaries, I.18
  with proof, I.29 note on active/passive nature, and IV Preface formula.
  Translator explicitly confirmed by second extraction. IV Preface sentence
  copied exactly as blockquote, including capitalization of Being and absence
  of a comma in “God or Nature” in this translation.
- [Nadler, Baruch Spinoza, SEP](https://plato.stanford.edu/entries/spinoza/):
  targeted extraction failed, returning actual cleaned text through 35,000
  characters. Read returned sections2.1–2.2: formula, scholarly dispute about
  natura naturata, thought/extension as attributes and minds/bodies as modes.
  No later, truncated sections are relied on for this item.

## Preservation and corrections

Front matter and every original wikilink occurrence retained, including both
Brahman occurrences and their relative order. Cited-in list left intact.
Unverified cross-tradition “resonances” reduced to bare comparative navigation.
The seed's category error treating mind/body as additional attributes corrected.
The source text's substantive interpretive dispute is retained, rather than
presenting a debated formulation as unanimously settled.

Unopened Goethe facet (“loved — Goethe, the Spinozist poems, West-oestlicher
Divan”) and generic “the series' Book II” placeholder removed from the reader
page, recorded here as inherited/unverified provenance. No claim of Goethe
quotation, reception or influence is made.
IS IT A CONCEPT: explicit phrase in opened IV Preface; philosophical account
explained in primary propositions. No historical draft present.
No saturation hunt or reciprocal proposal under fast-track.

## Validation

Local `enrich_validate.py --base d55ef6f3 --fast-track` PASS; expected warning
for fewer than three Related lines. State done and pushed after rebase/retry
of a concurrent remote update. No work left only in local commits.
