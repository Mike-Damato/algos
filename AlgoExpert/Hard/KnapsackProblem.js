function knapsackProblem(items, capacity) {
  let dpMatrix = [];
  for (let i = 0; i < items.length + 1; i++) {
    let row = new Array(capacity + 1).fill(0);
    dpMatrix.push(row);
  }

  for (let i = 1; i < items.length + 1; i++) {
    //it is i-1 because we have the extra row at the top of 0's
    let currentWeight = items[i - 1][1];
    let currentValue = items[i - 1][0];

    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight > c) {
        dpMatrix[i][c] = dpMatrix[i - 1][c];
      } else {
        //Max val of row above || max val of row above + currentWeight
        dpMatrix[i][c] = Math.max(
          dpMatrix[i - 1][c],
          dpMatrix[i - 1][c - currentWeight] + currentValue
        );
      }
    }
  }
  return [dpMatrix[items.length][capacity], getKnapsackItems(dpMatrix, items)];
}

const getKnapsackItems = (arr, items) => {
  let ans = [];
  let i = arr.length - 1;
  let c = arr[0].length - 1;

  while (i > 0) {
    if (arr[i][c] === arr[i - 1][c]) {
      i -= 1;
    } else {
      //i-1 because of the "fake" row at the top of 0's
      ans.unshift(i - 1);
      //update c to remove current items weight
      c -= items[i - 1][1];
      i -= 1;
    }
    if (c === 0) break;
  }
  return ans;
};
