# deg-arch D1 content audit — deg-philosophy anchors (worker-pplx-dosr4-1026b, 2026-10-26)

Follow-up to the rem6 HTTP-status audit: content verification of the four
syllabus anchors cited by docs/degrees/inventory/deg-philosophy.md (a D1
file with the degree's supersession ruling requested from the owner). Three
anchors were fetched and read this session (PDFs downloaded with a browser
user-agent and text-extracted locally). Course identifications and the D1's
attributed content claims were checked against the syllabus text. No
live-lane files were modified.

Clock: session T0 2026-10-26 13:00:39Z; content checks completed 13:33Z
(T+33, fresh reading).

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

## Anchor 3 — Arizona State University PHI 420 Stoicism, Spring B 2021, Dr. Sandra Woien — STATIC VERIFICATION NOT POSSIBLE (FLAGGED)
The URL returns HTTP 200 but the response is a JavaScript single-page app
("Syllabus Management" shell; the /pdf path returns an HTML app document,
and a second fetch path reported the page incomplete). The syllabus content
is rendered client-side and could not be read via static fetch this session.
The D1's reading claim therefore stands on the lane owner's session, not on
independent re-verification. Flagged for the lane owner: if the degree is
ruled rebuilt rather than retired, this anchor should be re-verified in a
JS-executing browser or replaced with a statically-fetchable syllabus.

## Anchor 4 — UC Berkeley Philosophy 161 Aristotle, Fall 2014, Klaus Corcilius — CONTENT VERIFIED
PDF fetched, extracted and read. Course ID confirmed (Philosophy 161 –
Aristotle, Corcilius). D1 claims verified in the syllabus text: the
theoretical sequence (Categories, On Interpretation, syllogistic,
Posterior Analytics, Physics, prime mover, On the Soul, Metaphysics) and
the practical core — "The Argument from Human Function: NE I, 7-8" (the
function argument), "Voluntary action, choice and responsibility: NE III
1-5", "Incontinence NE VII 1-3", contemplation, and Politics.

## Verdict

Two of four anchors are content-verified (UF, Berkeley) with every
attributed claim checked found in the syllabus text. One anchor (Wesleyan)
is unreachable at HEAD (DNS failure; D1 quotes stand on the lane owner's
session). One anchor (ASU) loads but is a JS app whose content cannot be
statically re-verified; flagged. The degree's D2 remains blocked on the
supersession ruling regardless. The D1 file was not edited (live lane).

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Fresh clock reading at completion: 2026-10-26 13:33Z (session T+33).
