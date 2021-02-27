var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  let isNegative = (dividend > 0) ^ (divisor > 0);
  let ans = 0;
  const subtract = (divisor, quotient) => {
    if (dividend > divisor) {
      subtract(divisor + divisor, quotient + quotient);
    }

    if (dividend >= divisor) {
      dividend -= divisor;
      ans += quotient;
    }
  };

  dividend = Math.abs(dividend);
  subtract(Math.abs(divisor), 1);

  return isNegative ? ans * -1 : ans;
};

//Cheating way to solve this one...
const divide = (dividend, divisor) => {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  return Math.trunc(dividend / divisor);
};
