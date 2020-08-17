function riverSizes(matrix) {
  // Write your code here.
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));
  // let visited = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //if(visited[i][j])
      if (visited[i][j]) {
        continue;
      }
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];
  let current;
  while (nodesToExplore.length) {
    current = nodesToExplore.pop();
    i = current[0];
    j = current[1];
    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    }
    currentRiverSize++;
    let unvisited = getUnvisited(i, j, matrix, visited);
    for (const neighbor of unvisited) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
};

const getUnvisited = (i, j, matrix, visited) => {
  let unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
};
