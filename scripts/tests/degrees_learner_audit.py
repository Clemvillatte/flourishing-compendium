#!/usr/bin/env python3
"""Learner-view audit of the fcAcademyData degrees (owner-requested guardrail, 2026-10-26).

Audits the PUBLISHED learner experience, not the module design files.
Every check below corresponds to a defect class found in the 2026-10-26
owner audit of the four published degrees (docs/degrees/AUDIT-2026-10-26.md).

Exit code 0 = clean; any FAIL line means the data block must be repaired
before a degree may flip to (or remain at) status "complete".

Known limits (documented in the audit, Guardrails section):
- checks the data block, not the rendered pages;
- cannot detect an OMITTED source by itself — the per-degree manifest
  (docs/degrees/integration/<degree>-manifest.json, Phase 0) closes that
  hole: when present, its required assignments are diffed against the
  integrated media lists;
- alias detection keys on canonical_url + youtube id;
- segment values are format-checked; range validation against the
  source's full duration is owed in Phase A.

Anti-gaming checks (CURRICULUM-ARCHITECTURE-1026.md, owner ruling 2026-10-26):
quotas are DIAGNOSTIC FLOORS measured after coverage, never targets to
pad toward. The coverage matrix (docs/degrees/inventory/<did>-matrix.json)
is the source of truth: when it exists, every topic row must resolve to a
live assignment and every assigned source must appear on a topic row
(off-matrix content = defect). A degree only faces the hour/module floors
and the verified-source quality floor once its data block declares
"scale": "full". Modules are capped at 15 distinct sources (navigability).
Same-content sources under different source_ids are defects.

Usage: python3 scripts/tests/degrees_learner_audit.py
       python3 scripts/tests/degrees_learner_audit.py <degree-id> [<degree-id>...]
"""
import json
import os
import re
import sys

APP = 'site/assets/app.js'
MANIFEST_DIR = 'docs/degrees/integration'
DEFAULT_DEGREES = ['deg-psychdim', 'deg-wol-daoism', 'deg-wol-buddhism', 'deg-wol-pragmatism']

BAND_CODE = re.compile(r'^\s*(m\d+[-–:]|b\d+[-–:(]|\w+-\d+-[a-z0-9-]+:)\s*', re.I)
LEVEL_CODE_DESC = re.compile(r'^\s*L\d\b')
YT_URL = re.compile(r'^https?://(www\.)?(youtube\.com|youtu\.be|oyc\.yale\.edu)', re.I)
YT_ID = re.compile(r'^[A-Za-z0-9_-]{11}$')
TIME = re.compile(r'^\d{1,2}:\d{2}(:\d{2})?$')


def to_seconds(t):
    parts = [int(p) for p in t.split(':')]
    if len(parts) == 2:
        parts.insert(0, 0)
    return parts[0] * 3600 + parts[1] * 60 + parts[2]


def load():
    raw = open(APP, encoding='utf-8').read()
    i = raw.find('window.fcAcademyData = ')
    data, _ = json.JSONDecoder().raw_decode(raw[i + len('window.fcAcademyData = '):])
    return data


def is_video(s):
    yt = s.get('youtube_id_or_url') or ''
    return bool(YT_URL.match(yt) or YT_ID.match(yt))


def ref(r):
    return r if isinstance(r, dict) else {'source_id': r}


def seg_key(r):
    segs = r.get('segments')
    if segs:
        return json.dumps(segs, sort_keys=True)
    # text assignments are distinguished by their locator (passage / chapters / sections)
    return ('loc:' + r['locator'].strip()) if (r.get('locator') or '').strip() else None


def alias_key(s):
    return s.get('canonical_url') or s.get('youtube_id_or_url') or s.get('source_id')


def assigned_seconds(r, s):
    """Real instruction seconds for one assignment (CURRICULUM-ARCHITECTURE-1026 §6).

    Video: sum of assigned segments, else the full duration.
    Text: minutes parsed from the duration label, else words in the locator
    at 130 wpm. Unaided estimates never inflate the count beyond what the
    assignment itself states.
    """
    if is_video(s):
        segs = r.get('segments')
        if segs:
            return sum(to_seconds(w['end']) - to_seconds(w['start']) for w in segs)
        return to_seconds((s.get('duration') or '0:00:00').strip()) if TIME.match((s.get('duration') or '').strip()) else 0
    d = (s.get('duration') or '')
    m = re.search(r'(\d+)\s*min', d, re.I)
    if m:
        return int(m.group(1)) * 60
    m = re.search(r'([\d,]+)\s*words', (r.get('locator') or '') + ' ' + d)
    if m:
        return int(m.group(1).replace(',', '')) / 130 * 60
    return 0


