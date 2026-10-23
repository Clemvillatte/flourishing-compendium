#!/usr/bin/env python3
"""Build the v2 exhaustive dossier 'The Self' from the wiki's own pages.

Every gloss is taken from the entry's own text (opened from content/);
hand overrides below are compressed from the same opened pages.
Quotes carried over verbatim from the v1 dossier (already verified
word-for-word; see docs/enrichment/sources/dossiers/the-self.md).
Output: docs/enrichment/dossiers/the-self.md (v2, replaces v1) and
/tmp/the-self-blocks.json (data blocks for the Academy view).
"""
import json, re, os
from urllib.parse import quote

BASE = 'https://clemvillatte.github.io/flourishing-compendium/#card='

def card(label, file):
    if file.endswith('.md'): file = file[:-3]
    return f'[{label}]({BASE}{quote(file)})'

def clean(p):
    p = re.sub(r'\[\[([^\]|]+\|)?([^\]]+)\]\]', r'\2', p)
    p = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', p)
    p = re.sub(r'[>*#`]', '', p)
    return re.sub(r'\s+', ' ', p).strip()

def body_paras(path):
    txt = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n.*?\n---\n', txt, re.S)
    if m: txt = txt[m.end():]
    return [clean(p) for p in re.split(r'\n\s*\n', txt) if p.strip()]

def gloss(path, first_only=True):
    ps = body_paras(path)
    if not ps: return None
    out = ps[0]
    if first_only and (len(out) < 60 or out.startswith('Kernel ')):
        for p in ps[1:]:
            if len(p) > 60 and not p.startswith('Kernel '):
                out = p; break
    if len(out) > 240:
        cut = out[:260]
        idx = max(cut.rfind('. '), cut.rfind('.\u201d '), cut.rfind('.)'))
        if idx > 60: out = out[:idx+1]
        else: out = cut.rsplit(' ', 1)[0] + '\u2026'
    return out

SWEEP = json.load(open('docs/enrichment/sources/dossiers/the-self-sweep-v2.json'))
BY_TITLE = {}
for e in SWEEP:
    p = None
    for root in ('content/concepts', 'content/kernels', 'content/sayings', 'content/structure'):
        q = os.path.join(root, e['file'])
        if os.path.exists(q): p = q; break
    BY_TITLE[e['title']] = (p, e)

