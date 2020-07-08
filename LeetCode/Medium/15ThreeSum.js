var threeSum = function (nums) {
  let triplets = [];
  if (nums.length < 3 || nums === null) {
    return triplets;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    //Need this for edge case
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    let currentSum;
    while (left < right) {
      currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (currentSum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  let result = Array.from(new Set(triplets.map(JSON.stringify)), JSON.parse);

  return result;
};
