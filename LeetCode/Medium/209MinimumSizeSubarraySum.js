var minSubArrayLen = function (s, nums) {
  if (nums.length === 0 || nums === undefined) {
    return 0;
  }
  let minLength = Infinity;
  let sum = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      minLength = Math.min(minLength, i - start + 1);
      sum -= nums[start];
      start += 1;
    }
  }
  return minLength !== Infinity ? minLength : 0;
};
