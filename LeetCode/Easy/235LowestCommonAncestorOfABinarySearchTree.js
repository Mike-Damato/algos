var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  let parentVal = root.val;
  let pVal = p.val;
  let qVal = q.val;

  if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
