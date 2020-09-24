var findTheDifference = function (s, t) {
  let map = new Map();
  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (const char of t) {
    if (!map.has(char) || !map.get(char)) {
      return char;
    } else {
      map.set(char, map.get(char) - 1);
    }
  }
};
