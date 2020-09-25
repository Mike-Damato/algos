function numberOfBinaryTreeTopologies(n, cache = { 0: 1 }) {
  if (cache.hasOwnProperty(n)) {
    return cache[n];
  }
  let numTrees = 0;
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    let rightTreeSize = n - 1 - leftTreeSize;
    let numLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize);
    let numRightTrees = numberOfBinaryTreeTopologies(rightTreeSize);
    numTrees += numLeftTrees * numRightTrees;
  }
  cache[n] = numTrees;
  return numTrees;
}

//Iterative
function numberOfBinaryTreeTopologies(n) {
  const cache = [1];
  for (let m = 1; m <= n; m++) {
    let numTrees = 0;
    for (let leftTreeSize = 0; leftTreeSize < m; leftTreeSize++) {
      let rightTreeSize = m - 1 - leftTreeSize;
      let numLeftTrees = cache[leftTreeSize];
      let numRightTrees = cache[rightTreeSize];
      numTrees += numLeftTrees * numRightTrees;
    }
    cache.push(numTrees);
  }
  return cache[n];
}
