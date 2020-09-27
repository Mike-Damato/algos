var calcEquation = function (equations, values, queries) {
  const adjList = new Map();

  for (let i = 0; i < equations.length; i++) {
    adjList.set(equations[i][0], []);
    adjList.set(equations[i][1], []);
  }

  for (let i = 0; i < equations.length; i++) {
    const u = equations[i][0];
    const v = equations[i][1];
    const weight = values[i];

    adjList.get(u).push([v, weight]);
    adjList.get(v).push([u, 1 / weight]);
  }

  const ans = [];

  for (let i = 0; i < queries.length; i++) {
    const src = queries[i][0];
    const dest = queries[i][1];
    const seen = new Set();
    const val = dfs(adjList, src, src, dest, 1, seen);

    if (val === false) {
      ans.push(-1);
    } else {
      ans.push(val);
    }
  }
  return ans;
};

const dfs = (adjList, src, current, dest, quotient, seen) => {
  if (!adjList.has(dest) || !adjList.has(src)) return -1;

  if (src === dest) return 1;

  if (current === dest) return quotient;

  seen.add(current);

  const neighbors = adjList.get(current);

  for (let i = 0; i < neighbors.length; i++) {
    if (seen.has(neighbors[i][0])) continue;

    const val = dfs(
      adjList,
      src,
      neighbors[i][0],
      dest,
      quotient * neighbors[i][1],
      seen
    );

    if (val !== false) return val;
  }
  return false;
};
