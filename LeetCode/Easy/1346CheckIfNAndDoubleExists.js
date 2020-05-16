//Naive brute force O(n^2)

var checkIfExist = function (arr) {
  if (arr === null || arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k] * 2 || arr[i] === arr[k] / 2) {
        return true;
      }
    }
  }
  return false;
};

//O(n) time with O(n) space
const checkIfExist = (arr) => {
  if (arr === null || arr.length === 0) {
    return false;
  }
  let mySet = new Set();
  for (const num of arr) {
    if (mySet.has(num / 2) || mySet.has(num * 2)) {
      return true;
    } else {
      mySet.add(num);
    }
  }
  return false;
};
