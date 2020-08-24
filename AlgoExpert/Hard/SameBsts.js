function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  if (arrayOne[0] !== arrayTwo[0]) {
    return false;
  }

  let leftOne = getSmaller(arrayOne);
  let leftTwo = getSmaller(arrayTwo);
  let rightOne = getBigger(arrayOne);
  let rightTwo = getBigger(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

const getSmaller = (arr) => {
  let smaller = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      smaller.push(arr[i]);
    }
  }
  return smaller;
};

const getBigger = (arr) => {
  let bigger = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[0]) {
      bigger.push(arr[i]);
    }
  }
  return bigger;
};
