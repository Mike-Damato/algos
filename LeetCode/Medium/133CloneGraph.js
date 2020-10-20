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
