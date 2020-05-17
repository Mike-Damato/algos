var replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = max;
    if (current > max) {
      max = current;
    }
  }
  return arr;
};

//
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.max(...arr.slice(i + 1));
  }
  arr[arr.length - 1] = -1;
  return arr;
};
