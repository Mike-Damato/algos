var wordPattern = function (pattern, str) {
  let map = new Map();
  let words = str.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }
  if (new Set(words).size !== new Set(pattern).size) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];
    if (map.has(char) && map.get(char) !== words[i]) {
      return false;
    }
    map.set(char, word);
  }
  return true;
};
