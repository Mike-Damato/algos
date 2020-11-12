var canPermutePalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  let count = 0;
  for (const [_, val] of map) {
    count += val % 2;
  }
  return count <= 1;
};
