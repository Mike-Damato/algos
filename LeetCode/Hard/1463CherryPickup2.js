var cherryPickup = function (grid) {
  const cache = {};

  const dfs = (row, col1, col2) => {
    if (
      row === grid.length ||
      col1 < 0 ||
      col1 >= grid[0].length ||
      col2 < 0 ||
      col2 >= grid[0].length
    ) {
      return 0;
    }

    const key = getKey(row, col1, col2);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const value = grid[row][col1] + grid[row][col2] * (col1 !== col2);
    let max = 0;

    for (let newCol1 = -1; newCol1 <= 1; newCol1++) {
      for (let newCol2 = -1; newCol2 <= 1; newCol2++) {
        max = Math.max(max, dfs(row + 1, col1 + newCol1, col2 + newCol2));
      }
    }
    cache[key] = value + max;
    return cache[key];
  };
  return dfs(0, 0, grid[0].length - 1);
};

const getKey = (row, col1, col2) => {
  return `${row}, ${col1}, ${col2}`;
};
