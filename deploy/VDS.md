# Деплой на VDS (yappix.ru)

Продакшен крутится на **собственном сервере**, не через GitHub Actions: после `git push` в `main` заходишь на VDS и запускаешь скрипт.

## SSH

- **Хост:** `80.249.150.154` (или актуальный IP в панели хостинга).
- **Пользователь:** `root` (или твой deploy-user с правами на каталог и `pm2`).
- **Ключ:** приватный ключ в **`~/.ssh/`** — подойдёт любое из имён:
  - **`~/.ssh/myunion-vds`** (дефис) или **`~/.ssh/myunion_vds`** (подчёркивание).
  - Скрипт **`scripts/upload-env-to-vds.sh`** сам выберет существующий файл. Вручную в командах ниже подставь свой путь (`-i ~/.ssh/myunion_vds` и т.д.).
  - По желанию можно сделать ссылку с одного имени на другое:
    ```bash
    ln -sf ~/.ssh/myunion_vds ~/.ssh/myunion-vds
    chmod 600 ~/.ssh/myunion-vds
    ```

Проверка входа (подставь имя ключа: **`myunion-vds`** или **`myunion_vds`**):

```bash
ssh -i ~/.ssh/myunion_vds -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new root@80.249.150.154 'hostname'
```

## Каталог приложения на сервере

Обычно:

```text
/var/www/yappix.ru
```

Если репозиторий клонирован под другим именем — подставь свой путь во всех командах ниже.

## Залить секреты с Mac на прод (`.env.production`)

Файл **`.env.production`** на сервере **не в git**. Чтобы один раз или после смены ключей залить локальный `.env` (где уже есть `OPENROUTER_API_KEY`, `SMTP_*`, Telegram и т.д.):

```bash
cd /path/to/yappix-website-seo
bash scripts/upload-env-to-vds.sh
```

Скрипт спросит подтверждение, скопирует файл в **`/var/www/yappix.ru/.env.production`** и выставит права **`600`**. Без вопросов: **`FORCE=1 bash scripts/upload-env-to-vds.sh`**. Другой источник: **`PROD_ENV_SOURCE=./.env.local`**.

После заливки обязательно **`bash scripts/deploy.sh`** на VDS (или удалённо одной строкой из раздела ниже), чтобы подхватить **`NEXT_PUBLIC_*`** при сборке.

## Полный деплой (после push в `main`)

На **VDS** (или одной строкой с Mac):

```bash
cd /var/www/yappix.ru
git fetch origin main
git reset --hard origin/main
bash scripts/deploy.sh
```

С **Mac** без ручного входа на сервер (подставь свой путь к репо на VDS, если не `/var/www/yappix.ru`):

```bash
ssh -i ~/.ssh/myunion_vds -o IdentitiesOnly=yes root@80.249.150.154 \
  'cd /var/www/yappix.ru && git fetch origin main && git reset --hard origin/main && bash scripts/deploy.sh'
```

Скрипт `scripts/deploy.sh`:

- при отсутствии **`/var/www/yappix.ru/.env.production`** копирует его из **`.env.production.example`** в репозитории (первый запуск), затем подгружает переменные из **`.env.production`**;
- задаёт по умолчанию **`USE_CMS_DB=1`** и **`DATABASE_URL=file:./prisma/production.db`** (если в `.env.production` не переопределено), создаёт каталог **`prisma/`**;
- останавливает только **`yappix-ru`** в PM2, чистит порт **3001** от зомби `next`;
- делает `pnpm install`, **`prisma migrate deploy`**, **`prisma db seed`** (пропуск: **`SKIP_DB_SEED=1`**), **`pnpm build`**;
- стартует **`pm2 start npm --name yappix-ru -- start`** (процесс наследует то же окружение, что и сборка — БД по тому же пути доступна **`next start`**);
- смоук-тест на `http://127.0.0.1:3001/` и проверка CDN-ссылок в HTML (см. ниже).

## Prisma / CMS (SQLite на VDS)

1. После первого деплоя с новым кодом на сервере появится **`.env.production`** (копия примера) с **`USE_CMS_DB=1`** и **`DATABASE_URL="file:./prisma/production.db"`** — путь относительный к **`/var/www/yappix.ru`**, файл **`prisma/production.db`** не в git (см. `.gitignore`).
2. Если нужен другой путь к БД (например отдельный диск), в **`.env.production`** задайте абсолютный URL, например: **`DATABASE_URL="file:/var/lib/yappix/cms.db"`** и убедитесь, что пользователь, от которого крутится Node (часто **root** под PM2), имеет права чтения/записи.
3. Сид при каждом деплое **перезаполняет** таблицу контента из исходников в репозитории (`deleteMany` в `prisma/seed.ts`). Чтобы один раз пропустить сид: **`SKIP_DB_SEED=1 bash scripts/deploy.sh`**.

