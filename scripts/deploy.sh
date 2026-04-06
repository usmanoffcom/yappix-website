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

# Kill anything on port 3001
kill_port() {
  for pid in $(sudo lsof -ti:3001 2>/dev/null || lsof -ti:3001 2>/dev/null || true); do
    echo "    kill $pid"
    sudo kill -9 "$pid" 2>/dev/null || kill -9 "$pid" 2>/dev/null || true
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
sleep 10

echo "==> pm2 error log:"
pm2 logs yappix-ru --err --lines 5 --nostream 2>/dev/null || true
echo "==> pm2 status:"
pm2 show yappix-ru 2>/dev/null | grep -E "status|uptime|restart" || true

# ─── Nginx cache flush ───
sudo rm -rf /var/cache/nginx 2>/dev/null || true
sudo nginx -s reload 2>/dev/null || sudo systemctl reload nginx 2>/dev/null || true

# ─── Smoke test ───
SMOKE=$(curl -s --max-time 10 http://localhost:3001/ 2>&1 || true)
CDN_COUNT=$(echo "$SMOKE" | grep -c "cdn\.yappix\.ru" || true)
echo "==> cdn refs in response: $CDN_COUNT"
if [ "$CDN_COUNT" -gt 0 ]; then
  echo "BROKEN"
else
  echo "==> SITE IS CLEAN"
fi

echo "==> deploy ok | $(git rev-parse --short HEAD)"
