var maxSubArray = function (nums) {
  let first = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    first = Math.max(first + nums[i], nums[i]);
    max = Math.max(max, first);
  }
  return max;
};
