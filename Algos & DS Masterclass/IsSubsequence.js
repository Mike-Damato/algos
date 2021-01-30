function isSubsequence(s1, s2) {
  // good luck. Add any arguments you deem necessary.
  if (s1.length === 0 || s2.length === 0) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  while (p2 < s2.length) {
    if (s1[p1] === s2[p2]) {
      p1++;
    } else {
      p2++;
    }
    if (p1 === s1.length) {
      return true;
    }
  }
  return false;
}
