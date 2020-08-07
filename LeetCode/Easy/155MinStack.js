class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    let newMinMax = { min: x };
    if (this.minStack.length > 0) {
      let lastMinMax = this.minStack[this.minStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, x);
    }
    this.minStack.push(newMinMax);
    this.stack.push(x);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }
  //top = peek
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1].min;
  }
}
