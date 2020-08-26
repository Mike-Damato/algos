var triangleNumber = function (nums) {
  if (nums.length < 3 || !nums) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let left;
  let right;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    left = 0;
    right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        ans = ans + (right - left);
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};
