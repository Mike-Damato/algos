var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

const binarySearch = (arr, target, left, right) => {
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] === arr[left]) {
      left++;
    } else if (arr[left] < arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= arr[right] && arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
