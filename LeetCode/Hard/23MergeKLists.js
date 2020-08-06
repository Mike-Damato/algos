const mergeKLists = (lists) => {
  if (!lists.length) {
    return null;
  }
  const merge = (l1, l2) => {
    if (!l1 || !l2) {
      return l1 || l2;
    }
    let newList = new ListNode(0);
    let current = newList;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    if (l1) {
      current.next = l1;
    }
    if (l2) {
      current.next = l2;
    }
    return newList.next;
  };

  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }
  return root;
};
