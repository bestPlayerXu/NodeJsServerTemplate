const app = require('express')();
const fs = require('fs');

process.title = 'weather';
fs.writeFileSync('logs/pid.log', '' + process.pid);

var server = app.listen(1903, () => console.log(`Listening on port 1903 as ${process.title}.`));

var stop = () => {
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
}
process.on('SIGTERM', stop);

/*SERVER*/
