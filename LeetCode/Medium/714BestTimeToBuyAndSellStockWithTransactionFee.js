var maxProfit = function (prices, fee) {
  const state1 = new Array(prices.length).fill(0);
  const state2 = new Array(prices.length).fill(0);

  state1[0] = 0;
  state2[0] -= prices[0];

  for (let i = 1; i < prices.length; i++) {
    state1[i] = Math.max(state1[i - 1], state2[i - 1] + prices[i] - fee);
    state2[i] = Math.max(state2[i - 1], state1[i - 1] - prices[i]);
  }
  return state1.pop();
};
