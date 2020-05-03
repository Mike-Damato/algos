var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0;
  let rightPointer = 0;
  let hash = {};
  let max = 0;

  while (rightPointer < s.length) {
    if (!hash.hasOwnProperty(s[rightPointer])) {
      hash[s[rightPointer]] = true;
      rightPointer++;
      max = Math.max(max, Object.keys(hash).length);
    } else {
      delete hash[s[leftPointer]];
      leftPointer++;
    }
  }
  return max;
};
