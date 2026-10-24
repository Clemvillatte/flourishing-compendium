#!/usr/bin/env python3
"""Rework genuine-flourishing.md into an interwoven thread (owner directive).
Keeps every card link and verified quote; replaces the opener and the
bare-list map sections with woven prose. Placeholders [[Label]] expand
to the full link markup captured from the current file.
"""
import re, json

P = 'docs/enrichment/dossiers/genuine-flourishing.md'
md = open(P, encoding='utf-8').read()
links = dict(re.findall(r'\[([^\]]+)\]\((https://clemvillatte\.github\.io/[^)]+)\)', md))

def expand(t):
    def sub(m):
        label = m.group(1)
        if label not in links:
            raise SystemExit('MISSING LINK LABEL: ' + label)
        return '[%s](%s)' % (label, links[label])
    return re.sub(r'\[\[([^\]]+)\]\]', sub, t)

NEW_OPENING = '''Flourishing is a flower word. It enters English from the Old French florir and the Latin flōrēre, to bloom, from flōs, flower:

> "From Middle English floryschen, from Old French florir (via the arrhizotonic stem floriss-), from Late Latin flōrīre, from Latin flōrēre, from Latin flōrem ("flower", noun). Corresponds to flower + -ish." ([Wiktionary, "flourish"](https://en.wiktionary.org/wiki/flourish)): Primary text; quoted passages checked.

The etymology is not decoration; it is the oldest theory attached to the word. A plant in bloom is not resting, not decorating and not succeeding at anything. It is doing what its nature builds toward when conditions allow, which is why people reach for this word rather than success or pleasure when they mean a life going well at its root. What the word suggests at first glance is close to what it is usually taken to mean: feeling good, doing well, the life that photographs well in summer.

Then the trouble starts, because half of the first-glance meanings are counterfeits, and the traditions disagree about which half. The feeling of a life going well can be bought cheaply. The thing itself, most of the classical accounts insist, cannot, and the science that measured the feeling kept finding the same gap from the other side.

Genuine carries the second thread. In ordinary use it means the real thing as against the counterfeit. Its root is lineage: borrowed from the Latin genuīnus, from genus, a word whose senses run from birth, origin, lineage and descent to kind and type, itself from a root meaning to produce, to beget:

> "Borrowed from Latin genuīnus, from genus + -ūs." ([Wiktionary, "genuine"](https://en.wiktionary.org/wiki/genuine)): Primary text; quoted passages checked.

> "From Proto-Italic *genos, from Proto-Indo-European *ǵénh₁os n ("race"), from the root *ǵenh₁- ("to produce, beget")" ([Wiktionary, "genus" (Latin)](https://en.wiktionary.org/wiki/genus#Latin)): Primary text; quoted passages checked.

To be genuine is, in the word's own history, to be of one's own stock: true to what one is rather than grafted onto an appearance. The two halves of the title together name the problem the theme carries: a life in bloom, and that bloom being the life's own rather than borrowed, forced or displayed. Everything I have gathered on the theme turns out to answer one of the four questions that problem breaks into: what the good life is, what gets mistaken for it, what it is made of and what it costs, and how it is built.

The large question, what a good life consists of, lives here; the affective state and its research, how pleasant feelings behave, why they fade, why they slip away when chased, lives with Happiness. The two overlap, and the overlap is a live scholarly dispute. Hedonic adaptation and the pleasant feeling itself sit mainly with Happiness; what a life is for, what it needs and what it must not be confused with sit here.
'''

