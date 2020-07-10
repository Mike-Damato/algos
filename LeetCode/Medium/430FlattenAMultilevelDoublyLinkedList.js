var flatten = function (head) {
  let temp = head;
  while (temp) {
    if (temp.child) {
      insertAfter(temp, temp.child);
    }
    temp = temp.next;
  }
  return head;
};

const insertAfter = (node1, node2) => {
  const next1 = node1.next;
  let next2 = node2;
  while (next2.next) {
    next2 = next2.next;
  }
  node1.next = node2;
  node2.prev = node1;
  node1.child = null;
  next2.next = next1;
  if (next1) {
    next1.prev = next2;
  }
};
