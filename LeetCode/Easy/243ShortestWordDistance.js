var shortestDistance = function (words, word1, word2) {
  let dist = words.length;
  let start = -1;
  let end = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      start = i;
    } else if (words[i] === word2) {
      end = i;
    }

    if (start !== -1 && end !== -1) {
      dist = Math.min(dist, Math.abs(start - end));
    }
  }
  return dist;
};
