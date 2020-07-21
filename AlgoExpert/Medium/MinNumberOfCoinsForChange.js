function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  let numCoins = new Array(n + 1).fill(Infinity);
  numCoins[0] = 0;
  for (const denom of denoms) {
    for (let i = 0; i < numCoins.length; i++) {
      if (denom <= i) {
        numCoins[i] = Math.min(numCoins[i], numCoins[i - denom] + 1);
      }
    }
  }
  return numCoins[n] !== Infinity ? numCoins[n] : -1;
}
