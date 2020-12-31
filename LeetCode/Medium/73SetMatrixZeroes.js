var setZeroes = function (matrix) {
  const foundCols = new Array(matrix[0].length).fill(false);
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          foundCols[j] = true;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
  }

  for (let j = 0; j < foundCols.length; j++) {
    if (foundCols[j]) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};
