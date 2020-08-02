class MyHashSet {
  constructor() {
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

//Alternate
class MyHashSet {
  constructor() {
    this.set = [];
  }
  add(key) {
    let found = false;
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        found = true;
        break;
      }
    }
    if (found === false) {
      this.set.push(key);
    }
  }

  remove(key) {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        this.set.splice(i, 1);
        break;
      }
    }
  }

  contains(key) {
    return this.set.includes(key);
  }
}
