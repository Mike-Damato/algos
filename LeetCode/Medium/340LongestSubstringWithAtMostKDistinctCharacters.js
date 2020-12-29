var lengthOfLongestSubstringKDistinct = function (s, k) {
  let maxLength = -Infinity;
  let left = 0;
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    let char = s[right];

    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      maxLength = Math.max(maxLength, right - left);
      let leftChar = s[left];

      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) - 1);
        if (map.get(leftChar) === 0) {
          map.delete(leftChar);
        }
      }
      left++;
    }
    right++;
  }
  maxLength = Math.max(maxLength, right - left);
  return maxLength;
};
