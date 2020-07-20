/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function (l1, l2) {
  let senty = new ListNode(0);
  let p1 = senty;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p1.next = l1;
      l1 = l1.next;
    } else {
      p1.next = l2;
      l2 = l2.next;
    }
    p1 = p1.next;
  }

  if (l1) {
    p1.next = l1;
  }
  if (l2) {
    p1.next = l2;
  }
  return senty.next;
};
