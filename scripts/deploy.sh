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

# ─── Nuke ALL .env* references to cdn.yappix.ru / NEXT_PUBLIC_CDN_URL ───
echo "==> scanning .env* files for CDN references:"
for f in .env .env.local .env.production .env.production.local .env.development .env.development.local; do
  if [ -f "$f" ]; then
    echo "    $f exists ($(wc -l < "$f") lines)"
    if grep -q 'NEXT_PUBLIC_CDN_URL\|cdn\.yappix' "$f" 2>/dev/null; then
      echo "    >>> FOUND CDN refs in $f — removing"
      sed -i '/NEXT_PUBLIC_CDN_URL/d;/cdn\.yappix/d' "$f"
    fi
  fi
done

# Force-unset so Next.js @next/env cannot pick up stale values.
# Next.js treats empty string as "not set" and overrides from .env files,
# so we must fully unset, then set a harmless non-empty placeholder.
unset NEXT_PUBLIC_CDN_URL 2>/dev/null || true
unset ENABLE_CDN_ASSETPREFIX 2>/dev/null || true

if [ -z "${NODE_OPTIONS:-}" ]; then
  export NODE_OPTIONS="--max-old-space-size=4096"
fi

echo "==> clean .next + node_modules/.cache"
rm -rf .next node_modules/.cache

echo "==> next.config.mjs assetPrefix line:"
grep -n "assetPrefix" next.config.mjs || echo "(not found)"

echo "==> NEXT_PUBLIC_CDN_URL in env: '${NEXT_PUBLIC_CDN_URL:-<unset>}'"

pnpm install --frozen-lockfile
pnpm run build

echo "==> build diagnostics:"
echo "    assetPrefix in required-server-files.json:"
node -e "const c=JSON.parse(require('fs').readFileSync('.next/required-server-files.json','utf8')); console.log('    ', JSON.stringify(c.config.assetPrefix))"

echo "    index.html cdn check:"
if grep -q "cdn\.yappix\.ru" .next/server/app/index.html 2>/dev/null; then
  echo "    PROBLEM: cdn.yappix.ru in index.html"
  grep -o 'https://cdn\.yappix\.ru[^"]*' .next/server/app/index.html | head -3
else
  echo "    OK: clean"
fi

echo "    webpack runtime cdn check:"
WEBPACK_FILE=$(ls .next/static/chunks/webpack-*.js 2>/dev/null | head -1)
if [ -n "$WEBPACK_FILE" ]; then
  if grep -q "cdn\.yappix" "$WEBPACK_FILE" 2>/dev/null; then
    echo "    PROBLEM: cdn.yappix in $WEBPACK_FILE"
    grep -o 'cdn\.yappix[^"]*' "$WEBPACK_FILE" | head -3
  else
    echo "    OK: no cdn in webpack runtime"
  fi
fi

echo "    _buildManifest cdn check:"
BM=$(find .next/static -name '_buildManifest.js' 2>/dev/null | head -1)
if [ -n "$BM" ] && grep -q "cdn\.yappix" "$BM" 2>/dev/null; then
  echo "    PROBLEM: cdn in _buildManifest"
else
  echo "    OK: clean"
fi

# ─── Stop everything on port 3001 ───
echo "==> killing all on port 3001"
pm2 stop yappix-ru 2>/dev/null || true
pm2 delete yappix-ru 2>/dev/null || true
sleep 1
fuser -k 3001/tcp 2>/dev/null || true
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
sleep 2
echo "    port 3001: $(lsof -ti:3001 2>/dev/null || echo 'free')"

# ─── Nginx cache flush ───
rm -rf /var/cache/nginx 2>/dev/null || true
rm -rf /tmp/nginx_cache 2>/dev/null || true
nginx -s reload 2>/dev/null || systemctl reload nginx 2>/dev/null || true

# ─── Start fresh ───
pm2 start npm --name yappix-ru -- start
sleep 8

echo "==> pm2 error log:"
pm2 logs yappix-ru --err --lines 15 --nostream 2>/dev/null || true

# ─── Smoke test ───
echo "==> smoke test (first 800 chars of localhost:3001):"
SMOKE=$(curl -s --max-time 10 http://localhost:3001/ 2>&1 || true)
echo "$SMOKE" | head -c 800
echo ""
echo "---"
CDN_COUNT=$(echo "$SMOKE" | grep -o "cdn\.yappix\.ru" | wc -l)
echo "==> cdn.yappix.ru occurrences in response: $CDN_COUNT"
if [ "$CDN_COUNT" -gt 0 ]; then
  echo "==> STILL BROKEN — dumping env for diagnosis:"
  env | grep -i 'cdn\|asset\|next_public' || echo "(none)"
  echo "==> .env.production content (if any):"
  cat .env.production 2>/dev/null || echo "(no file)"
fi

echo "==> deploy ok | $(git rev-parse --short HEAD) $(git log -1 --oneline)"
pm2 describe yappix-ru 2>/dev/null | head -15 || true
