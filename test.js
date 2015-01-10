'use strict';
var test = require('ava');
var phantomBridge = require('./');

test(function (t) {
	var cp = phantomBridge('fixture.js');

	cp.stdout.setEncoding('utf8');

	cp.stdout.once('data', function (data) {
		t.assert(data.trim() === 'fixture');
		t.end();
	});
});
