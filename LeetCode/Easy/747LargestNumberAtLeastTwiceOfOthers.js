var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let maxIdx = nums.indexOf(max);
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i] * 2 && max !== nums[i]) {
      return -1;
    }
  }
  return maxIdx;
};
