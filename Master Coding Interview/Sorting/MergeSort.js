const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let ans = [];
  let leftPtr = 0;
  let rightPtr = 0;
  while (leftPtr < left.length && rightPtr < right.length) {
    if (left[leftPtr] < right[rightPtr]) {
      ans.push(left[leftPtr]);
      leftPtr++;
    } else {
      ans.push(right[rightPtr]);
      rightPtr++;
    }
  }
  return ans.concat(left.slice(leftPtr)).concat(right.slice(rightPtr));
}

const answer = mergeSort(numbers);
console.log(answer);

//Alternate
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let ans = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ans.push(left.shift());
    } else {
      ans.push(right.shift());
    }
  }
  return ans.concat(left).concat(right);
}

const answer = mergeSort(numbers);
console.log(answer);
