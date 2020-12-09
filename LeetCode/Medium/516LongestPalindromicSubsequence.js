var longestPalindromeSubseq = function (s) {
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp.push([]);
    for (let j = s.length; j >= 0; j--) {
      if (s[i] === s[j]) {
        dp[i][j] = ((dp[i - 1] && dp[i - 1][j + 1]) || 0) + 1;
      } else {
        dp[i][j] = Math.max(
          dp[i][j + 1] || 0,
          (dp[i - 1] && dp[i - 1][j]) || 0
        );
      }
    }
  }
  return dp[s.length - 1][0];
};
