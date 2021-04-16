import path from 'path';
import test from 'ava';
import homeOrTemp from './index.js';

test('main', t => {
	t.true(homeOrTemp.length > 0);
	t.true(path.isAbsolute(homeOrTemp));
});
