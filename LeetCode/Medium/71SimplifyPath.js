var simplifyPath = function (path) {
  const stack = [];
  const arr = path.split('/');
  for (const char of arr) {
    if (char === '.' || char === '' || char === ' ') {
      continue;
    } else if (char === '..') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return '/' + stack.join('/');
};
