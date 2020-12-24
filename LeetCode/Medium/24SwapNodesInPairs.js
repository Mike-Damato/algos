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

//Iterative Approach
const swapPairs = (head) => {
  if (!head || !head.next) return head;

  let senty = new ListNode(0);
  let dummy = senty;
  senty.next = head;

  while (head && head.next) {
    let firstNode = head;
    let secondNode = head.next;

    dummy.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    dummy = firstNode;
    head = firstNode.next;
  }
  return senty.next;
};
