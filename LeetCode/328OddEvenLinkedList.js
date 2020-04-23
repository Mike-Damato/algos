const oddEvenList = (head) => {
  if (head === null) return null;

  //build odd and even linked lists, connect odd to even at the end

  //head is still original, odd is head of oddlist, evenHead is head of even list
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    // in case of even at end of list
    odd.next = even.next; // points odd.next
    odd = odd.next; // moves odd node forward
    even.next = odd.next; // points even.next
    even = even.next; // moves even forward
  }

  odd.next = evenHead; // connects two lists. odd in front so odd.next points to even list

  // odd is at end of odd list, even is at end of even list
  return head;
};
