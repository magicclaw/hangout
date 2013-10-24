var page = require('webpage').create(),
	USERNAME = phantom.args[0],
	PASSWORD = phantom.args[1],
	HANGOUT_REGEX = /\/hangouts\/_\/[a-z0-9]+$/;

page.settings.javascriptEnabled = true;
page.settings.loadImages = true;

page.open('https://plus.google.com/hangouts/_/', function(status) {

	if(isLoginPage()) login();

	var tries = 0;
	(function pollForHangout() {
		isHangoutPage() || tries++ > 15 ? finish() : setTimeout(pollForHangout, 1000);
	})();

});

function finish() {
	var url = getHangoutUrl();
	console.log(HANGOUT_REGEX.test(url) ? url : 'no hangout for you, sry');
	page.release();
	phantom.exit();
}

function isLoginPage() {
	return page.evaluate(function() {
		return !!document.getElementById('Email');
	});
}

function login() {
	page.evaluate(function(user, pass) {
		document.getElementById('Email').value = user;
		document.getElementById('Passwd').value = pass;
		document.getElementById('signIn').click();
	}, USERNAME, PASSWORD);
}

function getHangoutUrl() {
	return page.evaluate(function() {
		return document.location.href;
	});
}

function isHangoutPage() {
	return page.evaluate(function(regex) {
		return regex.test(document.location.href);
	}, HANGOUT_REGEX);
}