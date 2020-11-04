var findMinHeightTrees = function (n, edges) {
  if (!edges || n < 2) return [0];
  let graph = [];

  for (const [x, y] of edges) {
    graph[x] = graph[x] || [];
    graph[y] = graph[y] || [];
    graph[x].push(y);
    graph[y].push(x);
  }
  let leaves = [];
  graph.map((pts, i) => pts.length === 1 && leaves.push(i));

  while (n > 2) {
    n = n - leaves.length;
    let next = [];
    for (const leaf of leaves) {
      let temp = graph[leaf].pop();
      graph[temp].splice(graph[temp].indexOf(leaf), 1);
      graph[temp].length === 1 && next.push(temp);
    }
    leaves = next;
  }
  return leaves;
};
