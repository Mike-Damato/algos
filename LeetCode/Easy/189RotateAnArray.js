var rotate = function (nums, k) {
  return nums.unshift(...nums.splice(nums.length - k));
};
