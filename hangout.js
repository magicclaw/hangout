exec = require('child_process').exec
format = require('util').format
path = require('path')

user = 'bender.hubot';
pass = 'iamarobot';
phantomScriptDir = path.join(__dirname, 'lib');
//phantomjs lib/phantom-create-hangout.js bender.hubot iamarobot
cmdHangout = format('/usr/local/bin/phantomjs %s/%s %s %s', phantomScriptDir, 'phantom-create-hangout.js', user, pass);

exec (cmdHangout, function(hangoutErr, hangoutOut, hangoutIn) {
	if (hangoutErr) {
		console.log('Sorry, hangout creation failed. Error: ' + hangoutErr);
		return;
	}
	exec('echo "' + hangoutOut + '" | pbcopy', function(copyErr, copyOut, copyIn) {
		if (copyErr) {
			console.log('Sorry, unable to copy hangout to clipboard. Error: ' + copyErr);
			return;
		}
		console.log('Hangout url placed in clipboard: ' + hangoutOut);			
	});
	console.log('Launching hangout in browser...');
	exec('open ' + hangoutOut);
});


