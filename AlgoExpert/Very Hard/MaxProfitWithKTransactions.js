//time: O(n * k)  space = O(n * k)
function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
  if (prices.length === 0) {
    return 0;
  }
  let profits = [];
  for (let t = 0; t <= k; t++) {
    let row = new Array(prices.length).fill(0);
    profits.push(row);
  }

  for (let t = 1; t <= k; t++) {
    let max = -Infinity;
    for (let d = 1; d < prices.length; d++) {
      max = Math.max(max, profits[t - 1][d - 1] - prices[d - 1]);
      profits[t][d] = Math.max(profits[t][d - 1], max + prices[d]);
    }
  }
  return profits[k][prices.length - 1];
}

//Alternate
function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
  if (prices.length === 0) {
    return 0;
  }
  let dp = new Array(prices.length).fill(0);
  for (let t = 1; t <= k; t++) {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i] - dp[i]);
      max = Math.max(max, prices[i] - min);
      dp[i] = max;
    }
  }
  return dp.pop();
}
