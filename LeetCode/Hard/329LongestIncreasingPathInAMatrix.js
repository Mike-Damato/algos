var longestIncreasingPath = function (matrix) {
  if (!matrix || !matrix.length) return 0;

  const n = matrix.length;
  const m = matrix[0].length;
  const memo = new Array(n).fill([]).map((row) => {
    return new Array(m).fill(0);
  });
  let longest = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let path = dfs(matrix, memo, n, m, i, j);
      longest = Math.max(longest, path);
    }
  }
  return longest;
};

const dfs = (matrix, memo, n, m, i, j) => {
  //we have visited
  if (memo[i][j] > 0) return memo[i][j];

  let max = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (const dir of dirs) {
    let dx = i + dir[0];
    let dy = j + dir[1];
    if (isInBounds(matrix, i, j, dx, dy)) {
      let longest = dfs(matrix, memo, n, m, dx, dy);
      max = Math.max(longest, max);
    }
  }
  memo[i][j] = max + 1;
  return memo[i][j];
};

const isInBounds = (matrix, i, j, dx, dy) => {
  if (
    dx < 0 ||
    dx >= matrix.length ||
    dy < 0 ||
    dy >= matrix[0].length ||
    matrix[dx][dy] <= matrix[i][j]
  ) {
    return false;
  } else {
    return true;
  }
};
