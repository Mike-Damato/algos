var maxAreaOfIsland = function (grid) {
  let area = 0;
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area = dfs(grid, i, j);
        maxArea = Math.max(area, maxArea);
      }
    }
  }
  return maxArea;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  let area = 1;
  grid[i][j] = 0;

  area += dfs(grid, i - 1, j);
  area += dfs(grid, i + 1, j);
  area += dfs(grid, i, j - 1);
  area += dfs(grid, i, j + 1);

  return area;
};
