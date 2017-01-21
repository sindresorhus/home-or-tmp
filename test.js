import path from 'path';
import test from 'ava';
import m from './';

test(t => {
	t.true(m.length > 0);
	t.true(path.isAbsolute(m));
});
