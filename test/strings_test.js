'use strict';

const test = require('ava');

const stringsHelper = require('../helpers/strings');

test('String Helpers', t => {
	t.plan(1);

	t.is(stringsHelper.capitalize('a lower case string'), 'A Lower Case String');
	t.end();
});
