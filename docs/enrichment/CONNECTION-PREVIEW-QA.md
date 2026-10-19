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

Results pending browser verification.
