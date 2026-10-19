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
Verified in Chromium with real pointer/keyboard input:

- Default 2,492 entries; all four optional types unchecked. All types enabled: 5,217.
- Daoism + Buddhism: 390; Daoism + Affect: 276. Sampled draws stayed within selection.
- Zero categories gives a disabled draw/today action and an explanatory empty card.
- Concepts, theories, stories and sayings each reached through scoped search, rendered,
  saved and reopened; disabling them restored the original default pool.
- Daily selection stayed inside the filtered pool and repeated deterministically.
- Layer intersection, scoped keyword/ID search, history and saved-only draw worked.
- Dropdown Escape/focus return, outside-click dismissal, checkbox Space, mobile Filters
  and desktop/mobile resizing worked. No JavaScript page errors were observed.
- Screenshots inspected at 1440px and 375px, in light/dark themes. The short-window menu
  was corrected and checked at 1440×600; its bottom remained inside the viewport.
- New label contrast measured at least 6.37:1 dark and 4.54:1 light.
- Current-source check: B053 rendered its quote, headings and one Plain words section;
  Philosophy tab worked. P181's Practice tab rendered. All 2,492 original entries resolve
  to current markdown; blank/missing source text retains the legacy fallback.
- Nine Node model tests pass, including source freshness/companion-section preservation;
  the existing 24 Python safety tests pass. JavaScript syntax and whitespace checks pass.

Limits: category association means explicit one-hop connection, not historical provenance.
Unlinked extras appear only with all categories selected. This UI change is not an evidence
certification of inherited wiki content and does not change the existing storage mechanism.
Delayed previews inside the graph connection picker are a separate owner proposal.
