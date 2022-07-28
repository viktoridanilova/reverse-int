module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  return str.split('').reverse().join('');
}
