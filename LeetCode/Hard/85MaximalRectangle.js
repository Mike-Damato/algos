var maximalRectangle = function (matrix) {
  let dpMatrix = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));
  let maxArea = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let minHeight = Infinity;
      let currentArea = 0;
      if (matrix[i][j] === '1') {
        if (i === 0) {
          dpMatrix[i][j] = 1;
        } else {
          dpMatrix[i][j] = 1 + dpMatrix[i - 1][j];
        }
        let k = j;

        while (k >= 0 && dpMatrix[i][k] >= 1) {
          let width = j - k + 1;
          let currentHeight = dpMatrix[i][k];
          minHeight = Math.min(minHeight, currentHeight);
          currentArea = Math.max(currentArea, minHeight * width);
          k--;
        }

        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }
  return maxArea;
};
