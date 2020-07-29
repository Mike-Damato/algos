//Using a hash
var findRestaurant = function (list1, list2) {
  let hash = {};
  for (let i = 0; i < list1.length; i++) {
    let name = list1[i];
    hash[name] = i;
  }

  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
    let name = list2[i];
    if (hash.hasOwnProperty(name)) {
      min = Math.min(min, hash[name] + i);
    }
  }
  return list2.filter((place, i) => hash[place] + i === min);
};

// Using a map
const findRestaurant = (list1, list2) => {
  let map = new Map();
  let ans = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    let name = list1[i];
    map.set(name, i);
  }

  for (let i = 0; i < list2.length; i++) {
    let name = list2[i];
    if (map.has(name)) {
      let idx = map.get(name);
      if (min > idx + i) {
        min = idx + i;
        ans = [];
      }
      if (min === idx + i) {
        ans.push(name);
      }
    }
  }
  return ans;
};
