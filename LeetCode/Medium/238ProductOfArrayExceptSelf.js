var productExceptSelf = function (nums) {
  let ans = [];
  if (nums.length < 2) {
    return ans;
  }
  for (let i = 0; i < nums.length; i++) {
    let currentProduct = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      currentProduct *= nums[j];
    }
    ans.push(currentProduct);
  }
  return ans;
};
