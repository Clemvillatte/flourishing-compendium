#!/usr/bin/env bash
# Retry pull-rebase + push until HEAD is on origin/main. Usage: sync_push.sh [max_minutes]
cd "$(dirname "$0")/.." || exit 1
MAXMIN="${1:-5}"
END=$(( $(date +%s) + MAXMIN*60 ))
while [ "$(date +%s)" -lt "$END" ]; do
  git pull -q --rebase origin main 2>/dev/null
  out=$(git push -q origin HEAD:main 2>&1)
  git fetch -q origin 2>/dev/null
  if git merge-base --is-ancestor HEAD origin/main 2>/dev/null; then
    echo "PUSHED-AND-VERIFIED: $(git log -1 --format='%h %s')"
    exit 0
  fi
  # rebase conflict: abort and retry (conflicts only in shared files; re-resolve manually if persistent)
  if ! git diff --quiet 2>/dev/null || git status --porcelain | grep -q "^UU\|^AA"; then
    echo "CONFLICT-STATE-DETECTED, aborting rebase for manual fix" >&2
    git rebase --abort 2>/dev/null
    exit 2
  fi
  sleep 3
done
echo "TIMED OUT after ${MAXMIN} min" >&2
exit 1
