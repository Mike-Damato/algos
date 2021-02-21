var brokenCalc = function (X, Y) {
  let steps = 0;
  while (Y > X) {
    steps += 1;
    if (Y % 2 === 1) {
      Y += 1;
    } else {
      Y /= 2;
    }
  }
  return steps + X - Y;
};
