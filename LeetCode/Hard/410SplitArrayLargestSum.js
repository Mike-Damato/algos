var splitArray = function (nums, m) {
  const isValid = (val) => {
    let leftGroup = m;
    let sum = 0;
    for (const num of nums) {
      if (sum + num > val) {
        sum = num;
        leftGroup--;
        if (leftGroup === 0) return false;
      } else {
        sum += num;
      }
    }
    return true;
  };

  let left = 0;
  let right = 0;

  for (const num of nums) {
    left = Math.max(num, left);
    right += num;
  }

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isValid(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
