class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    (this.top = null), (this.bottom = null), (this.length = 0);
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    //If stack is empty
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    //else stack is NOT empty
    else {
      //holding pointner = old head
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    //returning this just returns the entire stack
    return this;
  }
  pop() {
    //if stack is empty
    if (!this.top) {
      return null;
    }
    //if there is only 1 item || popping last item
    if (this.top === this.bottom) {
      this.bottom = 1;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('twitter');
myStack.peek();
myStack.pop();
// myStack.pop();

myStack.isEmpty();
