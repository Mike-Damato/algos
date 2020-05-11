var rotate = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      //es6 swap
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let k = 0; k < n; ++k) {
    matrix[k].reverse();
  }
  return matrix;
};
