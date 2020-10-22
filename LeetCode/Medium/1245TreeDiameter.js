var treeDiameter = function (edges) {
  let map = new Map();
  let seen = new Set();
  let count = 0;
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
  console.log(map);
  const dfs = (node) => {
    if (!node) return;
    if (seen.has(node)) return;
    seen.add(node);
    for (const neighbor of map.get(node)) {
      if (seen.has(neighbor)) continue;
    }
  };
};
