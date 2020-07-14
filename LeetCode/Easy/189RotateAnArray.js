var rotate = function (nums, k) {
  return nums.unshift(...nums.splice(nums.length - k));
};

//Alternate
var rotate = function (nums, k) {
  let count = 0;
  let newNum;
  while (count < k) {
    newNum = nums.pop();
    nums.unshift(newNum);
    count++;
  }
  return nums;
};
