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

//Alternate Using KMP
const shortestPalindrome = (s) => {
  let reversed = s.split('').reverse().join('');
  let current = s + '#' + reversed;
  let length = current.length;
  let prefix = new Array(length).fill(0);
  let i = 1;
  let j = 0;
  while (i < length) {
    if (current[i] === current[j]) {
      prefix[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = prefix[j - 1];
    } else {
      i++;
    }
  }
  let temp = reversed.substr(0, s.length - prefix[length - 1]);
  return temp + s;
};
