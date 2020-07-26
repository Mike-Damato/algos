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

//Recursive
 * /
var addDigits = function (num) {
  if (num <= 9) {
    return num;
  } else {
    let newNum = 0;
    while (num > 0) {
      let lastDigit = Math.floor(num % 10);
      newNum += lastDigit
      num /= 10;
    }
    return addDigits(newNum)
  }

};
