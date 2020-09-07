var canJump = function (nums) {
  let lastIdx = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIdx) {
      lastIdx = i;
    }
  }
  return lastIdx === 0;
};
