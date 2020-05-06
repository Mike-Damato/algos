var isAlienSorted = function (words, order) {
  let dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order.charAt(i)] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let j = 0;
    while (j < Math.min(word1.length, word2.length)) {
      if (word1.charAt(j) !== word2.charAt(j)) {
        if (dict[word1[j]] > dict[word2[j]]) {
          return false;
        } else break;
      }
      j++;
    }
    if (j === word2.length && j < word1.length) return false;
  }
  return true;
};
