exports.euclid = function (m, n) {
  if (m < 1 || n < 1) {
    throw new TypeError('m and n must not be less than 1');
  }
  if (m === n) {
    throw new TypeError('m must not equal n');
  }
  var a = Math.abs(m * m - n * n);
  var b = 2 * m * n;
  var c = m * m + n * n;
  return [a, b, c].sort(function (a, b) {return a - b; });
};

exports.upToM = function (m) {
  var _ = require('lodash');
  return _.range(1, m + 1).reduce(function (triples, mTemp) {
    return _.range(1, mTemp).reduce(function (innerTriples, n) {
      return innerTriples.concat([exports.euclid(mTemp, n)]);
    }, triples);
  }, []);
};
