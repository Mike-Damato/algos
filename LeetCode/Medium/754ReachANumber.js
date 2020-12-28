var reachNumber = function (target) {
  target = Math.abs(target);
  let currentStep = 0;

  while (target > 0) {
    currentStep++;
    target -= currentStep;
  }

  return target % 2 === 0 ? currentStep : currentStep + 1 + (currentStep % 2);
};
