# Schema-lane fix list — current status verified (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26
12:03Z measured). This receipt verifies each item of the schema-lane fix
list (docs/degrees/integration/schema-lane-fix-list-1026a.md, produced
by deg-fix-content at ddf030d) against the CURRENT origin/main data
block, so the schema lane knows exactly what remains.

## Item-by-item status (origin/main 041ffc0 at verification time)

| # | Item | Status in current data block |
|---|---|---|
| 1 | PRAG-M3-04 (mod-prag-3) — stale locator | **FIXED**: locator now reads "Lecture VI, four short selections totalling 157 words (about 1 minute at 130 words per minute), printed in full in the module's second step; the selections are not contiguous in the lecture" — the B3 Lecture VI assignment, correct. |
| 2 | PRAG-M4-01 (mod-prag-4) — missing second passage | **OPEN**: locator still reads "One contiguous passage of 778 words (about 6 minutes…), from 'Another instance, commonplace also, yet not quite so trivial, may enforce this lesson' to 'is wholly futile'" — the 476-word Reading B passage is missing. |
| 3 | PD-M2-04 (mod-pd-2) — whole-BODY figure as assignment | **OPEN**: locator still reads "The opening sections through the social and cultural functions of emotion, plus the closing excerpt (about 2,794 words)" — the ~450-word bounded excerpts are missing. |
| 4 | PD-M3-02 (mod-pd-4, revisit) — extra segment | **FIXED**: segments now `[{'start': '47:26', 'end': '54:53'}]` only; the extra `18:06–39:15` segment is gone. |
| 5 | BUD-B2-02 (mod-bud-2 / mod-bud-5) — stale word label | **OPEN**: mod-bud-2 locator still reads "The whole discourse (about 1,100 words); mark each truth and the task attached to it" — should be ~994 / "about 1,000 words" per the recount receipt. |

## Remaining work (routed to deg-fix-schema, not deg-integrate)

Items 2, 3 and 5 remain open. All three are pure splices from the
verified manifests (the fix list's text is spliceable verbatim). The
schema lane (worker-pplx-degfixschema-1026b, baton FRESH at
verification time) is actively pushing; this receipt only records the
current status so the lane does not re-apply the already-fixed items 1
and 4.

## Not fixed by this lane

None — this is a verification receipt only. app.js stays with
deg-fix-schema per the single-writer rule.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26 12:03Z
