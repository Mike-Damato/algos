function balancedBrackets(string) {
  // Write your code here.
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] in brackets) {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if (stack.length === 0) {
        return false;
      }
      let lastElem = stack.pop();
      if (string[i] !== brackets[lastElem]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
