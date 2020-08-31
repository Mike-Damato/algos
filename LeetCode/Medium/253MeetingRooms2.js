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

//Alternate
const minMeetingRooms = (intervals) => {
  let start = [...intervals].sort((a, b) => a[0] - b[0]);
  let end = intervals.sort((a, b) => a[1] - b[1]);
  let rooms = 0;
  let endPtr = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (start[i][0] < end[endPtr][1]) {
      rooms++;
    } else {
      endPtr++;
    }
  }
  return rooms;
};
