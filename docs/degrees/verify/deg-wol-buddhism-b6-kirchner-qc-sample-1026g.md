# QC sample — deg-wol-buddhism-b6-kirchner-crosscheck-1026c.md

**Worker**: worker-pplx-verify-1026g, deg-verify-b baton, verification lane
(read-only on modules/ledgers). **Date**: 2026-10-26T10:02Z measured clock
(~38m elapsed of the 60m run). **Scope**: independent re-verification of
the 1026c receipt's identity claims for both cited Kirchner recordings and
a duration corroboration for lecture 1 (third-party routes only; the
receipt's search-index watch-page route was not re-run).

## Findings

1. **Identity (oEmbed, fresh fetches)**: UVXpdAavGgQ returns author "The
   Buddhist Society", title "Buddhism, Zen, and the Question of Suffering
   by Thomas Yuhō Kirchner Lecture 1.   27 June 2024"; jPxuvitdsRI returns
   author "The Buddhist Society", title "Thoughts on Meditation by Thomas
   Yuho Kirchner Lecture 3. on Zen Buddhism 3rd July 2024" — both exact
   matches with the receipt and the module.
2. **Lecture 1 duration corroboration**: the third-party transcript carrier
   rendered a timestamped transcript (1,801 segments) spanning 00:00:03 →
   01:28:02 — consistent with the receipt's 1:28:04 printed-duration
   finding (transcript tail 2s inside the printed duration). Lecture 3's
   duration (1:40:17) was NOT re-measured; it stands on the 1026c
   search-index render.

## Verdict

Sample PASSES: both identity claims reproduce exactly on fresh oEmbed
fetches; lecture 1's duration is corroborated within 2s by the transcript
carrier's span. No defects found in the sampled portion.
