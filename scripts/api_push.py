#!/usr/bin/env python3
"""Push local commits to origin/main via the GitHub REST API.

Workaround for sandbox networks where git push (git-receive-pack POST) is
flaky. Mirrors `git push origin HEAD:main` for commits whose diff vs
origin/main touches files (no merges, no deletions of remote-only files).

Usage: python3 scripts/api_push.py [max_tries]
Reads legacy authentication from the origin URL, or uses host-scoped
proxy authentication with --credential-proxy. Never copies proxy secrets.
Exits 0 when origin/main == HEAD.
"""
import base64
import concurrent.futures
import hashlib
import json
import os
import re
import subprocess
import sys
import time
import urllib.request

REPO = "Clemvillatte/flourishing-compendium"
API = f"https://api.github.com/repos/{REPO}/git"
PROXY_AUTH = "--credential-proxy" in sys.argv
GIT_ENV = dict(os.environ)
if PROXY_AUTH:
    GIT_ENV.pop("HTTPS_PROXY", None)


def token():
    url = subprocess.check_output(
        ["git", "remote", "get-url", "origin"], text=True).strip()
    m = re.match(r"https://([^@]+)@", url)
    if not m:
        return None
    tok = m.group(1)
    # strip any "x-access-token:" or "username:" prefix before the PAT
    if ":" in tok and tok.count(":") == 1 and not tok.startswith("github_pat"):
        tok = tok.split(":", 1)[1]
    return tok


def api_call(path, method="GET", body=None):
    if PROXY_AUTH:
        command = ["curl", "--silent", "--show-error", "--max-time", "45",
                   "--write-out", "\n%{http_code}", "--request", method,
                   "--header", "Accept: application/vnd.github+json",
                   "--header", "User-Agent: api_push"]
        payload = None
        if body is not None:
            command += ["--header", "Content-Type: application/json",
                        "--data-binary", "@-"]
            payload = json.dumps(body)
        command.append(API + path)
        result = subprocess.run(command, input=payload, text=True,
                                capture_output=True, check=True)
        response, status = result.stdout.rsplit("\n", 1)
        return int(status), json.loads(response or "{}")
    tok = token()
    req = urllib.request.Request(
        API + path, method=method,
        headers={"Authorization": f"Bearer {tok}",
                 "Accept": "application/vnd.github+json",
                 "User-Agent": "api_push"})
    data = json.dumps(body).encode() if body is not None else None
    if data:
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, data=data, timeout=30) as r:
            return r.status, json.loads(r.read() or b"{}")
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}")


CACHE_PATH = "/tmp/apipush_blob_cache.json"


def git_blob_sha(raw):
    h = hashlib.sha1()
    h.update(b"blob %d\0" % len(raw))
    h.update(raw)
    return h.hexdigest()


def load_cache():
    try:
        return set(json.load(open(CACHE_PATH)))
    except Exception:
        return set()


def save_cache(cache):
    try:
        json.dump(sorted(cache), open(CACHE_PATH, "w"))
    except Exception:
        pass


def git_ready_for_push():
    """Do not mistake a rebase's temporary HEAD for a saved checkpoint."""
    for operation in ("rebase-merge", "rebase-apply", "MERGE_HEAD",
                      "CHERRY_PICK_HEAD", "REVERT_HEAD"):
        path = subprocess.check_output(
            ["git", "rev-parse", "--git-path", operation], text=True).strip()
        if os.path.exists(path):
            print(f"ABORT: unfinished Git operation ({operation}); "
                  "resolve it before pushing")
            return False
    dirty = subprocess.run(
        ["git", "diff", "--quiet", "HEAD", "--"],
        capture_output=True).returncode
    if dirty != 0:
        print("ABORT: tracked worktree/index changes are not committed; "
              "save them before pushing")
        return False
    return True


def changed_files(origin, head):
    """Keep deletions explicit: rename detection must not turn moves into copies."""
    fields = subprocess.check_output(
        ["git", "-c", "core.quotepath=false", "diff", "--no-renames",
         "--name-status", "-z", origin, head]).decode().split("\0")
    fields = fields[:-1] if fields[-1] == "" else fields
    if len(fields) % 2:
        raise ValueError("malformed NUL-delimited Git status output")
    return list(zip(fields[::2], fields[1::2]))


