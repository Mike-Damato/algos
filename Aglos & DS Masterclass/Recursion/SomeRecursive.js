/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback
*/
const someRecursive = (arr, cb) => {
  let firstVal = arr[0];
  if (!arr.length) {
    return false;
  }
  if (cb(firstVal)) {
    return true;
  }
  return someRecursive(arr.slice(1), cb);
};