## Скорость картинок (`/_next/image`)

Ресайз и WebP делаются на Node — при трафике это заметно. В репозитории по умолчанию **только WebP** (без AVIF) и урезанный набор ширин в `next.config.mjs`.

Чтобы повторные запросы не били в Node, на nginx можно включить **диск-кэш** для `/_next/image`: см. **`deploy/nginx-next-image-cache.conf`** (нужен `proxy_cache_path` в `http { }` и каталог кэша).

## CDN

По умолчанию деплой ожидает, что в HTML есть ссылки на **`cdn.yappix.ru`** (только `/_next/static` — чанки и CSS). Файлы из **`public/`** (`/images/`, `placeholder.svg` и т.д.) **всегда** с **origin** (yappix.ru), иначе при префиксе на CDN без зеркалирования `public` на edge будут 404.

Если отдаёшь **всю** статику только с origin (без отдельного хоста для чанков):

```bash
CDN_OFF=1 bash scripts/deploy.sh
```

Переменную можно экспортировать в сессии перед деплоем.

## После смены nginx

Сниппеты и комментарии лежат в каталоге **`deploy/`** (например `nginx-snippet.conf`). После правок на сервере:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## Прибой (priboy) на том же VDS

Если падает **systemd**-сервис spa / priboy1 (порт занят, `pnpm` у `www-data` и т.д.):

```bash
# диагностика (на VDS от root)
bash /var/www/yappix.ru/deploy/vds-priboy-diagnose.sh

# патч unit’ов под npm + очистка порта перед стартом (пути по умолчанию в скрипте)
bash /var/www/yappix.ru/deploy/fix-priboy-systemd-on-vds.sh
```

Перед патчем проверь **`pm2 list`**: не должно быть второго процесса на тот же порт, что и systemd.

## Удалённый репозиторий

Убедись, что на VDS в `git remote` тот же GitHub, куда ты пушишь `main` (в монорепе иногда разные имена репо — `yappix-website` vs `yappix-website-seo`).

## Быстрый чеклист

1. `git push origin main`
2. SSH с ключом **`~/.ssh/myunion_vds`** или **`~/.ssh/myunion-vds`**
3. `cd /var/www/yappix.ru && bash scripts/deploy.sh` (миграции + сид + сборка выполняются в скрипте; см. раздел **Prisma / CMS**)
4. В браузере: главная + инкогнито; при CDN — проверка статики с `cdn.yappix.ru`
5. Если на сервере уже был старый **`.env.production`** без CMS — добавьте в него строки **`USE_CMS_DB=1`** и **`DATABASE_URL="file:./prisma/production.db"`** (или свой путь), иначе при ручном **`pm2 restart`** без оболочки деплоя переменные могут не совпасть с тем, что читает Next из файла.

### Счётчики (GA4)

Яндекс.Метрика и Top.Mail.Ru подключены в разметке. **Google Analytics** рендерится только если на сервере перед сборкой задан `NEXT_PUBLIC_GA_ID` (см. `.env.production.example`): положи `/var/www/yappix.ru/.env.production` с `NEXT_PUBLIC_GA_ID=G-…` и пересобери (`deploy.sh` уже делает `pnpm build`).

### Чат, почта, Telegram

Секреты читаются из **`/var/www/yappix.ru/.env.production`** при работе **`next start`** (и при **`pnpm build`** для `NEXT_PUBLIC_*`). Имена переменных — в **`.env.production.example`**: `OPENROUTER_API_KEY`, `SMTP_EMAIL` или **`SMTP_USER`** (логин ящика), `SMTP_PASSWORD` (опционально `SMTP_HOST`, `SMTP_TO`), `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` или `TELEGRAM_LEADS_CHAT_ID`, `TELEGRAM_WEBHOOK_SECRET` (должен совпадать с `secret_token` в setWebhook). После правки `.env.production` выполни **`bash scripts/deploy.sh`** или как минимум **`pm2 restart yappix-ru`**; для **`NEXT_PUBLIC_APP_URL`** нужна пересборка.