def main():
    positional = [a for a in sys.argv[1:] if a != "--credential-proxy"]
    max_tries = int(positional[0]) if positional else 10
    for attempt in range(1, max_tries + 1):
        if not git_ready_for_push():
            return 1
        # local state: fetch + rebase our commits onto latest origin/main first
        subprocess.run(["git", "fetch", "-q", "origin"],
                       check=True, capture_output=True, env=GIT_ENV)
        pull = subprocess.run(
            ["git", "pull", "-q", "--rebase", "origin", "main"],
            capture_output=True, env=GIT_ENV)
        if pull.returncode != 0:
            print("ABORT: git pull --rebase failed; inspect git status "
                  "and resolve before retrying")
            return 1
        if not git_ready_for_push():
            return 1
        head = subprocess.check_output(
            ["git", "rev-parse", "HEAD"], text=True).strip()
        origin = subprocess.check_output(
            ["git", "rev-parse", "origin/main"], text=True).strip()
        # SAFETY: never push a diff computed from a stale HEAD (it would
        # revert other workers' commits). HEAD must sit on origin/main.
        anc = subprocess.run(["git", "merge-base", "--is-ancestor", origin, head],
                             capture_output=True).returncode
        if anc != 0:
            print("ABORT: local HEAD is not a descendant of origin/main; "
                  "pull/rebase first")
            return 1
        if head == origin:
            print(f"already synced (HEAD == origin/main)")
            return 0
        changes = changed_files(origin, head)
        files = [path for status, path in changes if status != "D"]
        deletions = [{"path": path, "mode": "100644", "type": "blob", "sha": None}
                     for status, path in changes if status == "D"]
        if not changes:
            print("no file changes; commit graph differs (rebase needed)")
            return 1
        # remote head (authoritative, CAS base)
        st, ref = api_call("/ref/heads/main")
        if st != 200:
            print(f"ref fetch failed {st}: {ref}", flush=True); time.sleep(3); continue
        remote_sha = ref["object"]["sha"]
        if remote_sha != origin:
            # remote moved beyond our fetch; refetch and rebase again
            time.sleep(1); continue
        st, rc = api_call(f"/commits/{remote_sha}")
        base_tree = rc["tree"]["sha"]
        # blobs for changed files (concurrent upload, resume-safe)
        payloads = []
        modes = {}
        ok = True
        for f in files:
            try:
                raw = subprocess.check_output(["git", "show", f"{head}:{f}"])
            except subprocess.CalledProcessError:
                print(f"non-deleted file {f} unexpectedly missing in HEAD",
                      flush=True)
                ok = False; break
            payloads.append((f, raw))
            mode = subprocess.check_output(
                ["git", "ls-tree", head, "--", f], text=True).split(" ", 1)[0]
            if mode not in ("100644", "100755", "120000"):
                print(f"ABORT: unsupported file mode {mode!r} for {f}")
                return 1
            modes[f] = mode
        if not ok:
            time.sleep(3); continue
        cache = load_cache()
        state = {"done": 0, "lock": __import__("threading").Lock()}

        def upload(item):
            f, raw = item
            sha = git_blob_sha(raw)
            if sha not in cache:
                for _ in range(3):
                    st, blob = api_call("/blobs", "POST", {
                        "content": base64.b64encode(raw).decode(),
                        "encoding": "base64"})
                    if st == 201:
                        if blob["sha"] != sha:
                            return None
                        cache.add(sha)
                        break
                    time.sleep(1)
                else:
                    return None
            with state["lock"]:
                state["done"] += 1
                if state["done"] % 250 == 0:
                    print(f"blobs {state['done']}/{len(payloads)}", flush=True)
            return {"path": f, "mode": modes[f], "type": "blob", "sha": sha}

        tree_items = []
        if PROXY_AUTH:
            # GitHub accepts UTF-8 contents directly in tree entries. Avoid
            # hundreds of separate blob POSTs and proxy CONNECT rate limits.
            for f, raw in payloads:
                try:
                    content = raw.decode("utf-8")
                except UnicodeDecodeError:
                    tree_items.append(upload((f, raw)))
                else:
                    item = {"path": f, "mode": modes[f], "type": "blob"}
                    sha = git_blob_sha(raw)
                    item.update({"sha": sha} if sha in cache else {"content": content})
                    tree_items.append(item)
        else:
            with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
                tree_items = list(ex.map(upload, payloads))
        tree_items.extend(deletions)
        save_cache(cache)
        if any(t is None for t in tree_items):
            print("some blobs failed; retrying", flush=True)
            time.sleep(3); continue
        st, tree = api_call("/trees", "POST",
                            {"base_tree": base_tree, "tree": tree_items})
        if st != 201:
            print(f"tree failed {st}: {tree}", flush=True); time.sleep(3); continue
        expected_tree = subprocess.check_output(
            ["git", "rev-parse", f"{head}^{{tree}}"], text=True).strip()
        if tree["sha"] != expected_tree:
            print("ABORT: API tree differs from the committed local tree; "
                  "no commit or ref update was sent", flush=True)
            return 1
        # Tree creation also materialises inline blobs. Reuse them if another
        # worker advances main before our compare-and-swap ref update.
        cache.update(git_blob_sha(raw) for _, raw in payloads)
        save_cache(cache)
        msg = subprocess.check_output(
            ["git", "log", "-1", "--format=%B", head], text=True).strip()
        author = {
            "name": subprocess.check_output(
                ["git", "config", "user.name"], text=True).strip(),
            "email": subprocess.check_output(
                ["git", "config", "user.email"], text=True).strip(),
        }
        st, commit = api_call("/commits", "POST", {
            "message": msg, "tree": tree["sha"], "parents": [remote_sha],
            "author": author})
        if st != 201:
            print(f"commit failed {st}: {commit}", flush=True); time.sleep(3); continue
        st, upd = api_call("/refs/heads/main", "PATCH",
                           {"sha": commit["sha"], "force": False})
        if st in (200, 201):
            subprocess.run(["git", "fetch", "-q", "origin"], capture_output=True,
                           env=GIT_ENV)
            print(f"pushed via API: {commit['sha'][:8]} {msg.splitlines()[0]}", flush=True)
            # resync local branch to remote commit
            subprocess.run(["git", "reset", "-q", "--hard", "origin/main"],
                           capture_output=True)
            return 0
        print(f"ref update failed ({st}): {upd}; retrying")
        time.sleep(2)
    print("TIMED OUT")
    return 1


if __name__ == "__main__":
    sys.exit(main())
