//Binary Search
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    while (nums[left] === nums[right]) {
      right--;
    }
    //Avoid overflow!
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

//Linear 1 line solution

const findMin = (nums) => {
  return Math.min(...nums);
};
