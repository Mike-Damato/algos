class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  // Write your code here.
  let senty = new LinkedList(0);
  let ptr = senty;

  while (headOne && headTwo) {
    if (headOne.value <= headTwo.value) {
      ptr.next = headOne;
      headOne = headOne.next;
    } else {
      ptr.next = headTwo;
      headTwo = headTwo.next;
    }
    ptr = ptr.next;
  }

  if (headOne) {
    ptr.next = headOne;
  }
  if (headTwo) {
    ptr.next = headTwo;
  }
  return senty.next;
}
