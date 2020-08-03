class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  reset() {
    return this.nums;
  }
  shuffle() {
    let copy = [...this.nums];
    for (let i = 0; i < this.nums.length; i++) {
      let randIdx = Math.floor(Math.random() * this.nums.length);
      [copy[i], copy[randIdx]] = [copy[randIdx], copy[i]];
    }
    return copy;
  }
}
