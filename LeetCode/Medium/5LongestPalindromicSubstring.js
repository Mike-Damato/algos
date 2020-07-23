var longestPalindrome = function (s) {
  let currentLongest = [0, 1];
  let odd, even, longest;
  for (let i = 1; i < s.length; i++) {
    odd = getLongest(s, i - 1, i + 1);
    even = getLongest(s, i - 1, i);
    longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return s.slice(currentLongest[0], currentLongest[1]);
};

const getLongest = (str, start, end) => {
  while (start >= 0 && end < str.length) {
    if (str[start] !== str[end]) {
      break;
    }
    start--;
    end++;
  }
  return [start + 1, end];
};
