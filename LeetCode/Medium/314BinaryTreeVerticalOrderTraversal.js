const verticalOrder = (root) => {
  if (!root) {
    return [];
  }
  let queue = [[root, 0]];
  let map = new Map();
  let ans = [];
  while (queue.length) {
    let [node, level] = queue.shift();
    if (!map.has(level)) {
      map.set(level, [node.val]);
    } else {
      map.get(level).push(node.val);
    }
    if (node.left) {
      queue.push([node.left, level - 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
  let keys = [...map.keys()].sort((a, b) => a - b);

  for (const key of keys) {
    ans.push(map.get(key));
  }
  return ans;
};