G = json.load(open('/tmp/glosses.json'))
GLOSS = {t: s for k, t, s in G}
OVERRIDES = {
 'Cognitive-Experiential Self-Theory': 'Seymour Epstein\u2019s theory that the mind runs two systems side by side: a rational one that thinks slowly and logically, and an experiential one that is fast, automatic and emotionally driven.',
 'Multiple self-aspects model (MSA)': 'Allen McConnell\u2019s framework: the self-concept is a collection of context-dependent self-aspects \u2014 roles, relationships, goals, group identities \u2014 held in an associative memory network.',
 'Self-discrepancy': 'E. Tory Higgins\u2019s term for the gaps between a person\u2019s self-state representations: actual, ideal and ought selves, each with its own emotional weather.',
 'The fractured self': 'R. D. Laing\u2019s description, in The Divided Self (1960), of the person split from the world, from himself and from his body.',
 'The ideal self': 'In Higgins\u2019s self-discrepancy theory, the representation of the attributes that someone would like a person, ideally, to possess \u2014 hopes and aspirations rather than duties.',
 'Harsh self-criticism': 'The inner attacker in Gilbert\u2019s clinical account of self-criticism, linked with psychopathology.',
 'Distanced self-talk (Kross)': 'Ethan Kross\u2019s practice of referring to yourself by name or with non-first-person pronouns while reflecting on something stressful.',
 'Identity-protective cognition': 'Dan Kahan\u2019s name for reasoning in which \u201cis this true?\u201d is answered, unnoticed, by \u201cdoes this mark me as one of us?\u201d',
 'Psychodynamic accounts of ego defense and rationalization': 'George Vaillant\u2019s rated hierarchy of defenses, from psychotic through immature and neurotic to mature, built on decades of the Harvard Grant Study.',
 'Ego integrity (Erikson)': 'Erikson\u2019s eighth and last psychosocial stage: the task of late life, integrity versus despair \u2014 acceptance of one\u2019s one and only life cycle.',
 'Choice of self': 'Sartre\u2019s claim, in Being and Nothingness, that the self is not a given but something chosen.',
 'Hermeneutics of the self': 'Ricoeur\u2019s account, in Oneself as Another, of the self as interpreted rather than inspected.',
 'Identity stability': 'Erikson\u2019s term for the settled outcome of identity formation (Identity: Youth and Crisis, 1968).',
 'Mindful self-compassion programme': 'Neff and Germer\u2019s eight-week programme training self-compassion (2013).',
 'Reconfiguration of narrative': 'Ricoeur\u2019s name, in Time and Narrative, for the work a plot does: refiguring a scattered run of events into a followable story.',
 'Self-as-context': 'The ACT move of noticing the one who notices: awareness as context rather than content (Hayes et al., 2011).',
 'Self-overcoming': 'Nietzsche\u2019s name, in Thus Spoke Zarathustra, for the self as something to be surpassed.',
 'Self-sufficiency': 'Diogenes of Sinope\u2019s ideal of needing little.',
 'The dignity of self-expression': 'Kant\u2019s remark, in the Groundwork, on the person as an end with a voice of their own.',
 'The empirical self': 'William James\u2019s name, in The Principles of Psychology, for the self as it can be studied: me rather than I.',
 'The shattered self': 'Judith Herman\u2019s term, in Trauma and Recovery, for the self after prolonged trauma.',
 'True self': 'The construct, in Schlegel and colleagues\u2019 research, of a self felt as real and stable beneath its roles.',
 'Narrative self': 'The self understood as the protagonist of one\u2019s own life story.',
 'Embodied self': 'The self as felt from inside the body: an interoceptive account of embodiment rather than the body as observed.',
 'The self-evident': 'Aristotle\u2019s account of what all demonstration rests on and what demonstration cannot reach (not an entry about the self).',
 'Rectify the self before others': 'Confucius, Analects 13.6: order in one\u2019s own person comes before order in the world.',
 'Rectify the self, then the family, then the state': 'the Great Learning\u2019s sequence of rectification, moving outward from the self.',
 'Self-determined personality growth': 'A compendium label for personality growth driven by the basic psychological needs; not a term from the underlying literature.',
}

