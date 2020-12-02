var findMaxConsecutiveOnes = function (nums) {
  let idx;
  let maxSoFar = 0;
  let maxEndHere = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      maxEndHere++;
    } else {
      if (idx === undefined) {
        maxEndHere++;
        idx = i;
      } else {
        let diff = i - idx;
        idx = i;
        maxEndHere = diff;
      }
    }
    maxSoFar = Math.max(maxSoFar, maxEndHere);
  }
  return maxSoFar;
};
