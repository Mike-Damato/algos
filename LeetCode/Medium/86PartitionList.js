var partition = function (head, x) {
  let smallerList = new ListNode(0);
  let p1 = smallerList;
  let biggerList = new ListNode(0);
  let p2 = biggerList;

  while (head) {
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }
    head = head.next;
  }

  p2.next = null;
  p1.next = biggerList.next;

  return smallerList.next;
};
