class MaxStack {
  constructor() {
    this.stack = [];
  }
  push(x) {
    this.stack.push(x);
    return this.stack;
  }
  pop() {
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  peekMax() {
    return Math.max(...this.stack);
  }
  popMax() {
    const elem = Math.max(...this.stack);
    const index = this.stack.lastIndexOf(elem);
    return this.stack.splice(index, 1)[0];
  }
}
