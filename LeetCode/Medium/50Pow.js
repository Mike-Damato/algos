var myPow = function (x, n) {
  return Math.pow(x, n);
};

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  let newExp = Math.abs(n);

  let ans;
  if (newExp % 2 === 0) {
    ans = myPow(x * x, newExp / 2);
  } else {
    ans = myPow(x * x, (newExp - 1) / 2) * x;
  }

  if (n < 0) {
    return 1 / ans;
  } else {
    return ans;
  }
};
