var removeNthFromEnd = function (head, n) {
  let count = 0;
  let first = head;
  let second = head;
  while (count < n) {
    second = second.next;
    count++;
  }
  //in the event we want to remove the head, just return first.next
  if (second === null) {
    return first.next;
  }
  //set up pointer to head
  let ans = head;
  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }
  //first.next -> NODE TO REMOVE
  //so to get rid of the node just makes first.next skip the one we want to remove
  first.next = first.next.next;
  return ans;
};
