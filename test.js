import test from 'ava';
import fn from './';

test.cb(t => {
	const cp = fn('fixture.js');

	cp.stdout.setEncoding('utf8');

	cp.stdout.once('data', data => {
		cp.kill();
		t.is(data.trim(), 'fixture');
		t.end();
	});
});
