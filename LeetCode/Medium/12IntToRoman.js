var intToRoman = function (num) {
  let hash = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  //[1000, 500, 100, 50,  10, 5, 1]
  let keys = Object.keys(hash).reverse().map(Number);
  let ans = '';
  for (const n of keys) {
    let numRepeat = Math.floor(num / n);
    ans += hash[n].repeat(numRepeat);
    num = num % n;
  }
  return ans;
};

var intToRoman = function (num) {
  let res = '';
  if (num < 1 || num > 3999) return res;
  let weight = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let token = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let i = 0;
  while (num > 0) {
    if (num - weight[i] >= 0) {
      res += token[i];
      num -= weight[i];
    } else {
      i++;
    }
  }
  return res;
};

let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
let thousands = ['', 'M', 'MM', 'MMM' /**,... and so on */];

const intToRoman = (num) =>
  [
    thousands[parseInt(Math.floor(num / 1000))],
    hundreds[parseInt((num % 1000) / 100)],
    tens[parseInt((num % 100) / 10)],
    ones[parseInt(num % 10)],
  ].join('');
