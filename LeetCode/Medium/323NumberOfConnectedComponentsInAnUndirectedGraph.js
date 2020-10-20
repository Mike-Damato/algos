var countComponents = function (n, edges) {
  let count = 0;
  let map = new Map();
  let seen = new Set();
  for (const [edge1, edge2] of edges) {
    if (!map.has(edge1)) {
      map.set(edge1, []);
    }
    map.get(edge1).push(edge2);
    if (!map.has(edge2)) {
      map.set(edge2, []);
    }
    map.get(edge2).push(edge1);
  }

  for (let i = 0; i < n; i++) {
    if (!map.has(i)) {
      count++;
      continue;
    }

    if (!seen.has(i)) {
      dfs(i, seen, map);
      count++;
    }
  }
  return count;
};

const dfs = (vtx, seen, map) => {
  if (seen.has(vtx)) return;

  seen.add(vtx);
  let neighbors = map.get(vtx);

  for (const neighbor of neighbors) {
    dfs(neighbor, seen, map);
  }
};
