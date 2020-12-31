//O(N) Time | O(N) space
function sunsetViews(buildings, direction) {
  const start = direction === 'WEST' ? 0 : buildings.length - 1;
  const step = direction === 'WEST' ? 1 : -1;
  const stack = [];
  let idx = start;
  let maxHeight = 0;

  while (idx >= 0 && idx < buildings.length) {
    let current = buildings[idx];

    if (current > maxHeight) {
      stack.push(idx);
    }

    maxHeight = Math.max(maxHeight, current);

    idx = idx + step;
  }

  if (direction === 'EAST') stack.reverse();

  return stack;
}

//Alternate O(N) Time | O(N) space
function sunsetViews(buildings, direction) {
  const start = direction === 'EAST' ? 0 : buildings.length - 1;
  const step = direction === 'EAST' ? 1 : -1;
  const stack = [];
  let idx = start;

  while (idx >= 0 && idx < buildings.length) {
    let current = buildings[idx];
    while (stack.length && buildings[stack[stack.length - 1]] <= current) {
      stack.pop();
    }
    stack.push(idx);

    idx += step;
  }

  if (direction === 'WEST') stack.reverse();

  return stack;
}
