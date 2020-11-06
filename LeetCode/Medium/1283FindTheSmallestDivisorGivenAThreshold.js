var smallestDivisor = function (nums, threshold) {
  let min = 1;
  let max = nums[nums.length - 1];
  return binarySearch(min, max, nums, threshold);
};

const binarySearch = (left, right, arr, target) => {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    let currentDiv = arr.reduce((a, b) => {
      return a + Math.ceil(b / mid);
    }, 0);

    if (currentDiv > target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
