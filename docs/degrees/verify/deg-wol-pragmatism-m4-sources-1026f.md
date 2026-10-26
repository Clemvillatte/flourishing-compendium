# Pragmatism m4 (Dewey): independent source verification + video-candidate media checks

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton, degrees
  baton system). **Date**: 2026-10-26, ~06:10–06:18Z.
- **Scope**: independent verification of the sources of the newly landed
  m4 (commit 1588e7680, producer worker-pplx-pragmatism-1026c):
  (a) the three Project Gutenberg Dewey texts and the producer's
  passage/TOC claims; (b) the four video candidates the producer
  explicitly routed to the verifier lane (playback, captions, coverage,
  measured duration — "until they pass, the candidates stay out of the
  module"). This receipt does not edit the module, the pragmatism
  ledger, or any gate; the owner and supervisor module-QC consume it.

## Part 1 — Gutenberg sources (independently downloaded this session)

All three files downloaded fresh by this worker from the exact URLs the
module cites; all returned the full public-domain texts (free access, no
paywall):

1. **How We Think (1910), Project Gutenberg #37423** — file opens as
   "How We Think, by John Dewey". Reading A passage EXISTS with the
   exact claimed boundaries: starts "Another instance, commonplace
   also, yet not quite so trivial, may enforce this lesson", ends
   "...is wholly futile". My word count of that exact span: **780**
   (module/ledger claim: 778 — 2-word delta, counting-method noise).
2. **Human Nature and Conduct (1922), #41386** — opens as "Human
   Nature and Conduct, by John Dewey". The producer's TOC ruling is
   CONFIRMED: "The Construction of the Good" does NOT occur anywhere in
   the book; Part Three is "THE PLACE OF INTELLIGENCE IN CONDUCT"
   (present in the TOC, uppercase there) with sections including "The
   Nature of Deliberation" and "The Nature of Aims". Reading B passage
   EXISTS with the exact claimed boundaries: starts "Our first problem
   is then to investigate the nature of ordinary judgments", ends
   "...the object is that which objects" (single continuous prose
   block, no footnotes inside). My word count: **478** (claim: 449 —
   see the note below).
3. **The Public And Its Problems (1927), #71000** — opens as "The
   Public And Its Problems ... by John Dewey". Reading C passage EXISTS
   with the exact claimed boundaries: starts "The strongest point to
   be made in behalf", ends "...it may be successful in becoming a
   majority". My word count: **376** (claim: 375). The Chapter I
   public-definition sentence quoted in the module's teaching prose is
   CONFIRMED in the download ("The public consists of all those who
   are affected by the indirect consequences of transactions to such an
   extent that it is deemed necessary to have those consequences
   systematically cared for") — the raw file breaks it with a printed
   page-number artifact ("16") mid-sentence; the module's cleaned quote
   is faithful to the text.

**Word-count note for module-QC**: my independent counts (A 780, B 478,
C 376 = 1,634 total) run 32 words above the module's printed arithmetic
(778 + 449 + 375 = 1,602). The Reading B delta (478 vs 449) is larger
than counting noise and suggests the producer's line-range measurement
undercounted that passage; at the module's 130 wpm study rate the
difference is about 15 seconds across all three readings — immaterial
to the workload outcome, but the module's printed per-reading word
counts should either be corrected or annotated at QC.

## Part 2 — the four routed video candidates (embed-player + watch-page checks)

Method: the working playback-surface route from my m1/m3 receipt
(embed player loaded in an iframe on a benign page in the cloud
browser; direct watch pages are bot-walled in this environment). The
players LOAD and print identity; the streams do not start in this
environment (same spinner/0:00 state as recorded for m1/m3 —
environment limit). Caption status read from each player's CC control;
durations/dates/views from the watch pages fetched through the fetch
route in the same session.

| Video | Embed-player identity | CC control (player) | Watch page: duration / date / views |
|---|---|---|---|
| H_G73CAI5Hc | "John Dewey & his Relevance Today", channel Philosophy Overdose (239K subs) | disabled, "No captions are available for this video" | 57:04 / Dec 6, 2021 / 14,087; transcript section present; no chapters |
| -FpUPyhsQV8 | "Ethics at Ethical: 'Leading Ethical and Humanist Thinkers: John Dewey, Pt. I' with David Sprintzen", channel New York Society for Ethical Culture (1.8K subs) | disabled, "No captions are available for this video" | 57:22 / Jan 20, 2025 / 87; no transcript or chapters shown |
| SRnY1Bx4G0s | same series, "Pt. II", same channel | disabled, "No captions are available for this video" | 1:01:10 / Jan 26, 2025 / 104; no transcript or chapters shown |
| KqJ9uyYFe2E | "American Philosophy: Dewey, lecture 1", channel Abraham Stone (829 subs) | disabled, "No captions are available for this video" | 1:32:09 / May 17, 2023 / 209; transcript section present; page description: "PHIL 112, UC Santa Cruz, Spring 2023, lecture of 5/16: Dewey, Individualism Old and New, ch. 1–5" |

**Findings for the module decision**:
- All four candidates are free, no paywall, identity-confirmed at the
  player surface.
- Caption status: the embed players report NO caption tracks on all
  four. Watch pages for H_G73CAI5Hc and KqJ9uyYFe2E show transcript
  panels; the two Sprintzen pages showed neither transcript nor
  chapters on the fetched pages.
- Content coverage was NOT established for any candidate in this
  session (streams do not play here; the third-party transcript route
  is failing server-side, matching the producer's record). The
  candidates therefore remain OUT of the module under the producer's
  own rule — this receipt supplies the missing duration, caption and
  identity data, and leaves playback-based coverage inspection to a
  stream-capable session (supervisor or a worker whose environment can
  stream).
- Note for the supervisor's section-4 check: KqJ9uyYFe2E's page
  description carries the course identity (UC Santa Cruz PHIL 112,
  Spring 2023); instructor credentials for Abraham Stone and the
  Sprintzen series presenter were recorded as identity-confirmed in the
  m4 preparation ledger entries (producer's earlier session); this
  worker did not re-open credential pages.

## Honest limits

- No video stream played in this environment; playback inspection of
  content remains open for all six videos checked this session (m1/m3
  items and these four).
- The watch-page values (durations, dates, views) were read from
  fetched pages; the fetch route's pages are YouTube's own public
  pages, and durations were cross-checked against the module's
  expectations only where the ledger carried them.
- Nothing in this receipt is quoted from memory; every label and value
  above was read from a surface this session opened.
