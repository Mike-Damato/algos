var isSubtree = function (s, t) {
  if (!s) return false;

  if (dfs(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const dfs = (t1, t2) => {
  if (t1 && t2) {
    return (
      t1.val === t2.val && dfs(t1.left, t2.left) && dfs(t1.right, t2.right)
    );
  }
  return t1 === t2;
};
