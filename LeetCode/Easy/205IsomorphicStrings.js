var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];
    if (!hash1.hasOwnProperty(sLetter)) {
      hash1[sLetter] = tLetter;
    }
    if (!hash2.hasOwnProperty(tLetter)) {
      hash2[tLetter] = sLetter;
    }

    if (hash1[sLetter] !== tLetter || hash2[tLetter] !== sLetter) {
      return false;
    }
  }

  return true;
};
