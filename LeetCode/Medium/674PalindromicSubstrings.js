const countSubstrings = (str) => {
  let count = 0;

  const getPalindromeFrom = (left, right) => {
    while (left >= 0 && right < str.length) {
      if (str[left] !== str[right]) break;
      left--;
      right++;
      count += 1;
    }
  };

  for (let i = 0; i < str.length; i++) {
    getPalindromeFrom(i, i);
    getPalindromeFrom(i, i + 1);
  }
  return count;
};
