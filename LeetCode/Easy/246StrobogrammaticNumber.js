var isStrobogrammatic = function (num) {
  const nums = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };

  let newNum = '';
  for (let i = num.length - 1; i >= 0; i--) {
    let key = num[i];
    if (!nums.hasOwnProperty(key)) {
      return false;
    } else {
      newNum += nums[key];
    }
  }
  return num === newNum;
};
