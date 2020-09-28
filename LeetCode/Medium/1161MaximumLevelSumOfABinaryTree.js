//DFS
const maxLevelSum = (root) => {
  let map = new Map();
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    if (!map.has(level)) {
      map.set(level, 0);
    }
    map.set(level, map.get(level) + node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 1);
  // let maxSum = 0;
  // let maxLevel = 0;
  // for (const [level, val] of map) {
  //   if (val > maxSum) {
  //     maxSum = val;
  //     maxLevel = level;
  //   }
  // }
  // return maxLevel;

  //One liner for the above...
  return [...map.keys()].reduce((a, b) => (map.get(a) > map.get(b) ? a : b));
};

//BFS
var maxLevelSum = function (root) {
  let map = new Map();

  if (!root) {
    return 0;
  }

  let queue = [[1, root]];

  while (queue.length) {
    let [level, node] = queue.shift();
    if (!map.has(level)) {
      map.set(level, 0);
    }
    map.set(level, map.get(level) + node.val);
    if (node.left) {
      queue.push([level + 1, node.left]);
    }
    if (node.right) {
      queue.push([level + 1, node.right]);
    }
  }

  // let maxSum = 0;
  // let maxLevel = 0;
  // for (const [level, val] of map) {
  //   if (val > maxSum) {
  //     maxSum = val;
  //     maxLevel = level;
  //   }
  // }
  // return maxLevel;

  //One liner for the above...
  return [...map.keys()].reduce((a, b) => (map.get(a) > map.get(b) ? a : b));
};
