# Memento mori — ct2 (worker-pplx-ct2-e2e6969a, 2026-10-23)

Carriers opened and verified this session:
1. Wikipedia "Memento mori" (fetch_url) — verbatim sentences used: "The Stoics of
   classical antiquity were particularly prominent in their use of this discipline,
   and Seneca's letters are full of injunctions to meditate on death." and the
   Meditations quotation "consider how ephemeral and mean all mortal things are."
2. Seneca, Moral Letters to Lucilius 101 (Gummere translation, Wikisource,
   fetch_url) — verbatim: "Therefore, let us so order our minds as if we had come
   to the very end. Let us postpone nothing. Let us balance life's account every
   day." and the separate-life rule ("count each separate day as a separate life";
   "One who daily puts the finishing touches to his life is never in want of time").

Rebuild on current framework: subheadings added; verified Letter 101 blockquote added
with locator; the page's unverified paraphrase of Seneca's "go to bed as if you had
lived your last day / time as a loan" was REMOVED from prose (that wording matched no
opened carrier) and replaced with the verified separate-life rule from Letter 101.
Everyday-life example labeled "(Illustrative scenario, not a reported participant or
study result.)". "In the compendium" section added with all original principle links
(multiplicity preserved; counter diff clean — no MISSING, only consolidated list).
Sources now markdown-linked (Wikipedia, Wikisource Letter 101); the Seneca/
On the Shortness of Life / Stoic-tradition entries retained as plain items.
Validator ok. NOTE for supervisor: prose em-dash budget (max 3) forced most
principle links out of prose paragraphs into the compendium list; this is the
framework pattern for pages whose principle ids contain em dashes.

## Post-script (conflict repair, 11:37 UTC)
A concurrent ct2 worker (e79303d33) rebuilt this page in parallel; my rebuild
(e2d1b5eb4/401252ff1) was rebased on top and the merge left conflict markers that
were pushed in 401252ff1. Resolved in 633783785 by keeping the e79303d33 side
(three verified Letter 101 quotes, principle links out of prose per dash budget,
expanded Related, kernel link K230) and dropping my duplicate side; validated
against the a9f097ec9 pre-rebuild baseline. All 42 ct2 pages then re-validated
clean. The e79303d33 version's Letter 101 quotes were verified by me against the
same Wikisource page earlier in this session.
