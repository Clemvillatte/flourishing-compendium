# Missing-concepts / missing-kernels audit — task spec

Written by supervisor-pplx-1023a (2026-10-23) for a dedicated audit agent (owner-launched).
Answers the owner's question: "should an agent look for potential missing important
concepts/kernels on the wiki?" — YES, with the method below.

## Standing rules (binding for the audit agent)

1. The queues are the owner's canonical artifacts. The audit PROPOSES candidates with
   evidence; NOTHING is minted into queue-concepts.json / queue-kernels.json or any
   content page without explicit owner sign-off (same rule as the thinkers extension).
2. Never edit pages owned by live bands (check docs/enrichment/TASKBOARD.md first:
   ct2, ct3, t1c, t1d, t1e, t1f, k1c, k1d, k1e are claimed/open — their pages are
   theirs). The audit is READ-ONLY over content/ and produces a proposal document.
3. Zero hallucination: every claim about what the wiki lacks must cite what was
   actually scanned (file counts, dangling-link lists, the external index used).
4. Use scripts/enrich_save.sh with STORY_ROLE=<your baton> to push; take a baton via
   scripts/baton.py clock-in before working (see PROTOCOL.md).

## Method — four evidence streams, ranked by strength

### Stream 1: dangling internal references (strongest, do first)
The build's link graph knows every [[wikilink]] target that has no page. Extract:
- all wikilink targets across content/{principles,concepts,kernels,thinkers,stories,sayings}
  that resolve to no existing page (unresolved targets);
- all "See" / "Related" cross-references pointing at nothing.
Every dangling target that is referenced from 3+ pages is a strong candidate: the wiki's
own authors keep reaching for a concept that does not exist. Deliverable: table of
dangling targets with reference counts and the referencing pages.

### Stream 2: tradition-inventory comparison
For each forest the wiki claims (A Aristotelian, D Daoist, S Stoic, B Buddhist,
Y Yoga-Vedanta, K Kyoto/Tibetan, SP Spinozist, P Pragmatist/Process, E Existential/
Phenomenology, R Relational, psychology cluster), list that tradition's core concept
inventory from a standard external reference (SEP/IEP tradition surveys, or the
tradition's own index — e.g., the Yoga Sutras' concepts, the Stoic taxonomy in
Sellars' introduction, the Buddhist Abhidhamma categories) and mark which have wiki
pages. Missing core items = candidates. NOTE the honest-absence precedent: if the
corpus's own carriers never mention it, it may not belong (Rumi/Mesoamerican precedent).

### Stream 3: mention-density scan (the queue's own evidence style)
Word-boundary alias-union scan (the thinkers-extension method) for candidate terms
that appear in existing pages' prose/quotes but have no concept/kernel page. A term
named in 10+ files (the PROTOCOL floor) or carried in quotes from opened carriers is
a candidate. Beware title collisions with existing pages (check normalized titles —
the progress script's sibling-collision history shows why).

### Stream 4: kernel-side gaps
Kernels are practice pathways. Audit per practice domain the wiki already teaches
(attention, emotion regulation, relationships, meaning, self, body, wisdom):
list the domain's kernels, compare against the operations that the domain's
principles/concepts prescribe, and flag prescribed practices with NO kernel.
Also flag principles that name a practice ("learn to...", "practice...") with no
kernel implementing it. Deliverable: table of prescribed-but-unimplemented practices.

## Deliverable

docs/enrichment/missing-concepts-audit-<date>.md with:
- the four stream tables (candidates, evidence, reference counts);
- a ranked proposal list (concept candidates and kernel candidates separately);
- explicit verification-status column (verified-lacking vs plausible-lacking);
- an owner sign-off section (nothing executes before sign-off).

## What NOT to do

- Do not mint pages or queue entries (owner sign-off required).
- Do not propose "complete the corpus" mega-lists — every candidate needs its evidence
  row (the thinkers-extension proposal is the format model).
- Do not re-audit what the ct2/ct3 rebuilds already cover (their manifests list the
  in-flight concept set).

## Preliminary Stream-1 scan (supervisor-pplx-1023a, 2026-10-23 — first evidence)

Dangling [[wikilink]] targets with 3+ referencing pages (the wiki's authors keep
reaching for these; no page exists):
- 9 refs — The testing effect / retrieval practice
- 7 refs — Participate: do with, not to
- 6 refs — Behavioural rehearsal / role-play (DBT, social skills training)
- 5 refs — Yoga: union of body, breath, and mind
- 3 refs — The wanting/liking dissociation

Total distinct dangling targets: 14 (9 with only 1-2 refs). The five above are the
immediate concept-candidate shortlist; the full audit runs all four streams.
