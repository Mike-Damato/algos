class FirstUnique {
  constructor(nums) {
    this.map = new Map();

    for (const num of nums) {
      this.map.set(num, (this.map.get(num) || 0) + 1);
    }
  }
  showFirstUnique() {
    for (const [key, val] of this.map) {
      if (val === 1) return key;
    }
    return -1;
  }
  add(value) {
    this.map.set(value, (this.map.get(value) || 0) + 1);
  }
}
