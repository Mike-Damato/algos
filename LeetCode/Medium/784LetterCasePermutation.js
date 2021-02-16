const letterCasePermutation = (str) => {
  const ans = [];
  backtrack(str, 0, '', ans);
  return ans;
};

const backtrack = (str, idx, currentStr, arr) => {
  if (idx === str.length) {
    arr.push(currentStr);
    return;
  }

  //Uppercase letters
  if (str.charAt(idx) >= 'A' && str.charAt(idx) <= 'Z') {
    backtrack(str, idx + 1, currentStr + str.charAt(idx).toLowerCase(), arr);
    //Handle lowecase letters
  } else if (str.charAt(idx) >= 'a' && str.charAt(idx) <= 'z') {
    backtrack(str, idx + 1, currentStr + str.charAt(idx).toUpperCase(), arr);
  }
  //Regardless backtrack for another permuation
  backtrack(str, idx + 1, currentStr + str.charAt(idx), arr);
};