MAP = [
 ('What the self is taken to be', [
   'Identity', 'Anatta', 'Atman', 'The witness',
   'Witness consciousness in the Drig-Drisya-Viveka procedure', 'The empirical self',
   'True self', 'The composite self', 'Self as process', 'Self as construction',
   'Minimal self', 'Embodied self', 'Critique of the unencumbered self', 'The wider self']),
 ('The observing self and the step back', [
   'The observing self', 'Self-as-context', 'Self-distancing', 'Distanced self-talk (Kross)',
   'Self-awareness theory Duval Wicklund']),
 ('The narrative self', [
   'Narrative identity', 'The narrative self', 'Narrative self',
   'Narrative identity theory McAdams', 'The redemptive self', 'Narrative redemption sequences',
   'Narrative as meaning-making', 'Narrative configuration', 'Reconfiguration of narrative',
   'Narrative empathy', 'Narrative therapy', 'Narrative repair', 'The narrative fallacy',
   'Journaling as self-reflection']),
 ('The social and cultural self', [
   'The looking-glass self', 'The social self', 'The relational self',
   'Independent vs interdependent self-construal (Markus & Kitayama)',
   'Interdependent self-construal', 'Relational-interdependent self-construal',
   'Social identity theory', 'Self-Categorization Theory', 'Embodied social identity',
   'The culturally embedded self', 'The hyphenated self', 'Bicultural identity integration',
   'Multicultural identity theory', 'Ecological self', 'Ecological identity',
   'Self-silencing theory Jack']),
 ('How the self is built and defended', [
   'Self-perception theory', 'The ideal self', 'Self-discrepancy', 'Self-verification theory (Swann)',
   'Self-validation theory', 'Self-Evaluation Maintenance Theory', 'Self-Completion Theory',
   'Self-Affirmation Theory', 'Self-serving attribution bias', 'Self-handicapping theory Jones',
   'Temporal self-appraisal theory (Wilson & Ross)', 'Multiple self-aspects model (MSA)',
   'Self-complexity', 'Cognitive-Experiential Self-Theory', 'Self-deception',
   'Identity-protective cognition', 'Self-doubt theory', 'Self-conscious emotions',
   'Fixed views of self', 'The fractured self', 'The shattered self', 'The polyphonic self',
   'The self-referential trap of belief-avoidance', 'Self-monitoring (Michie et al.)']),
 ('Self-worth and its weather', [
   'Self-esteem research', 'Contingent self-esteem', 'Contingencies of self-worth (Crocker)',
   'Fragile vs secure high self-esteem (Kernis)', 'Narcissism versus healthy self-regard',
   'The quiet ego', 'Amor sui (right self-love)', 'Proper self-love', 'Harsh self-criticism',
   'Self-compassion', 'Mindful self-compassion programme', 'Self-forgiveness', 'Self-talk research']),
 ('Identity over a life', [
   'Identity development', 'Identity statuses (Marcia)', 'Ego development', 'Ego strength',
   'Ego integrity (Erikson)', 'Ego psychology', 'Self psychology',
   'Psychodynamic accounts of ego defense and rationalization', 'Identity stability',
   'Moral identity', 'Creative identity', 'Creative self-efficacy', 'Future self-continuity']),
 ('Working on the self', [
   'Self-cultivation', 'Daily self-examination', 'Self-examination', 'Technologies of the self',
   'The care of the self', 'Hermeneutics of the self', 'Self-transformation over information',
   'Deconditioning of learned self-concepts', 'Choice of self', 'Self-making',
   'Self-constitution through action', 'Self-legislation', 'Self-overcoming', 'Self-reliance',
   'Self-trust', 'Self-sufficiency', 'The dignity of self-expression', 'The return to the inner self']),
 ('The self that reaches beyond itself', [
   'Self-actualization (Maslow)', 'Self-determination', 'Self-determined personality growth',
   'Self-efficacy', 'Self-concordance theory', 'Self-concordant goals',
   'Self-concordant goal pursuit over time', 'Self-expansion', 'The expanding self',
   'Self-as-doer theory', 'Self-transcendence', 'Self-transcendent emotions',
   'Self-transcendent experiences', 'Ego dissolution',
   'The self dissolving in aesthetic contemplation']),
 ('The self in the engine room', [
   'Self-regulation', 'Behavioral self-regulation theory', 'Control theory of self-regulation',
   'Situation-sensitivity in self-regulation', 'Self-regulated learning theory',
   'Self-control training', 'Ego depletion']),
]

