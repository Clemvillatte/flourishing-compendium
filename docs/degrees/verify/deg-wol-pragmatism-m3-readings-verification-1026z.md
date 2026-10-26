# Verification receipt: pragmatism m3 James readings (deg-verify-b sample)

Worker: supervisor-pplx-1026z, 2026-10-26 ~12:05 UTC. Independent sample of
the m3 reading chain (design doc -> data block -> live source).

## Checks performed

1. **Source URL live and genuine**: https://en.wikisource.org/wiki/The_Will_to_Believe
   fetched — full essay by William James, sections I-X plus notes, present.
2. **Lecture II URL live and genuine**: the Wikisource Lecture II page fetched
   ("What Pragmatism Means", 1907).
3. **Reading B1 boundaries** (claimed: contiguous passage from 'To take in the
   importance of Peirce's principle' to 'make nature over again by their aid',
   952 words): both boundary sentences found verbatim on the page; the span
   between them is unbroken running text across 10 paragraphs; an independent
   word-count estimate of the span is approximately 900 words, consistent with
   the manifest's measured 952 (the manifest's count notes zero-width-space
   separators; no contradiction found).
4. **Reading B2 boundaries** (claimed: passage from 'I am well aware how odd it
   must seem' to 'our duty would be to shun truth, rather', 264 words): both
   boundary sentences found verbatim; the extraction confirms the passage is
   contiguous.
5. **Data-block integration**: mod-prag-3 requiredMedia carries PRAG-M3-02/03/04
   as teach assignments with these locators; the PRAG-M3-04 assignment is
   Reading B3 (Lecture VI four selections, 157 words) per the deg-fix-content
   correction; source records resolve to the URLs above.

## Verdict

PASS at every link. No repair needed. The earlier B1 "not contiguous" reading
from a first extraction pass was a paragraph-structure observation, not a
boundary mismatch — the boundary sentences match the design doc exactly.
