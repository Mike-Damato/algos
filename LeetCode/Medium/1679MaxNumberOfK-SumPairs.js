var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === k) {
      count++;
      left++;
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};

const maxOperations = (nums, k) => {
  const map = new Map();
  let count = 0;
  for (const num of nums) {
    let diff = k - num;
    if (map.get(num) > 0) {
      count++;
      map.set(num, map.get(num) - 1);
    } else {
      map.set(diff, (map.get(diff) || 0) + 1);
    }
  }
  return count;
};
