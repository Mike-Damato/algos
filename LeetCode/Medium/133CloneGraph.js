var cloneGraph = function (node) {
  if (!node) return null;
  let map = new Map();

  const dfs = (node, map) => {
    //If we already have the node we've already made a copy
    if (map.has(node.val)) {
      return map.get(node.val);
    }
    //We do not have a copied node, so we need to create it;
    let copy = new Node(node.val);
    map.set(node.val, copy);
    // fancy 1 liner for below -
    //map.get(node.val).neighbors = node.neighbors.map(neighbor => dfs(neighbor, map));
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor, map));
    }
    return copy;
  };
  return dfs(node, map);
};

//BFS Solution
const cloneGraph = (node) => {
  if (!node) return null;
  let map = new Map();

  const bfs = (node, map) => {
    map.set(node, new Node(node.val));
    const queue = [node];

    while (queue.length > 0) {
      let current = queue.shift();
      for (const neighbor of current.neighbors) {
        if (!map.has(neighbor)) {
          map.set(neighbor, new Node(neighbor.val));
          queue.push(neighbor);
        }
        map.get(current).neighbors.push(map.get(neighbor));
      }
    }
    return map.get(node);
  };
  return bfs(node, map);
};
