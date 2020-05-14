var removeKdigits = function (num, k) {
  if (num.length <= k) return '0';
  let newNum = num.slice(k - num.length); // starting value 2219
  for (let i = k - 1; i >= 0; i--) {
    let firstNumber = num[i]; // possible number to replace, in this example it is 3
    if (firstNumber <= newNum[0]) {
      let j = 1; // I want to start at the second index
      while (newNum[j] >= newNum[j - 1] && j < newNum.length) {
        // while I am still increasing numbers, I have a chance to delete that number
        j++;
      }
      // j - 1 is the index we want to remove!
      newNum = firstNumber + newNum.slice(0, j - 1) + newNum.slice(j);
    }
  }
  // remove leading zeroes
  while (newNum.length > 1 && newNum[0] === '0') {
    newNum = newNum.slice(1);
  }
  return newNum;
};
