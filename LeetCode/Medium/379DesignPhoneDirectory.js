class PhoneDirectory {
  constructor(num) {
    this.set = new Set();
    num -= 1;
    while (num >= 0) {
      this.set.add(num);
      num--;
    }
  }
  get() {
    const randomIdx = Math.floor(this.set.size * Math.random());
    const num = [...this.set.values()][randomIdx];
    if (num !== undefined) {
      this.set.delete(num);
      return num;
    }
    return -1;
  }
  check(num) {
    if (this.set.has(num)) {
      return true;
    } else {
      return false;
    }
  }
  release(num) {
    this.set.add(num);
  }
}

//Alternate Solution;

class PhoneDirectory {
  constructor(num) {
    this.nums = [];
    for (let i = num - 1; i >= 0; i--) {
      this.nums.push(i);
    }
    this.directory = new Set(this.nums);
  }
  get() {
    if (this.directory.size === 0) return -1;
    let num = this.directory.values().next().value;
    this.directory.delete(num);
    return num;
  }
  check(num) {
    return this.directory.has(num);
  }
  release(num) {
    this.directory.add(num);
  }
}
//
