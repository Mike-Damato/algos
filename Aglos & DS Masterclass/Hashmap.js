class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let idx = this.hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
    return idx;
  }
  get(key){
    let idx = this.hash(key)
    if(this.keyMap[idx]){
      for(let i = 0; i < this.keyMap[idx].length i++){
        if(this.keyMap[idx][i][0] === key){
          return this.keyMap[idx][i][1]
        }
      }
    }
    return undefined;
  }
}
