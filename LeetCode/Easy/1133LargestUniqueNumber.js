var largestUniqueNumber = function (A) {
  let map = new Map();
  let max = -1;
  for (const num of A) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, val] of map) {
    if (val < 2) {
      max = Math.max(key, max);
    }
  }
  return max;
};
