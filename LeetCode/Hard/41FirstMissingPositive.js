var firstMissingPositive = function (nums) {
  let map = new Map();
  let max = 0;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    max = Math.max(max, num);
  }

  if (max <= 0) return 1;

  for (let i = 1; i <= max + 1; i++) {
    if (!map.has(i)) return i;
  }
};

//Optimized to use constant space;
const firstMissingPositive = (nums) => {
  nums = nums.filter((num) => num > 0);

  for (let i = 0; i <= nums.length; i++) {
    let abs = Math.abs(nums[i]);
    if (nums[abs - 1] > 0) {
      nums[abs - 1] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
