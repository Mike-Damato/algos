var singleNumber = function (nums) {
  let hash = {};
  for (const num of nums) {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  for (const num in hash) {
    if (hash[num] === 1) {
      return num;
    }
  }
};
