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
  # shellcheck disable=SC1091
  source .env.production
  set +a
fi
# assetPrefix на cdn.* — на границе CDN обязателен CORS для https://yappix.ru (deploy/nginx-cdn-cors.conf).
# Safety: CDN assetPrefix выключен по умолчанию, чтобы исключить CORS/404 на чанках и шрифтах.
# Включать только явным флагом ENABLE_CDN_ASSETPREFIX=1 и рабочим NEXT_PUBLIC_CDN_URL.
if [ "${ENABLE_CDN_ASSETPREFIX:-0}" = "1" ] && [ -n "${NEXT_PUBLIC_CDN_URL:-}" ]; then
  echo "==> CDN assetPrefix: enabled (${NEXT_PUBLIC_CDN_URL})"
else
  # IMPORTANT: Next.js reads .env.production during build; empty string blocks accidental re-enable from file.
  export NEXT_PUBLIC_CDN_URL=""
  echo "==> CDN assetPrefix: disabled (serving static from yappix.ru)"
fi

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
