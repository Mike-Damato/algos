var nextPermutation = function (nums) {
  let i = nums.length - 2;

  //loop from back to front and find the first num that is decreasing
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  let j = nums.length - 1;
  //next perm swap nums[i] & nums[j] when j > nums[i]
  if (i >= 0) {
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  //Swap everything back to go back to ascending order
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
  return nums;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
