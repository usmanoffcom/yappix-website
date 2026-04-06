#!/usr/bin/env bash
# Запуск на сервере: cd /var/www/yappix.ru && ./scripts/deploy.sh
# Или с локальной машины: ssh user@host 'cd /var/www/yappix.ru && ./scripts/deploy.sh'
set -e
cd /var/www/yappix.ru

# CDN для assetPrefix (next.config): задаётся на build; переопределите в .env.production при необходимости
if [ -f .env.production ]; then
  set -a
  # shellcheck disable=SC1091
  source .env.production
  set +a
fi
export NEXT_PUBLIC_CDN_URL="${NEXT_PUBLIC_CDN_URL:-https://cdn.yappix.ru}"

git pull origin main
pnpm install --frozen-lockfile
pnpm run build
pm2 restart yappix-ru
echo "Deploy done."
