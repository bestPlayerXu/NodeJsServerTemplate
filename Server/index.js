const app = require('express')();
const fs = require('fs');

process.title = 'weather';
fs.openSync('logs/pid/' + process.pid, 'w');

var server = app.listen(1903, () => console.log(`Listening on port 1903 as ${process.title}.`));

var stop = () => {
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
}
process.on('SIGTERM', stop);

/*SERVER*/
