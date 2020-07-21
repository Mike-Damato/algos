function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  let numCoins = new Array(n + 1).fill(0);
  numCoins[0] = 1;
  for (const denom of denoms) {
    for (let i = 0; i < n + 1; i++) {
      if (denom <= i) {
        numCoins[i] += numCoins[i - denom];
      }
    }
  }
  return numCoins[n];
}
