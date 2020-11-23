var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 3) return s.length;
  const map = new Map();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    let char = s[right];

    if (map.has(char) || map.size < 2) {
      max = Math.max(max, right - left + 1);
    } else if (map.size === 2) {
      let lastMinKey;
      let lastMin = Infinity;

      for (const [key, val] of map) {
        if (val < lastMin) {
          lastMin = val;
          lastMinKey = key;
        }
      }

      map.delete(lastMinKey);
      left = lastMin + 1;
    }

    map.set(char, right);
    right++;
  }
  max = Math.max(max, s.length - left);
  return max;
};
