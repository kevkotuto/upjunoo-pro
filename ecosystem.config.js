module.exports = {
  apps: [{
    name: 'upjunoo-pro',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3007',
    cwd: '/home/upjunoo/upjunoo-pro',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3007
    },
    error_file: '/home/upjunoo/upjunoo-pro/logs/pm2-error.log',
    out_file: '/home/upjunoo/upjunoo-pro/logs/pm2-out.log',
    log_file: '/home/upjunoo/upjunoo-pro/logs/pm2-combined.log',
    time: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    max_memory_restart: '500M'
  }]
};
