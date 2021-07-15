process.kill(require('fs').readFileSync('logs/pid.log'), 'SIGTERM');
