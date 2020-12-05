var frequencySort = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a;
    }
    return map.get(a) - map.get(b);
  });

  return nums;
};
