# Деплой на VDS (yappix.ru)

Продакшен крутится на **собственном сервере**, не через GitHub Actions: после `git push` в `main` заходишь на VDS и запускаешь скрипт.

## SSH

- **Хост:** `80.249.150.154` (или актуальный IP в панели хостинга).
- **Пользователь:** `root` (или твой deploy-user с правами на каталог и `pm2`).
- **Ключ:** приватный ключ **`myunion-vds`** — ожидаемый путь на машине, с которой заходишь:
  - **`~/.ssh/myunion-vds`** (имя с **дефисом** — так и задумано).
  - Если файл лежит как **`~/.ssh/myunion_vds`** (подчёркивание), один раз сделай ссылку, чтобы не путаться:
    ```bash
    ln -sf ~/.ssh/myunion_vds ~/.ssh/myunion-vds
    chmod 600 ~/.ssh/myunion-vds
    ```

Проверка входа:

```bash
ssh -i ~/.ssh/myunion-vds -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new root@80.249.150.154 'hostname'
```

## Каталог приложения на сервере

Обычно:

```text
/var/www/yappix.ru
```

Если репозиторий клонирован под другим именем — подставь свой путь во всех командах ниже.

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
ssh -i ~/.ssh/myunion-vds -o IdentitiesOnly=yes root@80.249.150.154 \
  'cd /var/www/yappix.ru && git fetch origin main && git reset --hard origin/main && bash scripts/deploy.sh'
```

Скрипт `scripts/deploy.sh`:

- останавливает только **`yappix-ru`** в PM2, чистит порт **3001** от зомби `next`;
- делает `pnpm install`, `pnpm build`;
- стартует **`pm2 start npm --name yappix-ru -- start`**;
- смоук-тест на `http://127.0.0.1:3001/` и проверка CDN-ссылок в HTML (см. ниже).

## CDN

По умолчанию деплой ожидает, что в HTML есть ссылки на **`cdn.yappix.ru`**. Если отдаёшь статику только с origin:

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
2. SSH с **`~/.ssh/myunion-vds`**
3. `cd /var/www/yappix.ru && bash scripts/deploy.sh`
4. В браузере: главная + инкогнито; при CDN — проверка статики с `cdn.yappix.ru`
