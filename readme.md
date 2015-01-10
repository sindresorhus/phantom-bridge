# phantom-bridge [![Build Status](https://travis-ci.org/sindresorhus/phantom-bridge.svg?branch=master)](https://travis-ci.org/sindresorhus/phantom-bridge)

> Simple [PhantomJS](http://phantomjs.org) bridge


## Install

```
$ npm install --save phantom-bridge
```


## Usage

```js
var path = require('path');
var phantomBridge = require('phantom-bridge');

var cp = phantomBridge(path.join(__dirname, 'phantom-script.js'), [
	'--ignore-ssl-errors=true',
	'--local-to-remote-url-access=true',
	'--ssl-protocol=any'
]);

cp.stdout.pipe(process.stdout);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
