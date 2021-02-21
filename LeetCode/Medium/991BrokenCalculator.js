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

//Recursive
const brokenCalc = (X, Y) => {
  if (X >= Y) {
    return X - Y;
  }
  const mid = Math.ceil(Y / 2);
  if (X >= mid) {
    return X - mid + (2 * mid - Y) + 1;
  }
  return brokenCalc(X, mid) + (2 * mid - Y) + 1;
};
