#!/usr/bin/env python3
"""Phase A data splice (degrees repair 2026-10-26) — deg-integrate lane.

SUPERSEDED: do not re-run on the current app.js. It carries older decisions
(for example it removes PD-M1-07 from psychdim m8 and mints PRAG-M3-05, both
later reversed). Use scripts/degrees_apply_assignments.py <degree_id> --write.

Consumes the Phase 0 manifests and the learner-content deliverables under
docs/degrees/integration/ and splices assignment objects (segments, locator,
role, note), learner-facing titles/descriptions/openingNotes/reflection
prompts, capstone drawsOnPriorModules notes, the pragmatism m3 readings that
integration dropped, and the audit-established psychdim corrections into the
fcAcademyData block of site/assets/app.js via the safe-splice recipe
(raw_decode boundaries; never find/replace on the minified line).

Run from the repo root:  python3 scripts/degrees_patch_data_phaseA.py
"""
import json
import re
import sys

APP = 'site/assets/app.js'
DATA_MARK = 'window.fcAcademyData = '
DEGREES = ['deg-psychdim', 'deg-wol-daoism', 'deg-wol-buddhism', 'deg-wol-pragmatism']

TIME_PAIR = re.compile(
    r'(\d{1,2}:\d{2}(?::\d{2})?)\s*(?:[-\u2013\u2014]|to)\s*(\d{1,2}:\d{2}(?::\d{2})?)')


def to_seconds(t):
    p = [int(x) for x in t.split(':')]
    while len(p) < 3:
        p.insert(0, 0)
    return p[0] * 3600 + p[1] * 60 + p[2]


def fmt(sec):
    h, m, s = sec // 3600, (sec % 3600) // 60, sec % 60
    return f'{h}:{m:02d}:{s:02d}'


def parse_windows(text):
    """Extract assigned windows from a manifest assignment description.

    The text is cut at DATA-BLOCK ERROR notes first, so error-window
    examples never leak into the parsed segments.
    """
    text = (text or '').split('DATA-BLOCK ERROR')[0]
    wins = []
    for a, b in TIME_PAIR.findall(text):
        try:
            sa, sb = to_seconds(a), to_seconds(b)
        except ValueError:
            continue
        if sb > sa and sa < 24 * 3600 and sb <= 24 * 3600:
            wins.append({'start': fmt(sa), 'end': fmt(sb)})
    return wins


def clean_locator(text):
    """Manifest assignment prose -> learner-facing reading locator."""
    t = (text or '').replace('(VERIFIED)', '').replace('(VERIFIED', '')
    t = t.split('DATA-BLOCK ERROR')[0]
    t = re.sub(r'\s{2,}', ' ', t).strip(' ;.')
    return t


def load_block():
    raw = open(APP, encoding='utf-8').read()
    i = raw.find(DATA_MARK)
    if i < 0:
        sys.exit('fcAcademyData block not found')
    start = i + len(DATA_MARK)
    data, end = json.JSONDecoder().raw_decode(raw[start:])
    return raw, start, end, data


def is_video_src(s):
    url = (s or {}).get('youtube_id_or_url') or ''
    return bool(re.match(r'^https?://(www\.)?(youtube\.com|youtu\.be|oyc\.yale\.edu)', url, re.I)
                or re.match(r'^[A-Za-z0-9_-]{11}$', url))


