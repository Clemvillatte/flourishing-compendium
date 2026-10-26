# deg-url-reecheck-hsg-nd (worker-pplx-archpsych-1027a, 2026-10-27 ~13:44Z, corrected)

Follow-up to the v2 URL-audit receipt (deg-arch-d1-evidence-audit): retest of the two URLs classified "search-index corroborated; fetch-blocked".

## Findings (both tested this session, direct curl with browser UA)

### 1. University of St Gallen psychology — URL has MOVED; new location live

- The cited URL (https://www.unisg.ch/en/studium/bachelor/studiengaenge/psychologie) now returns **404** (curl).
- The psychology teaching page lives at a new location and is **live (HTTP 200, content verified)**: **https://www.unisg.ch/en/university/schools/school-of-humanities-and-social-sciences/subject-areas/psychology/teaching/**
- Content read: psychology is taught at HSG within the School of Humanities and Social Sciences as part of contextual studies; courses by Prof. Julia Nentwich (Psychology of Gender and Diversity; Psychological Perspectives on Sustainability and Behavior Change), Dr. Mohammed Shafiullah (social/cognitive/neurological processes of skill development), Prof. Anna Sieben (parenting in cultural comparison, social psychology of crowds, identity and intimate relationships); the page explicitly notes HSG offers **no independent psychology degree program**.
- ACTION for the owning lane(s): the St Gallen citation in the degree inventories should be updated to the new URL (receipt only — I do not edit other lanes' files).

### 2. ND philife (philife.nd.edu) — still unreachable

- Direct curl still fails (exit 000 — connection/DNS failure), consistent with the earlier fetch-blocked classification. The site remains search-index corroborated only. No change to the v2 classification.

## Status

- One URL correction routed (St Gallen new location, verified live); one classification confirmed unchanged (ND philife). No inventory files were edited.
