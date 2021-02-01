var minDistance = function (height, width, tree, squirrel, nuts) {
  let ans = 0;
  let max = -Infinity;
  for (const nut of nuts) {
    ans += getDistance(nut, tree) * 2;
    max = Math.max(max, getDistance(nut, tree) - getDistance(nut, squirrel));
  }
  return ans - max;
};

const getDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};
