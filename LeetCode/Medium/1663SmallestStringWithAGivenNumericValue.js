var getSmallestString = function (n, k) {
  k -= n;

  let str = '';

  while (k > 0) {
    let letter = 97 + Math.min(25, k);
    str = String.fromCharCode(letter) + str;
    k -= Math.min(25, k);
    n -= 1;
  }
  return 'a'.repeat(n) + str;
};
