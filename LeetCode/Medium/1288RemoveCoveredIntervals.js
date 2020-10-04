var removeCoveredIntervals = function (intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let count = 0;
  let prev = 0;
  for (let i = 1; i < sorted.length; i++) {
    let [start, end] = sorted[i];
    let [prevStart, prevEnd] = sorted[prev];
    if (prevStart <= start && prevEnd >= end) {
      count++;
    } else {
      prev = i;
    }
  }
  return intervals.length - count;
};
