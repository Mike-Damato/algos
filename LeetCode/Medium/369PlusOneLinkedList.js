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

//Iterative
const plusOne = (head) => {
  let senty = new ListNode(0);
  senty.next = head;
  let notNine = senty;

  let current = head;

  while (current) {
    if (current.val !== 9) {
      notNine = current;
    }
    current = current.next;
  }

  notNine.val += 1;
  notNine = notNine.next;

  while (notNine) {
    notNine.val = 0;
    notNine = notNine.next;
  }

  return senty.val !== 0 ? senty : head;
};
