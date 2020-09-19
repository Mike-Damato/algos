var sequentialDigits = function (low, high) {
  let nums = '123456789';
  let ans = [];
  let l = low.toString().length;

  for (let i = l; i <= nums.length; i++) {
    for (let j = 0; j + i <= nums.length; j++) {
      let num = Number(nums.slice(j, j + i));

      if (num >= low && num <= high) {
        ans.push(num);
      }
    }
  }
  return ans;
};
