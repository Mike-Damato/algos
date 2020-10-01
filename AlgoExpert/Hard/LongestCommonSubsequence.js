function longestCommonSubsequence(str1, str2) {
  const dpMatrix = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    dpMatrix.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        dpMatrix[i][j] = dpMatrix[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        dpMatrix[i][j] =
          dpMatrix[i - 1][j].length > dpMatrix[i][j - 1].length
            ? dpMatrix[i - 1][j]
            : dpMatrix[i][j - 1];
      }
    }
  }
  return dpMatrix[str2.length][str1.length];
}
