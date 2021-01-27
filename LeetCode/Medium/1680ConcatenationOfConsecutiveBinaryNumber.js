var concatenatedBinary = function (n) {
  let num = 0;
  const mod = Math.pow(10, 9) + 7;
  for (let i = 1; i <= n; i++) {
    num *= Math.pow(2, i.toString(2).length);
    num += i;
    num %= mod;
  }
  return num;
};
