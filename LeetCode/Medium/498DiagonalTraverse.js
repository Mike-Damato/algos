var findDiagonalOrder = function (matrix) {
  const reverse = () => {
    x = -x;
    y = -y;
  };

  if (matrix.length < 1) return [];

  const ans = [];
  let row = 0;
  let col = 0;
  let x = 1;
  let y = -1;

  while (ans.length < matrix.length * matrix[0].length) {
    ans.push(matrix[col][row]);
    row += x;
    col += y;

    if (col < 0 && row < matrix[0].length) {
      reverse();
      col = 0;
    }

    if (row < 0 && col < matrix.length) {
      reverse();
      row = 0;
    }

    if (row >= matrix[0].length) {
      reverse();
      col += 2 * y;
      row -= 1;
    }

    if (col >= matrix.length) {
      reverse();
      row += 2 * x;
      col -= 1;
    }
  }
  return ans;
};
