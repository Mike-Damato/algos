function longestPalindromicSubstring(string) {
  // Write your code here.
  let currentLongest = [0, 1];
  let odd, even, longest;
  for (let i = 1; i < string.length; i++) {
    odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    even = getLongestPalindromeFrom(string, i - 1, i);
    longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

const getLongestPalindromeFrom = (string, start, end) => {
  while (start >= 0 && end < string.length) {
    if (string[start] !== string[end]) {
      break;
    }
    start -= 1;
    end += 1;
  }
  return [start + 1, end];
};