NEW_MAP = '''## The map: the entries on flourishing

### What the good life is: the classical accounts

The classical account begins with a word and a question. Aristotle called the highest human good [[Eudaimonia]], a life of living well and doing well rather than a passing state of mind, and he grounded it in a thing's excellence: [[Arete]] is the Greek concept of excellence, a thing's full realization of its inherent function, which in ethics becomes moral virtue, a stable disposition to feel, choose and act well, acquired through habituation ([[Virtue]]). His argument runs through work: ask what the ergon of a human being is, as one asks it of a flute-player or a sculptor ([[The function argument]]), and the answer is that the good is activity of the soul in accordance with virtue over a complete life ([[Happiness as activity]]). The definition has three load-bearing parts. Happiness is final and self-sufficient, chosen only for itself while every other good is chosen at least partly for its sake ([[The sufficient good]], [[Everyone desires eudaimonia]]). It is an activity, something we do and not something we have. And it is not reducible to rules: it sits in the family of views that put character first rather than duties or consequences ([[Virtue ethics]]), virtue itself being a mean between excess and deficiency found by practical judgment and not by arithmetic ([[The doctrine of the mean]]), guided by the capacity to see what is best in the particular case and not only in general principles ([[Practical wisdom]]). Even the pleasure in it is earned rather than added: the pleasure a good person takes in activity consistent with virtue ([[The joy of virtue]]).

The rivals inside the classical world kept the skeleton and changed the weights. The Epicureans put freedom from mental disturbance at the centre ([[Ataraxia]]) and made pleasure a settled state rather than a process ([[Katastematic pleasure]]); both schools prized self-sufficiency, needing nothing external for the good life ([[Autarky]]). The Daodejing teaches that to be content and to know when to stop is to be free of danger and shame ([[Contentment with sufficiency]]). Spinoza's blessedness is the active joy that goes with the third kind of knowledge, a state of being and not a prize handed out afterward ([[Blessedness]]). And Aristotle himself refused to let the good life be a private possession: the city exists so that people may live, and live well, together ([[Common flourishing]], [[The polis]]), and its complete form of friendship is the one where friends love each other for their character ([[Aristotelian friendship]]).

One passage fixes the Aristotelian definition:

> "if this is the case, human good turns out to be activity of soul in accordance with virtue, and if there are more than one virtue, in accordance with the best and most complete. But we must add 'in a complete life.' For one swallow does not make a summer, nor does one day; and so too one day, or a short time, does not make a man blessed and happy." ([Aristotle, Nicomachean Ethics I.7, Ross translation](https://classics.mit.edu/Aristotle/nicomachaen.1.i.html)): Primary text; quoted passages checked.

### What the science took from it

The science took the classical question and made it measurable, in waves. Maslow opened with the need to become what one has it in one to become ([[Self-actualization (Maslow)]]) and the claim that human needs arrange themselves in hierarchies of pre-potency ([[Hierarchy of Needs Theory]]). The discipline itself turned toward the strengths and conditions that let a life go well ([[Positive psychology]]). Then came the measurement programmes. Ryff's theory-guided six dimensions of positive functioning, self-acceptance, positive relations with others, autonomy, environmental mastery, purpose in life, personal growth ([[Psychological well-being]]), built on her founding complaint that the reigning measures had little theoretical grounding ([[Holistic well-being]]). Ryan and Deci drew the line between the eudaimonic approach, focused on meaning, self-realization and full functioning, and the hedonic approach focused on pleasure attainment and pain avoidance ([[Eudaimonic well-being]]). Keyes operationalized mental health as positive feelings plus positive functioning, separate from but correlated with mental illness ([[Complete mental health model]]), on the finding that the presence of mental health and the absence of mental illness are correlated but separate factors ([[The two-factor model of well-being]]). Huppert and So gave flourishing a ten-feature framework and operational definition ([[Flourishing scale]]). Seligman proposed well-being as five elements, Positive Emotion, Engagement, Relationships, Meaning, Accomplishment, which he calls a hypothesis ([[PERMA model]]).

The science also widened the target. Goals sort into intrinsic ones, affiliation, growth, community contribution, and extrinsic ones, wealth, fame, image, with different well-being consequences ([[Eudaimonic motivation, intrinsic goals]]); well-being tracks the satisfaction of the needs for autonomy, competence and relatedness ([[Psychological needs theory]]); and people can be proactive and engaged or passive and alienated depending largely on social conditions ([[Self-determined personality growth]]). The felt side of functioning got its own constructs: vitality, the felt sense of being alive and having energy available for what one cares about ([[Vitality]]); vital engagement, absorption plus significance ([[Vital engagement]]); flow, energized focus and full involvement in the process of an activity ([[Flow]]); the quality of a life depending on whether its core projects can be pursued sustainably ([[Personal projects]]); the 24 character strengths grouped under virtue categories ([[Character strengths (Peterson & Seligman)]]); positive emotions broadening thought-action repertoires and building lasting personal resources ([[Positive emotions research]], [[Broaden-and-build]]). And the target keeps moving: Oishi and Westgate proposed a third aspect of a good life, psychological richness, varied, interesting, perspective-changing experiences distinct from both happiness and meaning ([[Psychological richness]]).

Ryff's founding complaint, and what she built from it, opens the scientific side:

> "Reigning measures of psychological well-being have little theoretical grounding, despite an extensive literature on the contours of positive functioning. Aspects of well-being derived from this literature (i.e., self-acceptance, positive relations with others, autonomy, environmental mastery, purpose in life, and personal growth) were operationalized." ([Ryff 1989, Journal of Personality and Social Psychology](https://thefpr.org/wp-content/uploads/Ryff1989_happiness.pdf)): Study; quoted passage checked.

### What gets mistaken for it

The counterfeits are not random; they share a shape: a good life taken to be a feeling to be held, a number to be reached, or an image to be kept up. In psychology, materialism is an orientation toward money and possessions as a route to personal achievement and well-being ([[Materialism]]), and its goals, wealth, fame and image, correlate with lower well-being, with the card honest that the effects are small to moderate and the "even when achieved" part rests on a later study ([[Extrinsic aspirations]]). The instrument behind that research assesses people's life goals directly ([[Aspiration index]]), and the distinction it measures is between goals whose pursuit meets basic psychological needs directly and goals whose value depends on other people's reactions ([[Intrinsic versus extrinsic goals]]). The hedonic treadmill runs underneath: people adapt to good and bad changes and drift back toward a stable baseline ([[Hedonic adaptation]]), and making happiness one's goal can reduce it, in two studies through disappointment at one's own feelings ([[Valuing happiness paradox]]). Mauss and colleagues found that valuing happiness more went with feeling worse, mostly when circumstances were good ([[The hedonic trap of seeking peak experiences]]). The trap is older than the experiments: Sidgwick saw that the impulse toward pleasure, if too predominant, defeats its own aim ([[The paradox of hedonism]]), and Frankl, after Mill, held that happiness arrives as a side effect of caring about something else and dissolves once it becomes the target ([[Happiness as by-product]]). Two character-level variants complete the picture: Horney's exaggerated need to compete and win, with self-worth riding on the outcome ([[Hypercompetitiveness]]), and reason reduced to the choice of means, which has stopped asking whether what it pursues is worth wanting ([[Instrumental reason]]).

### Meaning, purpose and the hard parts

The good life has hard parts, and the traditions insist they belong inside it rather than beside it. Frankl made meaning the primary human drive, the sense that life is about something: purpose, coherence and mattering ([[Meaning]]); his reversal in Man's Search for Meaning is that the question cannot be answered in general because life questions us and we answer with our conduct ([[The meaning of life]]); purpose itself is an aim or reason for carrying on ([[Purpose]]); and his name for saying yes to life in spite of the tragic triad is tragic optimism ([[Tragic optimism]]). The research on adversity complicated the pathology framework: resilience as positive adaptation in the context of adversity, with Masten's conclusion being how ordinary it is ([[Resilience]]), set beside Tedeschi and Calhoun's growth findings ([[Post-traumatic growth]]); and Taleb's third category beyond fragile and robust, the antifragile, gets better under stress ([[Antifragility]]). The contemplative traditions add the horizon: Heidegger's stance in which a person takes ownership of finitude instead of fleeing it ([[Being-toward-death]]); impermanence, the fact that everything that arises will pass, the cross-tradition hub and the counterweight to any picture of flourishing as a settled possession ([[Impermanence]]); authenticity, the congruent relationship between what a person presents outwardly and what they hold inwardly ([[Authenticity]]); a single priority beneath many demands, Luke 10:42 ([[One thing necessary]]); and the Japanese aesthetic of the imperfect, impermanent and incomplete ([[Wabi-sabi]]).

### The conditions: other people, society and freedom

No account of the good life survives contact with its conditions. The very happy people in Diener and Seligman's study had strong ties to others ([[Connectedness in well-being research]]); the drive for social attachment is a fundamental human motivation ([[The need to belong]]); and how people rate their lives depends heavily on the social conditions around them, not only on traits or income ([[Social determinants of well-being]]). The capability approach carries the classical question into policy: judge a life by the real opportunities a person has to do and be what they have reason to value, in Nussbaum's version ([[Flourishing as capability]]), on the shared Sen and Nussbaum ground of evaluating how well a life is going and how fair a society is by what people are able to do and be ([[The capabilities approach]]). Freedom enters as self-mastery, the presence of a self in charge of its own life and not only the absence of interference ([[Positive freedom]]). The same thread runs through the communal accounts: what a community owes to all its members ([[The common good]]); the view that human identities are largely shaped by constitutive communities ([[Communitarianism]]); Sandel's thought that the self is made by its ties and not only accompanied by them ([[Constitutive relationality]]); the Nguni word for humanness, a person is a person through other persons ([[Ubuntu]]); and Mason Durie's Māori model of wellbeing as a meeting house with four walls, all of which must stand ([[Te Whare Tapa Whā]]). The cross-cultural evidence cuts both ways: Joshanloo's review of Western and Eastern conceptions of the good life identifies six fundamental differences ([[Cross-cultural variations in conceptions of happiness]]), while cultural fit theory claims well-being tracks how well a person's values match the values around them, tested across 29 countries ([[Cultural fit theory]]). The material conditions have their own entries: the subjective sense of having enough time, with autonomy over its use ([[Time affluence]]); health tracking social position at every rung of the ladder and not only at the bottom ([[The social gradient of health]]); duties owed to people who do not yet exist, in Jonas's account ([[Intergenerational responsibility]]); and the impact of digital technologies on a life that is good for a human being ([[Digital well-being]]).

### How it is built: growth and practice

The last classical commitment is that the good life is built, not found. Aristotle's habituation says we become virtuous by doing the acts ([[Character development]]); the study of how stable virtuous traits are acquired continues the mechanism, with Sanderse on the neo-Aristotelian habituation account ([[Virtue development research]]); potentiality becomes actuality in a thing that is in act rather than merely able ([[Potentiality to actuality]]); the Buddhist theory of change holds that qualities are not given but cultivated, bhavana ([[Growth through practice]]); and Maslow corrected his own earlier framing, growth as a process active throughout life rather than a far goal ([[Pursue becoming, not arrival]]). The science of practice adds findings and cautions: whether boosts in happiness from intentional effort outlast the lift, in the Lyubomirsky, Sheldon and Schkade model ([[Sustainability of well-being gains]]); the degree to which a well-being practice suits the person doing it ([[Person-activity fit]]); simple intentional practices such as gratitude and kindness meant to raise well-being ([[Positive activity interventions]]); the felt recognition of a benefit received, with Seneca and Aristotle as classical anchors ([[Gratitude]]); how you respond to others' good news predicting relationship quality ([[Capitalization]]); awe, gratitude, love and peace carrying the link between spirituality and well-being ([[Self-transcendent emotions]]); and Zagzebski's theory that morality is built from the people we find supremely admirable ([[Moral exemplarism]]).

### The thinkers

The people behind these accounts have cards of their own: [[Aristotle]], student of Plato and founder of the Lyceum, author of the Nicomachean Ethics quoted above; [[Ryan and Deci]], whose 2000 American Psychologist article ties motivation, development and well-being together; [[Seligman]], who as APA president in 1998 turned the field toward what makes life worth living and later proposed the PERMA account; [[Fredrickson]], builder of the broaden-and-build account; and [[Maslow]], who gave the study of flourishing its most famous image, the hierarchy of needs.

### The stories

The stories I have collected carry the theme in narrative form: Solon refusing to call any man happy until his life is finished ([[143. Solon and Croesus]]); Camus's conclusion about the man condemned to roll a boulder uphill forever ([[277. Sisyphus Is Happy]]); Frankl's account of those who kept a reason to live ([[279. Frankl's Meaning]]); Diogenes answering that wherever he goes the sun shines ([[195. Diogenes and the Sun]]); and the four ways people respond to a partner's good news ([[316. How You Respond to Good News]]).

'''

# --- surgery ---
lines = md.split('\n')
# find the current opener (first prose para after question) and replace through
# the end of the '### The stories' map subsection.
start = None
for i, l in enumerate(lines):
    if l.startswith('Flourishing is what the word'):
        start = i
        break
assert start is not None, 'opener anchor not found'
# end anchor: the line '## Where the traditions genuinely disagree'
end = md.index('## Where the traditions genuinely disagree')
head = '\n'.join(lines[:start])
tail = md[end:]
# also need the Nearby terms block: currently sits between opener and map.
# It lives in the region we are replacing; re-append it after the opening.
nt_start = md.index('### Nearby terms')
nt_end = md.index('## The map:')
nearby = md[nt_start:nt_end]
new_md = head + expand(NEW_OPENING) + '\n' + nearby + expand(NEW_MAP) + tail
open(P, 'w', encoding='utf-8').write(new_md)
print('rewritten, length', len(new_md))
