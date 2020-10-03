var findPairs = function (nums, k) {
  let pairs = 0;
  let map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, val] of map) {
    if (k === 0) {
      if (val > 1) pairs++;
    } else {
      if (map.has(key + k)) pairs++;
    }
  }

  return pairs;
};
