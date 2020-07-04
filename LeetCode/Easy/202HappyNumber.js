var isHappy = function (n, count = 0) {
  let ans = false;
  if (count < 10) {
    //split number and then make a new array squared, then add them with reduce
    let sum = n
      .toString()
      .split('')
      .map((n) => n * n)
      .reduce((a, b) => a + b);

    if (sum === 1) {
      ans = true;
    } else {
      count++;
      return isHappy(sum, count);
    }
  }
  return ans;
};
