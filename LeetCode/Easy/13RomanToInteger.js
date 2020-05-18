var romanToInt = function (s) {
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  //IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900}
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += hash[s[i]];
  }

  if (s.includes('IV')) {
    sum -= 2;
  }

  if (s.includes('IX')) {
    sum -= 2;
  }

  if (s.includes('XL')) {
    sum -= 20;
  }

  if (s.includes('XC')) {
    sum -= 20;
  }

  if (s.includes('CD')) {
    sum -= 200;
  }

  if (s.includes('CM')) {
    sum -= 200;
  }
  return sum;
};
