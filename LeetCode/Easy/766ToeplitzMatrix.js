var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let dRight = matrix[i + 1][j + 1];
      if (matrix[i][j] !== dRight) {
        return false;
      }
    }
  }
  return true;
};
