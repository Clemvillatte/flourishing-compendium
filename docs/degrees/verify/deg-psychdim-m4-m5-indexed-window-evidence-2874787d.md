# M4/M5 recording-window evidence for independent review

Producer: `degree-2874787d`, 2026-10-26.
This is a new evidence packet, not a gate clearance.
Neither module, recording window nor workload changes in this packet.

## Exact targets

- **M4:** `m4-attentional.md`, SHA-256
  `68acd6f12985c39b2d728b93d567db596fae1605912697ba6816c9d8735eedd3`;
  Bloom **47:26–54:53**, 7:27.
- **M5:** `m5-self-and-identity.md`, SHA-256
  `c38a8d6d48eb81e44d00aff28ca942c1ba5df2fe0ad4e046840ff3c90a600fad`;
  McAdams **10:07–13:31**, 3:24.

The earlier raw-caption/playback barriers remain true. The new route is
the native indexed-transcript/snippets reader, not another recording
or an inferred chapter boundary.

## Method and limits

The producer opened both watch pages and then retrieved timestamped
transcript excerpts from those same URLs through the native snippets
reader; the McAdams raw page also exposed an English automatic-caption
track, whose direct signed timed-text request returned 403.
([McAdams recording](https://www.youtube.com/watch?v=49FCgaZRn_M);
[Bloom recording](https://www.youtube.com/watch?v=DmWrOUK2zgA))
The indexed speech is available even though the direct caption request
was blocked; this packet does not claim that the raw endpoint began
working.

The complete official Yale chapter was separately opened to check
the wording between indexed anchors, including the flickering-image
instructions near the end of M4's assigned interval.
([Official Yale transcript](https://oyc.yale.edu/psychology/psyc-110/lecture-7))
No audio playback or frame-by-frame visual audit was performed.
Automatic-caption recognition errors are not treated as authoritative
spellings of names, places or technical terms.

## M5: continuous assigned speech recovered through overlap

Four query families yielded overlapping, locally unellipsed portions:
definition/basic form, the speaker's hometown/college account, the
honours-program/intellectual-interest passage, and partner/family
closure. Their observed intervals overlap as follows:
**607–660; 651–736; 707–776; 766–806; 793–823 seconds**.
The union covers **607–811**, the entire printed assignment, without
using an ellipsis to infer missing speech.
([Timestamped McAdams transcript](https://www.youtube.com/watch?v=49FCgaZRn_M))

| Observed cue | Content checked |
|---|---|
| 607 / 10:07 | Narrative-identity definition begins; 612–623 explain an evolving self-story, reconstructed past and imagined future. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |
| 629–651 / 10:29–10:51 | Multiple stories, their basic form and the speaker's slide/example transition. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |
| 658–766 / 10:58–12:46 | Speaker's own hometown, college and intellectual-interest illustration; not a participant interview. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |
| 770–809 / 12:50–13:29 | Partner/family account and closure of the speaker's own narrative illustration. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |
| 812–823 / 13:32–13:43 | Transition toward the research data/example, after the printed 811-second stop. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |
| 843–846 / 14:03–14:06 | A 57-year-old participant and the negative-childhood prompt are introduced, also after the printed stop. ([Recording](https://www.youtube.com/watch?v=49FCgaZRn_M)) |

Thus **13:31 is an editorial early stop, not a claimed timestamp for
the participant's first word**; the retrieved participant introduction
is later.
([McAdams timestamped source](https://www.youtube.com/watch?v=49FCgaZRn_M))
The source lesson's instruction to stop before the participant example
is consistent with these cues, but only the live independent reviewer
can discharge the recording requirement.

Reproduction queries used on the recording URL:

```text
narrative identity many different stories basic form stories could all derive basic format
Gary Indiana Valparaiso Valpo Rebecca daughters own life story miserable first eighteen years move
Sigmund Freud civilization discontents wonderful honors program scholars involved mind campus remarkable humanities psychology Rebecca
10:07 13:31 narrative identity themes participant negative childhood interview life story
```

Each request used `max_tokens_per_page: 4096`. Read the overlapping
passages themselves; do not mistake a retrieval ellipsis for silence
or rely only on this summary.

## M4: assigned speech checked; stricter artifact limit remains explicit

The first indexed retrieval supplies a locally unellipsed stretch
through the selection, Stroop, basketball, first change-blindness movie
and flickering-image setup; later queries expose the additional
demonstration cues.
([Bloom timestamped transcript](https://www.youtube.com/watch?v=DmWrOUK2zgA))

| Observed cue | Content checked |
|---|---|
| 2827–2846 / 47:07–47:26 | Attention/flashlight/spotlight introduction and its continuation at the assigned start; the printed window begins within that explanation. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |
| 2863–3007 / 47:43–50:07 | Letter selection, colour-naming task and Stroop explanation. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |
| 3029–3125 / 50:29–52:05 | Basketball-counting/noticing task and its limited-attention discussion. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |
| 3144–3210 / 52:24–53:30 | Scarf/plates/food movie, change-blindness explanation and flickering-picture task. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |
| 3254 / 54:14 | Another attempt, applause and the end of the demonstration instructions. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |
| 3293 / 54:53 | Continuation of the Dan Simons/change-blindness sentence; later broad campus anecdotes begin outside this stop. ([Recording](https://www.youtube.com/watch?v=DmWrOUK2zgA)) |

The indexed retrievals still show an ellipsis between some of the
late demonstration cues. The producer read the intervening words in
Yale's complete official transcript: further attempts, audience
feedback and the attribution to Simons, not an additional clinical
survey.
([Official continuous transcript](https://oyc.yale.edu/psychology/psyc-110/lecture-7))
This is **an indexed-anchor plus continuous-official-text cross-check,
not a recovered single uninterrupted timed-caption file**. If the
strict gate requires the latter artifact, M4 must remain open.

Reproduction queries:

```text
timestamped transcript 47:00 to 55:10 attention spotlight Stroop inattentional blindness change blindness
I myself am terrible sympathy How many people never saw it One more time different one Did anybody not see it give another try put you out misery
give you another try put you out of your misery This is work by Dan Simons extraordinarily interesting body of work change blindness
```

## Decision routed, not self-awarded

ROUTE supervisor/verification: independently reopen M5's overlapping
timestamped passage at the unchanged hash and decide its recording
requirement. Review M4's combined evidence against the stricter
continuous-timestamp condition; do not mark it passed merely because
the official untimed words are complete.

If M4 needs a narrower directly recovered interval, an available
candidate is **47:07–53:30 (6:23)**: the retrieved stretch includes
the complete spotlight introduction and all four taught phenomena,
but ends before the late retrieval ellipsis. This is only a proposal;
no module, time budget or source gate is changed here. An authorised
reviewer must approve and verify any adjustment at its resulting hash.

No paper fallback is added, no old recording window is falsely
certified, and the Academy remains closed until the independent
module and complete-degree gates pass.
