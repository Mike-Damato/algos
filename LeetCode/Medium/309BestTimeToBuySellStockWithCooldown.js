var maxProfit = function (prices) {
  let buy = new Array(prices.length);
  let sell = new Array(prices.length);

  buy[0] = 0 - prices[0];
  sell[0] = 0;

  for (let i = 1; i < prices.length; i++) {
    let prevBuy = buy[i - 1];
    let buyToday = (sell[i - 2] || 0) - prices[i];
    buy[i] = Math.max(prevBuy, buyToday);

    let prevSell = sell[i - 1];
    let sellToday = prices[i] + buy[i - 1];
    sell[i] = Math.max(prevSell, sellToday);
  }

  return sell[sell.length - 1];
};
