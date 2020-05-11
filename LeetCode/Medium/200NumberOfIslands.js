const dfs = (grid, i, j) => {
  // return 1 if island, 0 if not
  // 1st thing is always check bounds
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) {
    return 0;
  }
  grid[i][j] = '0';
  // dfs in 4 directions
  dfs(grid, i + 1, j); // 2,1 => grid[i+1][j] = 1 ==> 0
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
};
var numIslands = function (grid) {
  if (grid === null || grid.length === 0) return null;

  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands += dfs(grid, i, j); // [1,1]
      }
    }
  }
  return islands;
};
