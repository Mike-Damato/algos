var numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles;
  while (numBottles >= numExchange) {
    let base = Math.floor(numBottles / numExchange);
    ans += base;
    let empties = numBottles % numExchange;
    numBottles = base + empties;
  }
  return ans;
};
