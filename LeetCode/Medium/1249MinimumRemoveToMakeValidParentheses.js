var minRemoveToMakeValid = function (s) {
  let newStr = '';
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open++;
    } else if (s[i] === ')') {
      //we havent seen any opening yet, do not append the closing parentheses
      if (open === 0) {
        continue;
      }
      open--;
    }
    newStr += s[i];
  }

  //if too many opens
  let ans = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] === '(' && open > 0) {
      open -= 1;
      continue;
    }
    ans += newStr[i];
  }
  //since we iterated backwards we constructed ans in reverse so now we just flip it back
  return ans.split('').reverse().join('');
};
