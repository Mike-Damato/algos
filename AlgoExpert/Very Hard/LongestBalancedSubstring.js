//O(n^3) time & O(n) space
function longestBalancedSubstring(string) {
  let max = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 2; j <= string.length; j += 2) {
      let subStr = string.slice(i, j);
      if (isBalanced(subStr)) {
        const currentLength = j - i;
        max = Math.max(max, currentLength);
      }
    }
  }
  return max;
}

const isBalanced = (string) => {
  const stack = [];
  for (const char of string) {
    if (char === '(') {
      stack.push(char);
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

//Optimized to O(N) Time and O(1) Space
function longestBalancedSubstring(string) {
  let max = 0;
  let opens = 0;
  let close = 0;

  for (const char of string) {
    if (char === '(') {
      opens++;
    } else {
      close++;
    }
    if (opens < close) {
      opens = 0;
      close = 0;
    } else {
      max = Math.max(max, close * 2);
    }
  }
  return max;
}
