# Source liveness and paywall audit: four published degrees

Executed by worker-pplx-dosr6-1026r (deg-verify-b), 2026-10-26, against origin/main.
Scope: every media record referenced (required or optional) by the 27 modules of
deg-psychdim, deg-wol-daoism, deg-wol-buddhism and deg-wol-pragmatism in
`fcAcademyData` (91 distinct source records). Owner rule under test: no paywalled
content anywhere.

## Method

- 40 YouTube records: oEmbed request per video (public, embeddable, title returned).
- 51 other records: HTTP GET with a browser user agent, first 300 KB scanned for
  subscription or purchase gating phrases (subscribe to read, paywall, purchase this
  article, log in to read, institutional access).
- Result is a liveness and gating screen, not a content re-verification; module QC
  and the whole-degree gates remain the content record.

## Results

- 91 of 91 records resolve. 40 of 40 videos return oEmbed; 51 of 51 pages return
  HTTP 200 (bswa.org returned 202 and loaded).
- 0 of 51 pages carry gating phrases. The PMC (17), Noba (6), Access to Insight (4),
  Gutenberg (4), SuttaCentral (2), IU ScholarWorks (2) and Wikisource (2) records are
  open-access hosts.
- Title spot-check of oEmbed against registry titles: all differences are
  descriptive (for example Yale PSYC 110 lecture labels), none indicate a swapped video.

## One defect found and repaired

Two records that are REQUIRED media in published modules were still
`verification_status: imported` with gate evidence "summary-level (inherited from
mission page)", although the module video audits had opened their transcripts:

| Record | Module | Problem | Repair |
|---|---|---|---|
| M06-AF07 (Gross, University of Melbourne) | mod-pd-2 | status imported; presenter, host, duration blank | verified-video; presenter, host, duration 59:16; evidence verify/deg-psychdim-m2-video-audit-49bf153e.md |
| M08-P09 (Ryan, Aalto University) | mod-pd-6 | status imported; title truncated and wrong ("Self-Determination Theory, World..."); presenter, host, duration blank | title now "Self-Determination Theory, Work Motivation & Performance" (matches live oEmbed); verified-video; duration 56:32; evidence verify/deg-psychdim-m6-video-audit-49bf153e.md |

Both repairs are metadata only. No module, window or reference changed.
`node --check site/assets/app.js` passes; `scripts/build.py` builds 5,964 entries;
`scripts/tests/academy-display.test.cjs` passes.

## Not touched, for the supervisor

- The remaining `verified-partial` record PRAG-OPT-BERNSTEIN (optional further
  viewing, orientation only) is labelled as such in its title and is unchanged.
- Duration is blank on 59 of 91 records (cosmetic).
- Rupert 2004 and the other deg-verify-b owner-routed items are unchanged.
