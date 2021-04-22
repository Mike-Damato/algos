var leastBricks = function (wall) {
  const map = new Map();
  let bestPath = 0;

  for (let i = 0; i < wall.length; i++) {
    let row = wall[i];
    let rowSum = row[0];
    for (let j = 1; j < row.length; j++) {
      map.set(rowSum, (map.get(rowSum) || 0) + 1);
      rowSum += row[j];
    }
  }

  for (const [key, val] of map) {
    if (val > bestPath) {
      bestPath = val;
    }
  }
  return wall.length - bestPath;
};
