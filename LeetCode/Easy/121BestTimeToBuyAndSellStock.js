var maxProfit = function (prices) {
  let bestBuy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    bestBuy = Math.min(bestBuy, prices[i]);
    profit = Math.max(profit, prices[i] - bestBuy);
  }
  return profit;
};
