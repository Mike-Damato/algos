var eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) {
    return 0;
  }
  let count = 0;
  let sorted = intervals.sort((a, b) => a[1] - b[1]);
  let prev = sorted[0];
  let current;

  for (let i = 1; i < sorted.length; i++) {
    current = sorted[i];
    if (prev[1] > current[0]) {
      count++;
    } else {
      prev = current;
    }
  }
  return count;
};
