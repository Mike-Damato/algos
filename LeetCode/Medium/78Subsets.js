var subsets = function (nums) {
  let ans = [];
  const helper = (nums, i, arr) => {
    if (i === nums.length) {
      ans.push(arr);
      return;
    }
    helper(nums, i + 1, arr);
    helper(nums, i + 1, arr.concat(nums[i]));
  };
  helper(nums, 0, []);
  return ans;
};
