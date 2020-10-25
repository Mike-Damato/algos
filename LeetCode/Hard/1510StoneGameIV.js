var winnerSquareGame = function (n, memo = {}) {
  if (memo.hasOwnProperty(n)) return memo[n];
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (square > n) break;
    let p2 = n - square;
    if (!winnerSquareGame(p2, memo)) {
      return (memo[n] = true);
    }
  }
  return (memo[n] = false);
};
