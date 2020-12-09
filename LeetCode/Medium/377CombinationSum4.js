var combinationSum4 = function (nums, target) {
  const map = new Map();
  const go = (nums, target) => {
    if (target < 0) return 0;

    if (target == 0) {
      return 1;
    }

    if (map.has(target)) {
      return map.get(target);
    }

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
      ans += go(nums, target - nums[i]);
    }
    map.set(target, ans);
    return ans;
  };

  return go(nums, target);
};
