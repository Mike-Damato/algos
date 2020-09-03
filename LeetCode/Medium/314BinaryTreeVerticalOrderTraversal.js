const verticalOrder = (root) => {
  if (!root) {
    return [];
  }
  let queue = [[root, 0]];
  let map = new Map();
  let ans = [];
  while (queue.length) {
    let [node, col] = queue.shift();
    if (!map.has(col)) {
      map.set(col, [node.val]);
    } else {
      map.get(col).push(node.val);
    }
    if (node.left) {
      queue.push([node.left, col - 1]);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
    }
  }
  let keys = [...map.keys()].sort((a, b) => a - b);

  for (const key of keys) {
    ans.push(map.get(key));
  }
  return ans;
};
