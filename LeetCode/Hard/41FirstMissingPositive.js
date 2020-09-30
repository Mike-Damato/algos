var firstMissingPositive = function (nums) {
  let map = new Map();
  let max = 0;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    max = Math.max(max, num);
  }

  if (max <= 0) return 1;

  for (let i = 1; i <= max + 1; i++) {
    if (!map.has(i)) return i;
  }
};
