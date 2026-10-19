# Randomizer controls: acceptance checks

Scope: preserve the existing editorial design, principle/kernel default pool, library,
graph, saved entries and history. No content rewrites or research claims added.

## Functional inventory

- Fresh load: all 27 categories selected; Concepts, Theories, Stories and Sayings unchecked.
- Categories: open/close with pointer and keyboard; Select All, Deselect All, Done, Escape
  and outside-click dismissal; summary reflects zero, one, two and several selections.
- Category OR: Daoism + Buddhism draws only their combined pool; Daoism + Affect likewise.
- Empty selection: explanatory empty state, disabled draw/today buttons, no stale card.
- Each optional type: enable, reach an eligible entry, render rich text and working links,
  then disable and return to the baseline. Theories are separate from concept-only entries.
- Extra category association: one-hop explicit inbound/outbound principle links; no
  inferred provenance from a word in prose. All categories includes unlinked extras.
- Layer filter: intersection with categories; invalid layer resets when category changes.
- Random draw: no repeats within one pool cycle; filter changes reset pool/history.
- Today's entry and search use the current selection, not the unfiltered global corpus.
- Save/remove/reopen a non-principle entry; original favorite keys remain compatible.
- Keyboard: checkbox Space must not draw, dropdown Escape closes and returns focus.
- Mobile Filters button; 375px width; same page desktop → mobile → desktop; no overflow.
- Themes: inspect new controls in light and dark; desktop short-height dropdown remains
  usable through its own scroll region.
- Current source text: principle/kernel cards use current wiki markdown, not the stale
  data-src randomizer prose; companion tabs remain intact and embedded Plain words is not
  duplicated by the older authored fallback.

## Verification record

Implementation and model regression tests are in `site/assets/randomizer-model.js` and
`scripts/tests/randomizer.test.cjs`. Run with `node --test scripts/tests/randomizer.test.cjs`.
Browser results and remaining limitations will be recorded here before signoff.