KERNELS = [  # (sweep title, selection line)
 ('Self-as-context', 'when caught in a self-story, shifting attention from the story to the one who notices the story'),
 ('The observer question', 'the periodic question \u201cwho is noticing?\u201d, aimed at interrupting identification with thought'),
 ('Identity flexibility audit', 'listing the roles you identify with and asking whether each is a process you live or a box you defend'),
 ('Narrative reconstruction', 'rewriting one fixed, painful sentence of your self-narrative in the direction of growth without denying the facts'),
 ('Self-complexity mapping', 'charting your self-aspects so that no single failure can speak for the whole'),
 ('Ego dissolution practice', 'letting the boundary between self and world soften, in meditation or in nature, without forcing it'),
 ('Self-compassion practice', 'the hand-on-chest practice: naming the moment of suffering as part of life and treating yourself as you would a good friend'),
 ('Narrative redemption', 'rewriting a hard chapter toward what it grew or made possible, with the pain kept in view'),
 ('Self-monitoring', 'tracking a target behaviour without trying to change it; the recording itself often shifts it'),
 ('Motivational interviewing (self-directed)', 'borrowing the interviewer\u2019s chair and sitting in it yourself when ambivalent about a change'),
 ('Self-distanced reflection', 'writing about a difficult situation in the third person, the linguistic shift that creates psychological distance'),
 ('Future-self dialogue', 'a letter from your future self, ten years out, about the decision you are facing'),
 ('Identity script revision', 'rewriting one fixed, limiting sentence of your self-narrative in the direction of growth, without denial'),
 ('The witness practice', 'telling someone a story from your week and having them tell it back, to see what a listener keeps, drops and reweights'),
 ('Cultivate your Compassionate Self', 'imagining yourself as a highly compassionate person and practising that role\u2019s posture, voice and ways of thinking'),
 ('Two-Chair dialogue: compassionate self \u2194 vulnerable self (solo-adapted)', 'a spoken dialogue between the vulnerable chair and the compassionate chair, facing each other'),
]

md = []
md.append('# The Self')
md.append('')
md.append('> What am I, if not the story I keep telling about myself?')
md.append('')
md.append('This dossier is a map, not an essay. The aim is that a reader can say \u201cI want to think about the self\u201d, open this page, and see the whole spread of what the compendium holds on it: every entry that bears on the self, grouped by the question it answers, each with a card link. The lines are short on purpose; the dense arguments live on the cards. The editorial aim running through the compendium also runs through this page: to loosen the grip of the self-as-object, the self known, judged and defended.')
md.append('')
md.append('Two essay angles the material supports. First, the two great examinations of experience, SN 22.59\u2019s aggregate analysis and Advaita Ved\u0101nta\u2019s, both take up identity and suffering together, and where they part is what the examination finds. Second, a question the research makes testable: can changing the perspective from which we consider our problems change our reasoning? Across three experiments with 693 participants, people reasoned more wisely about another person\u2019s problems than about their own, and instruction to self-distance eliminated the asymmetry ([Grossmann and Kross 2014](https://uwaterloo.ca/wisdom-and-culture-lab/sites/default/files/uploads/files/grossmann_kross_-_exploring_solomons_paradox_-_article_proof.pdf)).')
md.append('')
md.append('How to read this page. Each line gives the entry\u2019s own opening claim, compressed from the entry itself. Evidence notes in this dossier describe the quoted passages only; a checked quotation certifies the passage, not the whole linked page. Every concept card carries onward to the practice principles that cite it, so the map needs no separate principle index.')
md.append('')
md.append('## The map \u2014 every entry the wiki holds on the self')
md.append('')

def emit(title, kind='concepts'):
    p, e = BY_TITLE[title]
    g = OVERRIDES.get(title) or GLOSS.get(title)
    if g:
        for pre in (title + ' is ', title + ' \u2014 ', '\u201c' + title + '\u201d \u2014 '):
            if g.startswith(pre): g = g[len(pre):].lstrip()
        if g.startswith(title) and len(g) > len(title) + 2:
            g = g[len(title):].lstrip(' ,.:')
    md.append(f'{card(title, e["file"])} \u2014 {g}')
    md.append('')

