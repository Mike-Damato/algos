class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//O(max(N+M)) Time | O(max(N+M)) Space
//Where N is the length of list 1 and M is length of list 2
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newList = new LinkedList(0);
  let current = newList;
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  let carry = 0;

  while (nodeOne || nodeTwo || carry) {
    const nodeOneVal = nodeOne !== null ? nodeOne.value : 0;
    const nodeTwoVal = nodeTwo !== null ? nodeTwo.value : 0;
    const sum = nodeOneVal + nodeTwoVal + carry;

    const newVal = sum % 10;
    const newNode = new LinkedList(newVal);
    current.next = newNode;
    current = newNode;

    carry = Math.floor(sum / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  return newList.next;
}
