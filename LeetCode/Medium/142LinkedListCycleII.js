var detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let fast = head;
  let slow = head;
  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      while (head !== fast) {
        head = head.next;
        fast = fast.next;
      }
      return head;
    }
  }
  return null;
};
