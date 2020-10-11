const removeDuplicateLetters = (str) => {
  let freq = new Array(26).fill(0);
  let checked = new Array(26);
  let split = str.split('');
  for (const char of split) {
    freq[char.charCodeAt() - 97]++;
  }

  let stack = [];
  let idx = 0;

  for (const char of split) {
    idx = char.charCodeAt() - 97;
    freq[idx]--;

    if (checked[idx]) continue;

    while (
      stack.length &&
      char < stack[stack.length - 1] &&
      freq[stack[stack.length - 1].charCodeAt() - 97] !== 0
    ) {
      checked[stack.pop().charCodeAt() - 97] = false;
    }
    stack.push(char);
    checked[idx] = true;
  }
  let ans = '';
  while (stack.length) {
    ans = stack.pop() + ans;
  }
  return ans;
};
