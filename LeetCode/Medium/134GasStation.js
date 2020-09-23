var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let total = 0;
  let current = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    current += gas[i] - cost[i];
    if (current < 0) {
      start = i + 1;
      current = 0;
    }
  }
  return total >= 0 ? start : -1;
};
