const fs = require('fs');

process.title = 'Fetch14HWeather';
fs.openSync('logs/pid/' + process.pid, 'w');

process.on('SIGTERM', () => {
  console.log('Process terminated');
  process.exit(0);
});
