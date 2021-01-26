var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Set();

  const dfs = (arr, x, y, mid) => {
    const key = `${x}-${y}`;
    if (visited.has(key)) return false;

    if (x === m - 1 && y === n - 1) return true;

    visited.add(key);

    for (const dir of dirs) {
      let newRow = x + dir[0];
      let newCol = y + dir[1];
      if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue;

      let diff = Math.abs(arr[x][y] - arr[newRow][newCol]);

      if (diff > mid) continue;

      if (dfs(arr, newRow, newCol, mid)) return true;
    }
    return false;
  };

  let left = 0;
  let right = 1000000;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    visited.clear();
    if (dfs(heights, 0, 0, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
