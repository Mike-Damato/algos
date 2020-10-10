var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let [prevStart, prevEnd] = intervals[i - 1];
    let [currentStart, currentEnd] = intervals[i];
    if (prevEnd > currentStart) return false;
  }
  return true;
};
