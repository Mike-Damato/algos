var minDistance = function (word1, word2) {
  const matrix = [];
  for (let i = 0; i < word1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < word2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    matrix.push(row);
  }
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          1 +
          Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return matrix[word1.length][word2.length];
};
