#!/bin/bash

echo '🚀 YappiX Deploy Script'
echo '========================'
echo ''

cd /var/www/yappix.ru

echo '📥 Pulling latest changes...'
git pull origin main

echo ''
echo '📦 Installing dependencies...'
npm install --legacy-peer-deps

echo ''
echo '🔨 Building...'
npm run build

echo ''
echo '♻️ Restarting PM2...'
pm2 restart yappix-ru

echo ''
echo '✅ Deploy complete!'
echo ''
echo '🌐 Site: https://yappix.ru'
pm2 status yappix-ru
