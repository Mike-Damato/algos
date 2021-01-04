var reverse = function (x) {
  const negative = x >= 0 ? false : true;
  const max = Math.pow(2, 31);
  const min = Math.pow(-2, 31);
  x = Math.abs(x);

  x = Number(x.toString().split('').reverse().join(''));

  if (negative) {
    x *= -1;
  }

  if (x >= min && x <= max) {
    return x;
  } else {
    return 0;
  }
};
