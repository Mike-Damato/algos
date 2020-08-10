var titleToNumber = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[s.length - 1 - i];
    // subtracting from 64 (not 65, ascii of A) to get the value directly
    // instead of ascii index
    // ex: A = 1 (65 - 64 = 1)
    ans += Math.pow(26, i) * (char.charCodeAt(0) - 64);
  }
  return ans;
};
