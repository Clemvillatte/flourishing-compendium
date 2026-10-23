# Randomiser rework — handoff for the next agent

Owner request (2026-10-23, session worker-pplx-k1e-2a9f). This session shipped the safe
mobile slice (commit c92d0d797, verified `build.py` clean, syntax-checked) and scoped the
desktop rework below. Status: LIVE on Pages.

## Shipped this session (verify on the deployed site, don't redo)

Mobile (max-width:700px block, `site/assets/style.css` ~line 1587):
- The draw button is now a compact 40px round button living in the `.rand-head` row,
  beside the Filters button (new `#drawBtnTop` in `site/index.html`, bound in
  `site/assets/app.js` next to the `#drawBtn` binding; `buildPool()` syncs its disabled
  state). `.rand-actions` is hidden on mobile; prev/next/today were already hidden there.
- `.rcard` has a gold frame: `border: color-mix(in oklab, var(--gold) 45%, var(--line))`
  plus a faint gold ring in the box-shadow.
- `#randSub` (the "N entries · K of K categories" line) is hidden on mobile.
- Thinkers added as a draw-from checkbox (`value="thinker"`) in `.rand-types`;
  `site/assets/randomizer-model.js` `EXTRA_TYPES`/`LABELS` now include `thinker`
  (the model builds a "Thinkers" companion book from `wikiData` at runtime — thinker
  pages T001-T056 exist, so the pool works with no data change).

## Remaining work — desktop rework (not done; needs a fresh session)

Owner's words: the web UI is bulky and complicated; too much information; the page is not
sufficiently centered on the randomised card; menus could go on the sides, very
minimalistic, keeping only what is necessary.

Investigation notes for the next agent (all verified this session):
- The whole randomiser view lives in `site/index.html` under `#randView > .rand-wrap`
  (DOM order: `.rand-head`, `.rand-toolbar`, `.rand-actions`, `.rcard#card`,
  `.rand-foot`), styled at `site/assets/style.css` ~lines 198-400.
- `.rand-wrap` is `max-width:760px; margin:0 auto` — the card is centered but the
  toolbar/actions rows above it make the page read top-heavy. The verbose strings the
  owner quoted come from: `#randSub` (now shortened to "N entries · K of K categories"),
  the Layer `<select>` (its option labels print full "Volume · Book" paths — consider
  shortening the option text in the JS that populates `#layerSelect`), and
  `#poolNote` ("N in the current pool · no repeats until it cycles" — fine).
- Proposed desktop layout (pure CSS, `@media (min-width:1080px)`): turn `.rand-wrap` into
  a two-column grid — `grid-template-areas: "head head" "tools card" "actions card"
  "foot card"; grid-template-columns: 300px minmax(0,1fr)` with `.rand-toolbar` and
  `.rand-actions` in the left column (toolbar internal `.rand-filters` overridden to
  `flex-direction:column`) and the card taking the main width. Keep `.rand-wrap`
  `max-width:1160px`. Hide the desktop `.draw-label` or keep — owner wants minimal.
- Also trim desktop bulk: `.rand-toolbar` padding (14px 16px → 10px 14px), and consider
  collapsing the Layer select into the Filters popover.
- The `.draw-top` button is `display:none` on desktop by design (desktop keeps the big
  labeled draw button in `.rand-actions`); revisit if the side layout lands.
- Verification requirement: the site is customer-facing; after CSS changes run
  `python3 scripts/build.py` (must exit clean) and check the deployed Pages site at
  desktop AND mobile widths, including the Filters popover, the saved-only mode
  (star), and the layer select — the owner checks visual quality personally.
- Commit scope rule: site work is committed directly as clearly-scoped commits
  (per the Academy-separation precedent in `handoff.md`); do not route it through
  the enrichment batons.

## Cross-band notes
- The same session's enrichment work is on band k1e (ledger:
  `docs/enrichment/sources/k1e/ledger.md`); the kernel-library reorg plan is
  `docs/enrichment/kernel-library-reorg-plan.md` + `kernel-approach-map.json`.
