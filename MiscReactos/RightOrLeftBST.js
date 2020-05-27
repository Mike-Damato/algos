const solution = (arr) => {
  // Type your solution here
  if (arr.length === 0) {
    return '';
  }
  let filtered = arr.filter((elem) => elem !== -1 && elem !== 0);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < filtered.length; i++) {
    if (i % 2 !== 0) {
      leftSum += filtered[i];
    } else {
      rightSum += filtered[i];
    }
  }
  if (leftSum > rightSum) {
    return 'Left';
  } else if (rightSum > leftSum) {
    return 'Right';
  } else {
    return '';
  }
};
