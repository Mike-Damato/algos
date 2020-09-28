var deleteDuplicates = function (head) {
  if (!head) return null;
  let prev = null;
  let current = head;
  while (current && current.next) {
    let dupe;
    if (current.val === current.next.val) {
      dupe = current.val;
      while (current && current.val === dupe) {
        current = current.next;
      }
      if (prev) {
        prev.next = current;
      } else {
        head = current;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
