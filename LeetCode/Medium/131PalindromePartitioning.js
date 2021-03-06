var partition = function (s) {
  const ans = [];

  const helper = (str, arr) => {
    if (!str.length && arr.length !== 0) {
      ans.push(arr);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      let subStr = str.substring(0, i + 1);
      if (isPalindrome(subStr)) {
        helper(str.substring(i + 1), [...arr, subStr]);
      }
    }
  };
  helper(s, []);
  return ans;
};

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//Alternate
const partition = (s) => {
  if (s.length === 1) return [[s]];
  const ans = [];

  const backtrack = (arr, start) => {
    if (start === s.length) {
      ans.push([...arr]);
      return;
    }
    let subStr = '';
    for (let i = start; i < s.length; i++) {
      subStr += s[i];
      if (isPalindrome(subStr)) {
        arr.push(subStr);
        backtrack(arr, i + 1);
        arr.pop();
      }
    }
  };

  backtrack([], 0);
  return ans;
};

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
