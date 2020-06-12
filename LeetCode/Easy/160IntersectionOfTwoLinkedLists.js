var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA) {
    currA.visited = true;
    currA = currA.next;
  }
  while (currB) {
    if (currB.visited) {
      return currB;
    }
    currB = currB.next;
  }
  return null;
};

//Atlernate
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let lengthA = 0,
    lengthB = 0;
  function intersects(nodeA, nodeB) {
    while (nodeA.next !== null) {
      nodeA = nodeA.next;
      lengthA++;
    }
    while (nodeB.next !== null) {
      nodeB = nodeB.next;
      lengthB++;
    }
    return nodeA === nodeB;
  }
  //if it never intersects return null
  if (!intersects(headA, headB)) return null;
  if (lengthA > lengthB) {
    while (lengthA - lengthB) {
      headA = headA.next;
      lengthA--;
    }
  } else {
    while (lengthB - lengthA) {
      headB = headB.next;
      lengthB--;
    }
  }
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
};
