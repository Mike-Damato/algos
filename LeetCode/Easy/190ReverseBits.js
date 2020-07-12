var reverseBits = function (n) {
  let newStr = n.toString(2).split('');
  while (newStr.length < 32) {
    newStr.unshift('0');
  }
  return parseInt(newStr.reverse().join(''), 2);
};
