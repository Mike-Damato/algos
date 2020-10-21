var asteroidCollision = function (asteroids) {
  let i = 0;
  let stack = [];
  while (i < asteroids.length) {
    let last = stack[stack.length - 1];
    if (asteroids[i] >= 0 || !stack.length || last < 0) {
      stack.push(asteroids[i]);
      i++;
    } else if (asteroids[i] + last < 0) {
      stack.pop();
    } else if (asteroids[i] + last === 0) {
      stack.pop();
      i++;
    } else {
      i++;
    }
  }
  return stack;
};
