function shortenPath(path) {
  let startsWithSlash = path[0] === '/';
  let split = path.split('/').filter(importantChar);
  let stack = [];
  if (startsWithSlash) {
    stack.push('');
  }
  for (const char of split) {
    if (char === '..') {
      if (stack.length === 0 || stack[stack.length - 1] === '..') {
        stack.push(char);
      } else if (stack[stack.length - 1] !== '') {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length === 1 && stack[0] === '') return '/';
  return stack.join('/');
}

const importantChar = (char) => {
  return char.length > 0 && char !== '.';
};
