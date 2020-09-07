var isMatch = function (s, p) {
  let dp = new Array(s.length + 1)
    .fill(false)
    .map((row) => new Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i < dp[0].length; i++) {
    if (p[i - 1] === '*' && dp[0][i - 2] === true) {
      dp[0][i] = true;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i - 1][j] || dp[i][j];
        }
      }
    }
  }

  return dp[s.length][p.length];
};
