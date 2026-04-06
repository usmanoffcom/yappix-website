#!/usr/bin/env bash
# Единая точка деплоя: /var/www/yappix.ru (CI и ручной SSH).
# Не используйте устаревший ./deploy.sh в корне без обёртки — он заменён на вызов этого файла.
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

if [ -f .env.production ]; then
  set -a
  # shellcheck source=/dev/null
  source .env.production
  set +a
fi

# Nuclear: strip NEXT_PUBLIC_CDN_URL from .env.production so Next.js cannot read it at build time.
if [ -f .env.production ] && grep -q 'NEXT_PUBLIC_CDN_URL' .env.production; then
  echo "==> purging NEXT_PUBLIC_CDN_URL from .env.production"
  sed -i '/NEXT_PUBLIC_CDN_URL/d' .env.production
fi
# Belt-and-suspenders: override in env so Next.js build sees empty value.
export NEXT_PUBLIC_CDN_URL=""
unset ENABLE_CDN_ASSETPREFIX 2>/dev/null || true
echo "==> CDN assetPrefix: disabled (serving static from yappix.ru)"

if [ -z "${NODE_OPTIONS:-}" ]; then
  export NODE_OPTIONS="--max-old-space-size=4096"
fi
echo "==> NODE_OPTIONS: ${NODE_OPTIONS}"

echo "==> clean .next (избегаем залипшей инкрементальной сборки)"
rm -rf .next

echo "==> next.config.mjs assetPrefix line:"
grep -n "assetPrefix" next.config.mjs || echo "(not found)"

pnpm install --frozen-lockfile
pnpm run build

echo "==> built assetPrefix in .next/required-server-files.json:"
node -e "const c=JSON.parse(require('fs').readFileSync('.next/required-server-files.json','utf8')); console.log('assetPrefix:', JSON.stringify(c.config.assetPrefix))"

echo "==> checking built index.html for cdn.yappix.ru:"
if grep -q "cdn\.yappix\.ru" .next/server/app/index.html 2>/dev/null; then
  echo "PROBLEM: cdn.yappix.ru FOUND in built HTML!"
  grep -o 'https://cdn\.yappix\.ru[^"]*' .next/server/app/index.html | head -3
else
  echo "OK: no cdn.yappix.ru in built HTML"
fi

echo "==> stopping ALL processes on port 3001"
pm2 stop yappix-ru 2>/dev/null || true
pm2 delete yappix-ru 2>/dev/null || true
sleep 2
# Kill ANY orphan process still holding port 3001
fuser -k 3001/tcp 2>/dev/null || true
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
sleep 2
echo "==> port 3001 check: $(lsof -ti:3001 2>/dev/null || echo 'free')"

echo "==> clearing nginx proxy cache (if any)"
rm -rf /var/cache/nginx 2>/dev/null || true
rm -rf /tmp/nginx_cache 2>/dev/null || true
nginx -s reload 2>/dev/null || systemctl reload nginx 2>/dev/null || true
echo "==> nginx reloaded"

pm2 start npm --name yappix-ru -- start
sleep 8

echo "==> pm2 status:"
pm2 status yappix-ru 2>/dev/null | head -10 || true
echo "==> pm2 error log (last 10 lines):"
pm2 logs yappix-ru --err --lines 10 --nostream 2>/dev/null || true

echo "==> smoke test: curl localhost for cdn refs"
SMOKE=$(curl -s --max-time 10 http://localhost:3001/ 2>&1)
if echo "$SMOKE" | grep -q "cdn\.yappix\.ru"; then
  echo "PROBLEM: cdn.yappix.ru STILL in live response!"
  echo "$SMOKE" | grep -o 'cdn\.yappix\.ru' | head -3
else
  echo "OK: no cdn.yappix.ru in localhost response"
fi

echo "==> deploy ok | running: $(git rev-parse --short HEAD) $(git log -1 --oneline)"
pm2 describe yappix-ru 2>/dev/null | head -20 || true
