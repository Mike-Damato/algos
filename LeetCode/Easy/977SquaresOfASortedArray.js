//Solution 1
const sortedSquares = (A) => {
  for (let i = 0; i < A.length; i++) {
    A[i] = Math.pow(A[i], 2);
  }
  return A.sort((a, b) => a - b);
};

//Alternate 1 Line solution
const sortedSquares = (nums) => {
  return nums.map((num) => (num *= num)).sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  nums.forEach((num, i) => (nums[i] = num * num));
  return nums.sort((a, b) => a - b);
};

//Solution 2
const sortedSquares2 = (A) => {
  let squares = [];
  let idx = A.length - 1;
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    let leftNum = A[i] * A[i];
    let rightNum = A[j] * A[j];
    if (leftNum > rightNum) {
      squares[idx] = leftNum;
      i++;
    } else {
      squares[idx] = rightNum;
      j--;
    }
    idx--;
  }
  return squares;
};
