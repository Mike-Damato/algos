var findLHS = function (nums) {
  let max = 0;
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, _] of map) {
    if (map.has(key + 1)) {
      max = Math.max(max, map.get(key) + map.get(key + 1));
    }
  }
  return max;
};
