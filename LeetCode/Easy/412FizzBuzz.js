var fizzBuzz = function (n) {
  let ans = [];
  let temp;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      temp = 'FizzBuzz';
    } else if (i % 3 === 0) {
      temp = 'Fizz';
    } else if (i % 5 === 0) {
      temp = 'Buzz';
    } else {
      temp = i.toString();
    }
    ans.push(temp);
  }
  return ans;
};
