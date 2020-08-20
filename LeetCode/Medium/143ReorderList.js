var reorderList = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let l1 = head;
  let slow = head;
  let fast = head;
  let prev = null;
  //l1 - prev = 1st half
  //slow - fast - 2nd half
  //After this loop, prev will be the tail of the 1st half and slow will be head of 2nd half and fast will be tail of 2nd half
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  //Split list into 2
  prev.next = null;

  //reverse 2nd half
  let l2 = reverse(slow);

  //Now combine the halfs
  merge(l1, l2);
};

const reverse = (head) => {
  if (!head) {
    return null;
  }
  let p1 = null;
  let p2 = head;
  let p3 = null;

  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  return p1;
};

const merge = (l1, l2) => {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let dummy = new ListNode(0);
  let ans = dummy;

  while (l1 && l2) {
    ans.next = l1;
    l1 = l1.next;
    ans = ans.next;
    ans.next = l2;
    l2 = l2.next;
    ans = ans.next;
  }

  while (l1) {
    ans.next = l1;
    l1 = l1.next;
    ans = ans.next;
  }

  while (l2) {
    ans.next = l2;
    l2 = l2.next;
    ans = ans.next;
  }

  return dummy.next;
};
