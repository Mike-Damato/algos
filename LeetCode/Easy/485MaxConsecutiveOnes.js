var findMaxConsecutiveOnes = function (nums) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count1++;
    } else {
      count2 = Math.max(count1, count2);
      count1 = 0;
    }
  }
  return Math.max(count1, count2);
};
