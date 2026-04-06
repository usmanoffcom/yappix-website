#!/usr/bin/env bash
set -euo pipefail

cd /var/www/yappix.ru

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi
export PATH="${HOME}/.local/share/pnpm:${PATH}"

echo "==> node: $(command -v node && node -v || echo missing)"
echo "==> pnpm: $(command -v pnpm && pnpm -v || echo missing)"
echo "==> before: $(git rev-parse --short HEAD 2>/dev/null || echo '?')"

git fetch origin main
git reset --hard origin/main
echo "==> checkout: $(git rev-parse --short HEAD) $(git log -1 --oneline)"

# ─── Nuke ALL .env* references to cdn.yappix.ru ───
for f in .env .env.local .env.production .env.production.local; do
  if [ -f "$f" ]; then
    if grep -q 'NEXT_PUBLIC_CDN_URL\|cdn\.yappix' "$f" 2>/dev/null; then
      echo "==> removing CDN refs from $f"
      sed -i '/NEXT_PUBLIC_CDN_URL/d;/cdn\.yappix/d' "$f"
    fi
  fi
done
unset NEXT_PUBLIC_CDN_URL 2>/dev/null || true
unset ENABLE_CDN_ASSETPREFIX 2>/dev/null || true

if [ -z "${NODE_OPTIONS:-}" ]; then
  export NODE_OPTIONS="--max-old-space-size=4096"
fi

echo "==> clean .next + caches"
rm -rf .next node_modules/.cache

# ─── STOP ALL processes on port 3001 FIRST (before build) ───
echo "==> stopping all on port 3001"
pm2 stop all 2>/dev/null || true
pm2 delete yappix-ru 2>/dev/null || true
sleep 1
# Aggressive kill: try sudo, then regular, then fallback
sudo fuser -k 3001/tcp 2>/dev/null || fuser -k 3001/tcp 2>/dev/null || true
sleep 1
for pid in $(sudo lsof -ti:3001 2>/dev/null || lsof -ti:3001 2>/dev/null || true); do
  echo "    killing pid $pid on port 3001"
  sudo kill -9 "$pid" 2>/dev/null || kill -9 "$pid" 2>/dev/null || true
done
sleep 3
echo "    port 3001 after cleanup: $(sudo lsof -ti:3001 2>/dev/null || lsof -ti:3001 2>/dev/null || echo 'FREE')"

# ─── Build ───
pnpm install --frozen-lockfile
pnpm run build

echo "==> build check:"
node -e "const c=JSON.parse(require('fs').readFileSync('.next/required-server-files.json','utf8')); console.log('assetPrefix:', JSON.stringify(c.config.assetPrefix))"
grep -rq "cdn\.yappix\.ru" .next/server/app/index.html 2>/dev/null && echo "WARN: cdn in index.html" || echo "OK: index.html clean"

# ─── Restart other PM2 apps that were stopped ───
pm2 start all 2>/dev/null || true
pm2 delete yappix-ru 2>/dev/null || true
sleep 1

# ─── Verify port is free before starting ───
for pid in $(sudo lsof -ti:3001 2>/dev/null || lsof -ti:3001 2>/dev/null || true); do
  sudo kill -9 "$pid" 2>/dev/null || kill -9 "$pid" 2>/dev/null || true
done
sleep 2

# ─── Start yappix-ru ───
pm2 start npm --name yappix-ru -- start
sleep 10

echo "==> pm2 status:"
pm2 list 2>/dev/null | grep -E "yappix|name" || true
echo "==> pm2 error log:"
pm2 logs yappix-ru --err --lines 5 --nostream 2>/dev/null || true

# ─── Nginx ───
sudo rm -rf /var/cache/nginx 2>/dev/null || true
sudo nginx -s reload 2>/dev/null || sudo systemctl reload nginx 2>/dev/null || true

# ─── Smoke test ───
SMOKE=$(curl -s --max-time 10 http://localhost:3001/ 2>&1 || true)
CDN_COUNT=$(echo "$SMOKE" | grep -c "cdn\.yappix\.ru" || true)
echo "==> cdn.yappix.ru in response: $CDN_COUNT"
if [ "$CDN_COUNT" -gt 0 ]; then
  echo "STILL BROKEN"
  echo "$SMOKE" | head -c 1500
else
  echo "==> SITE IS CLEAN"
fi

echo "==> deploy ok | $(git rev-parse --short HEAD)"
