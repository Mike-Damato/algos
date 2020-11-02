var insertionSortList = function (head) {
  let dummy = new ListNode(-Infinity);
  let current = head;
  while (current) {
    let prev = dummy;
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }
    let next = current.next;
    current.next = prev.next;
    prev.next = current;
    current = next;
  }
  return dummy.next;
};
