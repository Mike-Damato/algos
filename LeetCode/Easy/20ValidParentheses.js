var isValid = function (s) {
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) {
      stack.push(s[i]);
    } else if (s[i] === '}' || s[i] === ')' || s[i] === ']') {
      if (stack.length === 0) {
        return false;
      }
      let lastItem = stack.pop();
      if (s[i] !== brackets[lastItem]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
