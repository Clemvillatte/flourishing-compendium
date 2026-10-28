# Psychological Dimensions — live-content additions, session 1028b

Agent: supervisor-pplx-1028b (batons supervisor + deg-psychdim). Date: 2026-10-28.
Owner directive followed: the 2026-10-28 instruction to update the four live degrees with
verified mined content (docs/degrees/verify/degrees-live-integration-1028a.md). Psychdim
first, per the owner's degree order. All three additions are OPTIONAL-track lectures; no
required assignment was changed, so the measured required-hours line (3.8 h) is unchanged.

## Why these modules

The live data block had no optional teaching content in mod-pd-4 (attention) or mod-pd-6
(motivation and following through). Every other module already had at least one optional
lecture or reading. These three lectures fill those two gaps.

## Sources (all three from one course)

Course: NPTEL "Psychology of Stress, Health and Well-Being", Prof. Dilwar Hussain, IIT
Guwahati. Course record fetched directly: https://nptel.ac.in/courses/109103182/__data.json
(lists 34 lectures with their YouTube IDs; English VTT links exist only for lectures 1-9
except 6, so the three lectures below were read from NPTEL's own transcript PDFs instead).

Instructor credential: IIT Guwahati, Department of Humanities and Social Sciences faculty
page (https://www.iitg.ac.in/hss/faculty_page.php), fetched this session — "Dilwar Hussain",
designation "Professor", area of specialization "Psychology". (The transcript PDFs, recorded
in 2021, still call him Associate Professor; the faculty page is the current record.)

Transcript carrier: the NPTEL transcript PDFs as mirrored on PSG College of Arts & Science's
NPTEL local server (elearn.psgcas.ac.in). Each PDF carries the NPTEL course header, the
lecturer's name and IIT Guwahati, and slide-time stamps. The mirror is a carrier for reading
only; learners are sent to the official NPTEL IIT Guwahati YouTube upload.

| ID | Lecture | Watch page (fetched) | Duration (page) | Transcript read in full | Module |
|---|---|---|---|---|---|
| PD-D2-65 | Lec 16: Coping with meditation and mindfulness | https://www.youtube.com/watch?v=pUCK0q0M2BU (channel NPTEL IIT Guwahati, uploaded 27 Jan 2021) | 1:04:06 | http://elearn.psgcas.ac.in/nptel/courses/video/109103182/lec16.pdf (31 pp, ~7,260 words) | mod-pd-4 optional |
| PD-D2-66 | Lec 32: Self-determination, motivation, and well-being | https://www.youtube.com/watch?v=ydw7o1AVmLk (NPTEL IIT Guwahati, 12 Feb 2021) | 1:00:45 | http://elearn.psgcas.ac.in/nptel/courses/video/109103182/lec32.pdf (27 pp, ~7,330 words) | mod-pd-6 optional |
| PD-D2-67 | Lec 34: Life goals and well-being | https://www.youtube.com/watch?v=Uzre77Qyxug (NPTEL IIT Guwahati, 11 Feb 2021) | 40:45 | http://elearn.psgcas.ac.in/nptel/courses/video/109103182/lec34.pdf (22 pp, ~5,540 words) | mod-pd-6 optional |

## What each lecture teaches (verbatim lines from the transcripts)

PD-D2-65 (attention). Walsh and Shapiro's definition of meditation as "a family of
self-regulation practices that try to bring mental processes under voluntary control by
focusing attention and awareness"; Kabat-Zinn's "paying attention on purpose in the present
moment and without judgment"; three components, "One is called intention; second is
attention, and third is attitude"; attitude defined as "the qualities of attention"; it ends
with a short listening practice: "If your mind wanders throughout this process, return to
your breathing and return to the present moment to your felt awareness of the body."
Fit for mod-pd-4 ("Giving Attention a Useful Direction"): it treats attention as something
you can train and point, which is the module's practical question.

PD-D2-66 (motivation). "today we will talk about the concept of self-determination theory";
the regulation continuum from external regulation to introjection ("Introjection occurs when
a person's ego is involved, such as humiliation, guilt, pride, and so on") and onward; it
closes: "The better it is in terms of performance, engagement, sense of well-being,
efficiency, and so on." Fit for mod-pd-6: it teaches at lecture length the same continuum
the module's required reading (PD-M6-04, Figure 1) presents in one figure.

PD-D2-67 (following through, meaning). "Life goals can be thought of as internal
representations of desired outcomes"; "Life goals provide us with a sense of meaning and
direction in our lives"; the lecture's own outline: "we will talk about the concept of
intrinsic and extrinsic life goals ... And at the end we will talk about the concept of smart
goals." Fit for mod-pd-6: it links goal choice to well-being, which is the Walk-of-Life
question behind following through.

## Scope test (centering clause)

All three pass the mission gate: each is about how a person can suffer less and live better
(training attention, finding reasons of one's own, choosing goals that serve well-being),
taught by a university psychologist, free, English, no paywall. Considered and NOT added:
Lec 26 "Skills of EI-Self-Motivation" from the Psychology of Emotion course (VTT read in
full, 0:56:09) — it covers the same self-determination ground as Lec 32 through an
emotional-intelligence lens; adding both would repeat content. Recorded here as a reserve.

## Checks

- `python3 scripts/degrees_apply_assignments.py deg-psychdim --write`: 3 new sources, 3 refs.
- `node --check site/assets/app.js`: OK.
- `python3 scripts/tests/degrees_learner_audit.py`: 0 defects across the four degrees.
