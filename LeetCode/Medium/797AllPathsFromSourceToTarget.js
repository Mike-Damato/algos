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
