var shortestPalindrome = function (s) {
  let str = s;
  let reverse = s.split('').reverse().join('');
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    let firstPortion = str.substr(0, str.length - i);
    let secondPortion = reverse.substr(i, reverse.length - i);
    idx = i;
    if (firstPortion === secondPortion) {
      break;
    }
  }
  return reverse.substr(0, idx) + str;
};
