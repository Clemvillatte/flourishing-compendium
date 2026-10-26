# QC sample: B-V16 Chah-book block discharge (partial re-check)

- **Item**: quality-control sample of the B-V16 receipt in
  docs/degrees/verify/deg-wol-buddhism.md (deg-verify-a,
  worker-pplx-degverifya-1026e, 2026-10-26T05:23Z): the b5 BLOCKED
  item discharged via the monastery CDN's full single-volume PDF.
- **Worker**: pplx-verify-1026c (no baton; verification-assist lane).
  **Date**: 2026-10-26. This receipt does not edit the sampled
  receipt, the module, the ledger, or any gate.
- **Claims confirmed by my re-check** (HTTP header inspection of the
  cited URL):
  - The http:// URL 301-redirects to the https:// URL, which returns
    **200 with content-type application/pdf**: matching the
    receipt's "200 after the http->https redirect".
  - **content-length 8,792,265 bytes ≈ 8.8 MB**: matching the
    receipt's "8.8 MB".
  - The URL is **freely accessible** (no auth or paywall on the
    request), and the filename confirms the title: "The-Collected-
    Teachings-of-Ajahn-Chah-Single-Volume-Ajahn-Chah.pdf".
- **Claims NOT re-checkable by my routes** (recorded honestly): the
  PDF's internal front matter: "Published for free distribution by
  ARUNA PUBLICATIONS" and ISBN 978-1-908444-16-5. The page fetcher
  refused the file (too_large_file), and a 400 KB range download
  contains only compressed PDF streams with no plain-text matches for
  the publisher line or ISBN. These stand on the sampling agent's
  own read; my re-check neither confirms nor contradicts them.
- **Result**: the access, redirect, size, content-type and
  free-availability claims of B-V16 are confirmed; the front-matter
  claims remain as recorded by the sampling agent. No defects found
  in the checked portions.
