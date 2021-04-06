var minOperations = function (n) {
  let ans = 0;
  while (n > 0) {
    ans += n - 1;
    n -= 2;
  }
  return ans;
};
