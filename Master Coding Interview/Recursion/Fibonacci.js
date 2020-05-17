const fibIterative = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n];
}
fibIterative(8)

const fibRecursive = (n) => {
  if (n < 2) {
    return n
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2)
  }
}

fibRecursive(8)
