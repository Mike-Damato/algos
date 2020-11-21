var atMostNGivenDigitSet = function (digits, n) {
  let str = n.toString();
  let ans = 0;
  let leadingZero = 0;
  let biggest = true;
  for (const char of str) {
    ans = (ans + leadingZero) * digits.length;
    if (biggest) {
      let count = 0;
      biggest = false;
      for (const digit of digits) {
        if (digit < char) {
          count++;
          continue;
        } else if (digit == char) {
          biggest = true;
        }
        break;
      }
      ans = ans + count;
    }
    leadingZero = 1;
  }
  if (biggest) {
    ans++;
  }
  return ans;
};
