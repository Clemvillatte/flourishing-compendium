#!/usr/bin/env python3
"""deg-psychdim integration: attach the eight verified modules to fcAcademyData.

Built by worker-pplx-integrate-1026a (2026-10-26). All module facts are
condensed from docs/degrees/modules/deg-psychdim/*.md at their
supervisor-PASS hashes; all source facts are condensed from
docs/degrees/ledgers/deg-psychdim.md (sources-opened table) and the
module source routes. No source or module content is invented here.
"""
import json, sys

APPJS = 'site/assets/app.js'

def S(sid, url, title, presenter='', host='', duration='', topic='', level='Foundations', kind=''):
    rec = {
        'source_id': sid,
        'youtube_id_or_url': url,
        'canonical_url': url,
        'title': title,
        'presenter': presenter,
        'host': host,
        'duration': duration,
        'topic_ids': topic,
        'level': level,
        'mission': 'deg-psychdim',
        'verification_status': 'verified',
        'gate_evidence': 'deg-psychdim ledger sources-opened table; module QC PASS (supervisor 1026h, band deg-psychdim.json)',
    }
    return rec

sources = [
    # videos
    S('PD-S01', 'https://www.youtube.com/watch?v=sDGpXQLHLfY',
      'Steven Hayes, An Introduction to Process-Based Therapy (assigned window 01:03:17-01:09:12)',
      'Steven Hayes', 'YouTube', '5:55', 'PD-M1', 'Foundations'),
    S('PD-S02', 'https://www.youtube.com/watch?v=LKiX54NglCo',
      'Kristin Sainani, Statistics Fundamentals (assigned windows 03:29-09:21, 25:46-44:11, 54:02-57:21)',
      'Kristin Sainani', 'YouTube (Stanford)', '5:52 + 18:25 + 3:19', 'PD-M1', 'Foundations'),
    S('PD-S03', 'https://www.youtube.com/watch?v=0gks6ceq4eQ',
      'Lisa Feldman Barrett, You are not at the mercy of your emotions (TED, assigned 00:00-18:29)',
      'Lisa Feldman Barrett', 'TED (YouTube)', '18:29', 'PD-M2', 'Foundations'),
    # PD-S04: Gross Melbourne video already exists in the data block as M06-AF07; referenced by id.
    S('PD-S05', 'https://www.youtube.com/watch?v=rCKK6r15fro',
      'Paul Bloom, Yale PSYC 110 lecture 4, Learning (assigned windows)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '', 'PD-M3', 'Foundations'),
    S('PD-S06', 'https://www.youtube.com/watch?v=Yuwqr5o58Z0',
      'Paul Bloom, Yale PSYC 110 lecture 8, Memory (assigned 18:06-39:15)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '21:09', 'PD-M3', 'Foundations'),
    S('PD-S07', 'https://www.youtube.com/watch?v=AMsQfgV07vU',
      'Paul Bloom, Yale PSYC 110 lecture 10, Judgment (assigned window)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '', 'PD-M3', 'Foundations'),
    S('PD-S08', 'https://www.youtube.com/watch?v=DmWrOUK2zgA',
      'Paul Bloom, Yale PSYC 110 lecture 7 (perception window in M4; M3 window)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '', 'PD-M4', 'Foundations'),
    S('PD-S09', 'https://www.youtube.com/watch?v=uYUdwS7-WvA',
      'Michael Posner on the anatomy of attentional networks (gocognitive, 03:06-14:52)',
      'Michael Posner', 'gocognitive (YouTube)', '11:46', 'PD-M4', 'Intermediate'),
    S('PD-S10', 'https://www.youtube.com/watch?v=y-fQywP6qa8',
      'Michael Posner, Fostering Attention for Human Needs (APS, 05:24-07:42)',
      'Michael Posner', 'Association for Psychological Science (YouTube)', '2:18', 'PD-M4', 'Intermediate'),
    S('PD-S11', 'https://www.youtube.com/watch?v=n_3MVEo9fx4',
      'Richard Davidson with Andrew Huberman, When and How to Practice Effective Meditation (02:08-04:17)',
      'Richard Davidson', 'Huberman Lab Clips (YouTube)', '2:09', 'PD-M4', 'Intermediate'),
    S('PD-S12', 'https://www.youtube.com/watch?v=piDznzrNymE',
      'Paul Bloom, Yale PSYC 110 lecture 13 (assigned 13:53-19:47)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '5:54', 'PD-M5', 'Intermediate'),
    S('PD-S13', 'https://www.youtube.com/watch?v=jsrB5m3mL-A',
      'Paul Bloom, Yale PSYC 110 lecture 16 (assigned 15:56-28:41 and 40:00-50:03)',
      'Paul Bloom', 'Yale Open Courses (YouTube)', '12:45 + 10:03', 'PD-M5', 'Intermediate'),
    S('PD-S14', 'https://www.youtube.com/watch?v=49FCgaZRn_M',
      'Dan McAdams, Authoring a Life (assigned 10:07-13:31)',
      'Dan McAdams', 'YouTube', '3:24', 'PD-M5', 'Intermediate'),
    S('PD-S15', 'https://www.youtube.com/watch?v=qYvXk_bqlBk',
      'Brian Little, Who are you really? The puzzle of personality (TED, assigned from 11:12)',
      'Brian Little', 'TED (YouTube)', '', 'PD-M5', 'Intermediate'),
    S('PD-S16', 'https://www.youtube.com/watch?v=6R2ALQfEZwA',
      'Maya Tamir, Yale Experts in Emotion 2013 (09:21-14:43)',
      'Maya Tamir', 'Yale (YouTube)', '5:22', 'PD-M6', 'Intermediate'),
    S('PD-S17', 'https://www.youtube.com/watch?v=igSLOQoWuPQ',
      'Reinhard Pekrun, IPPE 2023 (15:51-19:02)',
      'Reinhard Pekrun', 'Institute for Positive Psychology and Education (YouTube)', '3:11', 'PD-M6', 'Intermediate'),
    S('PD-S18', 'https://www.youtube.com/watch?v=tB5J9qgM2zI',
      'Ayelet Fishbach, TED 2023 (03:33-04:36)',
      'Ayelet Fishbach', 'TED (YouTube)', '1:03', 'PD-M6', 'Intermediate'),
    # PD-S19: Ryan Aalto video already exists in the data block as M08-P09; referenced by id.
    S('PD-S20', 'https://www.youtube.com/watch?v=EXrmKkpJ2Gk',
      'Elliot Berkman, University of Oregon (01:12-02:35)',
      'Elliot Berkman', 'University of Oregon (YouTube)', '1:23', 'PD-M7', 'Intermediate'),
    S('PD-S21', 'https://www.youtube.com/watch?v=Ywec1MbeQDk',
      'Wendy Wood, Big Think/The Well (01:16-04:53)',
      'Wendy Wood', 'Big Think/The Well (YouTube)', '3:37', 'PD-M7', 'Intermediate'),
    S('PD-S22', 'https://www.youtube.com/watch?v=fuA1l7bL954',
      'Michael Inzlicht, The Dissenter episode 298 (49:52-58:10)',
      'Michael Inzlicht', 'The Dissenter (YouTube)', '8:18', 'PD-M7', 'Intermediate'),
    # OYC page
    S('PD-S23', 'https://oyc.yale.edu/psychology/psyc-110/lecture-11',
      'Paul Bloom, Yale PSYC 110 lecture 11 (Emotion), assigned 00:00-09:06',
      'Paul Bloom', 'Yale Open Courses', '9:06', 'PD-M2', 'Foundations'),
    # articles and PDFs
    S('PD-S24', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/',
      'Hofmann and Hayes 2024, Clinical Psychology in Europe (process-based therapy and the EEMM; opening overview)',
      'Stefan Hofmann; Steven Hayes', 'Clinical Psychology in Europe (PMC)', '', 'PD-M8', 'Advanced'),
    S('PD-S25', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/',
      'Maitland 2024, Journal of Contextual Behavioral Science (section 1.4 assigned)',
      'Maitland', 'Journal of Contextual Behavioral Science (PMC)', '', 'PD-M8', 'Advanced'),
    S('PD-S26', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/',
      'Greenland et al. 2016, European Journal of Epidemiology (misinterpretation list)',
      'Greenland; Senn; Rothman; Carlin; Poole; Goodman; Altman', 'European Journal of Epidemiology (PMC)', '', 'PD-M1', 'Foundations'),
    S('PD-S27', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/',
      'Woolley, Giurge and Fishbach 2025, Psychological Science (intrinsic and extrinsic motivation and goal adherence)',
      'Woolley; Giurge; Fishbach', 'Psychological Science (PMC)', '', 'PD-M6', 'Intermediate'),
    S('PD-S28', 'https://nobaproject.com/modules/thinking-like-a-psychological-scientist',
      'Smith, Thinking like a Psychological Scientist (Noba Project)',
      'Smith', 'Noba Project', 'about 3,200 words', 'PD-M1', 'Foundations'),
    S('PD-S29', 'https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf',
      'ASA Statement on p-Values: Context, Process, and Purpose',
      'American Statistical Association', 'American Statistical Association (PDF)', 'about 300 words', 'PD-M1', 'Foundations'),
    S('PD-S30', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12164598/',
      'Barrett et al. 2025, Perspectives on Psychological Science (theory of constructed emotion)',
      'Barrett et al.', 'Perspectives on Psychological Science (PMC)', '', 'PD-M2', 'Foundations'),
    S('PD-S31', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/',
      'Martinez-Priego, Poveda and Roca 2024, Frontiers in Psychology (systematic review of emotion regulation models)',
      'Martinez-Priego; Poveda; Roca', 'Frontiers in Psychology (PMC)', '', 'PD-M2', 'Foundations'),
    S('PD-S32', 'https://emotion.wisc.edu/wp-content/uploads/sites/1353/2024/11/gross-1998-the-emerging-field-of-emotion-regulation-an-integrative-review.pdf',
      'Gross 1998, The emerging field of emotion regulation: An integrative review',
      'James Gross', 'University of Wisconsin (PDF)', '', 'PD-M2', 'Foundations'),
    S('PD-S33', 'https://nobaproject.com/modules/functions-of-emotions',
      'Hwang and Matsumoto, Functions of Emotions (Noba Project)',
      'Hwang; Matsumoto', 'Noba Project', '', 'PD-M2', 'Foundations'),
    S('PD-S34', 'https://nobaproject.com/modules/conditioning-and-learning',
      'Bouton, Conditioning and Learning (Noba Project)',
      'Bouton', 'Noba Project', '', 'PD-M3', 'Foundations'),
    S('PD-S35', 'https://nobaproject.com/modules/memory-encoding-storage-retrieval',
      'McDermott and Roediger, Memory: Encoding, Storage, Retrieval (Noba Project)',
      'McDermott; Roediger', 'Noba Project', '', 'PD-M3', 'Foundations'),
    S('PD-S36', 'https://nobaproject.com/modules/judgment-and-decision-making',
      'Bazerman, Judgment and Decision Making (Noba Project)',
      'Bazerman', 'Noba Project', '', 'PD-M3', 'Foundations'),
    S('PD-S37', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8429319/',
      'Ehring 2021, World Psychiatry (rumination and repetitive negative thinking)',
      'Ehring', 'World Psychiatry (PMC)', '', 'PD-M3', 'Foundations'),
    S('PD-S38', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/',
      'Posner, Rothbart and Ghassemzadeh 2019, Yale Journal of Biology and Medicine (attention networks)',
      'Posner; Rothbart; Ghassemzadeh', 'Yale Journal of Biology and Medicine (PMC)', '', 'PD-M4', 'Intermediate'),
    S('PD-S39', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/',
      'Posner 2023, Journal of Intelligence (the evolution and future development of attention networks)',
      'Michael Posner', 'Journal of Intelligence (PMC)', '', 'PD-M4', 'Intermediate'),
    S('PD-S40', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/',
      'Lippelt, Hommel and Colzato 2014, Frontiers in Psychology (focused attention, open monitoring and loving-kindness meditation)',
      'Lippelt; Hommel; Colzato', 'Frontiers in Psychology (PMC)', '', 'PD-M4', 'Intermediate'),
    S('PD-S41', 'https://w3.ual.es/personal/tdaza/Fan%20y%20cols.pdf',
      'Fan et al., the Attention Network Test paper (PDF)',
      'Fan et al.', 'University of Alicante (PDF)', '', 'PD-M4', 'Intermediate'),
    S('PD-S42', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/',
      'Manchiraju 2026, Frontiers in Psychology (comprehensive review of self-concept clarity)',
      'Manchiraju', 'Frontiers in Psychology (PMC)', '', 'PD-M5', 'Intermediate'),
    S('PD-S43', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/',
      'Branje, de Moor, Spitzer and Becht 2021, Journal of Research on Adolescence (identity development 2010-2020)',
      'Branje; de Moor; Spitzer; Becht', 'Journal of Research on Adolescence (PMC)', '', 'PD-M5', 'Intermediate'),
    S('PD-S44', 'https://nobaproject.com/modules/personality-traits',
      'Diener and Lucas, Personality Traits (Noba Project)',
      'Diener; Lucas', 'Noba Project', '', 'PD-M5', 'Intermediate'),
    S('PD-S45', 'https://dlab.sauder.ubc.ca/sjdm/dmidi/files/Campbell_et_al._(1996)_Self-Concept_Clarity.doc',
      "Campbell et al. 1996, the Self-Concept Clarity Scale instrument (university-hosted PDF)",
      'Campbell et al.', 'University of British Columbia (PDF)', '', 'PD-M5', 'Intermediate'),
    S('PD-S46', 'https://selfdeterminationtheory.org/wp-content/uploads/2020/04/2020_RyanDeci_CEP_PrePrint.pdf',
      'Ryan and Deci 2020, Contemporary Educational Psychology preprint (intrinsic and extrinsic motivation from an SDT perspective)',
      'Ryan; Deci', 'Self-Determination Theory (PDF)', '', 'PD-M6', 'Intermediate'),
    S('PD-S47', 'https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Carden.Wood_.2018.pdf',
      'Carden and Wood 2018, Current Opinion in Behavioral Sciences (habit formation and change)',
      'Carden; Wood', 'USC (PDF)', '', 'PD-M7', 'Intermediate'),
    S('PD-S48', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/',
      'Singh et al. 2024, Healthcare (meta-analysis of health-behaviour habit formation time)',
      'Singh et al.', 'Healthcare (PMC)', '', 'PD-M7', 'Intermediate'),
    S('PD-S49', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11423838/',
      'Werner and Berkman 2024, Current Opinion in Psychology (motivational dynamics of self-control)',
      'Werner; Berkman', 'Current Opinion in Psychology (PMC)', '', 'PD-M7', 'Intermediate'),
    S('PD-S50', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250393/',
      'Reed, Combs and Segerstrom 2020, Collabra: Psychology (the structure of self-regulation in adults)',
      'Reed; Combs; Segerstrom', 'Collabra: Psychology (PMC)', '', 'PD-M7', 'Intermediate'),
    S('PD-S51', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/',
      'Dang 2018, Psychological Research (updated meta-analysis of the ego depletion effect)',
      'Dang', 'Psychological Research (PMC)', '', 'PD-M7', 'Intermediate'),
    S('PD-S52', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9171140/',
      'Alarcon-Espinoza, Grigera and Berra 2022, Frontiers in Psychology (emotional self-regulation in everyday life)',
      'Alarcon-Espinoza; Grigera; Berra', 'Frontiers in Psychology (PMC)', '', 'PD-M7', 'Intermediate'),
    S('PD-S53', 'https://bura.brunel.ac.uk/bitstream/2438/28246/1/FullText.pdf',
      'Heidbreder, consciousness review article (Brunel repository PDF)',
      'Heidbreder', 'Brunel University (PDF)', '', 'PD-M7', 'Advanced'),
]

def M(mid, title, question, description, outcomes, prereqs, required, optional,
      activity, rubric, hours, difficulty):
    return {
        'id': mid,
        'degree_id': 'deg-psychdim',
        'title': title,
        'question': question,
        'description': description,
        'outcomes': outcomes,
        'prerequisites': prereqs,
        'requiredMedia': [{'source_id': s, 'level': difficulty} for s in required],
        'optionalMedia': [{'source_id': s, 'level': difficulty} for s in optional],
        'wiki_readings': [],
        'activity': activity,
        'rubric': rubric,
        'gaps': [],
        'durationHours': hours,
        'difficulty': difficulty,
    }

modules = {
    'mod-pd-1': M('mod-pd-1', 'The Mind Across Six Dimensions',
        'What do psychologists currently know about the processes that carry a life, and how can you read that research well enough to use it?',
        'Entry module of the Psychological Dimensions degree. Installs the six-dimension map (affect, cognition, self, attention, motivation, overt behaviour) of the extended evolutionary meta-model and the research-reading habits used across the whole degree, then tests the map on your own material.',
        ['Define the six psychological dimensions in your own words with one example of each from your own life.',
         'Explain the variation-selection-retention-context frame and apply it to one behaviour of your own.',
         'Name the levels of analysis (psychological, biophysiological, sociocultural) with one example process at each level.',
         "Report one study's design, evidence type, estimate and uncertainty, and state what it can and cannot support.",
         'State what the degree covers and excludes, and name the owner of each excluded territory.'],
        [], ['PD-S01', 'PD-S02', 'PD-S28', 'PD-S29'], ['PD-S24', 'PD-S25', 'PD-S26', 'PD-S27'],
        'Graded: a six-dimension map of one ordinary difficulty of your own, with a three-part reflection (what matters, what the framework helps with, what remains uncertain) for each dimension, and an independent appraisal of a real study (Woolley et al. 2025, Study 1) covering design, estimates and what it cannot support.',
        ['Dimensions used as levers located in your own case, not memorised categories.',
         'Three-part reflection completed for each dimension.',
         'Study appraisal separates what was found, what it can support and what it cannot.',
         'No benefit promises or diagnosis claims.'],
        4.2, 'Foundations'),
    'mod-pd-2': M('mod-pd-2', 'The Affective Dimension: Feeling and Function',
        'What is an emotion for, and what is it doing in this moment of your life?',
        'Distinguishes what an emotion is from what it may be doing (intrapersonal, interpersonal and cultural functions), compares basic-emotion and constructed-emotion accounts without forcing agreement, and teaches regulation choices by goal, timing and circumstances. Reflection is private and never turns into self-diagnosis.',
        ["Distinguish an emotion's intrapersonal, interpersonal and cultural functions in a supplied episode, including a possible benefit and a context where the same response becomes costly.",
         "Compare an evolutionary/basic-emotion explanation with Barrett's constructed-emotion account, explain allostasis, and attribute claims rather than present the disagreement as settled.",
         'Distinguish generating an emotion from attempting to regulate it; name Gross strategy families and justify a choice by goal, timing and circumstances.',
         'Compare a rigid rule with a context-sensitive plan, including a reason to revise and one limit of the evidence.',
         'Describe affect in a safely chosen ordinary episode from your own life while separating bodily sensation, interpretation, action and unknowns.'],
        ['mod-pd-1'], ['PD-S23', 'PD-S03', 'M06-AF07', 'PD-S33', 'PD-S30', 'PD-S31', 'PD-S32'], [],
        'Graded: a family-application incident account, a process-model analysis of one of your own emotion episodes, and a comparison of the two accounts on a shared case.',
        ['Functions named with a benefit and a cost context.',
         'Accounts compared with claims attributed, not settled.',
         'Regulation choice justified by goal, timing and circumstances.',
         'Personal details may remain private; no self-diagnosis.'],
        5.1, 'Foundations'),
    'mod-pd-3': M('mod-pd-3', 'The Cognitive Dimension: Thinking More Clearly When the Mind Fills Gaps',
        'What is happening when perception, learning, memory or judgment fills a gap, and how can you check it?',
        'Examines conditioning and learning, perception as interpretation with constraints, memory kinds and stages, judgment biases as the beginning of a check, and repetitive negative thinking, ending with an independent task appraising a commentary.',
        ['Distinguish a cue-event association from learning an action-consequences in a new fictional example.',
         'Explain one way context helps interpret sensory input, distinguishing useful inference from a claim that all perception is false.',
         'Distinguish working, episodic and semantic memory; map encoding, storage and retrieval in a case; design a meaningful encoding cue without promising perfect recall.',
         'Identify a possible framing or confirmation problem and propose a specific countercheck, without diagnosing a bias from disagreement alone.',
         'Distinguish process from content in repetitive negative thinking and appraise a commentary experimental claim while naming its limits.'],
        ['mod-pd-1'], ['PD-S05', 'PD-S08', 'PD-S06', 'PD-S07', 'PD-S34', 'PD-S35', 'PD-S36', 'PD-S37'], [],
        'Graded: family applications (conditioning, perception, memory, judgment), an illusion explanation, an RNT analysis and an independent appraisal of a commentary experimental claim.',
        ['Learning kinds distinguished in new cases, not labels applied to people.',
         'Memory stages mapped without promising perfect recall.',
         'Bias checks proposed without diagnosing a bias from disagreement alone.',
         'Commentary appraisal names design, estimates and limits.'],
        4.8, 'Foundations'),
    'mod-pd-4': M('mod-pd-4', 'The Attentional Dimension: Giving Attention a Useful Direction',
        'Ready for what, directed where, and in conflict with which other demand?',
        'Maps the three attention networks (alerting, orienting, executive control), selection and limits, measurement via the Attention Network Test, network/disorder associations as group-level evidence, and separates practice observation from judging the evidence.',
        ['Apply alerting, orienting and executive control to a new task; compare early independence language with the later semi-independent, interacting account.',
         'Explain the spotlight analogy, Stroop interference, inattentional blindness and change blindness without assuming a single demonstration establishes a personal deficit.',
         'Explain an ANT trial and calculate three simple contrasts from supplied fictional averages, distinguishing cue benefit from conflict cost and a task contrast from a brain diagnosis.',
         'Interpret one network/disorder association as group-level evidence, including why neither a symptom nor a score yields a one-to-one diagnosis.',
         'Observe an attention practice and judge the evidence separately, without turning a difficult afternoon into a diagnosis.'],
        ['mod-pd-1', 'mod-pd-3'], ['PD-S08', 'PD-S09', 'PD-S10', 'PD-S11', 'PD-S38', 'PD-S39', 'PD-S40', 'PD-S41'], [],
        'Graded: an observation-protocol entry with a summary of your own attention observation, and an ANT-based analysis with simple contrasts from supplied averages.',
        ['Networks applied to a new task with the later interacting account.',
         'Demonstrations not treated as personal-deficit tests.',
         'Contrasts calculated correctly and interpreted as task contrasts, not diagnoses.',
         'Associations kept at group level.'],
        4.4, 'Intermediate'),
    'mod-pd-5': M('mod-pd-5', 'The Self and Identity Dimension',
        'Which self-question are you actually asking, and what would count as an informative answer?',
        'Distinguishes self-concept content, clarity, esteem, accuracy and narrative identity; explains identity development with limits; treats social explanations as hypotheses; compares trait and personal-project accounts; and uses the Self-Concept Clarity Scale educationally, never as an identity or improvement promise.',
        ['Distinguish self-concept content, clarity, esteem, accuracy and narrative identity in a case.',
         'Explain exploration/commitment and narrative accounts of identity development, with a limit on extending adolescent findings to all ages and settings.',
         'Apply egocentrism/spotlight, transparency, self-serving attribution, cognitive dissonance and person/situation attribution without inferring a bias merely from disagreement.',
         'Explain the Big Five as continuous trait dimensions, compare trait and personal-project explanations of one behaviour, and qualify both stability and situational variability.',
         'Handle the SCCS educationally, critique its evidence limits and design a private, revisable self-inquiry that does not turn a score into an identity or promise improvement.',
         'Use self as an EEMM lens and distinguish the source FAP-specific target from a general definition of identity.'],
        ['mod-pd-1', 'mod-pd-2'], ['PD-S12', 'PD-S13', 'PD-S14', 'PD-S15', 'PD-S42', 'PD-S43', 'PD-S44', 'PD-S45', 'PD-S25'], [],
        'Graded: an SCCS instrument verification sheet with a revision log, an identity-domain chart and a trait account of one behaviour, on a low-stakes question of your own.',
        ['Score handled educationally; no score-as-identity, no improvement promise.',
         'Adolescent findings not extended to all ages without justification.',
         'Attributions applied as hypotheses, not diagnosed from disagreement.',
         'Inquiry revisable and private.'],
        5.3, 'Intermediate'),
    'mod-pd-6': M('mod-pd-6', 'The Motivational Dimension: Motivation and Following Through',
        'Why do you pursue what you pursue, and what happens when intention and action come apart?',
        'Distinguishes the six positions on the self-determination continuum (with amotivation), regulation goals from pleasantness to usefulness, and evidence on intrinsic versus extrinsic motivation and adherence, then applies the analysis to one of your own goals.',
        ['Distinguish all six positions on the SDT autonomy continuum, allow mixed motives and distinguish the three proposed basic psychological needs without equating autonomy with independence.',
         'Distinguish pleasantness from usefulness, explain the 2024 review proposed eudaimonic category as a proposal, and apply control/value appraisals to an achievement-related case.',
         'Compare importance-only and experienced-interest predictions of adherence, distinguishing the 2025 study designs, result magnitude and limits on transfer.',
         'Examine one own goal, link motive and affect, and design a modest, revisable observation without treating adherence, pleasure or self-discipline as a measure of human worth.'],
        ['mod-pd-1', 'mod-pd-2'], ['M08-P09', 'PD-S16', 'PD-S17', 'PD-S18', 'PD-S46', 'PD-S27'], [],
        'Graded: a guided own-goal analysis linking motive and affect with a modest revisable observation, plus the unused case distinguishing a practical barrier from amotivation (Cory, the closed workshop).',
        ['Nonattendance alone never treated as amotivation; barriers distinguished.',
         'Mixed motives allowed; positions not treated as character verdicts.',
         'Adherence evidence compared with design, magnitude and transfer limits.',
         'No prescribed unpleasant emotion, no self-blame grading.'],
        4.5, 'Intermediate'),
    'mod-pd-7': M('mod-pd-7', 'The Overt Behavioural Dimension: Understanding a Repeated Behaviour',
        'What keeps a repeated behaviour going, and what would change it?',
        'Examines cue-response associations and habit formation times, learning terminology kept functional, self-regulation as a dynamic process with its measurement families, the contested ego-depletion evidence, and a private habit diary building a revisable account of one of your own patterns.',
        ['Explain a cue-response association, distinguish habit from mere repetition and intention, and critique a universal formation-time promise.',
         'Distinguish stimulus learning from action/consequence learning, reinforcement from punishment and negative from positive, without using those terms as moral labels.',
         'Apply identification, selection, implementation and monitoring to a competing-goal episode; distinguish three measurement families and their population limits.',
         'Compare a meta-analysis with a later preregistered multisite test, retaining numerical estimates, analysis status, uncertainty and limits on everyday inference.',
         'Keep a brief private habit diary and build a revisable account of an own pattern.'],
        ['mod-pd-1', 'mod-pd-3', 'mod-pd-6'], ['PD-S05', 'PD-S20', 'PD-S21', 'PD-S22', 'PD-S47', 'PD-S48', 'PD-S49', 'PD-S50', 'PD-S51', 'PD-S52', 'PD-S34', 'PD-S53'], [],
        'Graded: an independent habit diary with a functional analysis of one of your own low-stakes patterns, plus an appraisal of the habit-formation meta-analysis evidence.',
        ['Habit distinguished from repetition and intention.',
         'Formation-time promise critiqued (no universal 21-day claim).',
         'Meta-analysis compared with the preregistered test with estimates retained.',
         'Diary private; pattern treated as revisable, not a character verdict.'],
        5.0, 'Intermediate'),
    'mod-pd-8': M('mod-pd-8', 'Integrative Capstone: Psychological Dimensions in Daily Life',
        'Can you use all six lenses wisely on one ordinary pattern of your own?',
        'Capstone: choose a meaningful, safe, feasible question about one ordinary pattern, build the six-lens map, plan before seeing results, execute a bounded observation or change project with real records, and interpret the record to decide whether to continue, revise or stop.',
        ['Choose a meaningful, safe and feasible real-life question, explain why it matters to your walk of life, and specify what would count as an informative observation.',
         'Use all six psychological dimensions on one pattern without treating the lenses as six established causes.',
         'Complete a bounded observation/change project with actual records, deviations and missing observations, not an invented success story.',
         'Distinguish observed outcomes from proposed mechanisms, compare plausible explanations and judge whether to continue, revise or stop without overstating causal evidence.'],
        ['mod-pd-1', 'mod-pd-2', 'mod-pd-3', 'mod-pd-4', 'mod-pd-5', 'mod-pd-6', 'mod-pd-7'],
        ['PD-S24', 'PD-S25', 'PD-S31', 'PD-S48', 'PD-S42', 'PD-S27', 'PD-S47', 'PD-S41', 'PD-S53'], [],
        'Graded: a bounded inquiry on one of your own ordinary patterns with a nine-day practitioner log (about 125 words per day) and a final reflection of about 1,000 words, judged against a public rubric.',
        ['Question meaningful, safe and feasible; observation defined before results.',
         'All six lenses applied without treated-as-causes claims.',
         'Records real, including deviations and missing observations.',
         'Interpretation separates observed outcomes from mechanisms; no causal overstatement.'],
        6.3, 'Advanced'),
}

def main():
    s = open(APPJS, encoding='utf-8').read()
    key = 'window.fcAcademyData = '
    i = s.find(key)
    assert i > 0
    i += len(key)
    d, end = json.JSONDecoder().raw_decode(s[i:])
    existing_ids = {x['source_id'] for x in d['sources']}
    existing_urls = {x.get('canonical_url') for x in d['sources']}
    added = 0
    for rec in sources:
        if rec['source_id'] in existing_ids:
            print('skip existing id', rec['source_id']); continue
        if rec['canonical_url'] in existing_urls:
            print('URL already present:', rec['canonical_url']); continue
        d['sources'].append(rec); added += 1
    for mid, rec in modules.items():
        if mid in d['modules']:
            print('module already present', mid); continue
        d['modules'][mid] = rec
    for deg in d['degrees']:
        if deg['id'] == 'deg-psychdim':
            deg['modules'] = ['mod-pd-%d' % n for n in range(1, 9)]
            print('degree modules set:', deg['modules'])
    d['updated'] = '2026-10-26'
    # validate every requiredMedia/optionalMedia reference resolves
    src_ids = {x['source_id'] for x in d['sources']}
    for mid, m in modules.items():
        for r in m['requiredMedia'] + m['optionalMedia']:
            assert r['source_id'] in src_ids, (mid, r['source_id'])
    total_min = 249 + 304 + 290 + 265 + 315 + 271 + 301 + 375
    assert total_min == 2370
    print('sources added:', added, 'modules added:', len(modules), 'packet total min:', total_min)
    new_block = json.dumps(d, ensure_ascii=False, separators=(',', ':'))
    s2 = s[:i] + new_block + s[i+end:]
    open(APPJS, 'w', encoding='utf-8').write(s2)
    # re-parse to confirm
    d2, _ = json.JSONDecoder().raw_decode(s2[s2.find(key)+len(key):])
    print('re-parse OK; sources:', len(d2['sources']), 'modules:', len(d2['modules']))

if __name__ == '__main__':
    main()
