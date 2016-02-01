'use strict';
var path = require('path');
var spawn = require('child_process').spawn;
var phantomjs = require('phantomjs-prebuilt').path;

module.exports = function (file, args) {
	if (!phantomjs) {
		var err = new Error('The automatic install of PhantomJS seems to have failed.\nTry installing it manually: http://phantomjs.org/download.html');
		err.noStack = true;
		throw err;
	}

	args = [path.resolve(file)].concat(args).sort(function (a, b) {
		// move flags to the beginning to please phantoms sucky argument parsing
		return /^--/.test(b) ? 1 : 0;
	});

	return spawn(phantomjs, args);
};
