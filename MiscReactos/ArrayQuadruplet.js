function findArrayQuadruplet(arr, target) {
  // your code goes here
  let hash = {};
  let quads = [];
  let currentSum;
  let diff;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      currentSum = arr[i] + arr[j];
      diff = target - currentSum;
      if (hash[diff]) {
        for (const pairs of hash[diff]) {
          quads.push(pairs.concat([arr[i], arr[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      currentSum = arr[i] + arr[k];
      if (!hash[currentSum]) {
        hash[currentSum] = [[arr[k], arr[i]]];
      } else {
        hash[currentSum].push([arr[k], arr[i]]);
      }
    }
  }
  if (quads[0]) {
    return quads[0].sort((a, b) => a - b);
  } else {
    return [];
  }
}
