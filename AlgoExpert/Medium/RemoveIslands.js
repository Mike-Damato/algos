function removeIslands(matrix) {
  markBorderIslands(matrix);
  sinkIslands(matrix);
  unmarkBorderIslands(matrix);
  return matrix;
}

const markBorderIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isOnBorder(matrix, i, j)) {
        dfs(matrix, i, j);
      }
    }
  }
  return matrix;
};

const unmarkBorderIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 2) {
        matrix[i][j] = 1;
      }
    }
  }
  return matrix;
};

const sinkIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

const isOnBorder = (matrix, i, j) => {
  return (
    i === 0 || j === 0 || i === matrix.length - 1 || j === matrix[i].length - 1
  );
};

const dfs = (matrix, i, j) => {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] !== 1
  ) {
    return;
  }

  matrix[i][j] = 2;
  dfs(matrix, i - 1, j);
  dfs(matrix, i + 1, j);
  dfs(matrix, i, j - 1);
  dfs(matrix, i, j + 1);
};

//Another similar approach
function removeIslands(matrix) {
  markBorderIslands(matrix);
  sinkIslands(matrix);
  unmarkBorderIslands(matrix);
  return matrix;
}

const markBorderIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isOnBorder(matrix, i, j)) {
        dfs(matrix, i, j);
      }
    }
  }
  return matrix;
};

const unmarkBorderIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 2) {
        matrix[i][j] = 1;
      }
    }
  }
  return matrix;
};

const sinkIslands = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        sinkInnerIslands(matrix, i, j);
      }
    }
  }
  return matrix;
};

const isOnBorder = (matrix, i, j) => {
  return (
    i === 0 || j === 0 || i === matrix.length - 1 || j === matrix[i].length - 1
  );
};

//DFS on inner islands
const sinkInnerIslands = (matrix, i, j) => {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] !== 1
  ) {
    return;
  }
  matrix[i][j] = 0;
  sinkInnerIslands(matrix, i - 1, j);
  sinkInnerIslands(matrix, i + 1, j);
  sinkInnerIslands(matrix, i, j - 1);
  sinkInnerIslands(matrix, i, j + 1);
};

//DFS on outer islands
const dfs = (matrix, i, j) => {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] !== 1
  ) {
    return;
  }

  matrix[i][j] = 2;
  dfs(matrix, i - 1, j);
  dfs(matrix, i + 1, j);
  dfs(matrix, i, j - 1);
  dfs(matrix, i, j + 1);
};
