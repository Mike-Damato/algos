var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};
  for (const letter of s) {
    if (hash.hasOwnProperty(letter)) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }

  for (const letter of t) {
    //could also write just hash[letter]
    //has own property is true even if it is 0
    if (hash.hasOwnProperty(letter) && hash[letter] > 0) {
      hash[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
