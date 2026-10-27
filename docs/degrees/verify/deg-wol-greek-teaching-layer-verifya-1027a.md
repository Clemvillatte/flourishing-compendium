# deg-wol-greek — teaching-layer verification receipt (verify-a, 2026-10-27)

**Verifier**: worker-pplx-verifya-1027a (baton `deg-verify-a`). Receipt only — the greek pool file was not edited by this session (its authoring lane owns the file).
**Session T0**: 2026-10-27 11:18:36 UTC; receipt written ~11:40 UTC.
**Scope**: the greek D2 pool's gap 7 caveat (a) — "free-audit status is corroborated by third-party sources but NOT confirmed on the Coursera pages themselves" for GREEK-TEACH-1 (UPenn Meyer, Plato course) and GREEK-TEACH-3 (UPenn Meyer, Aristotle course). Both course pages were fetched and read directly this session.

## 1. GREEK-TEACH-1 — "Ancient Philosophy: Plato & His Predecessors" (https://www.coursera.org/learn/plato) — page OPENED

- Instructor: Susan Sauvé Meyer, University of Pennsylvania (stated on the page).
- **Free-audit status: STILL NOT CONFIRMED on the rendered page.** The page body names Certificate purchase, a Free Trial for eligible learners, and a possible "Full Course, No Certificate" option — it does NOT show "Enroll for free" or a confirmed free-audit route. (The string "Enroll for free." appears in the page's meta description surfaced by search tooling — a weaker signal than page-body confirmation; the pool's caveat (a) STANDS.)
- **Workload figures on the page**: "2 months to complete, at 10 hours a week" (the page's flexible-schedule framing — this is the generic Coursera boilerplate, NOT a measured instruction total); per-module stated durations: M1 "The Milesians & Heraclitus" 3 hours; M2 "Parmenides to Plato" — this retrieval returned the string **"75 hours to complete"**, UNCONFIRMED (a prompted extraction; the underlying markup was not re-read, so this may be a retrieval artifact rather than a page defect); M3 "Plato on Virtue, Teaching, & Justice" 3 hours; M4 "Plato on Reality & Goodness" 4 hours. The pool's "~10h" figure was NOT corroborated by this retrieval — the retrieval returned granular figures of 3+3+4h plus the unconfirmed M2 string; the "10 hours a week × 2 months" framing is the page's flexible-schedule text.
- **Topics (page-stated, module level)**: M1 Thales, Anaximander, Anaximenes, Xenophanes, Heraclitus; M2 Parmenides, Empedocles, Anaxagoras, Democritus, Plato's portrait of Socrates; M3 virtue/teaching/justice, learning as recollection, city-soul analogy; M4 Forms, goodness, Plato's cosmology. Coverage of the Presocratics + Plato D1 rows is corroborated at page level.

## 2. GREEK-TEACH-3 — "Ancient Philosophy: Aristotle and His Successors" (https://www.coursera.org/learn/aristotle) — page OPENED

- Instructor: Susan Sauvé Meyer, University of Pennsylvania (stated on the page).
- **Free-audit status: STILL NOT CONFIRMED on the rendered page** — same finding as above (Free Trial / possible "Full Course, No Certificate" named; no "Enroll for free" in the page body; the meta description carries "Enroll for free"). Caveat (a) STANDS.
- **Workload figures on the page**: "2 weeks to complete, at 10 hours a week" (flexible-schedule boilerplate — NOT a measured total); 5 modules; no per-module durations were exposed in the page read. The pool's "~15h" figure was NOT corroborated by this retrieval (no per-module durations were exposed in the page read).
- **Topics (page-stated, module level)**: M1 Aristotle's Categories (anti-Platonic metaphysics, substances); M2 Natural Philosophy (matter/form, goal-directed processes, soul); M3 Ethics (unmoved mover, happiness, virtues); M4 Epicureanism (atomism, ataraxia, philosophy as therapeutic); M5 Stoicism (providence, fate). Coverage of the Aristotle + Hellenistic D1 rows is corroborated at page level.

## 3. Effect on the greek pool's gap 7

- Caveat (a) is now verified-as-standing with direct page evidence: neither Meyer course page confirms a free-audit route in its body. The free route remains unconfirmed — the pool owner must either locate the audit confirmation elsewhere (e.g., an enrollment-flow test in a browser) or keep the caveat.
- The pool's "~25h teaching layer (10h + 15h)" figure was NOT corroborated by these retrievals: the pages state flexible-schedule boilerplate ("10 hours a week" for 2 months / 2 weeks — ADVERTISED workloads, not verified instruction totals) plus partial per-module figures (Plato course: 3+3+4h + one unconfirmed "75 hours" retrieval string; Aristotle course: no per-module figures in the page read). Any restated floor must use ADVERTISED-workload framing: at least 10h granular (Plato course, excluding the anomalous M2) + UNMEASURED (Aristotle course) + MIT OCW notes + doc library.
- Caveat (b) (instructional content not inspected) is unchanged by this pass — page-level only.

## 4. Follow-ups owed

1. A browser-capable pass should test the actual enrollment flow for the free-audit route (the pages name "Full Course, No Certificate" as a possibility without confirming availability).
2. The pool owner should restate GREEK-TEACH-1/3 workload figures as ADVERTISED workloads (not corroborated as instruction totals by these retrievals) and mark the M2 "75 hours" string as an unconfirmed retrieval artifact pending an unprompted re-read.
3. Content inspection of the videos remains owed before module assignment (GREEK-TEACH-6's halves are page-opened with one Strauss file HEAD-checked and one Bloom segment page opened — not content-verified).

## 5. Addendum (same session, ~11:42 UTC) — GREEK-TEACH-4 (IAI Pigliucci) page opened

- **Page OPENED**: https://iai.tv/iai-academy/courses/info?course=stoicism-as-practical-philosophy — "Stoicism as Practical Philosophy", Massimo Pigliucci, described on the page as a philosopher and professor at the City College of New York (CUNY), author of How to Be a Stoic and Beyond Stoicism.
- **Structure**: two parts — Part One "Stoic Theory" (living according to nature), Part Two "Stoic Exercises" (applying Stoic ideas, the cosmopolis). The page states NO lesson count and NO course hours.
- **Free-route status: AMBIGUOUS — the page's own offer text is unexplained.** The page says "Get this course free, plus unlimited IAI access & 50% off all Academy courses" but does not state the offer's conditions, whether a free tier exists, or whether the "free" course is bundled with a paid IAI subscription. The earlier greek pool line (free route = "the IAI access tier") is NOT confirmed by this page read; the ambiguity must be resolved by an enrollment-flow test or a supervisor/owner ruling before GREEK-TEACH-4 is treated as a verified free carrier.
- Topics on the page (virtue, control, happiness, cosmopolis, exercises) match the Stoicism D1 row at page level.

## 6. Addendum 2 (same session) — GREEK-TEACH-6 Strauss half: share pages opened, ONE file HEAD-checked

The Leo Strauss Center pages could not be fetched through the search fetcher (robots-blocked) but were fetched directly via HTTP this session:

- **Courses index OPENED** (https://leostrausscenter.uchicago.edu/audio-transcripts/courses-audio-transcripts/, 65,892 bytes): lists the Plato courses including Meno spring 1966, Protagoras spring 1965, Republic autumn 1961, Republic spring 1957, Gorgias autumn 1963 (and more; 12 Plato course mentions). The license statement is ON THE PAGE: "non-commercial, personal, educational use. Any other use... requires the permission of the Estate of Leo Strauss."
- **One course page OPENED** (https://leostrausscenter.uchicago.edu/plato-gorgias-autumn-1963/): hosts **14 direct .mp3 files** (S3-hosted direct-download URLs) and **1 PDF transcript**.
- **File-level check (partial)**: an HTTP HEAD on the FIRST mp3 returns **200, content-type audio/mpeg, 247,120,439 bytes** — that one file is live; the PDF transcript returns **200, application/pdf, 3,372,974 bytes** — live. The other 13 mp3 links were NOT individually checked. No inference is drawn from the byte count.

**Result**: the Strauss half of GREEK-TEACH-6 upgrades from "corroborated via search excerpts" to **share-page-opened with one file HEAD-checked** (the first mp3 and the PDF transcript are live, directly downloadable, no login; the license is on the page). Durations remain unmeasured and 13 of the 14 mp3 links were not individually checked. The Bloom and Ebrey halves remained corroborated-only at this point (direct fetches follow in addendum 3).

## 7. Addendum 3 (same session) — Bloom and Ebrey halves: pages opened (candidate evidence)

**Bloom half — one lecture page OPENED**: https://www.youtube.com/watch?v=yRnzrDpGN5A — "Allan Bloom on Plato's Apology of Socrates 1", channel "Allan Bloom", uploaded 2009-02-23 (no claim is made about the recording date or provenance beyond what the page states — the death date is NOT from an opened source), **9:49**, transcript section on the page; the description confirms a lecture on "the portico to the Platonic corpus" teaching Plato's Apology. Open Culture (search-surfaced) describes these as audio recordings with photos, the first in a series on Plato's Apology. Honest limits: ONE video of the series opened; the series' full extent is not cataloged; each segment is short (~10 min).

**Ebrey half — archive.org item OPENED: 38 preserved recordings of a course**: https://archive.org/details/Philosophy_25A_Fall_2008_UC_Berkeley_Ancient_Philosophy — "Philosophy 25A|Fall 2008|UC Berkeley (Ancient Philosophy), David B. Ebrey": **38 lecture recordings, each in M4A/OGG/MP3 (114 files), free download and streaming**, license **CC BY-NC-ND 3.0**, description states provenance ("Copied to archive.org on closure of the UCB podcast site in order to preserve access"; gaps in numbering = holidays/no recording). The per-lecture titles run the Plato-to-Aristotle arc (with numbering gaps = missing recordings, per the item's own description): Intro; Crito II; Laches II; Meno I-III; Phaedo I-IV; Republic I-VII; Nicomachean Ethics I-IX; Physics I-VIII; Categories I-II; Prior and Posterior Analytics; Plato Review; Aristotle Review. **Credentials note (search-surfaced, not fetched this session)**: Ebrey's own teaching page states he taught this Intro to Ancient Philosophy at UC Berkeley in 2008 and that the recordings "are still available here" after Berkeley removed them from iTunes; he is now listed at Humboldt University Berlin. Durations of these Strauss recordings UNMEASURED (no duration metadata was read for them this session).

**Effect**: GREEK-TEACH-6's three halves are now page-opened (Strauss: share pages + one file HEAD-check; Bloom: one segment page; Ebrey: the archive.org item page with its file listing read). The Ebrey item is 38 PRESERVED recordings (not claimed as a complete course — the item's own description records numbering gaps). No superlative or completeness claim is made. Ebrey's institutional credentials remain search-supported (his teaching page and HU-Berlin listing were surfaced in search, not fetched).

## 8. Addendum 4 (same session) — Ebrey available-recording runtime computed from the files' own metadata

The archive.org metadata API (https://archive.org/metadata/Philosophy_25A_Fall_2008_UC_Berkeley_Ancient_Philosophy) was queried directly: the 38 mp3 files carry their own length fields. **Sum of the Internet Archive-reported duration metadata for the 38 mp3 files: 106,269 seconds = 29.519 hours (average 46.6 minutes per file)** — e.g., 01-Intro 45:50; 04-Crito II 47:40; 06-Laches II 49:50; 10-Meno I 47:32. This is AVAILABLE RECORDING RUNTIME from the files' own metadata, not credited instruction: it is not a publisher estimate, and the D3 assignment arithmetic (which recordings are assigned, whole or in segments) still determines credited hours per the spec. All 38 files carry valid positive length fields (validated; none missing); per-file durations are saved for reproducibility in `docs/degrees/verify/ebrey-25a-per-file-durations.txt`.

**Effect on the greek hours picture**: the verified-candidate teaching layer now includes an available-runtime-computed 29.519h set of preserved recordings (Ebrey) + the Strauss recordings (unmeasured; 14 files for one course page verified) + Bloom segments (short) + the Coursera Meyer courses (audit route unconfirmed; page figures unreliable) + MIT OCW notes + the doc library. The greek pool's gap-7 arithmetic should be restated from this receipt's figures.

## 9. Addendum 5 (2026-10-27; exact event time not recorded; pushed with this update) — Strauss recordings: all 14 Gorgias files HEAD-checked live; two more course pages inventoried

- **All 14 Gorgias course mp3s HEAD-checked: every one returns 200, content-type audio/mpeg** (files 01–15 by name; numbering includes gaps). The PDF transcript remains live. This upgrades the Gorgias course from "one file HEAD-checked" to "all 14 recordings confirmed live at file level" (durations still unmeasured; content uninspected).
- **Two further Strauss course pages opened and their mp3 link counts read**: Plato, Meno spring 1966 — **16 mp3 links**; Plato, Protagoras spring 1965 — **34 mp3 links** (not individually HEAD-checked). Plato, Republic spring 1957 — 0 mp3 links on its page (possibly transcript-only or a different carrier; not investigated further this session). The Strauss Center index lists further Plato courses (Republic autumn 1961 and others) not yet inventoried.
- Aggregate picture (honest): the Strauss Center's Plato corpus carries at least 64 audio-file links across three inventoried course pages (14 + 16 + 34), all on the Gorgias set confirmed live. Durations unmeasured; content uninspected; the license (non-commercial, personal, educational use, Estate permission for other uses) is stated on the index page.

## 6. Addendum 5 (2026-10-27; exact event time not recorded; pushed with this update) — Bloom "Lectures on Socrates" series extent cataloged (Open Culture page opened)

The Open Culture page for "Allan Bloom's Lectures on Socrates (Boston College, 1983)" (https://www.openculture.com/allan-blooms-lectures-on-socrates-boston-college-1983 — opened this session) states:
- **Four lectures** in the series (Lecture 1-4), delivered at Boston College in 1983 under the series title "Philosophic Perspectives", intended to help teachers of undergraduates teach "those great works that are essential to a liberal education".
- Subject: the founding of the idea of liberal education; the meaning of the philosophic life as expressed by Socrates; the conflict between philosophy and the city, explored through an interpretation of Plato's Apology of Socrates.
- The page attributes its description to Archive.org; lecture durations are NOT stated on the page; no license/access terms stated beyond inclusion in Open Culture's free-courses collection.
- The page's Lecture 1 embed is the same YouTube video verified earlier (yRnzrDpGN5A, 9:49) — so the verified 9:49 segment is the first lecture of this four-lecture series. Lectures 2-4 were NOT opened this session (no provenance beyond the Open Culture page's listing).
- Topical fit: PLATO — Greek half (Apology; Socrates; liberal education) — CANDIDATE.

## 7. Addendum 6 (2026-10-27; exact event time not recorded; pushed with this update) — Bloom series UPGRADED: all four lectures live on Archive.org, full durations measured (6.12h)

The four lecture embeds on the Open Culture page resolve to Archive.org items (identifiers extracted from the page's raw HTML this session). All four items are LIVE via the archive.org metadata API, with audio files (VBR MP3 + Ogg Vorbis) and durations from the API's file metadata (same method as the Ebrey 25A set):

| Lecture | Archive.org identifier | mp3 | Duration (metadata) |
|---|---|---|---|
| 1 | AllanBloomsplatosApologyLecture | BloomSocratesApologybostonCollege1.mp3 | 2,677.19s = 44:37 |
| 2 | AllanBloomsSocratesLecture2 | BloomSocratesApologybostonCollege2.mp3 | 2,795.7s = 46:36 |
| 3 | AllanBloomsSocratesLecture3 | BloomSocratesApologybostonCollege3.mp3 | 2,783.32s = 46:23 |
| 4 | AllanBloomsSocratesLecture4 | BloomSocratesApologybostonCollege4.mp3 | 2,754.72s = 45:55 |
| **Total** | | | **22,021.76s = 6.117h** |

- Findings: (1) the earlier 9:49 YouTube segment (yRnzrDpGN5A) is a SEGMENT of Lecture 1 — the full lecture is 44:37; (2) the four-lecture series has 6.12h of AVAILABLE RUNTIME (not credited instruction); (3) no license is stated in the Archive.org metadata (license: n/a); (4) the mp3 files' playback was not tested (metadata-only measurement, Ebrey method).
- Implication for the M1/B1 estimate: the pool's "7h 40m" for the Bloom half is close to but not exactly this measured 6.12h available runtime; the estimate is NOT corroborated as instruction hours.
- Topical fit: PLATO — Greek half (Plato's Apology; Socrates; liberal education) — CANDIDATE for a module-scale source (~6h, meets the ≥6h/module floor as available runtime; checkpoint ruling needed on available-runtime vs instruction-hours).

Addendum 6 supplement: all four mp3 files HEAD-checked live this session (200 audio/mpeg; 42.8-44.7 MB each) — file servability confirmed beyond metadata existence.

Addendum 4 supplement (2026-10-27, pushed with this update; exact event time not recorded): the two further Strauss course pages were re-opened this session and their mp3 links individually HEAD-checked: Plato, Meno spring 1966 — 16 mp3 links, 16 HEAD-200; Plato, Protagoras spring 1965 — 34 mp3 links, 34 HEAD-200 (S3-hosted direct downloads, same pattern as the Gorgias page). Combined Strauss mp3s now verified live: Gorgias 14 + Meno 16 + Protagoras 34 = 64. Durations remain UNMEASURED for all Strauss recordings.

## 8. Addendum 7 (2026-10-27; exact event time not recorded; pushed with this update) — Ebrey credentials CLOSED (institutional corroboration) and current-affiliation note CORRECTED

Two pages opened this session:
- **UC Berkeley Department of Philosophy course listing** (https://philosophy.berkeley.edu/people/courses/174 — opened): "David Ebrey's Courses" — Fall 2008: PHIL 25A, Ancient Philosophy (also Spring 2009 PHIL 290-2 Plato's Phaedo; Spring 2008 PHIL 290-8 Plato's Meno; Fall 2007 PHIL 160 Plato). This INSTITUTIONALLY corroborates that Ebrey taught the recorded Fall 2008 course — the earlier "search-surfaced, not fetched" caveat on his teaching provenance is now closed by the department's own listing.
- **His own homepage** (https://www.davidebrey.com/ — opened): current position is **Serra Húnter Fellow at the University of Barcelona**; past positions include Humboldt-University of Berlin, Northwestern University, and UC Berkeley.
- CORRECTION to the earlier credentials note: the prior "he is now listed at Humboldt University Berlin" statement (search-surfaced) is superseded — per his own opened homepage, Humboldt is a PAST position and his current affiliation is the University of Barcelona.
- Effect: the Ebrey half's instructor credentials are now page-verified (Berkeley department listing + his own homepage); the 38-recording set's provenance statement on the archive.org item (copied on closure of the UCB podcast site) stands as before.

Addendum 7 supplement — the M2 "75 hours" string RE-CHECKED (2026-10-27, pushed with this update; exact event time not recorded): a second independent rendered retrieval of the Coursera Plato page again returned "Parmenides to Plato — 75 hours to complete" (same as the first retrieval), while sibling modules show 3h/3h/4h. The static HTML (872KB, curl) contains NO "hours to complete" strings at all — the figures are JavaScript-rendered, so the raw markup cannot adjudicate. Finding: the string is REPRODUCIBLE across two rendered retrievals but unverifiable against static markup; given the sibling-module figures (3/3/4h) and the page's own "2 months at 10 hours a week" framing, the 75h figure is most plausibly a page data-entry error on Coursera's side — but that is an inference, not a verified fact. The pool's per-module figures for this course should not use the 75h string without an owner ruling; the "not corroborated" flag stands, now with the two-retrieval reproduction recorded.

Addendum — IAI Pigliucci free-route offer text captured verbatim (2026-10-27, pushed with this update; exact event time not recorded): a targeted re-fetch of the course page returned the offer exactly as: "Get this course free, plus unlimited IAI access & 50% off all Academy courses" (appears twice on the page). No prices, no eligibility conditions, no trial terms are stated anywhere on the page. The "free" is bundled with membership ("unlimited IAI access") — the offer's conditions are NOT explained on the page, so the free route remains UNVERIFIED (likely a subscription-funnel banner; that characterization is an inference, not a page statement). No change to the pool row's caveat.
