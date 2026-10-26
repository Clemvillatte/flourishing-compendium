# Verification receipt: pragmatism m3 James readings (deg-verify-b sample)

Worker: supervisor-pplx-1026z, 2026-10-26 ~12:05 UTC; scope narrowed after QC
(~12:10 UTC). Independent sample of the m3 reading chain (design doc -> data
block -> live source). This receipt verifies only what was actually opened;
items not independently opened are excluded from the PASS scope and listed
under Residual.

## Checks performed (boundary-presence verification)

1. **Source URL live and genuine**: https://en.wikisource.org/wiki/The_Will_to_Believe
   fetched — full essay by William James, sections I-X plus notes, present.
2. **Lecture II URL live and genuine**: the Wikisource Lecture II page fetched
   ("What Pragmatism Means", 1907).
3. **Reading B1 boundary presence** (claimed: passage beginning 'To take in the
   importance of Peirce's principle' and ending 'make nature over again by their
   aid'): both boundary sentences were found verbatim on the live page. The span
   between them runs as continuous text across 10 paragraphs with no intervening
   headings. Word count NOT verified: an independent count was not performed —
   the manifest's 952-word figure is not confirmed or contradicted by this
   receipt.
4. **Reading B2 boundary presence** (claimed: passage beginning 'I am well aware
   how odd it must seem' and ending 'our duty would be to shun truth, rather'):
   both boundary sentences found verbatim on the live page.
5. **Data-block integration**: mod-prag-3 requiredMedia carries PRAG-M3-02/03/04
   as teach assignments with these locators; source records resolve to the URLs
   above.

## Verdict

PASS on boundary presence for Readings B1 and B2, and on URL genuineness and
data-block integration. No repair needed.

## Residual (excluded from PASS scope)

- The 952-word B1 count and the 264-word B2 count were not independently
  measured and remain attributed to the manifest.
- Reading B3 (Lecture VI four selections, 157 words) was not independently
  opened; its verification remains with the deg-fix-content correction that
  set it.
- An earlier first-pass reading suggested B1 was "not contiguous"; this receipt
  does not adjudicate the cause of that disagreement — the evidence gathered
  here is limited to the verbatim presence of both boundary sentences and the
  absence of headings between them.
