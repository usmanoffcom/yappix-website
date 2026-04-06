#!/usr/bin/env bash
# Обёртка для совместимости: вся логика в scripts/deploy.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$ROOT/scripts/deploy.sh"
