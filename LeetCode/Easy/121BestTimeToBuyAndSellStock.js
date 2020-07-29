var maxProfit = function (prices) {
  let bestBuy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    bestBuy = Math.min(bestBuy, prices[i]);
    profit = Math.max(profit, prices[i] - bestBuy);
  }
  return profit;
};

//Alternate
var maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    let profit = prices[i] - min;
    max = Math.max(max, profit);
  }
  return max;
};
