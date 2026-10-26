#!/bin/bash
# api_push.sh — push local commits to origin/main via the GitHub REST API.
# Fallback for environments where git smart-HTTP receive-pack is blocked.
# Usage: scripts/api_push.sh "commit message"  (pushes everything between origin/main and HEAD)
set -euo pipefail
TOKEN="${GITHUB_API_TOKEN:?set GITHUB_API_TOKEN}"
REPO="Clemvillatte/flourishing-compendium"
API="https://api.github.com/repos/$REPO"
AUTH="Authorization: Bearer $TOKEN"
HJSON="Accept: application/vnd.github+json"
MSG="${1:-api push}"
cd "$(git rev-parse --show-toplevel)"

git fetch origin main --quiet
BASE=$(git rev-parse origin/main)
if [ "$(git rev-parse HEAD)" = "$BASE" ]; then echo "nothing to push"; exit 0; fi

# build blob shas for every changed file
TREE_ENTRIES="[]"
while IFS=$'\t' read -r status path; do
  if [ "$status" = "D" ]; then
    ENTRY=$(jq -nc --arg p "$path" '{path:$p,mode:"100644",type:"blob",sha:null}')
  else
    base64 -w0 "$path" > /tmp/api_push_blob.b64
    jq -nc --rawfile c /tmp/api_push_blob.b64 '{content:$c,encoding:"base64"}' > /tmp/api_push_blob.json
    BSHA=$(curl -s -X POST "$API/git/blobs" -H "$AUTH" -H "$HJSON" \
      -d @/tmp/api_push_blob.json | jq -r .sha)
    rm -f /tmp/api_push_blob.json /tmp/api_push_blob.b64
    MODE=$([ -x "$path" ] && echo 100755 || echo 100644)
    ENTRY=$(jq -nc --arg p "$path" --arg s "$BSHA" --arg m "$MODE" \
      '{path:$p,mode:$m,type:"blob",sha:$s}')
  fi
  TREE_ENTRIES=$(jq -nc --argjson t "$TREE_ENTRIES" --argjson e "$ENTRY" '$t + [$e]')
done < <(git diff --name-status --no-renames origin/main HEAD | sed 's/\t/ /' | awk '{print $1"\t"$2}')

BASE_TREE=$(git rev-parse origin/main^{tree})
jq -nc --arg bt "$BASE_TREE" --argjson t "$TREE_ENTRIES" '{base_tree:$bt,tree:$t}' > /tmp/api_push_tree.json
TREE_SHA=$(curl -s -X POST "$API/git/trees" -H "$AUTH" -H "$HJSON" \
  -d @/tmp/api_push_tree.json | jq -r .sha)
jq -nc --arg m "$MSG" --arg t "$TREE_SHA" --arg p "$BASE" '{message:$m,tree:$t,parents:[$p],author:{name:"Computer",email:"genuineflourishing15@yopmail.com"}}' > /tmp/api_push_commit.json
NEW_COMMIT=$(curl -s -X POST "$API/git/commits" -H "$AUTH" -H "$HJSON" \
  -d @/tmp/api_push_commit.json | jq -r .sha)
rm -f /tmp/api_push_tree.json /tmp/api_push_commit.json
curl -s -o /dev/null -w "ref-update:%{http_code}\n" -X PATCH "$API/git/refs/heads/main" \
  -H "$AUTH" -H "$HJSON" -d "{\"sha\":\"$NEW_COMMIT\",\"force\":false}"
git pull --rebase origin main --quiet
echo "API-PUSHED $NEW_COMMIT"
