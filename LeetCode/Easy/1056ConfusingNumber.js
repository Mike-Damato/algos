var confusingNumber = function (N) {
  const nums = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };
  let split = JSON.stringify(N).split('');
  let newNum = '';

  for (let i = 0; i < split.length; i++) {
    let key = split[i];
    if (!nums.hasOwnProperty(key)) {
      return false;
    } else {
      newNum += nums[key];
    }
  }
  return N === parseInt(newNum.split('').reverse().join('')) ? false : true;
};

//To avoid extra method chaining...
const confusingNumber = (N) => {
  const nums = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };

  let split = JSON.stringify(N).split('');
  let newNum = '';

  for (let i = split.length - 1; i >= 0; i--) {
    let key = split[i];
    if (!nums.hasOwnProperty(key)) {
      return false;
    } else {
      newNum += nums[key];
    }
  }

  return N === parseInt(newNum) ? false : true;
};
