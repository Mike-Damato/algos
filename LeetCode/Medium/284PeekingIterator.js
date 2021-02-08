class PeekingIterator {
  constructor(iterator) {
    this.stack = [];
    while (iterator.hasNext()) {
      this.stack.unshift(iterator.next());
    }
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  next() {
    return this.stack.pop();
  }
  hasNext() {
    return this.stack.length !== 0;
  }
}
