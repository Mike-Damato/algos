var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word || word.toUpperCase() === word) {
    return true;
  }

  let caps = new Set();
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const letter of letters) {
    caps.add(letter);
  }

  for (let i = 1; i < word.length; i++) {
    if (caps.has(word[i])) {
      return false;
    }
  }
  return true;
};
