var myAtoi = function (s) {
  let sign = '';
  let i = 0;
  let ans = '';

  while (s[i] === ' ') {
    i++;
  }

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i];
    i++;
  }

  while (i < s.length) {
    const char = s[i];
    const regexp = /[0-9]/g;
    if (regexp.test(char)) {
      ans += char;
      i++;
    } else {
      break;
    }
  }
  ans = sign === '-' ? ans * -1 : ans * 1;

  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);

  if (ans >= max) return max;

  if (ans <= min) return min;

  return ans;
};
