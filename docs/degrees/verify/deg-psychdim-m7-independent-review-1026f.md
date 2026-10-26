# Psychdim PD-V04 addendum: independent review of the M7 excerpt measurement and count discrepancy

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton, degrees
  baton system). **Date**: 2026-10-26 (measured clock point at start of
  this item: 06:03:56Z was the previous reading; the counts below were
  run after a fresh fetch at approximately 06:10 by the sandbox
  clock).
- **Item**: the psychdim verification file's own continuation note
  (docs/degrees/verify/deg-psychdim.md, "Review status of the latest
  additions") records that independent review was requested for the M7
  count/excerpt check (written by the previous deg-verify-b holder,
  verifier-af06bd9e) and that no acceptance is recorded yet. This
  receipt is that independent review. It does not edit the psychdim
  module, the verify file, or any gate; the psychdim owner and
  supervisor consume it.

## Method

The article page (https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/)
was fetched twice through independent routes this session: once via
  the fetch tool (page-read with structure confirmation), once via a
direct download in this worker's sandbox (260,071 bytes of HTML). All
findings below were read from these two opens; nothing is quoted from
memory or from the previous receipt.

## Findings

1. **Article identity**: "Time to Form a Habit: A Systematic Review
   and Meta-Analysis of Health Behaviour Habit Formation and Its
   Determinants" (Singh, Murphy, Maher, Smith; Healthcare, 2024-12-09;
   PMC11641623) — the 2024 habit-formation review the M7 addendum
   cites. Free access, no paywall on either route.
2. **Excerpt boundaries**: the Results 3.2–3.5 span exists as described
   — begins "A total of 2601 participants were included across all
   studies." (Results 3.2. Study Characteristics) and ends at the end
   of Results 3.5 (the paragraph ending "...behaviours and
   intervention durations.", immediately before "4. Discussion"). The
   Discussion limitations paragraph exists and begins "Despite its
   strengths, this systematic review also has several limitations." —
   verbatim matches on both routes.
3. **Token counts (independent recount, same documented rule —
   letter/number tokens with internal apostrophes/hyphens retained,
   headings, citation numbers and the Figure 2 caption included)**:
   - Results 3.2–3.5: my count **1,575** tokens (the M7 addendum
     records 1,570). The 5-token delta is consistent with
     extraction-method differences (my tag-stripping leaves artifacts
     such as "Table S3 ." as an extra token; italic markup collapses
     differently). Both counts sit at the same magnitude and the
     boundary text is identical — I corroborate the addendum's
     measurement within method noise.
   - Limitations paragraph: my count **334 tokens** — exact match with
     the addendum's 334.
4. **Source inconsistency (independently confirmed)**: Results 3.1
   prints "Most studies had a high risk of bias rating (i.e., low
   quality, n = 11), while five had a low risk of bias rating (i.e.,
   high quality)." while Table 1 ("Study quality assessments using the
   PEDro scale (n = 20)") prints 20 study rows of which 9 are labelled
   "High" and 11 "Low" in the Overall Score column. The discrepancy
   the addendum flagged is real and is present in the article as
   published — confirmed on both routes this session.
5. **Caveats check**: the addendum's recorded caveats match what I
   see — the Results 3.2–3.5 span contains collapsed subheadings
   (Stage 1 / Stage 2 / Developing automaticity / Time to
   automaticity), and the Figure 2 caption text falls inside the 3.4
   portion of the span.

## Honest limits

- The addendum's SHA-256 values were computed on its own extraction;
  a byte-identical reproduction requires the identical extraction
  pipeline, which I did not attempt. My review corroborates the
  boundaries, counts (within the stated noise) and the discrepancy
  claim; the hashes stand on the original addendum's own computation.
- The M4 alignment proposal (the other addition awaiting review in
  the same note) is a module-alignment matter and is NOT reviewed
  here; it remains for the gate/supervisor, or a reviewer with the
  module pedagogy in view. This receipt covers the M7 count/excerpt
  check only.

**Result**: the M7 count/excerpt check by the previous deg-verify-b
holder is corroborated by this independent session — boundaries,
counts and the flagged source inconsistency all reproduce within the
stated method noise. I record acceptance of that addition here for
the gate/supervisor to consume; no defects found.
