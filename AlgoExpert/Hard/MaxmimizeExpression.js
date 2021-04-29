function maximizeExpression(arr) {
  if (arr.length < 4) return 0;
  let max = -Infinity;
  for (let a = 0; a < arr.length - 3; a++) {
    for (let b = a + 1; b < arr.length - 2; b++) {
      for (let c = b + 1; c < arr.length - 1; c++) {
        for (let d = c + 1; d < arr.length; d++) {
          let current = arr[a] - arr[b] + arr[c] - arr[d];
          max = Math.max(max, current);
        }
      }
    }
  }
  return max;
}

//Optimized to O(N) Time | O(N) Space

function maximizeExpression(arr) {
  if (arr.length < 4) return 0;

  const maxOfA = new Array(1).fill(arr[0]);
  const maxAMinusB = new Array(1).fill(-Infinity);
  const maxAMinusBPlusC = new Array(2).fill(-Infinity);
  const maxAMinusBPlusCminusD = new Array(3).fill(-Infinity);

  for (let i = 1; i < arr.length; i++) {
    const currentMax = Math.max(maxOfA[i - 1], arr[i]);
    maxOfA.push(currentMax);
  }

  for (let i = 1; i < arr.length; i++) {
    const currentMax = Math.max(maxAMinusB[i - 1], maxOfA[i - 1] - arr[i]);
    maxAMinusB.push(currentMax);
  }

  for (let i = 2; i < arr.length; i++) {
    const currentMax = Math.max(
      maxAMinusBPlusC[i - 1],
      maxAMinusB[i - 1] + arr[i]
    );
    maxAMinusBPlusC.push(currentMax);
  }

  for (let i = 3; i < arr.length; i++) {
    const currentMax = Math.max(
      maxAMinusBPlusCminusD[i - 1],
      maxAMinusBPlusC[i - 1] - arr[i]
    );
    maxAMinusBPlusCminusD.push(currentMax);
  }

  return maxAMinusBPlusCminusD[maxAMinusBPlusCminusD.length - 1];
}
