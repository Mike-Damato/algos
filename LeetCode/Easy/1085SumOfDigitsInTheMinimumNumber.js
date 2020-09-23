var sumOfDigits = function (A) {
  let min = Math.min(...A);
  let sum = min
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0);
  return 1 ? sum % 2 === 0 : 0;
};
