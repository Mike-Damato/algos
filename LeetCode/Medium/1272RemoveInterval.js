var removeInterval = function (intervals, toBeRemoved) {
  const [removeStart, removeEnd] = toBeRemoved;
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    if (end <= removeStart || start >= removeEnd) {
      ans.push([start, end]);
    } else if (start < removeStart && end > removeEnd) {
      ans.push([start, removeStart]);
      ans.push([removeEnd, end]);
    } else if (start < removeStart && end <= removeEnd) {
      ans.push([start, removeStart]);
    } else if (start >= removeStart && end > removeEnd) {
      ans.push([removeEnd, end]);
    }
  }
  return ans;
};
