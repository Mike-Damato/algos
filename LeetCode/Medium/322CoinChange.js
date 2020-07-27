var coinChange = function (coins, amount) {
  let numWays = new Array(amount + 1).fill(Infinity);
  numWays[0] = 0;
  for (let coin of coins) {
    for (let i = 0; i < numWays.length; i++) {
      if (coin <= i) {
        numWays[i] = Math.min(numWays[i], numWays[i - coin] + 1);
      }
    }
  }
  return numWays[amount] !== Infinity ? numWays[amount] : -1;
};
