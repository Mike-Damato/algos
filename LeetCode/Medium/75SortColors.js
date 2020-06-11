var sortColors = function (nums) {
  let start = 0;
  let current = 0;
  let end = nums.length - 1;
  while (current <= end) {
    if (nums[current] === 0) {
      [nums[current], nums[start]] = [nums[start], nums[current]];
      start++;
      current++;
    } else if (nums[current] === 1) {
      current++;
    } else {
      [nums[current], nums[end]] = [nums[end], nums[current]];
      end--;
    }
  }
  return nums;
};
