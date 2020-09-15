var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0 && s.charAt(n) === ' ') {
    n--;
  }

  let longest = 0;
  while (n >= 0 && s.charAt(n) !== ' ') {
    n--;
    longest++;
  }
  return longest;
};
