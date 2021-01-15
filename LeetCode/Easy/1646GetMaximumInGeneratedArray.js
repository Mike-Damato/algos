var getMaximumGenerated = function (n) {
  if (n <= 1) return n;
  const nums = new Array(n + 1).fill(0);
  nums[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[Math.floor(i / 2)];
    } else {
      nums[i] = nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1];
    }
  }
  return Math.max(...nums);
};