def valid_segments(r, s):
    segs = r.get('segments')
    if not segs:
        return True
    if not isinstance(segs, list):
        return False, 'segments is not a list'
    for w in segs:
        if not isinstance(w, dict) or not TIME.match(str(w.get('start', ''))) or not TIME.match(str(w.get('end', ''))):
            return False, f'malformed window {w}'
        if to_seconds(w['end']) <= to_seconds(w['start']):
            return False, f'non-increasing window {w}'
    return True


def main():
    degrees_arg = sys.argv[1:] or DEFAULT_DEGREES
    data = load()
    srcs = {s['source_id']: s for s in data['sources']}
    mods = data['modules']
    msgs = []

    for deg in data['degrees']:
        did = deg['id']
        mids = deg.get('modules') or []
        if not mids:
            continue
        in_scope = did in degrees_arg
        prefix = '' if in_scope else 'ADVISORY '

        def fail(mid, text):
            msgs.append(f'{prefix}FAIL [{did}/{mid}] {text}')

        is_practicum = deg.get('kind') == 'practicum'
        if not (deg.get('openingNote') or '').strip() and not is_practicum:
            msgs.append(f'{prefix}FAIL [{did}] degree has no openingNote (empty aside on the degree page)')

        # module references resolve
        for m in mids:
            if m not in mods:
                fail(m, 'referenced module id missing from modules tree')

        # a media assignment is (alias, segments); the same source may be
        # legitimately assigned several times ONLY with distinct segments/role
        seen = {}
        for mid in mids:
            mod = mods.get(mid)
            if not mod:
                continue
            title = mod.get('title') or ''
            if BAND_CODE.match(title):
                fail(mid, f'title leaks internal band code: {title!r}')
            desc = (mod.get('description') or '').strip()
            if LEVEL_CODE_DESC.match(desc):
                fail(mid, f'description is an internal level code, not prose: {desc[:60]!r}')

            req = [ref(r) for r in (mod.get('requiredMedia') or [])]
            opt = [ref(r) for r in (mod.get('optionalMedia') or [])]
            req_ids = {r['source_id'] for r in req}
            opt_ids = {r['source_id'] for r in opt}

            # optional duplicating required verbatim (no distinct assignment)
            for sid in sorted(req_ids & opt_ids):
                rq = [r for r in req if r['source_id'] == sid][0]
                oq = [r for r in opt if r['source_id'] == sid][0]
                if seg_key(rq) == seg_key(oq):
                    fail(mid, f'source {sid} listed as BOTH required and optional with no distinct assignment')

            # capstones may draw on prior modules, but only if declared
            if not req and not opt and not mod.get('drawsOnPriorModules'):
                fail(mid, 'module has no media and no drawsOnPriorModules note; a learner sees an empty syllabus')

            for r in req:
                sid = r['source_id']
                s = srcs.get(sid)
                if s is None:
                    fail(mid, f'requiredMedia references missing source id {sid}')
                    continue
                ok = valid_segments(r, s)
                if ok is not True:
                    fail(mid, f'source {sid}: {ok}')
                key = (alias_key(s), seg_key(r))
                role = r.get('role')
                if role in ('revisit', 'retrieval', 'capstone-return'):
                    continue  # deliberate reuse; the renderer must label it as such
                prev = seen.setdefault(key, mid)
                if prev != mid:
                    fail(mid, f'source {sid} ("{s.get("title","")[:50]}") full-duplicate required media also used in module {prev} — assign distinct segments/role or drop the reuse')

            for sid in req_ids | opt_ids:
                s = srcs.get(sid)
                refs_here = [r for r in req + opt if r['source_id'] == sid]
                if s and is_video(s) and not (s.get('duration') or '').strip():
                    fail(mid, f'video source {sid} has no printed duration')
                if s and is_video(s) and (s.get('duration') or '').strip() and TIME.match(s['duration'].strip()):
                    full = to_seconds(s['duration'].strip())
                    for r in refs_here:
                        for w in (r.get('segments') or []):
                            if to_seconds(w['end']) > full:
                                fail(mid, f'source {sid}: window {w} ends after the printed full duration {s["duration"]}')
                if s and not is_video(s) and not (s.get('locator') or '').strip() and not (s.get('duration') or '').strip() \
                        and not any((r.get('locator') or '').strip() for r in refs_here):
                    fail(mid, f'text source {sid} has neither a locator (chapter/passage/word count) nor a reading-time label')
                # an assigned window on a video must exist: required videos without segments are whole-video assignments

        # ---------------- anti-gaming checks (CURRICULUM-ARCHITECTURE-1026) ----------------
        scale_full = deg.get('scale') == 'full'

        # real instruction hours, measured (never chased): report always
        deg_secs = 0
        per_module_sources = {}
        per_module_secs = {}
        for mid in mids:
            mod = mods.get(mid)
            if not mod:
                continue
            req = [ref(r) for r in (mod.get('requiredMedia') or [])]
            opt = [ref(r) for r in (mod.get('optionalMedia') or [])]
            ids = {r['source_id'] for r in req} | {r['source_id'] for r in opt}
            per_module_sources[mid] = len(ids)
            secs = sum(assigned_seconds(r, srcs[r['source_id']]) for r in req if r['source_id'] in srcs)
            per_module_secs[mid] = secs
            deg_secs += secs
            if len(ids) > 15:
                fail(mid, f'module has {len(ids)} distinct sources (>15) — navigability cap; split the module or curate')

        msgs.append(f'{"" if in_scope else ""}INFO [{did}] real instruction hours: {deg_secs/3600:.1f} h '
                   f'across {len(mids)} modules (measured, not nominal; excludes unverified text estimates)')

        # same content under two source_ids = duplication
        by_alias = {}
        for mid in mids:
            mod = mods.get(mid)
            if not mod:
                continue
            for r in [ref(x) for x in (mod.get('requiredMedia') or [])] + [ref(x) for x in (mod.get('optionalMedia') or [])]:
                s = srcs.get(r['source_id'])
                if s:
                    by_alias.setdefault(alias_key(s), set()).add(r['source_id'])
        for alias, sids in sorted(by_alias.items()):
            if len(sids) > 1:
                fail('-', f'same content assigned under multiple source_ids: {sorted(sids)} ({alias}) — merge or drop')

        # coverage matrix: source of truth once it exists
        mpath_inv = os.path.join('docs/degrees/inventory', f'{did}-matrix.json')
        if os.path.exists(mpath_inv):
            try:
                matrix = json.load(open(mpath_inv, encoding='utf-8'))
                matrix_sids = set()
                for t in matrix.get('topics') or []:
                    tmid = t.get('module')
                    if tmid not in mids:
                        fail(tmid or '?', f"coverage-matrix topic {t.get('topic','?')!r} points at a module not in the degree")
                        continue
                    mod = mods.get(tmid) or {}
                    integrated = {ref(r)['source_id'] for r in (mod.get('requiredMedia') or [])} | \
                                 {ref(r)['source_id'] for r in (mod.get('optionalMedia') or [])}
                    for sid in t.get('sources') or []:
                        if not isinstance(sid, str):
                            fail(tmid, f"coverage-matrix topic {t.get('topic','?')!r} has a malformed (non-string) source entry: {sid!r} — fix the matrix")
                            continue
                        matrix_sids.add(sid)
                        if sid not in integrated:
                            fail(tmid, f"coverage-matrix topic {t.get('topic','?')!r}: source {sid} not assigned in this module — matrix row unresolved")
                assigned = set()
                for mid in mids:
                    mod = mods.get(mid)
                    if not mod:
                        continue
                    assigned |= {ref(r)['source_id'] for r in (mod.get('requiredMedia') or [])} | \
                               {ref(r)['source_id'] for r in (mod.get('optionalMedia') or [])}
                for sid in sorted(assigned - matrix_sids):
                    fail('-', f'assigned source {sid} appears on NO coverage-matrix topic row (off-matrix content)')
            except (ValueError, OSError) as exc:
                msgs.append(f'{prefix}FAIL [{did}] coverage matrix unreadable: {exc}')
        elif scale_full:
            fail('-', 'degree declares scale "full" but has no coverage matrix (docs/degrees/inventory/<did>-matrix.json)')
        else:
            msgs.append(f'{"" if in_scope else ""}ADVISORY [{did}] no coverage matrix yet — Phase D1 inventory pending (CURRICULUM-ARCHITECTURE-1026)')

        # scale floors: only once the degree claims to be full-scale
        if scale_full and not is_practicum:
            if deg_secs < 100 * 3600:
                fail('-', f'degree declares scale "full" but measures {deg_secs/3600:.1f} h of real instruction (<100 h floor) — per owner ruling, do NOT pad: extend coverage or unflag')
            if len(mids) < 10:
                fail('-', f'degree declares scale "full" but has {len(mids)} modules (<10)')
            for mid in mids:
                if per_module_sources.get(mid, 0) < 3:
                    fail(mid, f'module has {per_module_sources.get(mid, 0)} distinct sources (<3) at scale "full"')
                if per_module_secs.get(mid, 0) < 6 * 3600:
                    fail(mid, f'module measures {per_module_secs.get(mid, 0)/3600:.1f} h of real instruction (<6 h) at scale "full"')
            for mid in mids:
                mod = mods.get(mid)
                if not mod:
                    continue
                for r in [ref(x) for x in (mod.get('requiredMedia') or [])]:
                    s = srcs.get(r['source_id'])
                    if s and not str(s.get('verification_status', '')).startswith('verified'):
                        fail(mid, f'required source {r["source_id"]} is {s.get("verification_status")!r} — quality floor requires verified sources at scale "full"')

        # manifest diff (Phase 0 contract): every manifest assignment must be integrated
        mpath = os.path.join(MANIFEST_DIR, f'{did}-manifest.json')
        if os.path.exists(mpath):
            try:
                manifest = json.load(open(mpath, encoding='utf-8'))
                for mid, entries in (manifest.get('modules') or {}).items():
                    mod = mods.get(mid)
                    if mod is None:
                        fail(mid, 'manifest references module missing from data block')
                        continue
                    integrated = {r['source_id'] for r in (mod.get('requiredMedia') or [])} | \
                                 {r['source_id'] for r in (mod.get('optionalMedia') or [])}
                    req_ids_m = {r['source_id'] for r in (mod.get('requiredMedia') or [])}
                    for e in entries:
                        if not isinstance(e, dict) or e.get('note_only'):
                            continue
                        if e.get('source_id') not in integrated:
                            fail(mid, f"manifest assignment not integrated: {e.get('source_id')} ({e.get('assignment','')})")
                            continue
                        role = e.get('role')
                        sid = e.get('source_id')
                        if role in ('optional', 'reference', 'data-block-extra') and sid in req_ids_m:
                            fail(mid, f"manifest role mismatch: {sid} is role={role} in the design but REQUIRED in the data block ({e.get('assignment','')[:80]})")
                        if role == 'teach' and sid not in req_ids_m:
                            fail(mid, f"manifest role mismatch: {sid} is a teach assignment in the design but only optional in the data block")
            except (ValueError, OSError) as exc:
                msgs.append(f'{prefix}FAIL [{did}] manifest unreadable: {exc}')

        if not is_practicum and not any((mods[m].get('wiki_readings') or []) for m in mids if m in mods):
            # AUDIT-2026-10-26 section C: an opportunity, not mandated; an owner/scope decision (finite-scope rule)
            msgs.append(f'{"" if in_scope else ""}ADVISORY [{did}] no module links any wiki reading (wiki_readings empty across the degree); owner decision pending')

    for m in msgs:
        print(m)
    n_fail = len([m for m in msgs if m.startswith('FAIL')])
    print(f'--- degrees_learner_audit: {n_fail} defect(s) '
          f'(scope: {", ".join(degrees_arg)}; advisory lines not counted)')
    sys.exit(1 if n_fail else 0)


if __name__ == '__main__':
    main()