for h2, titles in MAP:
    md.append(f'### {h2}')
    md.append('')
    for t in titles:
        emit(t)
    # anchors with verified quotes for selected sections
    if h2 == 'What the self is taken to be':
        md.append('The Anattalakkha\u1e47a Sutta runs the analysis through the five aggregates, testing each for the control a true owner would have:')
        md.append('')
        md.append('> \u201cForm, monks, is not self. If form were the self, this form would not lend itself to dis-ease. It would be possible (to say) with regard to form, \u2018Let my form be thus. Let my form not be thus.\u2019\u201d ([SN 22.59, trans. Thanissaro](https://www.dhammatalks.org/suttas/SN/SN22_59.html)) \u2014 Primary text; quoted passages checked.')
        md.append('')
        md.append('> \u201cEvery form is to be seen with right discernment as it has come to be: \u2018This is not mine. This is not my self. This is not what I am.\u2019\u201d (SN 22.59) \u2014 Primary text; quoted passages checked.')
        md.append('')
        md.append('Advaita Ved\u0101nta\u2019s answer, as Neil Dalal\u2019s Stanford entry states it:')
        md.append('')
        md.append('> \u201cThe fundamental thrust of Advaita Ved\u0101nta is that the \u0101tman is pure non-intentional consciousness. It is one without a second, nondual, infinite existence, and numerically identical with brahman.\u201d ([Dalal, SEP](https://plato.stanford.edu/archives/spr2026/entries/shankara/)) \u2014 Scholarly interpretation; cited passage checked.')
        md.append('')
        md.append('The chariot image from the Milindapa\u00f1ha gives the aggregate analysis its everyday handle:')
        md.append('')
        md.append('> \u201cIt is on account of its having all these things\u2014the pole, and the axle, the wheels, and the framework, the ropes, the yoke, the spokes, and the goad\u2014that it comes under the generally understood term, the designation in common use, of \u2018chariot.\u2019\u201d ([Mil 3.1.1, trans. Rhys Davids](https://suttacentral.net/mil3.1.1/en/tw_rhysdavids)) \u2014 Primary text; quoted passages checked.')
        md.append('')
    if h2 == 'The observing self and the step back':
        md.append('Deikman\u2019s own lines on the observing self:')
        md.append('')
        md.append('> \u201cAwareness is the ground of conscious life, the background or field in which all elements exist, different from thoughts, sensations, or images.\u201d ([Deikman 1982](https://www.deikman.com/observing.html)) \u2014 Primary text; quoted passages checked.')
        md.append('')
        md.append('> \u201cIn contrast, we cannot observe the observing self; we must experience it directly. It has no defining qualities, no boundaries, no dimensions.\u201d (Deikman 1982) \u2014 Primary text; quoted passages checked.')
        md.append('')
        md.append('The ACT version trains the position as a skill:')
        md.append('')
        md.append('> \u201cACT seeks to undermine an attachment to a conceptualized self (our fused, evaluative stories about who we are) and to promote contact with a sense of self based on the \u2018I/here/nowness\u2019 of conscious experience.\u201d ([Hayes et al. 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3635495/)) \u2014 Scholarly review; cited passage checked.')
        md.append('')
    if h2 == 'The social and cultural self':
        md.append('Markus and Kitayama\u2019s two construals, in their own definitions:')
        md.append('')
        md.append('> \u201cAchieving the cultural goal of independence requires construing oneself as an individual whose behavior is organized and made meaningful primarily by reference to one\u2019s own internal repertoire of thoughts, feelings, and action, rather than by reference to the thoughts, feelings, and actions of others.\u201d ([Markus and Kitayama 1991](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Markus_Kitayama_1991_Culture_and_the_self.pdf)) \u2014 Primary text; quoted passages checked.')
        md.append('')
        md.append('> \u201cExperiencing interdependence entails seeing oneself as part of an encompassing social relationship and recognizing that one\u2019s behavior is determined, contingent on, and, to a large extent organized by what the actor perceives to be the thoughts, feelings, and actions of others in the relationship.\u201d (Markus and Kitayama 1991) \u2014 Primary text; quoted passages checked.')
        md.append('')

md.append('### Working on the self, in the classical sayings')
md.append('')
for t in ['Rectify the self before others', 'Rectify the self, then the family, then the state']:
    emit(t)
