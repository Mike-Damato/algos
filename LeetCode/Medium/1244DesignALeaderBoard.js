class Leaderboard {
  constructor() {
    this.board = new Map();
  }
  addScore(playerId, score) {
    if (!this.board.has(playerId)) {
      this.board.set(playerId, score);
    } else {
      let oldScore = this.board.get(playerId);
      let newScore = oldScore + score;
      this.board.set(playerId, newScore);
    }
  }
  top(K) {
    let sorted = [...this.board.entries()].sort((a, b) => b[1] - a[1]);
    let topK = sorted.slice(0, K);
    return topK.reduce((a, b) => a + b[1], 0);
  }
  reset(playerId) {
    this.board.delete(playerId);
  }
}
