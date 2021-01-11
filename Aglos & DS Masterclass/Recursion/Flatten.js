/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened
*/

const flatten = (arr) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans = ans.concat(flatten(arr[i]));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};
