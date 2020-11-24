var calculate = function (s) {
  const stack = [];
  let num = '';
  let op = null;

  for (let i = 0; i <= s.length; i++) {
    let char = s[i];
    if (char === ' ') continue;
    if (!isNaN(char)) num += char;

    if (isNaN(char)) {
      num = Number(num);
      switch (op) {
        case '+':
        case null:
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }
      op = char;
      num = '';
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};
