const fs = require('fs');
const PID = __dirname + '/../logs/pid/';
fs.readdirSync(PID).forEach(f => {
	console.log('Terminating process ' + f);
	try {
		process.kill(parseInt(f), 'SIGTERM');
		console.log('Killed process ' + f);
		fs.unlinkSync(PID + f);
	} catch (e) {
		console.error('Failed to terminate process ' + f + ':', e);
	}
});
