var minTimeToVisitAllPoints = function (points) {
  let count = 0;
  for (let i = 0; i < points.length - 1; i++) {
    count += steps(points[i], points[i + 1]);
  }
  return count;
};

const steps = (x, y) => {
  return Math.max(Math.abs(x[0] - y[0]), Math.abs(x[1] - y[1]));
};
