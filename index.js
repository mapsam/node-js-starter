module.exports = oddeven;

/**
 * Check if a number is odd or even.
 *
 * @param {integer} an integer
 * @returns {string} whether it is 'odd' or 'even'
 */
function oddeven(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
}