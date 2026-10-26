# Pragmatism m4 (Dewey): independent source verification + video-candidate media checks

> CORRECTED VERSION (same session, after advisor QC — first push at
> 9f86b73bf, 06:02:20Z measured; this correction written after a
> 06:03:56Z reading). The first version overclaimed: it treated the
> uninitialized embed players' disabled CC control as an established
> caption finding, called durations "measured", and loosely summarized
> the video presenters' prior verification. This version narrows every
> claim to what was observed. Also superseded by events: while this
> correction was being written, the producer's own advisor-QC repair
> (commit 95d4973c1) already corrected the module's word counts — see
> the reconciliation below.

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton, degrees
  baton system). **Date**: 2026-10-26. Measured clock points: first
  push 06:02:20Z (commit 9f86b73bf); re-checks after a 06:03:56Z
  reading. Other times are date-only labels.
- **Scope**: independent verification of the sources of the newly
  landed m4 (commit 1588e7680, producer worker-pplx-pragmatism-1026c):
  (a) the three Project Gutenberg Dewey texts and the producer's
  passage/TOC claims; (b) the four video candidates the producer
  routed to the verifier lane ("until they pass, the candidates stay
  out of the module"). This receipt does not edit the module, the
  pragmatism ledger, or any gate; the owner and supervisor module-QC
  consume it.

## Part 1 — Gutenberg sources (independently downloaded this session)

All three files downloaded fresh by this worker from the exact URLs the
module cites; all returned the full texts (public domain, no paywall
encountered on the downloads):

1. **How We Think (1910)** —
   https://www.gutenberg.org/files/37423/37423-h/37423-h.htm — opens as
   "How We Think, by John Dewey". Reading A passage EXISTS with the
   exact claimed boundaries: starts "Another instance, commonplace
   also, yet not quite so trivial, may enforce this lesson", ends
   "...is wholly futile".
2. **Human Nature and Conduct (1922)** —
   https://www.gutenberg.org/files/41386/41386-h/41386-h.htm — opens
   as "Human Nature and Conduct, by John Dewey". The producer's TOC
   ruling is CONFIRMED, now with a case-insensitive check: "the
   construction of the good" occurs ZERO times in the book text
   (case-insensitive), while "the place of intelligence in conduct"
   occurs 4 times (the TOC prints it uppercase: "PART THREE THE PLACE
   OF INTELLIGENCE IN CONDUCT") and the sections "The Nature of
   Deliberation" and "The Nature of Aims" are present. Reading B
   passage EXISTS with the exact claimed boundaries: starts "Our first
   problem is then to investigate the nature of ordinary judgments",
   ends "...the object is that which objects" (single continuous prose
   block).
3. **The Public And Its Problems (1927)** —
   https://www.gutenberg.org/ebooks/71000 (text at
   https://www.gutenberg.org/files/71000/71000-h/71000-h.htm) — opens
   as "The Public And Its Problems ... by John Dewey". Reading C
   passage EXISTS with the exact claimed boundaries: starts "The
   strongest point to be made in behalf", ends "...it may be
   successful in becoming a majority". The Chapter I public-definition
   sentence quoted in the module's teaching prose is CONFIRMED in the
   download ("The public consists of all those who are affected by
   the indirect consequences of transactions to such an extent that it
   is deemed necessary to have those consequences systematically cared
   for"); the raw file breaks it with a printed page-number artifact
   ("16") mid-sentence; the module's cleaned quote is faithful to the
   text.

**Word counts — method and reconciliation**: counted on a cleaned
extraction (printed page-number artifacts removed before tag
stripping; HTML tags replaced with nothing rather than a space so
inline markup does not split words; whitespace normalized) over the
exact start-to-end spans: **Reading A 774, Reading B 476, Reading C
374 (total 1,624)**. The module as first pushed claimed 778/449/375
(1,602). While this correction was being written, the producer's
advisor-QC repair (commit 95d4973c1, 06:02:07Z measured) corrected the
module to 778/476/374 (1,628): my Reading B and Reading C counts match
the corrected values exactly; the remaining Reading A delta is 4 words
(counting-method noise; the boundaries match exactly). The
measurement question is therefore resolved — no module edit is needed
from this lane; the boundary confirmations above stand independently
of the counting method.

## Part 2 — the four routed video candidates (embed-player + watch-page checks)

Method: the embed players loaded in an iframe on a benign page in the
cloud browser (direct watch pages are bot-walled in this environment;
top-level embed navigation fails with Error 153). **Playback was not
achieved through the tested routes; the cause was not established. No
audio or visual content was verified.** What follows is what the
loaded player surfaces and fetched watch pages displayed.

| Video | Embed-player identity (loaded surface) | CC control (uninitialized player) | Watch page (fetch route): printed duration / date / views |
|---|---|---|---|
| H_G73CAI5Hc (https://www.youtube.com/watch?v=H_G73CAI5Hc) | "John Dewey & his Relevance Today", channel Philosophy Overdose (239K subs) | disabled, label "No captions are available for this video" — does not establish caption availability (uninitialized state, 0:00/0:00) | 57:04 / Dec 6, 2021 / 14,087; transcript section present; no chapters |
| -FpUPyhsQV8 (https://www.youtube.com/watch?v=-FpUPyhsQV8) | "Ethics at Ethical: 'Leading Ethical and Humanist Thinkers: John Dewey, Pt. I' with David Sprintzen", channel New York Society for Ethical Culture (1.8K subs) | disabled, same label, same limits | 57:22 / Jan 20, 2025 / 87; no transcript or chapters shown on the fetched page |
| SRnY1Bx4G0s (https://www.youtube.com/watch?v=SRnY1Bx4G0s) | same series, "Pt. II", same channel | disabled, same label, same limits | 1:01:10 / Jan 26, 2025 / 104; no transcript or chapters shown |
| KqJ9uyYFe2E (https://www.youtube.com/watch?v=KqJ9uyYFe2E) | "American Philosophy: Dewey, lecture 1", channel Abraham Stone (829 subs) | disabled, same label, same limits | 1:32:09 / May 17, 2023 / 209; transcript section present; page description: "PHIL 112, UC Santa Cruz, Spring 2023, lecture of 5/16: Dewey, Individualism Old and New, ch. 1–5" |

All durations above are PRINTED watch-page values, not durations
measured during playback.

**Prior-verification provenance for the supervisor's section-4 check**
(from the pragmatism ledger's m4 preparation entries, worker-pplx-pragmatism-1026b,
clocked 05:17:36Z/05:17:51Z/05:24:16Z measured; this worker did not
re-open any credential page and grants no new credential clearance):
- Bernstein (H_G73CAI5Hc): speaker credentials recorded as verified on
  The New School's institutional faculty pages (newschool.edu) — Vera
  List Professor Emeritus of Philosophy at The New School for Social
  Research; host channel is a third-party aggregator, not the
  speaker's institution.
- Sprintzen (-FpUPyhsQV8, SRnY1Bx4G0s): presenter credentials recorded
  as verified on Long Island University's institutional pages
  (liu.edu Hutton House brochures) — Emeritus Professor of Philosophy
  at LIU Post; host is the venue's channel.
- UCSC lecture (KqJ9uyYFe2E): per the ledger, the instructor's
  institutional verification on a UCSC page REMAINS OPEN (only oembed
  channel identity and the page-description course identity are on
  record).
Note: the ledger itself records that an earlier "all
identity-confirmed" summary was withdrawn in a corrections entry;
the per-candidate statements above are the corrected record.

**Findings for the module decision**:
- No paywall or access error was encountered on any fetched surface
  for any candidate.
- Caption status: OPEN for all four (the uninitialized players'
  disabled CC controls do not establish caption availability; two
  watch pages show transcript panels, two showed none).
- Content coverage: NOT established for any candidate (no playback;
  the third-party transcript route fails server-side, matching the
  producer's record). The candidates therefore remain OUT of the
  module under the producer's own rule. The durations, dates and
  identities above supply part of the missing data; playback-based
  coverage inspection still needs a session whose routes can stream
  the videos.

## Honest limits

- No video stream played in this environment; no content was verified
  at playback for any of the six videos this session touched (m1/m3
  items and these four).
- Watch-page values (durations, dates, views) were read from fetched
  pages; they are printed values, not playback measurements.
- The TOC absence check was first run case-sensitively, then re-run
  case-insensitively after the advisor flagged the casing risk; the
  case-insensitive result (zero occurrences) is the one relied on.
- Nothing in this receipt is quoted from memory; every label and value
  above was read from a surface this session opened, or is an explicit
  quotation of the ledger's prior entries as cited.
