var removePalindromeSub = function (s) {
  if (!s.length) {
    return 0;
  } else if (isPalindrome(s)) {
    return 1;
  } else {
    return 2;
  }
};

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
