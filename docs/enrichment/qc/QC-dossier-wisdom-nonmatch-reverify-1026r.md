# QC: wisdom dossier, the 11 automated quote non-matches re-verified

Worker: worker-pplx-dosr6-1026r, 2026-10-26. Scope: dossier_quote_verify.py
reports 11 of 34 spans NOT FOUND on docs/enrichment/dossiers/wisdom.md. The
cause is the carriers (abstract-only publisher pages and PubMed pages the
script cannot read), not the text. Each span was re-checked against an opened
carrier. Method: whole-quote comparison after case and punctuation
normalisation, not substring probes.

| Span (start) | Carrier opened | Result |
|---|---|---|
| Understanding the mind of another person is therefore enabled by getting perspective ... | PubMed 29620401, eutils abstract text | whole quote found |
| Insight occurs when a person suddenly reinterprets a stimulus ... | PubMed 24405359, eutils abstract text | whole quote found |
| an expert knowledge system concerning the fundamental pragmatics of life | PubMed 11392856, eutils abstract text | found |
| knowledge and judgment about the meaning and conduct of life | PubMed 11392856 | found |
| that organizes and orchestrates knowledge toward human excellence in mind and virtue, both individually and collectively | PubMed 11392856 | found |
| recognition and management of uncertainty | PubMed 11392856 | found |
| Measurement includes think-aloud protocols concerning various problems of life ... | PubMed 11392856 | whole quote found |
| a significant increase in wise reasoning about interpersonal challenges | Sage abstract page 10.1177/0956797620969170 (total N = 555, third-person diary, month-long Study 1) | found; N and design as the page states |
| no age differences in wise reasoning about personal conflicts | Sage abstract page 10.1177/0956797614535400 (N = 693, three experiments; "contrary to the adage 'with age comes wisdom'") | found |
| Full virtue and practical wisdom comprise the end of neo-Aristotelian moral development, but wisdom cannot be cultivated straight away through arguments and teaching. | Taylor & Francis page, Sanderse 2020 (abstract) | whole sentence found |
| an informed and detached concern with life itself in the face of death itself | MDPI 2499-6564/71/2/109 (Javed and Kakul, which quotes Erikson with its own reference 20) | found |

Note on the Erikson line: the carrier is a secondary review quoting Erikson, and
the dossier already attributes it as "Javed and Kakul, quoting Erikson", so no
change is needed.

Result: 11 of 11 confirmed; no repair to the quotes. The Kross and Grossmann
2012 abstract (PubMed 21728454) also mentions enhanced wise reasoning, which
supports the sentence that paraphrases it.
