var change = function (amount, coins) {
  let n = coins.length;
  let ans = new Array(amount + 1).fill(0);
  ans[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      ans[i] += ans[i - coin];
    }
  }
  return ans[ans.length - 1];
};
