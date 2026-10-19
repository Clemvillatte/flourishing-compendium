#!/usr/bin/env python3
"""Apply enrichment cross-link proposals (docs/enrichment/proposals/*.json) to the corpus.

Two kinds (either in every proposals file):
- reciprocal: {"into": "entry id or file", "link": "concept id", "why": "short clause"}
  -> ensures a '## Related concepts' section lists [[link]] with the why-clause.
- inline:    {"into": "entry id or file", "concept": "concept id", "phrase": "exact text"}
  -> wraps the FIRST plain-text occurrence of phrase in [[concept|phrase]].

Band-aware: defer targets with in-progress work OR a fresh, unreleased worker baton.
Both concept and principle manifests are protected. Invalid coordination data fails closed.
Legacy target/concept reciprocal records are accepted without rewriting worker proposals.
Preflight rejects malformed/unresolved proposals before any corpus or proposal writes.
Only the supervisor runs this script, after pulling and checking live ownership.
Use --proposal FILE.json (repeatable) to limit a run to reviewed proposal files.
Use --dry-run to preview the same mutations without writing or archiving anything.

Atomicity: content files are written FIRST; only after all writes succeed are proposal files
archived to docs/enrichment/applied/. Deferred proposals stay in the proposals file.
"""
import os, re, sys, glob, json, shutil, datetime, argparse
import enrich_stats

ROOT = enrich_stats.ROOT
PDIR = os.path.join(ROOT, 'docs', 'enrichment', 'proposals')
APPLIED = os.path.join(ROOT, 'docs', 'enrichment', 'applied')

# (line) partial-wikilink to a concept, plus section markers; mirrors enrich_stats
WIKI = re.compile(r"\[\[([^\]#|]+?)(?:#[^\] ]+)?(?:\|[^\]]+)?\]\]")
HEADING = re.compile(r'^#{2,4}\s')
CODE = re.compile(r'^```')
LINK = re.compile(r'\[\[[^\]]+\]\]')
STALE_MIN = 20


def in_link(line, phrase):
    for m in WIKI.finditer(line):
        if phrase in m.group(1):
            return True
    return False


def in_cited_in(body, entry_id):
    m = re.search(r'^##\s*Cited in.*$', body, re.M)
    if not m:
        return False
    tail = body[m.start():]
    tail = re.split(r'^##\s*(?!Cited)', tail, flags=re.M)[0] if re.search(r'^##\s*(?!Cited)', tail, re.M) else tail
    return entry_id in tail


def band_of():
    id2band = {}
    for mf in glob.glob(os.path.join(ROOT, 'docs', 'enrichment', 'bands', '*-manifest.json')):
        with open(mf, encoding='utf-8') as f:
            m = json.load(f)
        for cid in m.get('concepts', []) + m.get('principles', []):
            if cid in id2band and id2band[cid] != m['band']:
                raise ValueError(f'duplicate band assignment: {cid}')
            id2band[cid] = m['band']
    return id2band


def band_states():
    st = {}
    for sf in glob.glob(os.path.join(ROOT, 'docs', 'enrichment', 'batches', '*.json')):
        try:
            with open(sf, encoding='utf-8') as f:
                s = json.load(f)
            st[s.get('batch')] = s
        except (ValueError, KeyError, TypeError) as ex:
            raise ValueError(f'invalid state file {sf}: {ex}') from ex
    return st


def band_busy(entry_id, id2band, states, root=None, now=None):
    root = root or ROOT
    band = id2band.get(entry_id)
    if not band:
        return False
    if states.get(band, {}).get('in_progress'):
        return True
    now = now or datetime.datetime.now(datetime.timezone.utc)
    # Historical naming used worker-<band>; current naming uses <band>.
    for name in (band, 'worker-' + band):
        path = os.path.join(root, 'docs', 'enrichment', 'batons', name + '.json')
        if not os.path.exists(path):
            continue
        try:
            with open(path, encoding='utf-8') as f:
                baton = json.load(f)
            if baton.get('released') or not baton.get('agent'):
                continue
            stamp = datetime.datetime.fromisoformat(baton['clocked_in'])
            if stamp.tzinfo is None:
                return True
            if (now - stamp).total_seconds() < STALE_MIN * 60:
                return True
        except (OSError, ValueError, KeyError, TypeError):
            return True
    return False


