class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/*
split into 2 lists by finding the mid
reverse 2nd list
then interweave
*/
function zipLinkedList(linkedList) {
  // Write your code here.
  if (!linkedList.next || !linkedList.next.next) return linkedList;
  //split into 2 lists by finding the mid
  const secondHalf = splitList(linkedList);
  //Reverse 2nd half
  const reverseSecondHalf = reverseLinkedList(secondHalf);

  // console.log(linkedList)
  //Interweave
  return merge(linkedList, reverseSecondHalf);
}

const splitList = (head) => {
  if (!head) return null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const secondHalf = slow.next;
  slow.next = null;
  return secondHalf;
};

const reverseLinkedList = (head) => {
  if (!head) return null;
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
  let current1 = l1;
  let current2 = l2;
  while (current1 && current2) {
    let l1Next = current1.next;
    let l2Next = current2.next;

    current1.next = current2;
    current2.next = l1Next;

    current1 = l1Next;
    current2 = l2Next;
  }
  return l1;
};
