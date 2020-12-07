class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.stream = nums;
  }
  add(val) {
    this.stream.push(val);
    return this.stream.sort((a, b) => b - a)[this.k - 1];
  }
}
