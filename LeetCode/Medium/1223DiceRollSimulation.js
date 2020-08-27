var dieSimulator = function (n, rollMax) {
  if (n <= 0) {
    return 0;
  }
  const mod = 10 ** 9 + 7;
  // create a cache for each dice roll value
  const cache = [{}, {}, {}, {}, {}, {}];

  const dfs = (totalRolls, consecutiveRolls, prevRoll) => {
    // create a unique string to check if all three cases are the same and if they are in the cache, return the value
    const rollStr = `${totalRolls}-${consecutiveRolls}`;
    if (cache[prevRoll][rollStr]) {
      return cache[prevRoll][rollStr];
    }
    // if the we have rolled the total number of rolls, return 1 (possibility)
    if (totalRolls === n) {
      return 1;
    }
    // calculate the number of total rolls outside of iteration so that it can be saved
    let nextTotal = totalRolls + 1;
    // create a variable to count all possibilities from next rolls
    let countPossiblities = 0;

    // attempt to roll each value of the dice
    for (let i = 0; i < 6; i++) {
      // if the value is not the same as the previous value, roll the dice with the consecutive rolls as 1
      if (i !== prevRoll) {
        countPossiblities += dfs(nextTotal, 1, i);
      } else if (consecutiveRolls < rollMax[i]) {
        // if we are still under the number of consecutive rolls allowed for the dice value, roll it and increase the consecutive rolls by 1
        countPossiblities += dfs(nextTotal, consecutiveRolls + 1, i);
      }
    }
    // store the value in the cache and return the value;
    return (cache[prevRoll][rollStr] = countPossiblities % mod);
  };
  return dfs(0, 0, 0);
};
