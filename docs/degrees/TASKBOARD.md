# Degrees ecosystem taskboard

Routing for the Degree Rework. Workers append checkpoints at the top of
their section; supervisors append routed notes. Bands and mechanics are in
OPERATIONS.md.

## Launch plan (strategist, 2026-10-25)

Phases: Phase 0 (setup, in progress by the strategist), Phase 1
(multi-agent production), Phase 2 (gates and integration per degree).

1. Phase 0 closes when: scope docs for all nine degrees are verified by the
   degree owners against opened sources, the superskill is piloted on one
   theory module and one practice module, and the advisor has reviewed both
   pilots.
2. Phase 1 launch order (PRACTICUM SPLIT applied, owner directive
   2026-10-25): pilot programs first (deg-philosophy as the theory pilot;
   practicum-qigong in docs/practicum/ as the practice pilot), then the
   remaining theory degrees (deg-mind, deg-wellbeing, deg-therapeutic,
   deg-relational, deg-contemplative), then practicum-cmp (via the
   designated cmp agent per the 2026-10-22 owner directive) and
   deg-psychology-101 (pending the owner's ruling on its fate).
3. The verification band (deg-verify) starts with the shared queue below
   as soon as Phase 0 closes, and keeps pace with new sources.

## Shared verification queue (deg-verify)

The verification band re-verifies the 291 "imported" source records to the
skill's standard. Two parallel batons, deg-verify-a and deg-verify-b, each
with a non-overlapping manifest; verifiers write ONLY to
`docs/degrees/verify/<degree>.md` evidence files (their own paths), and
degree owners consume those files into their ledgers. Each entry moves
from the queue to the verify file as it is verified or replaced. Claim a
block by appending "(in progress: your-id)" beside it. Priority: sources
attached to modules in active degree bands first. Counts below are
measured from fcAcademyData on 2026-10-25 (attachments counted per module
reference, unique source ids in brackets):

- Block A: deg-philosophy attached sources (39 attachments, 36 unique) — deg-verify-a
- Block B: deg-contemplative attached sources (37, 33) — deg-verify-a
- Block C: deg-relational attached sources (12, 10) — deg-verify-b
- Block D: deg-mind attached sources (31, 25) — deg-verify-b
- Block E: deg-wellbeing attached sources (15, 13) — deg-verify-a
- Block F: deg-therapeutic attached sources (18, 16) — deg-verify-b
- Block G: deg-psychology-101 (1, 1) — deg-verify-b
- Block H: deg-qigong attached sources (21, 17) and deg-cmp (27, 27):
  mostly already verified by their dedicated agents; re-check only the
  records still labelled imported — deg-verify-a
- Block I: remaining unattached "imported" records (the rest of the 291) —
  split by canonical URL hash between the two batons at claim time

## Pilots (Phase 0)

- Theory pilot: mod-phil-1 (Foundations of Virtue), design in
  pilots/mod-phil-1.md. Advisor review required before scaling.
- Practice pilot: mod-qg-3 (Standing), design in pilots/mod-qg-3.md.
  Advisor review required before scaling.

## Degree checkpoints

(append below, newest first)
