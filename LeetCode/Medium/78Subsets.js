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

//Alternate
var subsets = function (nums) {
  let ans = [[]];

  const backtrack = (first, arr) => {
    for (let i = first; i < nums.length; i++) {
      arr.push(nums[i]);
      ans.push([...arr]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  };
  backtrack(0, []);
  return ans;
};
