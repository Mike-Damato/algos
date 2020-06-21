var xorOperation = function (n, start) {
  let nums = [];
  let last = nums.length - 1;
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
  }

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};
