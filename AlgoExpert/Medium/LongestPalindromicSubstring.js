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

//O(N^3) Approach
function longestPalindromicSubstring(string) {
  // Write your code here.
  let longestStr = '';
  let currentStr;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      currentStr = string.slice(i, j + 1);
      if (currentStr.length > longestStr.length && isPalindrome(currentStr)) {
        longestStr = currentStr;
      }
    }
  }
  return longestStr;
}

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
