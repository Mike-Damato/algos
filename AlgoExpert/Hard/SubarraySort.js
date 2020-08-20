function subarraySort(array) {
  // Write your code here.
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  let subArrLeft = 0;
  while (minOutOfOrder >= array[subArrLeft]) {
    subArrLeft++;
  }
  let subArrRight = array.length - 1;
  while (maxOutOfOrder <= array[subArrRight]) {
    subArrRight--;
  }
  return [subArrLeft, subArrRight];
}

const isOutOfOrder = (i, num, arr) => {
  if (i === 0) {
    return num > arr[i + 1];
  }
  if (i === arr.length - 1) {
    return num < arr[i - 1];
  }
  return num > arr[i + 1] || num < arr[i - 1];
};
