var kLengthApart = function (nums, k) {
  let count = k;
  for (const num of nums) {
    if (num === 1) {
      if (count < k) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return true;
};
