// compare i vs i + 1
// if i + 1 > i profit += i + 1 - i

var maxProfit = function (prices) {
  let profit = 0;
  if (prices.length === 0 || prices === null) {
    return profit;
  }
  for (let i = 0; i < prices.length - 1; i++) {
    let nextDay = i + 1;
    if (prices[nextDay] > prices[i]) {
      profit += prices[nextDay] - prices[i];
    }
  }
  return profit;
};
