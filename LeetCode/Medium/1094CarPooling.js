var carPooling = function (trips, capacity) {
  let buckets = new Array(1001).fill(0);
  for (const [ppl, start, end] of trips) {
    buckets[start] += ppl;
    buckets[end] -= ppl;
  }
  let max = 0;
  for (const person of buckets) {
    max += person;
    if (max > capacity) return false;
  }
  return true;
};

//Alt
var carPooling = function (trips, capacity) {
  let timeStamp = [];
  for (const [ppl, start, end] of trips) {
    timeStamp.push([start, ppl], [end, -ppl]);
  }

  timeStamp.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let max = 0;
  for (const [time, ppl] of timeStamp) {
    max += ppl;
    if (max > capacity) {
      return false;
    }
  }
  return true;
};
