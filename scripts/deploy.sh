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

pnpm install --frozen-lockfile
pnpm run build

pm2 restart yappix-ru

echo "==> deploy ok | running: $(git rev-parse --short HEAD) $(git log -1 --oneline)"
pm2 describe yappix-ru 2>/dev/null | head -20 || true
