var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const w1 = [...new Set(word1)].sort().join('');
  const w2 = [...new Set(word2)].sort().join('');

  if (w1 !== w2) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i].charCodeAt() - 'a'.charCodeAt();
    const char2 = word2[i].charCodeAt() - 'a'.charCodeAt();
    freq1[char1]++;
    freq2[char2]++;
  }

  const str1 = freq1
    .filter((x) => x)
    .sort()
    .join();
  const str2 = freq2
    .filter((x) => x)
    .sort()
    .join();
  return str1 === str2;
};
