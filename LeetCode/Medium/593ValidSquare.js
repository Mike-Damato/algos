var validSquare = function (p1, p2, p3, p4) {
  const distances = [
    getDistance(p1, p2),
    getDistance(p1, p3),
    getDistance(p1, p4),
    getDistance(p2, p3),
    getDistance(p2, p4),
    getDistance(p3, p4),
  ];

  distances.sort((a, b) => a - b);

  return (
    distances[0] &&
    distances[0] === distances[1] &&
    distances[0] === distances[2] &&
    distances[0] === distances[3] &&
    distances[4] === distances[5]
  );
};

const getDistance = (x, y) => {
  return (x[0] - y[0]) * (x[0] - y[0]) + (x[1] - y[1]) * (x[1] - y[1]);
};
