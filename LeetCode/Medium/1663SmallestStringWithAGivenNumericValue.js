var getSmallestString = function (n, k) {
  k -= n;

  let str = '';

  while (k > 0) {
    let letter = 97 + Math.min(25, k);
    str = String.fromCharCode(letter) + str;
    k -= Math.min(25, k);
    n -= 1;
  }

  return 'a'.repeat(n) + str;
};

const getSmallestString = (n, k) => {
  const alphabet = [
    '',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let sum = 0;
  let ans = '';

  for (let i = n - 1; i >= 0; i--) {
    let letterIdx = k - i - sum;
    if (letterIdx > 26) {
      letterIdx = 26;
    }
    ans = alphabet[letterIdx] + ans;
    sum += letterIdx;
  }
  return ans;
};
