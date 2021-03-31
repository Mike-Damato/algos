var maxEnvelopes = function (envelopes) {
  if (!envelopes.length) return 0;
  envelopes.sort((a, b) => {
    return a[0] - b[0];
  });

  const dp = new Array(envelopes.length).fill(1);
  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
