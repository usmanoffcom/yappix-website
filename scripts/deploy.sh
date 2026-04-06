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

# ─── Remove CDN from all .env files ───
for f in .env .env.local .env.production .env.production.local; do
  if [ -f "$f" ] && grep -q 'NEXT_PUBLIC_CDN_URL\|cdn\.yappix' "$f" 2>/dev/null; then
    echo "==> cleaning CDN from $f"
    sed -i '/NEXT_PUBLIC_CDN_URL/d;/cdn\.yappix/d' "$f"
  fi
done
unset NEXT_PUBLIC_CDN_URL 2>/dev/null || true
unset ENABLE_CDN_ASSETPREFIX 2>/dev/null || true

[ -z "${NODE_OPTIONS:-}" ] && export NODE_OPTIONS="--max-old-space-size=4096"

# ─── Stop ONLY yappix-ru (not other apps!) ───
echo "==> stopping yappix-ru"
pm2 delete yappix-ru 2>/dev/null || true
sleep 1

# Kill orphan next-server processes on port 3001
kill_port() {
  pkill -9 -f "next-server.*3001" 2>/dev/null || true
  pkill -9 -f "next-start.*3001" 2>/dev/null || true
  for pid in $(ss -tlnp 2>/dev/null | grep ':3001 ' | grep -oP 'pid=\K[0-9]+' || true); do
    echo "    kill $pid"
    kill -9 "$pid" 2>/dev/null || true
  done
}
kill_port
sleep 2

echo "==> clean .next + caches"
rm -rf .next node_modules/.cache

pnpm install --frozen-lockfile
pnpm run build

echo "==> build check:"
node -e "const c=JSON.parse(require('fs').readFileSync('.next/required-server-files.json','utf8')); console.log('assetPrefix:', JSON.stringify(c.config.assetPrefix))"
grep -rq "cdn\.yappix\.ru" .next/server/app/index.html 2>/dev/null && echo "WARN: cdn in index.html" || echo "OK: index.html clean"

# ─── Ensure port 3001 is STILL free before starting ───
echo "==> pre-start port check:"
kill_port
sleep 2
SS_OUT=$(ss -tlnp 2>/dev/null | grep 3001 || true)
if [ -n "$SS_OUT" ]; then
  echo "WARN: port 3001 STILL in use: $SS_OUT"
  sleep 5
  kill_port
  sleep 3
fi

# ─── Start ───
pm2 start npm --name yappix-ru -- start
echo "==> waiting for Next.js to start..."
sleep 5

# Check PM2 is actually online (not errored/stopped)
PM2_OK=0
for i in 1 2 3 4 5 6; do
  PM2_LINE=$(pm2 show yappix-ru 2>/dev/null | grep -E "status.*online|status.*errored|status.*stopped" | head -1 || true)
  echo "==> attempt $i: $PM2_LINE"
  if echo "$PM2_LINE" | grep -q "online"; then
    PM2_OK=1
    break
  fi
  sleep 5
done

echo "==> pm2 error log (last 20):"
pm2 logs yappix-ru --err --lines 20 --nostream 2>/dev/null || true
echo "==> pm2 out log (last 10):"
pm2 logs yappix-ru --out --lines 10 --nostream 2>/dev/null || true

if [ "$PM2_OK" != "1" ]; then
  echo "==> DEPLOY FAILED: yappix-ru is not online in PM2"
  pm2 show yappix-ru 2>/dev/null || true
  exit 1
fi

# Save PM2 process list so it survives server reboot
pm2 save 2>/dev/null || true

# ─── Nginx cache flush ───
sudo rm -rf /var/cache/nginx 2>/dev/null || true
sudo nginx -s reload 2>/dev/null || sudo systemctl reload nginx 2>/dev/null || true

# ─── Smoke test (must succeed or CI fails) ───
echo "==> smoke test localhost:3001"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 30 http://127.0.0.1:3001/ 2>&1 || echo "000")
echo "==> HTTP status: $HTTP_CODE"
if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "301" ] && [ "$HTTP_CODE" != "308" ]; then
  echo "==> DEPLOY FAILED: origin returned HTTP $HTTP_CODE"
  ss -tlnp 2>/dev/null | grep 3001 || true
  exit 1
fi

SMOKE=$(curl -s --max-time 30 http://127.0.0.1:3001/ 2>&1 || true)
CDN_COUNT=$(echo "$SMOKE" | grep -c "cdn\.yappix\.ru" || true)
echo "==> cdn refs in HTML: $CDN_COUNT"
if [ "$CDN_COUNT" -gt 0 ]; then
  echo "==> DEPLOY FAILED: HTML still references cdn.yappix.ru"
  exit 1
fi

echo "==> deploy ok | $(git rev-parse --short HEAD)"
