var longestSubstring = function (s, k) {
  let map = new Map();
  let longest = 0;
  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (const [key, val] of map) {
    if (val < k) {
      //split string with useless characters, effectively removing it from our options
      let arr = s.split(key);
      let ans = 0;
      for (const word of arr) {
        ans = Math.max(ans, longestSubstring(word, k));
      }
      console.log(ans);
      return ans;
    }
  }
  //If k is 1 we can just return entire string length
  return s.length;
};
