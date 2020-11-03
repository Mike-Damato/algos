var maxPower = function (s) {
  let count = 0;
  let max = 0;
  let prev;
  for (const char of s) {
    if (char === prev) {
      count++;
    } else {
      prev = char;
      count = 1;
    }
    max = Math.max(count, max);
  }
  return max;
};
