var missingNumber = function (nums) {
  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  let total = nums.length + 1;
  for (let i = 0; i < total; i++) {
    if (!set.has(i)) return i;
  }
  return -1;
};
