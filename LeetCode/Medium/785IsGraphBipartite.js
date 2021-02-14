var isBipartite = function (graph) {
  const map = new Map();

  for (let i = 0; i < graph.length; i++) {
    if (!dfs(graph, map, i, 0)) {
      return false;
    }
  }
  return true;
};

const dfs = (graph, map, i, color) => {
  if (!map.has(i)) {
    map.set(i, color);
    for (const node of graph[i]) {
      if (!dfs(graph, map, node, 1 - color) || map.get(node) === color) {
        return false;
      }
    }
  }

  return true;
};
