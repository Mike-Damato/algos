var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count;
};

//Optimized
const subarraySum = (nums, k) => {
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    count += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
