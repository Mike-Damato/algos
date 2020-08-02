class MyHashSet {
  constructor(size) {
    this.hash = {};
  }
  add(key) {
    if (!this.hash.hasOwnProperty(key)) {
      this.hash[key] = key;
    }
  }

  remove(key) {
    if (this.hash.hasOwnProperty(key)) {
      delete this.hash[key];
    }
  }

  contains(key) {
    if (this.hash.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  }
}
