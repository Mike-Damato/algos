var plusOne = function (head) {
  if (!head) return null;

  helper(head);
  if (head.val === 0) {
    let newHead = new ListNode(1);
    newHead.next = head;
    head = newHead;
  }
  return head;
};

const helper = (node) => {
  if (!node) return 1;
  const prevResult = helper(node.next);

  const sum = node.val + prevResult;
  node.val = sum % 10;

  return sum === 10 ? 1 : 0;
};
