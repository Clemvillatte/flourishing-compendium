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
- The pool's "~25h teaching layer (10h + 15h)" figure was NOT corroborated by these retrievals: the pages state flexible-schedule boilerplate ("10 hours a week" for 2 months / 2 weeks) plus partial per-module figures (Plato course: 3+3+4h + one anomalous "75 hours" module; Aristotle course: no per-module figures in the page read). The teaching-layer floor must be restated from page-stated figures only: at least 10h granular (Plato course, excluding the anomalous M2) + UNMEASURED (Aristotle course) + MIT OCW notes + doc library.
- Caveat (b) (instructional content not inspected) is unchanged by this pass — page-level only.

## 4. Follow-ups owed

1. A browser-capable pass should test the actual enrollment flow for the free-audit route (the pages name "Full Course, No Certificate" as a possibility without confirming availability).
2. The pool owner should correct GREEK-TEACH-1/3 workload figures to the page-stated numbers and flag the M2 "75 hours" anomaly.
3. Content inspection of the videos remains owed before module assignment.

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

**Ebrey half — archive.org item OPENED: 38 preserved recordings of a course**: https://archive.org/details/Philosophy_25A_Fall_2008_UC_Berkeley_Ancient_Philosophy — "Philosophy 25A|Fall 2008|UC Berkeley (Ancient Philosophy), David B. Ebrey": **38 lecture recordings, each in M4A/OGG/MP3 (114 files), free download and streaming**, license **CC BY-NC-ND 3.0**, description states provenance ("Copied to archive.org on closure of the UCB podcast site in order to preserve access"; gaps in numbering = holidays/no recording). The per-lecture titles run the Plato-to-Aristotle arc (with numbering gaps = missing recordings, per the item's own description): Intro; Crito II; Laches II; Meno I-III; Phaedo I-IV; Republic I-VII; Nicomachean Ethics I-IX; Physics I-VIII; Categories I-II; Prior and Posterior Analytics; Plato Review; Aristotle Review. **Credentials note (search-surfaced, not fetched this session)**: Ebrey's own teaching page states he taught this Intro to Ancient Philosophy at UC Berkeley in 2008 and that the recordings "are still available here" after Berkeley removed them from iTunes; he is now listed at Humboldt University Berlin. Durations UNMEASURED (mp3 file sizes 22-41MB suggest roughly 40-75 min per lecture — an estimate from file size, NOT a measured figure).

**Effect**: GREEK-TEACH-6's three halves are now page-opened (Strauss: share pages + one file HEAD-check; Bloom: one segment page; Ebrey: the archive.org item page with its file listing read). The Ebrey item is 38 PRESERVED recordings (not claimed as a complete course — the item's own description records numbering gaps). No superlative or completeness claim is made. Ebrey's institutional credentials remain search-supported (his teaching page and HU-Berlin listing were surfaced in search, not fetched).

## 8. Addendum 4 (same session) — Ebrey available-recording runtime computed from the files' own metadata

The archive.org metadata API (https://archive.org/metadata/Philosophy_25A_Fall_2008_UC_Berkeley_Ancient_Philosophy) was queried directly: the 38 mp3 files carry their own length fields. **Sum of the Internet Archive-reported duration metadata for the 38 mp3 files: 106,269 seconds = 29.519 hours (average 46.6 minutes per file)** — e.g., 01-Intro 45:50; 04-Crito II 47:40; 06-Laches II 49:50; 10-Meno I 47:32. This is AVAILABLE RECORDING RUNTIME from the files' own metadata, not credited instruction: it is not a publisher estimate, and the D3 assignment arithmetic (which recordings are assigned, whole or in segments) still determines credited hours per the spec. All 38 files carry valid positive length fields (validated; none missing); per-file durations are saved for reproducibility in `docs/degrees/verify/ebrey-25a-per-file-durations.txt`.

**Effect on the greek hours picture**: the verified-candidate teaching layer now includes an available-runtime-computed 29.519h set of preserved recordings (Ebrey) + the Strauss recordings (unmeasured; 14 files for one course page verified) + Bloom segments (short) + the Coursera Meyer courses (audit route unconfirmed; page figures unreliable) + MIT OCW notes + the doc library. The greek pool's gap-7 arithmetic should be restated from this receipt's figures.
