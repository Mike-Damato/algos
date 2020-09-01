var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let map = new Map();
  let max = 0;
  let sub, tempSet;

  for (let i = 0; i <= s.length - minSize; i++) {
    sub = s.substring(i, i + minSize);
    tempSet = new Set(sub);

    if (tempSet.size <= maxLetters) {
      if (map.has(sub)) {
        let oldCount = map.get(sub);
        map.set(sub, oldCount + 1);
      } else {
        map.set(sub, 1);
      }
      if (map.get(sub) > max) {
        max = map.get(sub);
      }
    }
  }
  return max;
};