def main():
    raw, start, end_rel, data = load_block()
    end = start + end_rel  # raw_decode index is relative to the slice
    mods = data['modules']
    degs = {d['id']: d for d in data['degrees']}
    srcs = {s['source_id']: s for s in data['sources']}
    manifest = {}
    learner = {}
    for did in DEGREES:
        slug = did
        manifest[did] = json.load(open(f'docs/degrees/integration/{slug}-manifest.json'))
        learner[did] = json.load(open(f'docs/degrees/integration/{slug}-learner-content.json'))

    new_sources = []
    changes = []

    def get_src(sid):
        if sid in srcs:
            return srcs[sid]
        for s in new_sources:
            if s['source_id'] == sid:
                return s
        return None

    # ---- pragmatism m3: the James readings integration dropped (audit B) ----
    prag_m3_refs = mods['mod-prag-3'].get('requiredMedia') or []
    level_for_new = 'Guided application'
    for r in prag_m3_refs:
        if isinstance(r, dict) and r.get('level'):
            level_for_new = r['level']
            break
    # Source-id mapping per deg-fix-schema's reconciliation (ef654d01b) and the
    # corrected manifest: B1+B2 both Lecture II under PRAG-M3-03; B3 Lecture VI
    # under PRAG-M3-04. PRAG-M3-05 was RETIRED by that reconciliation — do NOT
    # re-mint it here (an earlier version of this block did, based on the
    # pre-reconciliation splice mapping).
    for sid, url, title, locator in [
        ('PRAG-M3-02', 'https://en.wikisource.org/wiki/The_Will_to_Believe',
         'James, The Will to Believe (Wikisource)',
         "Reading A, 2,532 words (the contiguous passage from 'They may be (a) living or dead' through the thesis passage)"),
        ('PRAG-M3-03',
         'https://en.wikisource.org/wiki/Pragmatism:_A_New_Name_for_Some_Old_Ways_of_Thinking/Lecture_II',
         'James, Pragmatism Lecture II (Wikisource)',
         "Lecture II, two passages totalling 1,216 words (about 9 minutes at 130 words per minute): 952 words from 'To take in the importance of Peirce's principle' to 'make nature over again by their aid', then 264 words from 'I am well aware how odd it must seem' to 'our duty would be to shun truth, rather'"),
        ('PRAG-M3-04',
         'https://en.wikisource.org/wiki/Pragmatism:_A_New_Name_for_Some_Old_Ways_of_Thinking/Lecture_VI',
         'James, Pragmatism Lecture VI (Wikisource)',
         'Lecture VI, four short selections totalling 157 words (about 1 minute at 130 words per minute), printed in full in the module\u2019s second step; the selections are not contiguous in the lecture'),
    ]:
        if get_src(sid) is None:
            new_sources.append({
                'source_id': sid, 'youtube_id_or_url': url, 'canonical_url': url,
                'title': title, 'presenter': 'William James', 'host': 'Wikisource',
                'duration': '', 'topic_ids': 'PRAG-M3',
                'level': 'Foundations', 'mission': 'deg-wol-pragmatism',
                'verification_status': 'verified',
                'gate_evidence': 'ledgers/deg-wol-pragmatism.md',
            })
        if not any((r.get('source_id') if isinstance(r, dict) else r) == sid
                   for r in prag_m3_refs):
            prag_m3_refs.append({'source_id': sid, 'level': level_for_new,
                                 'locator': locator})
            changes.append(f'prag m3: added dropped reading {sid}')

    # ---- per-degree module pass ----
    for did in DEGREES:
        deg = degs[did]
        lc = learner[did]
        man = manifest[did]
        if (lc.get('openingNote') or '').strip():
            deg['openingNote'] = lc['openingNote'].strip()
        for mid in deg.get('modules') or []:
            mod = mods.get(mid)
            if not mod:
                continue
            lcm = (lc.get('modules') or {}).get(mid) or {}
            man_entries = man.get('modules', {}).get(mid) or []
            if lcm.get('title'):
                mod['title'] = lcm['title']
            if lcm.get('description'):
                mod['description'] = lcm['description']
            if lcm.get('mod_prompt'):
                mod['reflectionPrompt'] = lcm['mod_prompt']

            by_sid = {}
            for e in man_entries:
                if e.get('note_only'):
                    continue
                by_sid.setdefault(e['source_id'], e)

            req = mod.get('requiredMedia') or []
            opt = mod.get('optionalMedia') or []

            def upsert_ref(ref, entry, where):
                sid = ref.get('source_id') if isinstance(ref, dict) else ref
                role = entry.get('role')
                assignment = entry.get('assignment') or ''
                kind = entry.get('kind')
                if not isinstance(ref, dict):
                    ref = {'source_id': sid}
                if role in ('revisit', 'retrieval', 'capstone-return'):
                    ref['role'] = role
                elif role == 'optional' and where == 'opt':
                    pass
                if kind == 'video' or TIME_PAIR.search(assignment):
                    wins = parse_windows(assignment)
                    if wins:
                        ref['segments'] = wins
                        ref.pop('locator', None)
                else:
                    loc = clean_locator(assignment)
                    if loc:
                        ref['locator'] = loc
                return ref

            # upgrade existing refs against manifest entries; an optional
            # ref that duplicates a required ref of the same module is the
            # "unassigned remainder" — never the same assignment
            req_ids_now = {r.get('source_id') if isinstance(r, dict) else r for r in req}
            for lst, where in ((req, 'req'), (opt, 'opt')):
                kept = []
                for r in lst:
                    sid = r.get('source_id') if isinstance(r, dict) else r
                    if sid not in by_sid:
                        kept.append(r)
                        continue
                    if where == 'opt' and sid in req_ids_now:
                        src = get_src(sid)
                        ref = r if isinstance(r, dict) else {'source_id': sid}
                        if src is not None and not is_video_src(src):
                            # a reading's optional duplicate is the unassigned
                            # remainder of the essay — a distinct assignment
                            ref['locator'] = 'Further reading: the unassigned remainder of this essay.'
                        ref['note'] = 'Optional: the unassigned remainder of this source.'
                        kept.append(ref)
                        continue
                    kept.append(upsert_ref(r, by_sid[sid], where))
                lst[:] = kept

            # role=optional in the design must not sit in required
            moved = [r for r in req
                     if (by_sid.get(r.get('source_id') if isinstance(r, dict) else r) or {}).get('role') == 'optional']
            if moved:
                req[:] = [r for r in req if r not in moved]
            for r in moved:
                opt.append(upsert_ref(r, by_sid[r.get('source_id')], 'opt'))
                changes.append(f'{mid}: moved {r.get("source_id")} to optional per manifest')

            # manifest assignments with no integrated ref: append
            integrated = {r.get('source_id') if isinstance(r, dict) else r
                          for r in req + opt}
            for sid, e in by_sid.items():
                if sid in integrated:
                    continue
                if get_src(sid) is None:
                    changes.append(f'{mid}: manifest entry {sid} has no source record; skipped')
                    continue
                target = opt if e.get('role') in ('optional', 'revisit', 'capstone-return') else req
                ref = {'source_id': sid}
                target.append(upsert_ref(ref, e, 'opt' if target is opt else 'req'))
                changes.append(f'{mid}: restored dropped assignment {sid} ({e.get("role")})')

            # optional duplicates of segmented required refs: label the remainder
            req_ids = {r.get('source_id') if isinstance(r, dict) else r for r in req}
            for r in opt:
                sid = r.get('source_id') if isinstance(r, dict) else r
                if sid in req_ids and isinstance(r, dict) and not r.get('note'):
                    r['note'] = 'Optional: the unassigned remainder of this source.'

            mod['requiredMedia'] = req
            mod['optionalMedia'] = opt

    # ---- psychdim audit corrections (learner-content repair notes) ----
    pd3 = mods['mod-pd-3']
    before = len(pd3.get('requiredMedia') or [])
    pd3['requiredMedia'] = [r for r in pd3['requiredMedia']
                            if (r.get('source_id') if isinstance(r, dict) else r) != 'PD-M3-07']
    if len(pd3['requiredMedia']) != before:
        changes.append('psychdim m3: removed assignment-less PD-M3-07 from required')
    # NOTE (2026-10-26, deg-integrate b6215a959 follow-up): an earlier version of
    # this script also stripped PD-M1-07 from mod-pd-8 here ('kept in m6'). That
    # removal was based on the manifest's then-current 'NOT cited in m8 prose'
    # note, which deg-fix-content corrected (commit 04a96cedc): the m8 doc cites
    # Woolley et al. 2025 in prose by LINK (line 221, 'original adherence
    # research', PMC13428958). PD-M1-07 belongs in m8 as a capstone-return
    # entry; do not strip it on rerun.

    # source-title corrections recorded in the manifest / learner-content
    for s in data['sources']:
        if s.get('source_id') == 'PD-M3-03':
            new = re.sub(r'\s*\((?:assigned|window)[^)]*\)\s*', '', s['title']).strip()
            if new != s['title']:
                s['title'] = new
                changes.append('psychdim: PD-M3-03 title no longer carries lecture 7 window')
        if s.get('source_id') == 'PD-M7-10' and 'Heidbreder' in (s.get('title') or ''):
            # only fix the original mislabel; do not overwrite a later lane's
            # refined title (current canonical: 'Vohs et al. 2021, author
            # manuscript (Brunel repository PDF)')
            s['title'] = 'Vohs et al. 2021 author manuscript (preregistered vs exploratory)'
            changes.append('psychdim: PD-M7-10 mislabel fixed (Heidbreder -> Vohs 2021)')
    # PD-M7-10 bounded locator on its m7 ref
    for r in mods['mod-pd-7'].get('requiredMedia') or []:
        if isinstance(r, dict) and r.get('source_id') == 'PD-M7-10':
            r['locator'] = "Read: Abstract and Methods 'Participants' subsection only"

    # ---- psychdim revisit marking (coverage matrix: the m4/m7/m8 reuses of
    # earlier-module sources are legitimate design revisits) ----
    for did in ['deg-psychdim']:
        deg = degs[did]
        mod_ids = deg.get('modules') or []
        earlier = {}
        for mid in mod_ids:
            mod = mods.get(mid)
            if not mod:
                continue
            for lst in (mod.get('requiredMedia') or [], mod.get('optionalMedia') or []):
                for r in lst:
                    sid = r.get('source_id') if isinstance(r, dict) else r
                    earlier.setdefault(sid, mid)
            man_e = manifest[did].get('modules', {}).get(mid) or []
            own = {e.get('source_id') for e in man_e if not e.get('note_only')}
            for lst in (mod.get('requiredMedia') or [], mod.get('optionalMedia') or []):
                for r in lst:
                    if not isinstance(r, dict):
                        continue
                    sid = r.get('source_id')
                    if sid in own or earlier.get(sid) == mid:
                        continue
                    if sid in earlier and mid in ('mod-pd-4', 'mod-pd-7', 'mod-pd-8'):
                        r['role'] = 'capstone-return' if mid == 'mod-pd-8' else 'revisit'
                        changes.append(f'{mid}: {sid} marked {r["role"]} (design revisit per coverage matrix)')
    # the m4 revisit of Bloom lecture 7 carries its printed window
    # (AUDIT-2026-10-26.md finding B: m4 assigns lecture 7 at 47:26-54:53)
    for r in mods['mod-pd-4'].get('requiredMedia') or []:
        if isinstance(r, dict) and r.get('source_id') == 'PD-M3-02':
            r['segments'] = [{'start': '0:47:26', 'end': '0:54:53'}]

    # BUD-B5-02 duration from the manifest ("whole 1:01:36")
    for s in data['sources']:
        if s.get('source_id') == 'BUD-B5-02' and not (s.get('duration') or '').strip():
            s['duration'] = '1:01:36'
            changes.append('buddhism: BUD-B5-02 duration backfilled from manifest (whole 1:01:36)')

    # revisit/capstone-return refs carry the passage they return to: copy
    # the locator (and, for videos, the segments) of the source's primary
    # (teach) assignment from an earlier module
    for did in DEGREES:
        first_loc = {}
        first_seg = {}
        for mid in degs[did].get('modules') or []:
            mod = mods.get(mid)
            if not mod:
                continue
            for lst in (mod.get('requiredMedia') or [], mod.get('optionalMedia') or []):
                for r in lst:
                    if not isinstance(r, dict):
                        continue
                    sid = r.get('source_id')
                    if r.get('role') in ('revisit', 'retrieval', 'capstone-return'):
                        continue
                    if r.get('locator') and sid not in first_loc:
                        first_loc[sid] = r['locator']
                    if r.get('segments') and sid not in first_seg:
                        first_seg[sid] = r['segments']
        for mid in degs[did].get('modules') or []:
            mod = mods.get(mid)
            if not mod:
                continue
            for lst in (mod.get('requiredMedia') or [], mod.get('optionalMedia') or []):
                for r in lst:
                    if not isinstance(r, dict):
                        continue
                    if r.get('role') in ('revisit', 'retrieval', 'capstone-return'):
                        if not r.get('locator') and not r.get('segments') and r.get('source_id') in first_loc:
                            pref = 'Returns to: ' if r['role'] == 'capstone-return' else 'Revisit: '
                            r['locator'] = pref + first_loc[r['source_id']]
                        if not r.get('segments') and r.get('source_id') in first_seg:
                            r['segments'] = first_seg[r['source_id']]

    # m7 Bouton: the m7 doc assigns the Vocabulary entries, not the m3
    # passage — override the copied locator (m7 doc: 'the Vocabulary entries
    # "Reinforcer" and "Punisher," to check increase/decrease definitions')
    for r in mods['mod-pd-7'].get('requiredMedia') or []:
        if isinstance(r, dict) and r.get('source_id') == 'PD-M3-05':
            r['locator'] = 'Bouton — the Vocabulary entries "Reinforcer" and "Punisher" (check the increase/decrease definitions; not the full module)'

    # m5 Maitland locator from the m5 module doc (line 114: "Table 1's
    # Self row and the table note only"); the m5 manifest entry is absent
    for r in mods['mod-pd-5'].get('requiredMedia') or []:
        if isinstance(r, dict) and r.get('source_id') == 'PD-M1-06' and not r.get('locator'):
            r['locator'] = "Maitland 2024 — Table 1's Self row and the table note only"

    # m6 Woolley locator per the coverage matrix ("Assigned in m6 (Abstract;
    # one paragraph) — keep there"; the m6 manifest entry is absent)
    for r in mods['mod-pd-6'].get('requiredMedia') or []:
        if isinstance(r, dict) and r.get('source_id') == 'PD-M1-07' and not r.get('locator'):
            r['locator'] = 'Woolley et al. 2025 — Abstract and one paragraph (m6 assignment)'

    # ---- capstone drawsOnPriorModules notes ----
    capstone_notes = {
        'mod-bud-8': 'The capstone draws on the materials of Modules I\u2013VII; '
                     'the learner may re-watch the assigned segments. No new sources are assigned.',
        'mod-prag-5': 'The capstone draws on the materials of Modules I\u2013IV; '
                      'no new sources are required.',
    }
    for mid, note in capstone_notes.items():
        mod = mods.get(mid)
        if mod is not None:
            mod['drawsOnPriorModules'] = note

    if new_sources:
        data['sources'] = data['sources'] + new_sources

    # ---- splice back (safe-splice recipe) ----
    payload = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    out = raw[:start] + payload + raw[end:]
    open(APP, 'w', encoding='utf-8').write(out)
    print('changes:')
    for c in changes:
        print(' -', c)
    print(f'spliced {len(payload)} bytes into {APP}')


if __name__ == '__main__':
    main()
