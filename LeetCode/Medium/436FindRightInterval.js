var findRightInterval = function (intervals) {
  let map = new Map();
  let ans = new Array(intervals.length).fill(-1);
  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    map.set(current[0], i);
  }

  for (let i = 0; i < intervals.length; i++) {
    let end = intervals[i][1];
    let min = Infinity;
    for (const [start, idx] of map) {
      if (end <= start && start - end < min) {
        ans[i] = idx;
        min = start - end;
      }
    }
  }

  return ans;
};
