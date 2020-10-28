var summaryRanges = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    while (i + 1 < nums.length && nums[i + 1] == nums[i] + 1) {
      i++;
    }
    if (start !== nums[i]) {
      ans.push(`${start}->${nums[i]}`);
    } else {
      ans.push(`${start}`);
    }
  }
  return ans;
};
