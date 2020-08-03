class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    //Do the below to access min & max in O(1) time
    let newMinMax = { min: number, max: number };
    if (this.minMaxStack.length > 0) {
      let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(number, lastMinMax.min);
      newMinMax.max = Math.max(number, lastMinMax.max);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
