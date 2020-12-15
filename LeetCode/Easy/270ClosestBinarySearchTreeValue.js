var closestValue = function (root, target, closest = null) {
  if (!root) return closest;

  const bestMatch =
    closest === null || Math.abs(target - closest) > Math.abs(target - root.val)
      ? root.val
      : closest;

  if (target < root.val) {
    return closestValue(root.left, target, bestMatch);
  }
  if (target > root.val) {
    return closestValue(root.right, target, bestMatch);
  }
  return root.val;
};
