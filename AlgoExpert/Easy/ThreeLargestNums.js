//Solution 1
function findThreeLargestNumbers(array) {
  let answerArr = [array[0], array[1], array[2]].sort((a, b) => a - b);
  for (let i = 3; i < array.length; ++i) {
    let num = array[i];
    answerArr.push(num);
    answerArr.sort((a, b) => a - b).shift();
  }
  return answerArr;
}

//Solution 2
function findThreeLargestNumbers(array) {
  // Write your code here.
  let smallest = -Infinity;
  let mid = -Infinity;
  let biggest = -Infinity;
  //iterate through given array
  //check idx is bigger than answer array num
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num > biggest) {
      smallest = mid;
      mid = biggest;
      biggest = num;
    } else if (num > mid) {
      smallest = mid;
      mid = num;
    } else if (num > smallest) {
      smallest = num;
    }
  }
  return [smallest, mid, biggest];
}
