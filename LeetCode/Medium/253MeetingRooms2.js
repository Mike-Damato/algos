var minMeetingRooms = function (intervals) {
  if (intervals.length < 2) {
    return intervals.length;
  }
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let roomTime = [sorted[0][1]];

  for (let i = 1; i < sorted.length; i++) {
    let [start, end] = sorted[i]; // [5,10]
    let early = Math.min(...roomTime); //30

    if (start < early) {
      roomTime.push(end);
    } else {
      roomTime[roomTime.indexOf(early)] = end;
    }
  }
  return roomTime.length;
};
