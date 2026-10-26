# M1 rebuild: independent cross-check of the two consumed video sources

Verifier: worker-pplx-verify-1026c, verification-lane assist, read-only,
no baton. Checked 2026-10-26. The degree owner's 04:51Z checkpoint
records that the M1 video-first route was rebuilt using both
independent receipts, with "Hayes 5:55 replaces framework readings;
Sainani 21:44 replaces NHST prose". This receipt independently
cross-checks those two consumed sources against the verify-b receipts
(degree-psychdim-video-first-49bf153e.md and
deg-psychdim-m1-literacy-video-49bf153e.md) so the supervisor's
pending M1 module-QC has a second set of opened pages behind the
consumed sources. It does not clear a module, amend the scope, or
authorize publication.

## Hayes segment (framework replacement)

| Check | Result of this independent pass |
|---|---|
| Identity | The [opened oEmbed response](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=sDGpXQLHLfY&format=json) returns "An Introduction to Process-Based Therapy - Dr Steven Hayes", channel The Weekend University, matching the receipt. |
| Metadata | The [opened watch page](https://www.youtube.com/watch?v=sDGpXQLHLfY) prints the player as 0:00/1:40:07 and the upload date as 21 December 2023, both matching the receipt. A transcript section appears on the page. |
| Credentials | The [opened UNR biography](https://www.unr.edu/psychology/steven-hayes) identifies him as Professor Emeritus in the Department of Psychology with a clinical psychology PhD (West Virginia University, 1977), matching the receipt's credential claims. |
| Segment content | The [opened transcript](https://youtubetotranscript.com/transcript?v=sDGpXQLHLfY) contains the claimed segment material in the claimed order: the interviewer's question introducing the extended evolutionary meta-model; the variation, selection, retention and context explanation with clinical examples; the six psychological dimensions named as "affect cognition sense of self attention motivation and overt behavior", presented as a proposed organizing set; and the sociocultural and biophysiological levels with diet, sleep and exercise examples and the explicit limited-mediational-evidence caveat. The returned transcript carries no timestamps, so the exact second boundaries (01:03:17 to 01:09:12) could not be re-verified to the second in this pass; the content sequence matches the receipt's claims. |
| Discrepancies | None found. |

## Sainani clips (NHST replacement)

| Check | Result of this independent pass |
|---|---|
| Identity | The [opened oEmbed response](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=LKiX54NglCo&format=json) returns "Statistics Fundamentals \| Dr Kristin Sainani", channel Stuart McErlain-Naylor, matching the receipt. |
| Metadata | The [opened watch page](https://www.youtube.com/watch?v=LKiX54NglCo) prints the player as 0:00/1:16:12, matching the receipt's lengthSeconds=4572, and the streamed date as 2 July 2020, matching the receipt. |
| Credentials | The [opened Stanford profile](https://profiles.stanford.edu/kristin-sainani) identifies her as Professor (Teaching) of Epidemiology and Population Health with a Stanford statistics MS (1999) and epidemiology PhD (2002) and an extensive statistics teaching record, matching the receipt's credential claims. |
| Segment boundaries | The watch-page chapter list confirms the receipt's boundaries exactly: "What is a Confidence Interval?" at 25:46, "What is an Alpha (Significance Level)?" at 44:11, "Misinterpretations of P-Values" at 54:02 and "The Value of P-Values" at 57:21. The receipt's optional remedial segment 03:29 to 09:21 also aligns with the chapters "What is Statistical Inference?" at 3:29 through "Simulating Study Results" at 9:21. |
| Segment content | **Not re-verified in this pass.** Two attempts to open the transcript through the third-party transcript service failed with service errors (not a paywall on the recording itself; the watch page is public and shows a transcript section). The content claims therefore rest on the verify-b receipt's opened transcript; this pass confirms identity, metadata, credentials and boundaries only. The transcript re-check remains open and is cheap for any worker whose transcript route succeeds. |
| Discrepancies | None found among the checks this pass could complete. |

## Finding

Both consumed sources check out on identity, access, metadata and
credentials in this independent pass, and the Hayes segment's content
is confirmed against the transcript. The one open item is the Sainani
clip-content re-verification, blocked by transcript-service errors in
this pass and recorded as such above. This is evidence for the
supervisor's pending M1 module-QC, not a gate clearance. No module,
ledger, band or shared board file was edited; this receipt and a
TASKBOARD checkpoint are the only files touched.
