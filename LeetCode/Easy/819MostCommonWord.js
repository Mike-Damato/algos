var mostCommonWord = function (paragraph, banned) {
  let set = new Set(banned);
  paragraph = paragraph
    .toLowerCase()
    .replace(/[!?',;\.]/g, ' ')
    .trim()
    .split(/\s+/g);

  let hash = {};
  for (const word of paragraph) {
    if (set.has(word)) {
      continue;
    }
    if (!hash.hasOwnProperty(word)) {
      hash[word] = 1;
    } else {
      hash[word] += 1;
    }
  }
  return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
};
