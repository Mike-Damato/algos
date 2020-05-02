var spiralOrder = function (matrix) {
  let result = [];
  if (matrix === null || matrix.length === 0) return result;
  //define boundaries, define path
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  //matrix[i][j]
  //result.length === total points in matrix m * n
  let total = matrix.length * matrix[0].length;

  while (result.length < total) {
    //for top
    for (let i = left; i <= right && result.length < total; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    //for right
    for (let i = top; i <= bottom && result.length < total; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    //for bottom
    for (let i = right; i >= left && result.length < total; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    //for left
    for (let i = bottom; i >= top && result.length < total; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
};
