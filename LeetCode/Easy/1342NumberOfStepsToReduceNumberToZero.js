var numberOfSteps = function (num) {
  const getSteps = (num, steps) => {
    if (num === 0) {
      return steps;
    }
    if (num % 2 === 0) {
      num /= 2;
      return getSteps(num, steps + 1);
    } else {
      num -= 1;
      return getSteps(num, steps + 1);
    }
  };

  return getSteps(num, 0);
};

//All within 1 function
const numberOfSteps = (num, steps = 0) => {
  if (num === 0) return steps;

  if (num % 2 === 0) {
    return numberOfSteps(num / 2, steps + 1);
  } else {
    return numberOfSteps(num - 1, steps + 1);
  }
};
