var balancedStringSplit = function (s) {
  let ans = 0;
  let count = 0;
  for (const char of s) {
    if (count === 0) {
      ans++;
    }
    if (char === 'L') {
      count++;
    } else {
      count--;
    }
  }
  return ans;
};
