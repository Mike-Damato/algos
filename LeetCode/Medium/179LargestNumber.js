var largestNumber = function (nums) {
  nums = nums.sort(helper);
  return !nums[0] ? '0' : nums.join('');
};

const helper = (a, b) => {
  return `${b}${a}` - `${a}${b}`;
};
