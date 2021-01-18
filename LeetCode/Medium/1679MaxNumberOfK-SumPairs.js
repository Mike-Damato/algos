var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === k) {
      count++;
      left++;
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};
