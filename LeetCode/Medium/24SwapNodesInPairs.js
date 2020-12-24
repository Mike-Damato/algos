var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let node1 = head;
  let node2 = head.next;
  let node3 = node2.next;

  node2.next = node1;
  node1.next = swapPairs(node3);

  return node2;
};
