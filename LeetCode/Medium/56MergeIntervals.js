var merge = function (intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1][1] >= sorted[i][0]) {
      sorted[i - 1] = [
        Math.min(sorted[i - 1][0], sorted[i][0]),
        Math.max(sorted[i - 1][1], sorted[i][1]),
      ];
      sorted.splice(i, 1);
      i--;
    }
  }
  return sorted;
};
