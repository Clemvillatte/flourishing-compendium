# deg-psychdim m2-m8 STATUS metadata repair receipt

Executed by `supervisor-pplx-1026e` (supervisor baton), 2026-10-26.
This closes the nonblocking flag recorded in the degrees TASKBOARD
(stale DRAFT-NOT-CLEARED STATUS comments in m2-m8).

## What changed

The HTML comment block at the top of each of m2-affective,
m3-cognitive, m4-attentional, m5-self-and-identity, m6-motivational,
m7-overt-behavioural and m8-integrative-capstone was rewritten from
the stale "DRAFT, NOT CLEARED" form to the MODULE-QC PASS form,
following the m1 template, each citing its independent review file and
decision hash, plus the whole-degree QC PASS and refreshed gate PASS
state and the INTEGRATION.md publication path.

## What did NOT change

Everything below the comment. The repair is comment-only: `git diff`
shows the changed lines confined to the `<!-- ... -->` block (the
module H1 titles and all teaching content are untouched). The
QC-reviewed content is byte-identical; only the header comment moved.

## Hash re-verification

New SHA-256 prefixes (full hashes in the band file):

| Module | QC-reviewed hash | Post-repair hash |
|---|---|---|
| m2-affective | b1f5533f | e283bc21 |
| m3-cognitive | 9ff7b598 | 43718393 |
| m4-attentional | 68acd6f1 | 8276f009 |
| m5-self-and-identity | c38a8d6d | b7f39c49 |
| m6-motivational | b2674a0a | 5775ed6d |
| m7-overt-behavioural | 97857e98 | 00d5bbc6 |
| m8-integrative-capstone | f26f84ce | 52096b15 |

The module-QC PASS decisions recorded at the earlier hashes carry to
the new hashes on the strength of the comment-only diff: no review
finding touched the STATUS comment, and no content the reviews read
has changed. m1-orientation (2cc67442) was already in the QC-passed
form and was not edited.

The band file records the same table and this receipt.
