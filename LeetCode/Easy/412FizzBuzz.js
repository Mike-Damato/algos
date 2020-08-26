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

//Alternate using a hash
const fizzBuzz = (n) => {
  let ans = [];
  let hash = { 3: 'Fizz', 5: 'Buzz' };

  for (let i = 1; i <= n; i++) {
    let innerResult = '';
    for (let key in hash) {
      if (i % key === 0) {
        innerResult += hash[key];
      }
    }
    if (innerResult === '') {
      innerResult = `${i}`;
    }
    ans.push(innerResult);
  }
  return ans;
};
