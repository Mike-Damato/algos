var missingElement = function (nums, k) {
  if (k > missing(nums, nums.length - 1)) {
    return nums[nums.length - 1] + k - missing(nums, nums.length - 1);
  }
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (missing(nums, mid) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left - 1] + k - missing(nums, left - 1);
};

const missing = (nums, idx) => {
  return nums[idx] - nums[0] - idx;
};

const missingElement = (nums, k) => {
  let left = 0;
  let right = nums.length - 1;
  let mid, missingNum;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    missingNum = nums[mid] - nums[0] - mid;
    if (missingNum < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let totalMissed = nums[left] - nums[0] - left;
  return totalMissed >= k
    ? nums[left] - 1 - (totalMissed - k)
    : nums[left] + (k - totalMissed);
};
