var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      if (digits[i] + carry + 1 > 9) {
        digits[i] = 0;
        carry = 1;
      } else {
        digits[i] += 1;
        carry = 0;
        break;
      }
    } else {
      if (digits[i] + carry > 9) {
        digits[i] = 0;
        carry = 1;
      } else {
        digits[i] += 1;
        carry = 0;
        break;
      }
    }
  }
  if (carry === 1) {
    digits.unshift(carry);
  }
  return digits;
};

//cleaner
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i]) return digits;
  }
  digits.unshift(1);
  return digits;
};

//Alt solution again
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1].concat(digits);
};
