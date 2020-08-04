function rearrangeLinkedList(head, k) {
  // Write your code here.
  let current = head;
  //vals less than k
  let l1 = new LinkedList(0);
  let l1Head = l1;
  //vals greater than k
  let l3 = new LinkedList(0);
  let l3Head = l3;
  //k node
  let l2 = new LinkedList(k);
  let l2Head = l2;
  while (current) {
    if (current.value < k) {
      l1Head.next = new LinkedList(current.value);
      l1Head = l1Head.next;
    } else if (current.value > k) {
      l3Head.next = new LinkedList(current.value);
      l3Head = l3Head.next;
    } else {
      l2Head.next = new LinkedList(current.value);
      l2Head = l2Head.next;
    }
    current = current.next;
  }
  l1 = l1.next;
  l3 = l3.next;
  l2 = l2.next;

  //find l1 tail then attach l2, then attach l3 to l2
  if (l1 !== null) {
    let l1Tail = l1;
    while (l1Tail.next) {
      l1Tail = l1Tail.next;
    }
    if (l2 !== null) {
      l1Tail.next = l2;
    } else {
      l1Tail.next = l3;
    }
  }

  if (l2 !== null) {
    let l2Tail = l2;
    while (l2Tail.next) {
      l2Tail = l2Tail.next;
    }
    l2Tail.next = l3;
  }

  if (l1 === null && l2 === null) {
    return l3;
  }

  return l1 !== null ? l1 : l2;
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Alternate Approach
function rearrangeLinkedList(head, k) {
  // Write your code here.
  let smallerHead = null;
  let smallerTail = null;
  let equalHead = null;
  let equalTail = null;
  let greaterHead = null;
  let greaterTail = null;

  let current = head;
  while (current) {
    if (current.value < k) {
      //smaller
      [smallerHead, smallerTail] = growLinkedList(
        smallerHead,
        smallerTail,
        current
      );
    } else if (current.value > k) {
      //greater
      [greaterHead, greaterTail] = growLinkedList(
        greaterHead,
        greaterTail,
        current
      );
    } else {
      //equal
      [equalHead, equalTail] = growLinkedList(equalHead, equalTail, current);
    }
    let prevNode = current;
    current = current.next;
    prevNode.next = null;
  }

  const [firstHead, firstTail] = connectLinkedLists(
    smallerHead,
    smallerTail,
    equalHead,
    equalTail
  );
  const [finalHead, end] = connectLinkedLists(
    firstHead,
    firstTail,
    greaterHead,
    greaterTail
  );

  return finalHead;
}

const growLinkedList = (head, tail, node) => {
  let newHead = head;
  let newTail = node;

  if (!newHead) {
    newHead = node;
  }
  if (tail) {
    tail.next = node;
  }

  return [newHead, newTail];
};

const connectLinkedLists = (head1, tail1, head2, tail2) => {
  const newHead = head1 === null ? head2 : head1;
  const newTail = tail2 === null ? tail1 : tail2;

  if (tail1 !== null) {
    tail1.next = head2;
  }
  return [newHead, newTail];
};

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
