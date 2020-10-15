class ThroneInheritance {
  constructor(kingName) {
    this.king = kingName;
    this.map = new Map();
    this.dead = new Set();
  }
  birth(parentName, childName) {
    if (!this.map.has(parentName)) {
      this.map.set(parentName, []);
    }
    this.map.get(parentName).push(childName);
  }
  death(name) {
    this.dead.add(name);
  }
  getInheritanceOrder(person = this.king, arr = []) {
    if (!this.dead.has(person)) {
      arr.push(person);
    }
    if (this.map.has(person)) {
      for (const child of this.map.get(person)) {
        this.getInheritanceOrder(child, arr);
      }
    }
    return arr;
  }
}
