#!/usr/bin/env bash
# Запуск на VDS от root (после scp или вставки в ssh-сессию).
# Чинит типичные падения: EADDRINUSE на порту, www-data без pnpm в PATH.
set -euo pipefail

patch_spa_unit() {
  local unit=/etc/systemd/system/priboy-spa-ru.service
  local dir="${PRIBOY_SPA_DIR:-/var/www/priboy-spa.ru-nextjs}"
  local port="${PRIBOY_SPA_PORT:-3002}"
  [ -f "$unit" ] || { echo "Нет $unit — пропуск spa"; return 0; }
  echo "==> Патч $unit (dir=$dir port=$port)"
  cat >"$unit" <<EOF
[Unit]
Description=Next.js App for priboy-spa.ru
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=${dir}
Environment=NODE_ENV=production
Environment=PORT=${port}
Environment=TZ=Europe/Moscow
Environment=NODE_OPTIONS=--max-old-space-size=2048
ExecStartPre=/bin/bash -c 'command -v fuser >/dev/null && fuser -k ${port}/tcp 2>/dev/null || true; sleep 1; exit 0'
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=10
StartLimitIntervalSec=120
StartLimitBurst=5

[Install]
WantedBy=multi-user.target
EOF
}

patch_priboy1_unit() {
  local unit=/etc/systemd/system/priboy1-ru-nextjs.service
  local dir="${PRIBOY1_DIR:-/var/www/priboy1.ru-nextjs}"
  local port="${PRIBOY1_PORT:-3003}"
  [ -f "$unit" ] || { echo "Нет $unit — пропуск priboy1"; return 0; }
  echo "==> Патч $unit (dir=$dir port=$port)"
  cat >"$unit" <<EOF
[Unit]
Description=Next.js App for priboy1.ru (Priboy-hotel3)
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=${dir}
EnvironmentFile=${dir}/.env
Environment=PORT=${port}
Environment=NODE_OPTIONS=--max-old-space-size=2048
ExecStartPre=/bin/bash -c 'command -v fuser >/dev/null && fuser -k ${port}/tcp 2>/dev/null || true; sleep 1; exit 0'
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=10
StartLimitIntervalSec=120
StartLimitBurst=5

[Install]
WantedBy=multi-user.target
EOF
}

patch_spa_unit
patch_priboy1_unit

systemctl daemon-reload
systemctl restart priboy-spa-ru.service 2>/dev/null || true
systemctl restart priboy1-ru-nextjs.service 2>/dev/null || true

echo "==> Статус:"
systemctl is-active priboy-spa-ru.service 2>/dev/null || true
systemctl is-active priboy1-ru-nextjs.service 2>/dev/null || true
echo "Готово. Проверьте: systemctl status priboy-spa-ru priboy1-ru-nextjs"
