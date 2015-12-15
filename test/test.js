// test here
var oddeven = require('../');
var test = require('tap').test;

test('oddeven', function(t) {
  t.equal(oddeven(1), 'odd', 'checks if 1 is odd');
  t.equal(oddeven(2), 'even', 'checks if 2 is even');
  t.end();
});