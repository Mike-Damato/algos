const firstRecurringChar = (arr) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = arr[i];
    } else {
      return hash[arr[i]];
    }
  }
  return undefined;
};

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringChar(arr3));
