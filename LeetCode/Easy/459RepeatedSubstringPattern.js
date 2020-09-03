var repeatedSubstringPattern = function (s) {
  return (s + s).substring(1, 2 * s.length - 1).includes(s);
};
