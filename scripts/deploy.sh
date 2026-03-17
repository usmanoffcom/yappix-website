#!/usr/bin/env bash
# Запуск на сервере: cd /var/www/yappix.ru && ./scripts/deploy.sh
# Или с локальной машины: ssh user@host 'cd /var/www/yappix.ru && ./scripts/deploy.sh'
set -e
cd /var/www/yappix.ru
git pull origin main
pnpm install --frozen-lockfile
pnpm run build
pm2 restart yappix-ru
echo "Deploy done."
