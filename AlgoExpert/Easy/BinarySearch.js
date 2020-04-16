//Solution 1
function binarySearch(array, target) {
  // Write your code here.
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftPointer, rightPointer) {
  //Array is sorted therefore can perform binary search
  while (leftPointer <= rightPointer) {
    const midPoint = Math.floor((leftPointer + rightPointer) / 2);
    if (target === array[midPoint]) {
      return midPoint;
    } else if (target < array[midPoint]) {
      rightPointer = midPoint - 1;
    } else {
      leftPointer = midPoint + 1;
    }
  }
  return -1;
}

//Solution 2
function binarySearch(array, target) {
  // Write your code here.
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    let midPoint = Math.floor((leftPointer + rightPointer) / 2);
    if (target === array[midPoint]) {
      return midPoint;
    } else if (target < array[midPoint]) {
      rightPointer = midPoint - 1;
    } else {
      leftPointer = midPoint + 1;
    }
  }
  return -1;
}
