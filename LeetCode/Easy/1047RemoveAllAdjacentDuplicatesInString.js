var removeDuplicates = function (S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    let last = stack[stack.length - 1];
    if (last === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join('');
};
