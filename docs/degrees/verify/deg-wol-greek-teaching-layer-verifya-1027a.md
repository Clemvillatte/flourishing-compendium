# deg-wol-greek — teaching-layer verification receipt (verify-a, 2026-10-27)

**Verifier**: worker-pplx-verifya-1027a (baton `deg-verify-a`). Receipt only — the greek pool file was not edited by this session (its authoring lane owns the file).
**Session T0**: 2026-10-27 11:18:36 UTC; receipt written ~11:40 UTC.
**Scope**: the greek D2 pool's gap 7 caveat (a) — "free-audit status is corroborated by third-party sources but NOT confirmed on the Coursera pages themselves" for GREEK-TEACH-1 (UPenn Meyer, Plato course) and GREEK-TEACH-3 (UPenn Meyer, Aristotle course). Both course pages were fetched and read directly this session.

## 1. GREEK-TEACH-1 — "Ancient Philosophy: Plato & His Predecessors" (https://www.coursera.org/learn/plato) — page OPENED

- Instructor: Susan Sauvé Meyer, University of Pennsylvania (stated on the page).
- **Free-audit status: STILL NOT CONFIRMED on the rendered page.** The page body names Certificate purchase, a Free Trial for eligible learners, and a possible "Full Course, No Certificate" option — it does NOT show "Enroll for free" or a confirmed free-audit route. (The string "Enroll for free." appears in the page's meta description surfaced by search tooling — a weaker signal than page-body confirmation; the pool's caveat (a) STANDS.)
- **Workload figures on the page**: "2 months to complete, at 10 hours a week" (the page's flexible-schedule framing — this is the generic Coursera boilerplate, NOT a measured instruction total); per-module stated durations: M1 "The Milesians & Heraclitus" 3 hours; M2 "Parmenides to Plato" — the page states **"75 hours to complete", an obvious page-data anomaly** (recorded as-is, not interpreted; the true figure is likely a misrendered minutes/hours string); M3 "Plato on Virtue, Teaching, & Justice" 3 hours; M4 "Plato on Reality & Goodness" 4 hours. The pool's "~10h" figure is therefore NOT the page's own total — the page's granular figures sum to at least 10h (3+3+4) plus the anomalous M2; the "10 hours a week × 2 months" framing is boilerplate.
- **Topics (page-stated, module level)**: M1 Thales, Anaximander, Anaximenes, Xenophanes, Heraclitus; M2 Parmenides, Empedocles, Anaxagoras, Democritus, Plato's portrait of Socrates; M3 virtue/teaching/justice, learning as recollection, city-soul analogy; M4 Forms, goodness, Plato's cosmology. Coverage of the Presocratics + Plato D1 rows is corroborated at page level.

## 2. GREEK-TEACH-3 — "Ancient Philosophy: Aristotle and His Successors" (https://www.coursera.org/learn/aristotle) — page OPENED

- Instructor: Susan Sauvé Meyer, University of Pennsylvania (stated on the page).
- **Free-audit status: STILL NOT CONFIRMED on the rendered page** — same finding as above (Free Trial / possible "Full Course, No Certificate" named; no "Enroll for free" in the page body; the meta description carries "Enroll for free"). Caveat (a) STANDS.
- **Workload figures on the page**: "2 weeks to complete, at 10 hours a week" (flexible-schedule boilerplate — NOT a measured total); 5 modules; no per-module durations were exposed in the page read. The pool's "~15h" figure is NOT a page-stated total.
- **Topics (page-stated, module level)**: M1 Aristotle's Categories (anti-Platonic metaphysics, substances); M2 Natural Philosophy (matter/form, goal-directed processes, soul); M3 Ethics (unmoved mover, happiness, virtues); M4 Epicureanism (atomism, ataraxia, philosophy as therapeutic); M5 Stoicism (providence, fate). Coverage of the Aristotle + Hellenistic D1 rows is corroborated at page level.

## 3. Effect on the greek pool's gap 7

- Caveat (a) is now verified-as-standing with direct page evidence: neither Meyer course page confirms a free-audit route in its body. The free route remains unconfirmed — the pool owner must either locate the audit confirmation elsewhere (e.g., an enrollment-flow test in a browser) or keep the caveat.
- The pool's "~25h teaching layer (10h + 15h)" figure is NOT supported by the pages' own statements: the pages state flexible-schedule boilerplate ("10 hours a week" for 2 months / 2 weeks) plus partial per-module figures (Plato course: 3+3+4h + one anomalous "75 hours" module; Aristotle course: no per-module figures in the page read). The teaching-layer floor must be restated from page-stated figures only: at least 10h granular (Plato course, excluding the anomalous M2) + UNMEASURED (Aristotle course) + MIT OCW notes + doc library.
- Caveat (b) (instructional content not inspected) is unchanged by this pass — page-level only.

## 4. Follow-ups owed

1. A browser-capable pass should test the actual enrollment flow for the free-audit route (the pages name "Full Course, No Certificate" as a possibility without confirming availability).
2. The pool owner should correct GREEK-TEACH-1/3 workload figures to the page-stated numbers and flag the M2 "75 hours" anomaly.
3. Content inspection of the videos remains owed before module assignment.
