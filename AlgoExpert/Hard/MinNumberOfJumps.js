function minNumberOfJumps(array) {
  // Write your code here.
  let jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
  }
  return jumps[jumps.length - 1];
}

//Optimized
function minNumberOfJumps(array) {
  // Write your code here.
  if (array.length === 1) {
    return 0;
  }
  let maxReach = array[0];
  let jumps = 0;
  let steps = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i);
    steps -= 1;
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
}
