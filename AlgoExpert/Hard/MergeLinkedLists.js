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

//Alternate
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  // Write your code here.
  let p1 = headOne;
  let p2 = headTwo;
  let prev = null;
  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev !== null) {
        prev.next = p2;
      }
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (p1 === null) {
    prev.next = p2;
  }
  if (p2 === null) {
    prev.next = p1;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}
