# deg-arch D1 content audit — deg-philosophy anchors (worker-pplx-dosr4-1026b, 2026-10-26)

Follow-up to the rem6 HTTP-status audit: content verification of the four
syllabus anchors cited by docs/degrees/inventory/deg-philosophy.md (a D1
file with the degree's supersession ruling requested from the owner). Three
of the four anchors (UF, Berkeley, ASU) were content-read this session
(PDFs downloaded with a browser user-agent and text-extracted locally;
the ASU PDF via a browser-resolved direct URL, see its section); the
Wesleyan anchor could not be re-verified, as detailed below. Course
identifications and the D1's
attributed content claims were checked against the syllabus text. No
live-lane files were modified.

Three of the four anchors were fetched and content-read this session; the
Wesleyan anchor could not be re-verified (DNS failure). Repository revision inspected at recheck: the D1 file at
docs/degrees/inventory/deg-philosophy.md at commit bee8d65 (its last change
before this audit; recorded via git log -1 at recheck time).

Clock: session T0 2026-10-26 13:00:39Z (recorded in T0.txt; cross-checked
against GitHub's HTTP Date header). Recorded readings during this audit:
13:29:48Z (failed save), 13:29:52Z (post-save). Correction-round readings: 13:32:16Z local, 13:32:10Z
external header; ASU-verification save completed 13:33:19Z. No completion
time is asserted beyond these recorded readings.

## Anchor 1 — Wesleyan PHIL 221 (philife.nd.edu) — NOT VERIFIABLE AT HEAD
The host failed DNS resolution from this environment this session (see the
rem6 HTTP-status receipt). The D1 quotes the syllabus's course description
and week schedule; independent re-verification requires the Wayback snapshot
(listed at 20210511082024, not opened this session) or a live substitute.
Flagged to the lane owner with the earlier finding.

## Anchor 2 — University of Florida CLA 6805 Roman Stoicism, Spring 2022, Dr. Velvet L. Yates — CONTENT VERIFIED
PDF fetched, extracted and read. Course ID confirmed (CLA 6805 Classical
Traditions: Roman Stoicism, Spring 2022, Yates). D1 claims verified in the
syllabus text: Sandbach (2 hits), Cicero's On Moral Ends (3), Seneca's
Letters (10), Hadot's Inner Citadel (7, listed as the Marcus Aurelius
text), Marcus Aurelius in three parts (Weeks 11/13/14: "Marcus Aurelius
Part 1/2/3"), the "pop Stoicism" component (short translation
assignments and a "pop Stoicism" blog presentation), and the
applying-Stoicism-to-contemporary-situations strand.

## Anchor 3 — Arizona State University PHI 420 Stoicism, Spring B 2021, Dr. Sandra Woien — CONTENT VERIFIED (via browser-resolved direct PDF)
Initially the URL returned a JavaScript app shell and could not be statically
read. Following advisor QC, the page was opened in a JS-executing cloud
browser: the app's "View Syllabus" link resolves to a direct PDF at
https://class-syllabus-prod.s3.dualstack.us-west-2.amazonaws.com/2231/17163/syllabus-2231-17163.pdf,
which was then fetched and text-extracted. Course ID confirmed ("Syllabus for
PHI 420: Stoicism (2021 Spring - B)", Spring B 2021 Sections 20863/35034,
Instructor Dr. Sandra Woien, sandra.woien@asu.edu; Irvine's Guide to the
Good Life as required text). The D1's attributed claims are verified
VERBATIM in the Course Overview: "This course starts with a general
introduction to Stoicism including its rise and fall"; "certain
psychological techniques along with the four cardinal virtues endorsed by
the Stoics"; "seminal Stoics in historical order"; "reflective journal
activities" (with the journal a graded component worth 35 points); seminal
figures Epictetus and Marcus Aurelius; Stoicism as reflective practice.
This supersedes the earlier "static verification not possible" flag — the
anchor is now independently content-verified.

## Anchor 4 — UC Berkeley Philosophy 161 Aristotle, Fall 2014, Klaus Corcilius — CONTENT VERIFIED
PDF fetched, extracted and read. Course ID confirmed (Philosophy 161 –
Aristotle, Corcilius). D1 claims verified in the syllabus text: the
theoretical sequence (Categories, On Interpretation, syllogistic,
Posterior Analytics, Physics, prime mover, On the Soul, Metaphysics) and
the practical core — "The Argument from Human Function: NE I, 7-8" (the
function argument), "Voluntary action, choice and responsibility: NE III
1-5", "Incontinence NE VII 1-3", contemplation, and Politics.

## Verdict

Three of four anchors are content-verified (UF, Berkeley, ASU — the ASU
anchor via a browser-resolved direct PDF URL) with every attributed claim
checked found in the syllabus text. One anchor (Wesleyan) is unreachable
at HEAD (DNS failure; D1 quotes stand on the lane owner's session; the
Wayback snapshot was not opened). The degree's D2 remains blocked on the
supersession ruling regardless. The D1 file was not edited (live lane).

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Recorded clock readings: post-save 13:29:52Z; ASU-verification save
completed 13:33:19Z.

## Addendum (recorded reading 13:41Z, T+41) — Wesleyan Wayback verification

Following advisor QC direction, the Wayback snapshot itself was opened
(this session's third bounded attempt: direct fetch is bot-blocked from
this environment; the fetch-tool render did not expose the PDF; the
JS-executing cloud browser rendered it). The archived document is the
PHIL 221 syllabus: "PHIL 221 / Philosophy as a Way of Life, Fall, 2011,
Syllabus", Prof. Stephen Angle, sangle@wesleyan.edu, Russell House 216
(Wayback Machine capture of 11 May 2021, 2 captures listed 21 Sep 2019 -
11 May 2021, 13-page PDF).

**FINDING — the D1's quoted "course description" is a paraphrase, not a
verbatim quote.** The D1 (deg-philosophy.md) states the course description
was "read verbatim this session" and presents: "Philosophy as an
activity: something people do, something that can be part of one's life.
Philosophy as a way of changing one's orientation to the world; as a way
of becoming a better person; and as a way of changing society. How do
Confucians, Daoists, Epicureans, and Stoics pursue these goals?" The
archived page 1 Course Summary actually reads: "For many philosophers,
East and West, philosophy has been more than an effort to answer
fundamental questions. It has been an activity aimed at changing one's
orientation to the world and, thus, how one lives one's life. We will
explore Chinese, Greco-Roman, and more contemporary versions of the idea
that philosophy should be seen as a way of life. How does philosophical
reasoning interact with lived practice? How do metaphysical views lead to
ethical commitments? Despite their differences, Confucians, Daoists,
Epicureans, and Stoics all agreed that philosophy should aim at making us
better people. Can such an idea still get traction in today's world?"
The themes overlap (philosophy as activity, changing one's orientation,
better people, the four traditions) but the wording differs throughout —
the D1's presentation violates the project's verbatim-quote standard and
should be corrected by the lane owner (flagged; not edited here — live
lane). Course identity itself (PHIL 221, Fall 2011, Angle) IS confirmed
by the archived document.

The D1's week-schedule claims (Hadot chs 1/3/4/11; Analects; Socrates'
Euthyphro/Apology/Crito; Zhuangzi; Epicurus/Lucretius; Seneca's Epistles;
Zhu Xi; Thoreau's Walden; Shusterman) were NOT verified within this
bounded window (the viewer's page navigation did not advance within the
attempt budget); they stand on the lane owner's session and remain
unverified by this audit.
