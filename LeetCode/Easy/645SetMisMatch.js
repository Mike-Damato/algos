var findErrorNums = function (nums) {
  const n = nums.length;
  const set = new Set();
  const total = (n * (n + 1)) / 2;

  let sum = 0;
  let dup;

  for (const num of nums) {
    if (set.has(num)) {
      dup = num;
    }
    set.add(num);
    sum += num;
  }
  const diff = total - sum;

  return [dup, dup + diff];
};
