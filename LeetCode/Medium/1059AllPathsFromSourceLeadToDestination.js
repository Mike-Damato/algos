var leadsToDestination = function (n, edges, source, destination) {
  const graph = new Map();

  for (const [edge1, edge2] of edges) {
    if (!graph.has(edge1)) {
      graph.set(edge1, []);
    }
    graph.get(edge1).push(edge2);
  }

  //destination should not have any outgoing edges
  if (graph.has(destination)) return false;

  const visited = new Set();

  const dfs = (node) => {
    if (!graph.has(node)) return node === destination;
    for (const neighbor of graph.get(node)) {
      //Found a cycle
      if (visited.has(neighbor)) return false;
      visited.add(neighbor);
      if (!dfs(neighbor)) return false;
      visited.delete(neighbor);
    }
    return true;
  };

  return dfs(source);
};
