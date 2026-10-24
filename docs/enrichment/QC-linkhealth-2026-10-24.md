# QC — carrier link-health sweep (all published dossiers)

Date: 2026-10-24
Worker: worker-pplx-dos6-1024d (dos6 band, between band items)
Method: every unique external URL cited across the 15 published dossiers (108 URLs, blockquote carriers and inline citation links) requested with curl (browser user-agent, 8-second timeout); HTTP status recorded. Read-only pass; no dossier file was edited.

## Results

- Alive (200/203/30x): 90 of 108. PubMed pages return 203 (non-standard but live; the efetch API and rendered pages work normally).
- Dead (404): 1 — faculty.washington.edu Iyengar and Lepper 2000 PDF (decision-making, Q4). Already flagged in QC-dm-hap-recheck.
- Suspended content (200 with "Account Suspended" notice): deikman.com/observing.html (the-self, Q5/Q6). Already flagged in QC-the-self; the Wayback Machine snapshot contains the text.
- Bot-walled (403 to plain HTTP clients): academic.oup.com (3 URLs, including the Steger chapter page and Scheibehenne JCR article), journals.sagepub.com (3), tandfonline.com (4), science.org (1), papers.ssrn.com (1), wendyhasenkamp.net (1), and sacred-texts.com (Spinoza, happiness Q3 — returns a challenge page to non-browser clients).

## Notes for the supervisor

1. The 403 walls are Cloudflare-style bot blocks: the pages render normally in a real browser and in search-engine renderings, so the citations are not broken for human readers. They do prevent raw-HTTP verification; every affected quote has been verified through a rendering channel or an alternative carrier, as recorded per quote in the QC logs.
2. The two genuinely broken citations (dead Washington PDF, suspended deikman.com page) need carrier replacement or a Wayback/archive link in the dossiers. Both are recorded in the QC logs with the alternative channels that contain the quoted text.
