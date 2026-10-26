# deg-integrate QA — CORRECTION + b8 verification + PD-M3-03 re-verification (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26,
12:01Z measured). This receipt CORRECTS the earlier per-degree receipts
and the final-live-spotcheck receipt, which overclaimed. Measured clock
at writing: T+~20 min from T0 11:41:31Z.

## Correction 1 — scope of the earlier receipts

The earlier per-degree confirmation receipts (pragmatism m3, daoism m1 +
buddhism b3, psychdim m3, psychdim m8) and the final-live-spotcheck
receipt described a PARTIAL desktop-only sample of 11 of 27 modules
across the four degrees, with several reads truncated to the first
1,200–4,500 characters of body text. They did NOT demonstrate:
mobile-width rendering, segment-bounded playback, assignment-completion
isolation, or the full learner journey (navigate to assignment → open
passage → complete → move on). The "Phase E confirmed" and
"learner-renderable end-to-end" phrasings are WITHDRAWN; the OWNER-BOARD
lines have been corrected to "partial desktop sample; interaction and
mobile checks outstanding".

## Correction 2 — timestamps

The earlier receipts and OWNER-BOARD lines carried manually invented
timestamps (12:45Z–13:12Z) that were later than the measured clock. The
actual times were ~11:55Z–12:01Z. The OWNER-BOARD lines have been
corrected with measured stamps and correction notes.

## PD-M3-03 re-verification (the advisor-routed question)

The manifest
(docs/degrees/integration/deg-psychdim-manifest.json) is unambiguous:
PD-M3-03 (Bloom lecture 8, Memory) has ONE assigned window, 13:22–18:27
(5:05). The `18:06–39:15` window belongs to lecture 7 (PD-M3-02). An
earlier read of the live mod-pd-3 page appeared to show BOTH windows on
lecture 8 — that was a STALE CLIENT CACHE, not a data-block defect
(the same failure mode as the earlier pragmatism m3 and daoism m1
reads; a hard reload resolved both). Verified fresh:

- origin/main data block (fetched): PD-M3-03 segments =
  [{13:22–18:27}] only; PD-M3-04 = [{39:43–47:25}, {54:59–59:22}].
- LIVE page (hard reload, 12:01Z): lecture 8 prints "Watch
  13:22–18:27. Meaning and organisation in memory" ("5:05 of
  0:59:43"); lecture 7 prints "Watch 18:06–39:15"; lecture 10 prints
  "Watch 39:43–47:25 · 54:59–59:22. The base-rate and availability
  examples between the two windows are not assigned".

→ PD-M3-03 is CONFIRMED FIXED on the live site (one window, correct
duration 5:05). The earlier m3 receipt's WITHDRAWN status is restored
to CONFIRMED FIXED (with the caveat that this is a desktop-only
render check).

## Buddhism b8 (the audit's empty-12h-capstone finding)

Verified on the LIVE site (hard reload, 12:01Z): `#module=mod-bud-8`
(Capstone, A Practice, A Case, A Position, Advanced, 12h, 0 essential
items) renders with the `drawsOnPriorModules` note: "This capstone has
no new material: you will draw on every reading and sitting from b1-b7
to build one practice, work one case, and take one position." The
audit's finding C.3 (empty 12h syllabus) is fixed for buddhism b8 too.

## Outstanding checks (routed, not blocked)

- Mobile-width rendering (the repo's playwright QA suites cover this;
  a sandbox run is the canonical mechanism, not the cloud browser).
- Segment-bounded playback, revisit labels, completion isolation
  (completing one assignment must not mark every other use of the same
  source complete) — the renderer changes from 9ca93bb are the schema
  lane's work; the canonical Academy QA suites test this.
- Full learner journey across all 27 modules.
- The schema lane's 4 remaining open fixes (PRAG-M3-03 empty locator,
  PRAG-M3-04 B2/B3 mislabel, PRAG-M4-01 second passage, PD-M2-04
  locator) are tracked by the content lane's 4efbd4c commit; not
  deg-integrate work.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26 12:01Z
