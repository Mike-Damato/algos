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

//Alternate Solution
var merge = function (intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  const ans = [prev];
  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    if (prev[1] >= current[0]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      ans.push(current);
      prev = current;
    }
  }
  return ans;
};
