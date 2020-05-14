var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = 1,
    first = 0,
    second = 1;

  while (first < nums.length && second < nums.length) {
    if (nums[second] === nums[first]) {
      second++;
    } else {
      result += 1;
      first++;
      nums[first] = nums[second];
      second++;
    }
  }

  return result;
};
