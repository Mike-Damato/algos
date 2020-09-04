var smallerNumbersThanCurrent = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let ans = [];
  for (const num of nums) {
    ans.push(sorted.indexOf(num));
  }
  return ans;
};
