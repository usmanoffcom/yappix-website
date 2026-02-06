module.exports = {
  apps: [{
    name: 'yappix-ru',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/yappix.ru',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
