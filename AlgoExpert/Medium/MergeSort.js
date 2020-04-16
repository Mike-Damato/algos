function mergeSort(array) {
  // Write your code here.
  if (array.length < 2) {
    return array;
  }
  const midPoint = Math.floor(array.length) / 2;
  const leftArr = array.slice(0, midPoint);
  const rightArr = array.slice(midPoint);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let answer = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      answer.push(left.shift());
    } else {
      answer.push(right.shift());
    }
  }
  // while(left.length){
  // 	answer.push(left.shift())
  // }
  // while(right.length){
  // 	answer.push(right.shift())
  // }
  return answer.concat(left).concat(right);
}
