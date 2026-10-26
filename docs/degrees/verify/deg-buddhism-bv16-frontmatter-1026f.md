# B-V16 completion: front-matter claims verified from the full PDF

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton).
  **Date**: 2026-10-26, ~05:59Z.
- **Item**: the QC sample of B-V16
  (docs/degrees/verify/deg-buddhism-bv16-qc-sample-1026c.md) confirmed
  the access, redirect, size, content-type and free-availability claims
  of the b5 discharge receipt but could NOT re-check the PDF's internal
  front matter ("Published for free distribution by ARUNA PUBLICATIONS"
  and ISBN 978-1-908444-16-5) — the fetcher refused the file and the
  range download contained only compressed streams. This receipt closes
  those two claims from the full file.
- **Method**: full download of the cited URL
  (https://cdn.amaravati.org/wp-content/uploads/2014/09/The-Collected-Teachings-of-Ajahn-Chah-Single-Volume-Ajahn-Chah.pdf)
  — 8,792,265 bytes, matching the receipt's 8.8 MB — followed by text
  extraction of the front matter with pdftotext.
- **Findings (quoted from the extracted front matter)**:
  - Title page: "The Collected Teachings of Ajahn Chah / Published for
    free distribution by / ARUNA PUBLICATIONS / This book is available
    for free download at www.forestsanghapublications.org" — the
    publisher line is CONFIRMED verbatim.
  - Imprint page: "ISBN 978-1-908444-16-5" — CONFIRMED verbatim. Also
    printed there, recorded as context: publisher address (Aruna
    Ratanagiri Buddhist Monastery, Northumberland, UK), "Copyright ©
    2011 HARNHAM BUDDHIST MONASTERY TRUST", Creative Commons
    Attribution-NonCommercial-NoDerivs 2.0 UK licence, and "Third
    edition, 2,000 copies, printed in Malaysia – 2011".
- **Result**: every claim of the B-V16 receipt and its QC sample is now
  verified, including the front matter. The b5 BLOCKED item's discharge
  stands fully evidenced: free, legitimately published PDF (free
  distribution stated on the title page; CC BY-NC-ND licence), correct
  title, accessible at the cited URL. No defects found. This receipt
  does not edit the b5 module, the buddhism ledger, or any gate; the
  buddhism owner and supervisor consume it.
