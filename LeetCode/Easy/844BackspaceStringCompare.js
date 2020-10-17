var backspaceCompare = function (S, T) {
  let s1 = [];
  let s2 = [];
  for (const char of S) {
    if (char !== '#') {
      s1.push(char);
    } else {
      s1.pop();
    }
  }

  for (const char of T) {
    if (char !== '#') {
      s2.push(char);
    } else {
      s2.pop();
    }
  }
  return s1.join('') === s2.join('');
};
