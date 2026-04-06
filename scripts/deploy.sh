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
pm2 start node_modules/.bin/next --name yappix-ru -- start -p 3001
echo "==> waiting for Next.js to start..."
sleep 5

# Check if process is alive
for i in 1 2 3 4; do
  STATUS=$(pm2 show yappix-ru 2>/dev/null | grep "status" | head -1 || echo "unknown")
  echo "==> attempt $i: $STATUS"
  if echo "$STATUS" | grep -q "online"; then
    break
  fi
  sleep 5
done

echo "==> pm2 error log (last 15):"
pm2 logs yappix-ru --err --lines 15 --nostream 2>/dev/null || true
echo "==> pm2 out log (last 5):"
pm2 logs yappix-ru --out --lines 5 --nostream 2>/dev/null || true

echo "==> pm2 full status:"
pm2 show yappix-ru 2>/dev/null | grep -E "status|uptime|restart|script|exec_cwd|node.js|pid " || true

# Save PM2 process list so it survives server reboot
pm2 save 2>/dev/null || true

# ─── Nginx cache flush ───
sudo rm -rf /var/cache/nginx 2>/dev/null || true
sudo nginx -s reload 2>/dev/null || sudo systemctl reload nginx 2>/dev/null || true

# ─── Smoke test ───
echo "==> smoke test localhost:3001"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 http://localhost:3001/ 2>&1 || echo "000")
echo "==> HTTP status: $HTTP_CODE"
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "308" ]; then
  SMOKE=$(curl -s --max-time 15 http://localhost:3001/ 2>&1 || true)
  CDN_COUNT=$(echo "$SMOKE" | grep -c "cdn\.yappix\.ru" || true)
  echo "==> cdn refs: $CDN_COUNT"
  if [ "$CDN_COUNT" -eq 0 ]; then
    echo "==> SITE IS CLEAN AND RUNNING"
  else
    echo "==> SITE RUNNING BUT CDN REFS FOUND"
  fi
else
  echo "==> SITE NOT RESPONDING (HTTP $HTTP_CODE)"
  echo "==> checking what is on port 3001:"
  ss -tlnp 2>/dev/null | grep 3001 || echo "(nothing on port 3001)"
  echo "==> pm2 restart count:"
  pm2 show yappix-ru 2>/dev/null | grep "restart" || true
fi

echo "==> deploy ok | $(git rev-parse --short HEAD)"
