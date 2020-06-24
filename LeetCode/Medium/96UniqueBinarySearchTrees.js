var numTrees = function (n) {
  if (n <= 2) {
    return n;
  }
  let ans = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += ans[j] * ans[i - j - 1];
    }
    ans[i] = sum;
  }
  return ans[n];
};
