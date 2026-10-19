# Connection preview acceptance checks

Scope: graph connection dialog and editor connection picker; read-only local entry text.

- Hover a suggested title: no immediate preview; opens after about one second.
- Fast pass over a row or leave before the delay: no stale/delayed popup.
- Move into preview, scroll and read rich content; do not close during the crossing.
- Preview button opens immediately by pointer, touch and keyboard; it never connects.
- Back and Escape close preview first, restore the trigger, preserve picker and checks.
- Change search/filter: close stale preview and cancel old timers; new rows still work.
- Internal links browse within preview; external source links open separately.
- Full body, readable headings/quotes/emphasis and links, including short/empty entries.
- Desktop side placement, narrow overlay, 375px mobile, short desktop viewport, resize.
- Closing picker while a timer is pending leaves no orphan preview or JS error.
- Editor shares behavior; preview does not insert text or publish changes.
- Network guard: preview interactions must make no GitHub write requests.

## Verified results

Chromium, desktop 1440×950, short desktop 1440×600, mobile 375×812, and a separate
touch-enabled mobile context. Screenshots inspected in light/dark site themes; the preview
uses the same paper surface as the existing connection dialog.

- Hover delay measured 1004.7ms. Fast hover/leave, search replacement and closing the
  picker while pending left no delayed or orphan panel. Hover did not take keyboard focus.
- Pointer transit into the panel and mouse-wheel scrolling retained the preview.
- Keyboard Tab/Enter opened Preview; Back/Escape returned focus, keeping the picker open.
  Narrow overlay focus stayed inside until Back/Escape; resize returned to desktop placement.
- Checked selections survived preview, internal navigation, search and return. The editor
  draft remained byte-identical to its pre-preview value. Touch Preview/Back worked, with
  at least 44px button targets.
- Quotes/headings, full story text, internal links, empty body fallback and nested
  emphasis/link markup checked. Internal navigation stayed inside preview; a real source
  link and a nested fixture link opened a new tab without closing the picker.
- New small label contrast checked; minimum among measured labels is 5.54:1.
- No JavaScript page errors or GitHub write requests during preview testing. Editor loading
  used one mocked GET; all write requests were blocked by the test harness.
- Fixed two exposed picker polish issues: Done is anchored to the connection shell rather
  than the viewport, and the zero-checked batch button respects its hidden state.
- JavaScript syntax, all 30 existing Python safety tests and nine randomizer tests pass.

No content entries, connection records, selection logic or publishing APIs were changed.
GitHub connection commits were deliberately not exercised: preview must remain read-only.