def proposal_fields(record, kind, resolve):
    """Normalize supported schemas, rejecting conflicting aliases and missing fields."""
    if not isinstance(record, dict):
        raise ValueError('record must be an object')
    target = record.get('into') or record.get('target')
    if record.get('into') and record.get('target'):
        if resolve(record['into']) != resolve(record['target']):
            raise ValueError('conflicting into/target')
    key = 'link' if kind == 'reciprocal' else 'concept'
    linked = record.get(key) or (record.get('concept') if kind == 'reciprocal' else None)
    if kind == 'reciprocal' and record.get('link') and record.get('concept'):
        if resolve(record['link']) != resolve(record['concept']):
            raise ValueError('conflicting link/concept')
    if not isinstance(target, str) or not target.strip():
        raise ValueError('missing target (into or target)')
    if not isinstance(linked, str) or not linked.strip():
        raise ValueError(f'missing {key}')
    if kind == 'inline' and not isinstance(record.get('phrase'), str):
        raise ValueError('inline phrase must be a nonempty string')
    if kind == 'inline' and not record['phrase'].strip():
        raise ValueError('inline phrase must be a nonempty string')
    if kind == 'reciprocal' and (
        not isinstance(record.get('why'), str) or not record['why'].strip()
    ):
        raise ValueError('reciprocal why must be a nonempty string')
    return resolve(target), resolve(linked)


