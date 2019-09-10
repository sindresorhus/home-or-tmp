import path from 'path';
import test from 'ava';
import homeOrTmp from '.';

test('main', t => {
	t.true(homeOrTmp.length > 0);
	t.true(path.isAbsolute(homeOrTmp));
});
