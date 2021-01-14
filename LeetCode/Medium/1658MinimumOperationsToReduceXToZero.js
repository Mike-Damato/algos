var minOperations = function (nums, x) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let target = sum - x;

  if (target < 0) return -1;
  if (target === 0) return nums.length;
  let min = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];
    right++;

    while (currentSum > target) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === target) {
      min = Math.min(min, left + nums.length - right);
    }
  }
  return min !== Infinity ? min : -1;
};
