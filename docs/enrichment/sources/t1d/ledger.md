# t1d band ledger

## Band completion (worker-pplx-t1d-4f8b21c9, 2026-10-23)

All six thinkers minted per PROTOCOL-THINKERS.md: T032 Linehan, T033 Haidt, T034 Dweck, T035 Thich Nhat Hanh, T036 Hadot, T037 Weil. Reciprocal proposals (204 entries) saved to docs/enrichment/proposals/t1d.json for supervisor review.

## Quote-verification pass (2026-10-23, worker-pplx-t1d-4f8b21c9)

Every quoted fragment on the six pages re-verified against raw carrier text, not prompted extractions:

- T032 Linehan: Wikipedia "Marsha M. Linehan" raw wikitext (hell passage, piano-room vow, four-skills split, development-and-trial passage, "psychological and behavioral translations"); Wikipedia DBT raw wikitext ("a synthesis or integration of opposites", biosocial theory basis); Guilford DBT Skills Training Manual 2nd ed. teaching-notes PDF downloaded and raw-extracted (opposite-action definition, fear and shame opposite-action instructions, all verbatim; the shame sentence's "won't" prints with a curly apostrophe in the source, straight on the page). PubMed eutils records for Haidt 2001 and Keltner & Haidt 2003.
- T033 Haidt: both PubMed abstract sentences verbatim via efetch.
- T034 Dweck: Wikipedia raw wikitext (fixed/growth definition, malleability definition, close-achievement-gaps passage, parents-and-challenges advice); Dweck & Leggett 1988 full-text PDF downloaded and raw-extracted (two-classes-of-goals sentence verbatim).
- T035 Thich Nhat Hanh: Wikipedia raw wikitext (plaque caption, interbeing construction, engaged Buddhism origin); The Miracle of Mindfulness archived PDF raw-extracted (two-ways-to-wash-the-dishes passage, cup-of-tea passage, consciousness-alive definition, practice-right-now sentence).
- T036 Hadot: Wikipedia raw wikitext (exercises definition p. 81, final-lecture sentence, 1994 article title); IEP page HTML downloaded and raw-grepped (daily-repetition passage, "in a sense, the key", view-from-above passage, complete-consciousness-and-lucidity sentence).
- T037 Weil: Wikipedia raw wikitext (rarest-and-purest-form sentence, What-are-you-going-through, school-studies emptying sentence, substance-of-prayer, thought-flies-from-affliction, affliction why question, two-prisoners passage).

Known cosmetic deviation: the Guilford shame sentence's apostrophe style (curly in source, straight on page); wording identical.

## QC history

- Advisor QC item 1 (T032): raw-carrier verification discipline adopted; unsupported claims removed; inventory honestly classified; proposals aligned to page scope.
- Advisor QC item 5 (T036): IEP raw-text verification added; inner-citadel gloss narrowed to sourced content; position section brought to budget; T034 mastery/performance claim grounded in the 1988 primary text.
- Item 6 (T037 Weil): first inventory paste was drafted from context greps instead of the generated list; caught before commit by link-resolution checking and rewritten from the generated inventory. Lesson recorded: always paste the thinker_links.py output directly.
- ct2 interlude: took over the stale ct2 baton; a parallel live session was rebuilding Dao and De. Both conflicts resolved in favor of the live worker's verified versions (their Dao spot-check commit and De spot-check commit carry the verbatim verification); baton released back. My own Dao and De rebuilds were discarded as redundant, their content identical in substance and carriers.
