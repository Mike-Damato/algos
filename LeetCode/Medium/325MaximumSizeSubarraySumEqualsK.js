var maxSubArrayLen = function (nums, k) {
  let map = new Map();
  let maxLength = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) maxLength = i + 1;

    if (!map.has(sum)) {
      map.set(sum, i);
    }
    if (map.has(sum - k)) {
      maxLength = Math.max(i - map.get(sum - k), maxLength);
    }
  }
  return maxLength;
};
