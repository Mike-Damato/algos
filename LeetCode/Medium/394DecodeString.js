const decodeString = (str) => {
  let tempNum = '';
  let mult = [];
  let letters = [];
  let ans = '';

  for (const char of str) {
    if (!isNaN(char)) {
      tempNum = `${tempNum}${char}`;
    } else if (char === '[') {
      mult.push(tempNum);
      tempNum = '';
      letters.push(ans);
      ans = '';
    } else if (char === ']') {
      ans = letters.pop() + ans.repeat(mult.pop());
    } else {
      ans += char;
    }
  }
  return ans;
};
