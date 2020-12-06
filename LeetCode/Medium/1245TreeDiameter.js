var treeDiameter = function (edges) {
  const map = new Map();
  let ans = 0;

  for (const edge of edges) {
    if (!map.has(edge[0])) {
      map.set(edge[0], []);
    }
    if (!map.has(edge[1])) {
      map.set(edge[1], []);
    }

    map.get(edge[0]).push(edge[1]);
    map.get(edge[1]).push(edge[0]);
  }

  const set = new Set();

  const dfs = (node) => {
    set.add(node);

    let [start, end] = [0, 0];
    for (const child of map.get(node)) {
      if (set.has(child)) continue;
      const pathLength = dfs(child);
      if (pathLength > start) {
        end = start;
        start = pathLength;
      } else if (pathLength <= start && pathLength > end) {
        end = pathLength;
      }
    }
    ans = Math.max(ans, start + end + 1);
    return 1 + start;
  };

  dfs(0);
  return ans - 1;
};
