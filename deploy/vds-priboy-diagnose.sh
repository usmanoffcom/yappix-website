#!/usr/bin/env bash
# На VDS от root: bash deploy/vds-priboy-diagnose.sh
# (из репозитория yappix-website-seo или скопируйте файл на сервер)
set -euo pipefail

echo "========== PM2 (строки с priboy) =========="
pm2 list 2>/dev/null | grep -i priboy || echo "(нет процессов priboy в pm2 list)"

for name in priboy-aquacomplex priboy-spa priboy; do
  if pm2 describe "$name" >/dev/null 2>&1; then
    echo "--- pm2 describe $name ---"
    pm2 describe "$name" --no-color 2>/dev/null | head -40 || true
    echo "--- pm2 $name error log (last 25) ---"
    pm2 logs "$name" --err --lines 25 --nostream 2>/dev/null || true
  fi
done

echo ""
echo "========== systemd: priboy-spa-ru, priboy1-ru-nextjs =========="
for u in priboy-spa-ru.service priboy1-ru-nextjs.service; do
  if systemctl list-unit-files "$u" 2>/dev/null | grep -q "$u"; then
    echo "--- systemctl status $u ---"
    systemctl status "$u" --no-pager -l 2>/dev/null | head -28 || true
    echo "--- journalctl -u $u (last 35) ---"
    journalctl -u "$u" -n 35 --no-pager 2>/dev/null || true
  else
    echo "(нет unit $u)"
  fi
  echo ""
done

echo "========== Порты 3002 (priboy-spa.ru), 3003 (priboy1.ru) =========="
ss -tlnp 2>/dev/null | grep -E ':3002|:3003' || echo "(ничего не слушает)"

echo ""
echo "========== OOM (dmesg, последние строки) =========="
dmesg -T 2>/dev/null | grep -i -E 'oom|killed process' | tail -8 || true

echo ""
echo "========== nginx error logs (файлы *priboy*) =========="
shopt -s nullglob
for f in /var/log/nginx/*priboy* /var/log/nginx/priboy*.log; do
  [ -e "$f" ] || continue
  echo "--- tail $f ---"
  tail -12 "$f" 2>/dev/null || true
done
shopt -u nullglob

echo ""
echo "Подсказка: если и PM2 priboy-*, и systemd слушают один порт — остановите лишнее (pm2 delete … или systemctl stop …)."
