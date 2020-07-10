var flatten = function (head) {
  let temp = head;
  while (temp) {
    if (temp.child) {
      insertAfter(temp, temp.child);
    }
    temp = temp.next;
  }
  return head;
};

const insertAfter = (node1, node2) => {
  const next1 = node1.next;
  let next2 = node2;
  while (next2.next) {
    next2 = next2.next;
  }
  node1.next = node2;
  node2.prev = node1;
  node1.child = null;
  next2.next = next1;
  if (next1) {
    next1.prev = next2;
  }
};

//Alternate Recursion
var flatten = function (head) {
  if (head === null) return null;
  let curr = head;
  while (curr) {
    if (curr.child) {
      let nextPtr = curr.next;
      curr.next = flatten(curr.child);
      curr.next.prev = curr;
      curr.child = null;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = nextPtr;
      if (nextPtr) {
        nextPtr.prev = curr;
      }
    }
    curr = curr.next;
  }
  return head;
};
