//O(N^2) Time due to traversing entire matrix | O(N) size
const findCircleNum = (matrix) => {
  //Create set to store what we have seen
  const visited = new Set();
  //Total number of provinces
  let count = 0;

  const dfs = (i) => {
    //Go through subarray indexes
    for (let j = 0; j < matrix.length; j++) {
      //Check if it is a 1 & has not been seen before
      if (matrix[i][j] === 1 && !visited.has(j)) {
        //Add to our set
        visited.add(j);
        //Recursively call dfs on this index
        dfs(j);
      }
    }
  };

  //Iterate through matrix
  for (let i = 0; i < matrix.length; i++) {
    //Check if this index hax been visited before
    if (!visited.has(i)) {
      //Start DFS on subarray at this index
      dfs(i);
      //Increment count
      count++;
    }
  }
  return count;
};
