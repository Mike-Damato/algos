var longestCommonSubsequence = function (text1, text2) {
  let t1 = text1.length;
  let t2 = text2.length;
  const dp = [];

  for (let i = 0; i <= t1; i++) {
    dp[i] = new Array(t2 + 1).fill(0);
  }

  for (let i = 1; i <= t1; i++) {
    for (let j = 1; j <= t2; j++) {
      if (text1.charAt(i - 1) !== text2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  return dp[t1][t2];
};
