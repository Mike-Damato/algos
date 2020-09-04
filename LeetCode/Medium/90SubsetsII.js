var subsetsWithDup = function (nums) {
  let ans = [];
  ans.push([]);
  nums.sort((a, b) => a - b);
  backtrack(nums, ans, [], 0);
  return ans;
};

const backtrack = (nums, ans, combo, start) => {
  for (let i = start; i < nums.length; i++) {
    //we hit the end push in a snapshot also handle duplicates with OR condition...
    if (i === start || nums[i] !== nums[i - 1]) {
      combo.push(nums[i]);
      ans.push([...combo]);
      //call backtrack on other numbers, to check with current combo and move our i up 1
      backtrack(nums, ans, combo, i + 1);
      combo.pop();
    }
  }
};
