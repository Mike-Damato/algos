function cycleInGraph(edges) {
  const visited = new Set();
  const visiting = new Set();
  for (let i = 0; i < edges.length; i++) {
    if (visited.has(i)) continue;

    const hasCycle = isCycle(i, edges, visited, visiting);
    if (hasCycle) return true;
  }
  return false;
}

const isCycle = (node, edges, visited, visiting) => {
  visited.add(node);
  visiting.add(node);

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      const hasCycle = isCycle(neighbor, edges, visited, visiting);
      if (hasCycle) {
        return true;
      }
    } else if (visiting.has(neighbor)) {
      return true;
    }
  }
  visiting.delete(node);
  return false;
};
