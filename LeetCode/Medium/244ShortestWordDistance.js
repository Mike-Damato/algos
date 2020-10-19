class WordDistance {
  constructor(words) {
    this.words = words;
  }
  shortest(word1, word2) {
    let dist = this.words.length;
    let start = -1;
    let end = -1;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] === word1) {
        start = i;
      } else if (this.words[i] === word2) {
        end = i;
      }

      if (start !== -1 && end !== -1) {
        dist = Math.min(dist, Math.abs(start - end));
      }
    }
    return dist;
  }
}
