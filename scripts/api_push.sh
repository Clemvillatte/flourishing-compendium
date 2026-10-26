#!/bin/bash
# api_push.sh — push local commits to origin/main via the GitHub REST API.
# Fallback for environments where git smart-HTTP receive-pack is blocked.
# Usage: GITHUB_API_TOKEN=... scripts/api_push.sh "commit message"
# Safety guards (added 2026-10-26 after an advisor audit):
#   - refuses to run with a dirty working tree or a diverged HEAD (stale-file
#     reversal bug: rebasing is required first so the pushed tree is current);
#   - fails on any non-200 API response (no false "pushed" messages);
#   - verifies after the ref update that origin/main actually contains the new
#     commit.
set -euo pipefail
TOKEN="${GITHUB_API_TOKEN:?set GITHUB_API_TOKEN}"
REPO="Clemvillatte/flourishing-compendium"
API="https://api.github.com/repos/$REPO"
AUTH="Authorization: Bearer $TOKEN"
HJSON="Accept: application/vnd.github+json"
MSG="${1:-api push}"
cd "$(git rev-parse --show-toplevel)"

[ -z "$(git status --porcelain)" ] || { echo "ERROR: dirty working tree — commit first" >&2; exit 1; }

git fetch origin main --quiet
BASE=$(git rev-parse origin/main)
if [ "$(git rev-parse HEAD)" = "$BASE" ]; then echo "nothing to push"; exit 0; fi
git merge-base --is-ancestor "$BASE" HEAD || { echo "ERROR: HEAD diverged from origin/main — run: git pull --rebase origin main (stale-file reversal guard)" >&2; exit 1; }

# build blob shas for every changed file
TREE_ENTRIES="[]"
while IFS=$'\t' read -r status path; do
  if [ "$status" = "D" ]; then
    ENTRY=$(jq -nc --arg p "$path" '{path:$p,mode:"100644",type:"blob",sha:null}')
  else
    base64 -w0 "$path" > /tmp/api_push_blob.b64
    jq -nc --rawfile c /tmp/api_push_blob.b64 '{content:$c,encoding:"base64"}' > /tmp/api_push_blob.json
    BSHA=$(curl -s -X POST "$API/git/blobs" -H "$AUTH" -H "$HJSON" \
      -d @/tmp/api_push_blob.json | jq -r 'if .sha then .sha else error(.message) end')
    rm -f /tmp/api_push_blob.json /tmp/api_push_blob.b64
    MODE=$([ -x "$path" ] && echo 100755 || echo 100644)
    ENTRY=$(jq -nc --arg p "$path" --arg s "$BSHA" --arg m "$MODE" \
      '{path:$p,mode:$m,type:"blob",sha:$s}')
  fi
  TREE_ENTRIES=$(jq -nc --argjson t "$TREE_ENTRIES" --argjson e "$ENTRY" '$t + [$e]')
done < <(git -c core.quotePath=false diff --name-status --no-renames origin/main HEAD)

BASE_TREE=$(git rev-parse origin/main^{tree})
jq -nc --arg bt "$BASE_TREE" --argjson t "$TREE_ENTRIES" '{base_tree:$bt,tree:$t}' > /tmp/api_push_tree.json
TREE_SHA=$(curl -s -X POST "$API/git/trees" -H "$AUTH" -H "$HJSON" \
  -d @/tmp/api_push_tree.json | jq -r 'if .sha then .sha else error(.message) end')
jq -nc --arg m "$MSG" --arg t "$TREE_SHA" --arg p "$BASE" '{message:$m,tree:$t,parents:[$p],author:{name:"Computer",email:"genuineflourishing15@yopmail.com"}}' > /tmp/api_push_commit.json
NEW_COMMIT=$(curl -s -X POST "$API/git/commits" -H "$AUTH" -H "$HJSON" \
  -d @/tmp/api_push_commit.json | jq -r 'if .sha then .sha else error(.message) end')
rm -f /tmp/api_push_tree.json /tmp/api_push_commit.json
CODE=$(curl -s -o /tmp/api_push_ref.json -w "%{http_code}" -X PATCH "$API/git/refs/heads/main" \
  -H "$AUTH" -H "$HJSON" -d "{\"sha\":\"$NEW_COMMIT\",\"force\":false}")
[ "$CODE" = "200" ] || { echo "ERROR: ref update failed ($CODE): $(cat /tmp/api_push_ref.json)" >&2; exit 1; }
git fetch origin main --quiet
git merge-base --is-ancestor "$NEW_COMMIT" origin/main || { echo "ERROR: new commit not on origin/main after update" >&2; exit 1; }
echo "API-PUSHED $NEW_COMMIT (verified on origin/main)"
