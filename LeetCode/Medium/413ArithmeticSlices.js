var numberOfArithmeticSlices = function (A) {
  let ans = 0;
  let count = 1;

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      ans += count;
      count++;
    } else {
      count = 1;
    }
  }
  return ans;
};
