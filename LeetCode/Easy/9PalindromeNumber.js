var isPalindrome = function (x) {
  let str = JSON.stringify(x).split('').reverse().join('');
  return +str === x;
};
