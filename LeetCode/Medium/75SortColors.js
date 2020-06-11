var sortColors = function (nums) {
  let start = 0;
  let current = 0;
  let end = nums.length - 1;
  while (current <= end) {
    if (nums[current] === 0) {
      [nums[current], nums[start]] = [nums[start], nums[current]];
      start++;
      current++;
    } else if (nums[current] === 1) {
      current++;
    } else {
      [nums[current], nums[end]] = [nums[end], nums[current]];
      end--;
    }
  }
  return nums;
};

//Alternate
var sortColors = function (nums) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else if (nums[i] === 1) {
      ones++;
    } else {
      twos++;
    }
  }

  //array.fill(value, start, end)

  nums = nums.fill(0, 0, zeros);
  nums = nums.fill(1, zeros, zeros + ones);
  nums = nums.fill(2, zeros + ones, zeros + ones + twos);
  return nums;
};
