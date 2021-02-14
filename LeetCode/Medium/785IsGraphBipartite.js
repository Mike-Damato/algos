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

//BFS Solution
const isBipartite = (graph) => {
  const map = new Map();
  for (let i = 0; i < graph.length; i++) {
    if (!bfs(graph, map, i)) {
      return false;
    }
  }
  return true;
};

const bfs = (graph, map, i) => {
  if (!map.has(i)) {
    const queue = [i];
    map.set(i, 0);

    while (queue.length) {
      i = queue.shift();
      for (const node of graph[i]) {
        if (map.get(node) === map.get(i)) {
          return false;
        }

        if (!map.has(node)) {
          queue.push(node);
          map.set(node, 1 - map.get(i));
        }
      }
    }
  }
  return true;
};
