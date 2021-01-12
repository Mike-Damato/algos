class MovingAverage {
  constructor(size) {
    this.size = size;
    this.stream = [];
  }
  next(val) {
    this.stream.push(val);
    if (this.stream.length > this.size) {
      this.stream.shift();
    }
    return this.stream.reduce((a, b) => a + b, 0) / this.stream.length;
  }
}
