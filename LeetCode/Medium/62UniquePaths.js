var uniquePaths = function (m, n) {
  let dpGrid = [];
  for (let i = 0; i < m; i++) {
    dpGrid.push(new Array(n).fill(0));
  }
  for (let i = 0; i < dpGrid.length; i++) {
    dpGrid[i][0] = 1;
  }
  for (let j = 0; j < dpGrid[0].length; j++) {
    dpGrid[0][j] = 1;
  }
  for (let i = 1; i < dpGrid.length; i++) {
    for (let j = 1; j < dpGrid[i].length; j++) {
      dpGrid[i][j] = dpGrid[i - 1][j] + dpGrid[i][j - 1];
    }
  }
  // console.log(dpGrid)
  return dpGrid[m - 1][n - 1];
};