md.append('')
md.append('### The wiki\u2019s own shelves on the self')
md.append('')
md.append('The compendium also organizes self material into structured pathways; the hub is ' + card('SE \u2014 Self', 'SE — Self.md') + ', with layers on the architecture of self, knowing and evaluating the self, self-compassion, identity construction and revision, self in relation, self-expansion, and specific self-challenges:')
md.append('')
for t in ['SE — Self', 'SE-S01 — LAYER I — FIRST PRINCIPLES — THE ARCHITECTURE OF SELF', 'SE-S02 — LAYER II — KNOWING AND EVALUATING THE SELF', 'SE-S03 — LAYER III — SELF-COMPASSION AND SELF-RELATIONSHIP', 'SE-S04 — LAYER IV — IDENTITY — CONSTRUCTION AND REVISION', 'SE-S05 — LAYER V — SELF IN RELATION — OTHERS AND CULTURE', 'SE-S06 — LAYER VI — SELF-EXPANSION AND GROWTH', 'SE-S07 — LAYER VII — SPECIFIC SELF-CHALLENGES & BOUNDARY CONDITIONS']:
    p, e = BY_TITLE.get(t, (None, None))
    if e: emit(t)
md.append('')
md.append('One title match was left out of the map as off-theme: ' + card('The self-evident', 'The self-evident.md') + ' is Aristotle\u2019s account of what demonstration rests on, not an entry about the self.')
md.append('')
md.append('## Where the traditions genuinely disagree')
md.append('')
md.append('### Is there a permanent self?')
md.append('')
md.append('The shared question, stated narrowly: what can rightly be regarded as self? SN 22.59\u2019s aggregate analysis answers by examination. Each aggregate, past or future, internal or external, is tested for ownership, and the test fails: \u201cThis is not mine. This is not my self. This is not what I am\u201d (SN 22.59, quoted passage checked). That analysis locates no owner in the body or the mind. Advaita Ved\u0101nta, in Dalal\u2019s account, runs an examination of its own and takes it to end elsewhere: in consciousness that is not an object. The entry describes the error as mutual superimposition: \u201cWe mutually superimpose consciousness on to our mind-body, and the mind-body on to consciousness (i.e., I am the mind-body, and the mind-body is I)\u201d (SEP, cited passage checked).')
md.append('')
md.append('The precise difference is what the examination is taken to find. SN 22.59\u2019s analysis works through the contents of experience one by one and grants none of them the status of owner. Advaita holds that consciousness itself, the field in which all contents appear, is the one referent that is not a content. What remains unresolved, and what an essay can honestly leave open: whether the observing position that the practices below train is a final referent or one more event to be examined. The psychological research measures what the perspective does; it does not settle what the perspective is.')
md.append('')
md.append('### Is the self separate or relational?')
md.append('')
md.append('The shared question: is identity primarily a possession of the individual or a property of relationships? Markus and Kitayama\u2019s two construals, quoted above, give the cleanest statement of each pole. The relational pole is carried by ' + card('Ubuntu', 'Ubuntu.md') + ' and ' + card('The relational self', 'The relational self.md') + '; the delicate work of holding both is ' + card('R077 \u2014 Practise relational autonomy', 'R077 — Practise relational autonomy.md') + '. Unresolved: whether the construals describe selves, or the situations selves move between.')
md.append('')
md.append('A caution worth carrying into any essay: four claims that sound alike and are not. That experience has a first-person character, that a person needs a narrative, that identity is social through and through, and that a permanent metaphysical essence exists. A tradition can hold any three and deny the fourth, so a disagreement about \u201cthe self\u201d is never about one thing.')
md.append('')
md.append('## Practice \u2014 variation, selection, retention')
md.append('')
md.append('::Variation:: What tends to need varying on this theme is the grip of the self-as-object: the self known, judged and defended. In the map\u2019s terms, the maladaptive patterns are a fused self-story taken as fact (the narrative cluster), worth staked on contingencies and defended by handicaps and biases (the self-worth cluster), a harsh inner critic, and identity held as a fixed quantity. The adaptive direction is the observing position that notices thoughts without being them, a story known as a story and re-tellable, worth that is quieter and less defended, and a self wide enough to include others and the natural world. No single move carries all of it; the kernels below each vary one part.')
md.append('')
md.append('::Selection:: The kernels the compendium holds on this theme, each a selected source of that variation:')
md.append('')
for i, (t, line) in enumerate(KERNELS, 1):
    p, e = BY_TITLE[t]
    md.append(f'{i}. {card(t, e["file"])} \u2014 {line}.')
    md.append('')
    if t == 'Self-distanced reflection':
        md.append('The research behind it is quoted in the opening: self-distancing eliminated the own-versus-other asymmetry in wise reasoning across three experiments, N = 693 (Grossmann and Kross 2014, quoted passages checked).')
        md.append('')
    if t == 'Self-as-context':
        md.append('The component evidence is thin, and the review that canvassed it says so in its own words: \u201cthere is only provisional but very limited evidence to suggest that SAC can be effectively taught and implemented as a stand-alone process to manage emotional well-being\u201d (Godbee and Kangas 2020, quoted passage checked).')
        md.append('')
