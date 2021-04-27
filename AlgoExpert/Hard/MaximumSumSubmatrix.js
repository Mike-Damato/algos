function maximumSumSubmatrix(matrix, size) {
  const sums = createMatrix(matrix);
  let max = -Infinity;
  for (let row = size - 1; row < matrix.length; row++) {
    for (let col = size - 1; col < matrix[row].length; col++) {
      let total = sums[row][col];
      const touchesTop = row - size < 0;
      if (!touchesTop) total -= sums[row - size][col];

      const touchesLeft = col - size < 0;
      if (!touchesLeft) total -= sums[row][col - size];

      const touchesTopOrLeft = touchesTop || touchesLeft;
      if (!touchesTopOrLeft) total += sums[row - size][col - size];

      max = Math.max(total, max);
    }
  }
  return max;
}

const createMatrix = (matrix) => {
  const sums = new Array(matrix.length).fill([]).map((row) => {
    return new Array(matrix[0].length).fill(0);
  });

  sums[0][0] = matrix[0][0];
  for (let i = 1; i < matrix[0].length; i++) {
    sums[0][i] = sums[0][i - 1] + matrix[0][i];
  }

  for (let i = 1; i < matrix.length; i++) {
    sums[i][0] = sums[i - 1][0] + matrix[i][0];
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      sums[row][col] =
        sums[row - 1][col] +
        sums[row][col - 1] -
        sums[row - 1][col - 1] +
        matrix[row][col];
    }
  }
  return sums;
};
