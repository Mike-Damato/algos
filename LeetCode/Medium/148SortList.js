const sortList = (head) => {
  if (!head || !head.next) return head;

  const [left, right] = split(head);
  const dummy = new ListNode(0);
  return merge(dummy, sortList(left), sortList(right));
};

const split = (node) => {
  let slow = node;
  let fast = node;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = node;
  const right = slow.next;

  slow.next = null;

  return [left, right];
};

const merge = (dummy, l1, l2) => {
  let ptr = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      ptr.next = l1;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }

  while (l1) {
    ptr.next = l1;
    l1 = l1.next;
    ptr = ptr.next;
  }

  while (l2) {
    ptr.next = l2;
    l2 = l2.next;
    ptr = ptr.next;
  }
  return dummy.next;
};

//Using more space and a more naive solution
var sortList = function (head) {
  if (!head) return null;
  let arr = [];
  let current = head;
  let dummy = new ListNode(0);
  let ptr = dummy;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    ptr.next = new ListNode(arr[i]);
    ptr = ptr.next;
  }
  return dummy.next;
};
