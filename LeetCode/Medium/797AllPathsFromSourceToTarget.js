var allPathsSourceTarget = function (graph) {
  let ans = [];
  dfs(graph, 0, ans, [0]);
  return ans;
};

const dfs = (graph, start, ans, currentPath) => {
  if (start === graph.length - 1) {
    ans.push([...currentPath]);
    return;
  }
  for (let i = 0; i < graph[start].length; i++) {
    currentPath.push(graph[start][i]);
    dfs(graph, graph[start][i], ans, currentPath);
    currentPath.pop();
  }
};

/*
backtracking with dfs. start at node 0 and end at graph.length-1
 all potential paths will start at 0 -> init currPath with [0]
 in the back track, final condition will be if node passed is the last one
 push a copy of currPath into the result
 else loop through current node's children and try each child and backtrack.  when done, pop off child from currPath to try the other children
 t: O(2^N *N) 2^n-1 - 1 possible paths, each path could have up to n-2 connecting edges. so it takes o(n) time to build each path.  so a loose upper bound is O(2^N *N). there could be some overlapping paths so building some paths could benefit others
 s: O(2^N *N) similar to time complexity, each path can contain up to N nodes and the space we need to store the results is O(2^N *N)
 there's also the recursive stack consumption which could be up to N calls
 so total space is O(2^N *N) + O(N) which simplifies to O(2^N *N)
*/

//BFS
var allPathsSourceTarget = function (graph) {
  let paths = new Map();
  let numPaths = [];
  for (let i = 0; i < graph.length; i++) {
    paths.set(i, graph[i]);
  }
  let queue = [[0, paths.get(0), []]];
  while (queue.length) {
    let [node, connections, currPath] = queue.shift();
    currPath = currPath.concat(node);
    if (connections.length > 0) {
      for (const path of connections) {
        //pushing into the queue the next node in the path, that node's connections, and the nodes traversed so far
        queue.push([path, paths.get(path), currPath]);
      }
    }
    if (node === graph.length - 1) {
      numPaths.push(currPath);
    }
  }
  return numPaths;
};
