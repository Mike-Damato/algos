var employeeFreeTime = function (schedule) {
  const ans = [];
  const copy = [];
  for (const employee of schedule) {
    for (const interval of employee) {
      copy.push(interval);
    }
  }
  copy.sort((a, b) => a.start - b.start);
  // console.log(copy)
  let temp = copy[0];
  for (const interval of copy) {
    if (temp.end < interval.start) {
      ans.push(new Interval(temp.end, interval.start));
      temp = interval;
    } else {
      temp = temp.end < interval.end ? interval : temp;
    }
  }
  return ans;
};
