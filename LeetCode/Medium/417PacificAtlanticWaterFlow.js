var pacificAtlantic = function (matrix) {
  const ans = [];
  if (!matrix || !matrix.length || !matrix[0].length) return ans;

  let yMax = matrix.length - 1;
  let xMax = matrix[0].length - 1;
  const pacific = [];
  const atlantic = [];

  for (let y = 0; y <= yMax; y++) {
    const rowPacific = [];
    const rowAtlantic = [];
    for (let x = 0; x <= xMax; x++) {
      rowPacific.push(false);
      rowAtlantic.push(false);
    }
    pacific.push(rowPacific);
    atlantic.push(rowAtlantic);
  }

  for (let y = 0; y <= yMax; y++) {
    dfs(0, y, pacific, -1, matrix);
    dfs(xMax, y, atlantic, -1, matrix);
  }

  for (let x = 0; x <= xMax; x++) {
    dfs(x, 0, pacific, -1, matrix);
    dfs(x, yMax, atlantic, -1, matrix);
  }

  for (let y = 0; y <= yMax; y++) {
    for (let x = 0; x <= xMax; x++) {
      if (pacific[y][x] && atlantic[y][x]) {
        ans.push([y, x]);
      }
    }
  }
  return ans;
};

const dfs = (x, y, visited, height, matrix) => {
  if (
    x < 0 ||
    x >= matrix[0].length ||
    y < 0 ||
    y >= matrix.length ||
    visited[y][x] ||
    matrix[y][x] < height
  ) {
    return;
  }

  visited[y][x] = true;
  dfs(x + 1, y, visited, matrix[y][x], matrix);
  dfs(x - 1, y, visited, matrix[y][x], matrix);
  dfs(x, y + 1, visited, matrix[y][x], matrix);
  dfs(x, y - 1, visited, matrix[y][x], matrix);
};
