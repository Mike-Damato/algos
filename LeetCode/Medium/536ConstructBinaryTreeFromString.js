var str2tree = function (s) {
  if (!s) return null;

  const helper = (idx) => {
    let num = '';
    let child = [];
    let node = null;

    while (idx < s.length && s[idx] !== ')') {
      if (s[idx] === '(') {
        [idx, node] = helper(idx + 1);
        child.push(node);
      } else {
        num += s[idx];
      }
      idx++;
    }
    let newNode = new TreeNode(parseInt(num));
    newNode.left = child[0] || null;
    newNode.right = child[1] || null;
    return [idx, newNode];
  };

  return helper(0)[1];
};
