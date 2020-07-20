var removeElements = function (head, val) {
  let dummy = new ListNode(0);

  dummy.next = head;
  let p1 = dummy;
  while (p1 && p1.next) {
    if (p1.next.val !== val) {
      p1 = p1.next;
    } else {
      p1.next = p1.next.next;
    }
  }
  return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 * 1 -> 2 -> 6-> 3-> 4 -> 5 -> 6, remove 6
 * 1 -> 2 -> 3 -> 4 -> 5
 */
