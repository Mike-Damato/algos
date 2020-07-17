function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let minDiff = Infinity;
  let currDiff = Infinity;
  let ptsAtDiff;
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < arrayOne.length && ptr2 < arrayTwo.length) {
    let firstNum = arrayOne[ptr1];
    let secondNum = arrayTwo[ptr2];
    if (firstNum < secondNum) {
      currDiff = secondNum - firstNum;
      ptr1++;
    } else if (secondNum < firstNum) {
      currDiff = firstNum - secondNum;
      ptr2++;
    } else {
      return [firstNum, secondNum];
    }
    if (minDiff > currDiff) {
      minDiff = currDiff;
      ptsAtDiff = [firstNum, secondNum];
    }
  }
  return ptsAtDiff;
}
