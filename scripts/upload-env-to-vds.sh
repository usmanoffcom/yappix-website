#!/usr/bin/env bash
# Залить локальный файл с переменными на VDS как /var/www/yappix.ru/.env.production
# Секреты в git не попадают — выполняйте с машины, где уже есть .env (см. deploy/VDS.md).
#
# Использование (из корня репозитория):
#   bash scripts/upload-env-to-vds.sh
#   PROD_ENV_SOURCE=./.env.local bash scripts/upload-env-to-vds.sh
#   FORCE=1 bash scripts/upload-env-to-vds.sh   # без интерактивного подтверждения
#
# Переменные (опционально):
#   VDS_SSH         по умолчанию root@80.249.150.154
#   VDS_SSH_KEY     иначе: ~/.ssh/myunion-vds или ~/.ssh/myunion_vds (что найдётся)
#   VDS_APP_DIR     по умолчанию /var/www/yappix.ru
#   PROD_ENV_SOURCE по умолчанию ./.env
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SOURCE="${PROD_ENV_SOURCE:-$ROOT/.env}"
REMOTE="${VDS_SSH:-root@80.249.150.154}"
if [ -n "${VDS_SSH_KEY:-}" ]; then
  KEY="$VDS_SSH_KEY"
elif [ -f "$HOME/.ssh/myunion-vds" ]; then
  KEY="$HOME/.ssh/myunion-vds"
elif [ -f "$HOME/.ssh/myunion_vds" ]; then
  KEY="$HOME/.ssh/myunion_vds"
else
  KEY="$HOME/.ssh/myunion-vds"
fi
REMOTE_DIR="${VDS_APP_DIR:-/var/www/yappix.ru}"
REMOTE_PATH="${REMOTE_DIR}/.env.production"
TMP_REMOTE="${REMOTE_PATH}.upload.$$"

if [ ! -f "$SOURCE" ]; then
  echo "error: нет файла $SOURCE (задайте PROD_ENV_SOURCE или создайте .env в корне репо)"
  exit 1
fi
if [ ! -f "$KEY" ]; then
  echo "error: нет SSH-ключа $KEY (см. deploy/VDS.md, раздел SSH)"
  exit 1
fi

echo "Источник:     $SOURCE"
echo "SSH-ключ:     $KEY"
echo "Назначение:   $REMOTE:$REMOTE_PATH"
echo ""
if [ "${FORCE:-}" != "1" ]; then
  read -r -p "Перезаписать .env.production на сервере? [y/N] " ans
  case "$ans" in
    y|Y) ;;
    *) echo "Отмена."; exit 1 ;;
  esac
fi

scp -i "$KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new \
  "$SOURCE" "${REMOTE}:${TMP_REMOTE}"

ssh -i "$KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new "$REMOTE" \
  "set -euo pipefail
   install -d -m 755 '${REMOTE_DIR}'
   mv '${TMP_REMOTE}' '${REMOTE_PATH}'
   chmod 600 '${REMOTE_PATH}'
   echo 'ok: ${REMOTE_PATH}'"

echo ""
echo "Дальше на сервере (или одной строкой с Mac, см. deploy/VDS.md):"
echo "  ssh -i $KEY -o IdentitiesOnly=yes $REMOTE 'cd ${REMOTE_DIR} && bash scripts/deploy.sh'"
