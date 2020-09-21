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
