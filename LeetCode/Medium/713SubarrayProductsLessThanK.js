var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let prod = 1;
  let ans = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    prod *= nums[right];
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    ans += right - left + 1;
    right++;
  }
  return ans;
};
