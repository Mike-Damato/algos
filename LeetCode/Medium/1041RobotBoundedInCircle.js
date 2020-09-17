var isRobotBounded = function (instructions) {
  let dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let currentPos = [0, 0];
  let step = 0;

  for (const instruction of instructions) {
    if (instruction === 'G') {
      currentPos[0] += dirs[step][0];
      currentPos[1] += dirs[step][1];
    } else if (instruction === 'L') {
      step--;
    } else if (instruction === 'R') {
      step++;
    }

    if (step < 4) {
      step = 4 + step;
    }

    step = step % 4;
  }
  if (step > 0 || (!currentPos[0] && !currentPos[1])) {
    return true;
  }

  return false;
};
