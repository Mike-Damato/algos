var maxProduct = function (nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let acc = 1;
    for (let j = i; j < nums.length; j++) {
      acc *= nums[j];
      maxSum = Math.max(maxSum, acc);
    }
  }
  return maxSum;
};
