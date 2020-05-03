var canConstruct = function (ransomNote, magazine) {
  const hash = {};
  for (let letter of magazine) {
    if (!hash[letter]) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  for (let letter of ransomNote) {
    if (!hash[letter]) {
      return false;
    }
    hash[letter]--;
  }
  return true;
};
