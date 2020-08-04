var isPowerOfFour = function (num) {
  let ans = Math.log(num) / Math.log(4);
  return ans % 1 === 0;
};

//Alternate
const isPowerOfFour = (num) => {
  if (num > 1) {
    while (num % 4 === 0) {
      num /= 4;
    }
  }
  return num === 1;
};
