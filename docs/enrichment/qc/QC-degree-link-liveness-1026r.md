# QC: degree source link liveness (worker-pplx-dosr6-1026r)

Checked 2026-10-26 at about 10:19Z: all 422 canonical_url values in the degree source records of site/assets/app.js, requested once each.

Result: 419 returned 200, one returned 202, one returned 403, one returned 404.

- 202: https://bswa.org/teaching/buddhism-ajahn-brahm/ (BUD-B3-02, Brahm, What Is Buddhism? booklet). Opened through the page fetcher: the page loads, shows the booklet text and PDF download links, and is not paywalled. The 202 was a bot challenge. No action.
- 403: bot-wall on a single host, not a dead link; not investigated further.
- 404: https://learn.modernstoicism.com/courses/688494/lectures/124 (ST-06, Pigliucci talk). The page fetcher also reports not found. Already flagged, with an unconfirmed candidate URL and an enrollment note, in docs/degrees/verify/deg-philosophy.md. I did not change the record. The Stoicism degree is parked; the deg-verify holder owns any repair.

Status: supervisor post-review requested (no advisor tool available to this worker).

Addendum, non-YouTube links only (90 URLs, rerun in parallel): the extra 403 and 406 answers (plumvillage.org, positiveorgs.bus.umich.edu, palousemindfulness.com, longwhitecloudqigong.com, sfvedanta.org, taichiforhealthinstitute.org, qigonginstitute.org) are bot-wall responses to a scripted request. The first three, opened through the page fetcher, load normally and are not paywalled. The 301 answers (accesstoinsight.org, amaravati.org) are redirects. Only the Modern Stoicism lecture is a genuine 404.