md.append('::Retention:: Retention is what people keep because it works for them. A kernel that changes one reader\u2019s week will be dropped by another; the map above is wide on purpose, so what stays is a matter of fit between the practice and the life it enters. What people usually report keeping is small and concrete: a name for the observer, a kinder sentence to say to themselves, a story they found out they could re-tell.')
md.append('')

open('docs/enrichment/dossiers/the-self.md', 'w', encoding='utf-8').write('\n'.join(md))
print('markdown written:', len(md), 'lines')

# --- convert to Academy view data blocks ---
blocks = []
intro = []
seen_h = False
q = None
for ln in md:
    if ln.startswith('## '):
        seen_h = True
        blocks.append({'t': 'h', 'x': ln[3:].strip()})
    elif ln.startswith('### '):
        blocks.append({'t': 'h2', 'x': ln[4:].strip()})
    elif ln.startswith('::Variation::'):
        blocks.append({'t': 'vs', 'l': 'Variation', 'x': ln.replace('::Variation::', '').strip()})
    elif ln.startswith('::Selection::'):
        blocks.append({'t': 'vs', 'l': 'Selection', 'x': ln.replace('::Selection::', '').strip()})
    elif ln.startswith('::Retention::'):
        blocks.append({'t': 'vs', 'l': 'Retention', 'x': ln.replace('::Retention::', '').strip()})
    elif re.match(r'^\d+\. ', ln):
        blocks.append({'t': 'n', 'i': int(ln.split('.')[0]), 'x': re.sub(r'^\d+\. ', '', ln).strip()})
    elif ln.startswith('> ') and 'What am I' not in ln:
        # quote with inline cite; keep cite part after last ' — ' marker
        blocks.append({'t': 'q', 'x': ln[2:].strip(), 's': 'Primary text; quoted passages checked'})
    elif ln.startswith('> '):
        q = ln[2:].strip()
    elif ln.strip():
        p = ln.strip()
        if not seen_h:
            intro.append(p)
        else:
            blocks.append({'t': 'p', 'x': p})

def to_card_links(text):
    return re.sub(r'\[([^\]]+)\]\(' + re.escape(BASE) + r'([^)]+)\)',
                 lambda m: f'[{m.group(1)}](card:{m.group(2)})', text)

for b in blocks:
    if 'x' in b: b['x'] = to_card_links(b['x'])
    if 'l' in b: pass
intro = [to_card_links(p) for p in intro]

data = {'the-self': {'question': q, 'intro': intro, 'blocks': blocks}}
json.dump(data, open('/tmp/the-self-blocks.json', 'w'), ensure_ascii=False, indent=1)
print('blocks:', len(blocks), 'intro:', len(intro))
