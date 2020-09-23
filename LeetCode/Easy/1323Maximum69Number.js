var maximum69Number = function (num) {
  return num.toString().replace('6', '9');
};

//Alternate
var maximum69Number = function (num) {
  let split = num.toString().split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '6') {
      split[i] = '9';
      break;
    }
  }
  return Number(split.join(''));
};
