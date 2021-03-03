//One line solution (subOptimal due to sorting)
function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((num) => num * num).sort((a, b) => a - b);
}

//Optimized Solution O(N) Time | O(N) Space
function sortedSquaredArray(array) {
  const arr = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerVal = array[left];
    let biggerVal = array[right];
    if (Math.abs(smallerVal) > Math.abs(biggerVal)) {
      arr[i] = smallerVal * smallerVal;
      left++;
    } else {
      arr[i] = biggerVal * biggerVal;
      right--;
    }
  }
  return arr;
}
