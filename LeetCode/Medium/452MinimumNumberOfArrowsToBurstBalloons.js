var findMinArrowShots = function (points) {
  if (!points.length) return 0;
  points.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let end = points[0][1];

  for (const point of points) {
    let [currentStart, currentEnd] = point;
    if (currentStart <= end) {
      end = Math.min(end, currentEnd);
    } else {
      count++;
      end = currentEnd;
    }
  }
  return count;
};

//Sorting by end time
const findMinArrowShots = (points) => {
  if (!points.length) return 0;
  points.sort(([aStart, aEnd], [bStart, bEnd]) => aEnd - bEnd);

  let count = 1;
  let end = points[0][1];
  for (const point of points) {
    let [currentStart, currentEnd] = point;
    if (currentStart > end) {
      count++;
      end = currentEnd;
    }
  }
  return count;
};


const blah = (stuff) => {

}
