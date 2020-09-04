var searchRange = function (nums, target) {
  let range = [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target) {
    range[0] = left;
  } else {
    return [-1, -1];
  }

  //reset right back to original
  right = nums.length - 1;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2) + 1;
    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  range[1] = left;
  return range;
};
