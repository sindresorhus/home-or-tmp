'use strict';
var test = require('ava');
var homeOrTmp = require('./');

test(function (t) {
	t.assert(homeOrTmp.length > 0);
	t.end();
});