def main(proposal_names=None, dry_run=False):
    E = enrich_stats.load()
    byfile = {e['fm'].get('file'): k for k, e in E.items() if e['fm'].get('file')}
    bypath = {e['path'].replace(os.sep, '/'): k for k, e in E.items()}
    byid = {k: k for k in E}
    def res(x):
        x = (x or '').strip()
        if x in byfile: return byfile[x]
        if x in byid: return x
        if x in bypath: return bypath[x]
        return x
    try:
        id2band = band_of()
        states = band_states()
        paths = sorted(glob.glob(os.path.join(PDIR, '*.json')))
        if proposal_names is not None:
            if not proposal_names:
                raise ValueError('proposal selection must not be empty')
            paths = []
            for name in proposal_names:
                if not isinstance(name, str) or os.path.basename(name) != name or not name.endswith('.json'):
                    raise ValueError('select proposals by a basename ending in .json')
                path = os.path.join(PDIR, name)
                if os.path.islink(path) or not os.path.isfile(path):
                    raise ValueError(f'proposal missing or not a regular file: {name}')
                paths.append(path)
            paths = sorted(set(paths))
        # Validate all selected files before any write; unselected files are untouched.
        proposals = []
        for pf in paths:
            with open(pf, encoding='utf-8') as f:
                P = json.load(f)
            if not isinstance(P, dict):
                raise ValueError(f'{pf}: proposal must be an object')
            for kind in ('reciprocal', 'inline'):
                records = P.get(kind, [])
                if not isinstance(records, list):
                    raise ValueError(f'{pf}: {kind} must be an array')
                for index, record in enumerate(records):
                    into, linked = proposal_fields(record, kind, res)
                    if into not in E or linked not in E:
                        raise ValueError(f'{pf}: {kind}[{index}]: unresolved target/link')
            proposals.append((pf, P))
    except (OSError, ValueError, KeyError, TypeError) as ex:
        print(f'ERROR: preflight failed; no writes: {ex}', file=sys.stderr)
        return 1

    stats = dict(recip=0, inline=0, skipped=0, deferred=0, archived=0)
    written = []

    for pf, P in proposals:
        deferred_recip, deferred_inline = [], []

        for r in P.get('reciprocal', []):
            into, link = proposal_fields(r, 'reciprocal', res)
            if into not in E or link not in E:
                stats['skipped'] += 1
                continue
            if band_busy(into, id2band, states):
                deferred_recip.append(r); stats['deferred'] += 1
                continue
            e = E[into]
            why = r.get('why', '')
            if in_cited_in(e['body'], link):
                stats['skipped'] += 1
                continue
            m = re.search(r'^##\s*Related concepts\s*$', e['body'], re.M)
            if m:
                # boundary-preserving slice: only the section content is touched,
                # everything from the next '## ' heading to EOF stays byte-identical
                sec_start = m.end()
                nxt = re.search(r'^##\s', e['body'][sec_start:], re.M)
                if nxt:
                    target = e['body'][sec_start:sec_start + nxt.start()]
                    suffix = e['body'][sec_start + nxt.start():]
                else:
                    target = e['body'][sec_start:]
                    suffix = ""
                if f"[[{link}]]" in target:
                    stats['skipped'] += 1
                    continue
                newtarget = target.rstrip('\n')
                if newtarget:
                    newtarget = "\n" + newtarget
                    newtarget += f"\n- [[{link}]] — {why}\n"
                else:
                    newtarget = f"\n- [[{link}]] — {why}\n"
                e['body'] = e['body'][:sec_start] + newtarget + suffix
                stats['recip'] += 1
            else:
                ms = re.search(r'^##\s*Sources\s*$', e['body'], re.M)
                if not ms:
                    e['body'] += f"\n\n## Related concepts\n\n- [[{link}]] — {why}\n"
                else:
                    e['body'] = (e['body'][:ms.start()]
                                  + f"## Related concepts\n\n- [[{link}]] — {why}\n\n"
                                  + e['body'][ms.start():])
                stats['recip'] += 1
            e['dirty'] = True

        for r in P.get('inline', []):
            into, concept = proposal_fields(r, 'inline', res)
            phrase = r.get('phrase')
            if into not in E or concept not in E or not phrase:
                stats['skipped'] += 1
                continue
            if band_busy(into, id2band, states):
                deferred_inline.append(r); stats['deferred'] += 1
                continue
            e = E[into]
            body_lines = e['body'].splitlines(keepends=True)
            out = []
            replaced = False
            in_code = False
            for i, s in enumerate(body_lines):
                if CODE.match(s):
                    in_code = not in_code
                    out.append(s)
                    continue
                if in_code:
                    out.append(s)
                    continue
                if HEADING.match(s) or in_link(s, phrase):
                    out.append(s)
                    continue
                idx = s.find(phrase)
                if idx != -1 and not replaced:
                    out.append(s[:idx] + f"[[{concept}|{phrase}]]" + s[idx+len(phrase):])
                    replaced = True
                else:
                    out.append(s)
            if replaced:
                e['body'] = "".join(out)
                e['dirty'] = True
                stats['inline'] += 1

        # write content FIRST (all dirty entries of this proposal file)
        # the entry dict has no raw front-matter, so re-read each file and
        # keep its front-matter block byte-for-byte; only the body is replaced.
        for k, e in E.items():
            if e.get('dirty'):
                fp = os.path.join(ROOT, e['path'])
                cur = open(fp, encoding='utf-8').read()
                end = cur.find('\n---\n', 4)
                if end == -1:
                    print(f"SKIP (no front-matter) {e['path']}")
                    continue
                if dry_run:
                    print(f"would write: {e['path']}")
                else:
                    tmp = fp + '.applytmp'
                    with open(tmp, 'w', encoding='utf-8') as f:
                        f.write(cur[:end+5] + e['body'])
                    os.replace(tmp, fp)
                written.append(e['path'])
                e['dirty'] = False

        # then archive or keep-with-deferred
        if deferred_recip or deferred_inline:
            P2 = dict(P)
            P2['reciprocal'] = deferred_recip
            P2['inline'] = deferred_inline
            P2['notes'] = str(P.get('notes', '')) + f" | deferred at this run (target band busy): {len(deferred_recip)} recip, {len(deferred_inline)} inline"
            if not dry_run:
                with open(pf, 'w', encoding='utf-8') as f:
                    json.dump(P2, f, indent=1, ensure_ascii=False)
                    f.write('\n')
        else:
            if not dry_run:
                os.makedirs(APPLIED, exist_ok=True)
                shutil.move(pf, os.path.join(APPLIED, os.path.basename(pf)))
            stats['archived'] += 1

    action = 'dry-run, no writes' if dry_run else 'applied'
    print(f"{action}: recip={stats['recip']} inline={stats['inline']} deferred={stats['deferred']} "
          f"skipped={stats['skipped']} archived={stats['archived']} "
          f"{'files_planned' if dry_run else 'files_written'}={len(written)}")
    if stats['deferred']:
        print("deferred proposals remain in docs/enrichment/proposals/ for the next run")
    return 0


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--proposal', action='append', metavar='FILE.json',
                        help='apply only this reviewed file; repeat for several')
    parser.add_argument('--dry-run', action='store_true', help='preview without any writes')
    args = parser.parse_args()
    sys.exit(main(proposal_names=args.proposal, dry_run=args.dry_run))
