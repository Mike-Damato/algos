//Iterative
var addDigits = function (num) {
  while (num > 9) {
    let newNum = 0;
    while (num > 0) {
      //get last digit
      let singleDigit = Math.floor(num % 10);
      newNum += singleDigit;
      //move last digit up one
      num /= 10;
    }
    num = newNum;
  }
  return num;
};
