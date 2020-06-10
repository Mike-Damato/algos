var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true;
  }
  if (t.length === 0) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  while (p2 <= t.length) {
    if (p1 === s.length && s[p1] === t[p2]) {
      return true;
    } else if (s[p1] === t[p2]) {
      p1 += 1;
      p2 += 1;
    } else {
      p2 += 1;
    }
  }
  return false;
};

//Alternate
var isSubsequence = function (s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }

  return p1 === s.length;
};
