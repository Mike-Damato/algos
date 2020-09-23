var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      count++;
    }
  }
  return count;
};

//Alternate extracting logic to a helper function
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (inBounds(startTime, endTime, queryTime, i)) {
      count++;
    }
  }
  return count;
};

const inBounds = (startTime, endTime, queryTime, idx) => {
  return startTime[idx] <= queryTime && endTime[idx] >= queryTime;
};
