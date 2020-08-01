function longestSubstringWithoutDuplication(string) {
  // Write your code here.
  let startIdx = 0;
  let hash = {};
  let longest = [0, 1];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (hash.hasOwnProperty(char)) {
      startIdx = Math.max(startIdx, hash[char] + 1);
    }

    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }
    hash[char] = i;
  }
  return string.slice(longest[0], longest[1]);
}
