var findMissingRanges = function (nums, lower, upper) {
  let ans = [];
  nums.unshift(lower - 1);
  nums.push(upper + 1);

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === 2) {
      ans.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      ans.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }
  return ans;
};
