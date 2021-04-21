function laptopRentals(times) {
  // Write your code here.
  const startSorted = [...times].sort((a, b) => a[0] - b[0]);
  const endSorted = times.sort((a, b) => a[1] - b[1]);
  let total = 0;
  let endPtr = 0;

  for (let i = 0; i < times.length; i++) {
    let start = startSorted[i][0];
    let end = endSorted[endPtr][1];

    if (end <= start) {
      endPtr++;
    } else {
      total += 1;
    }
  }
  return total;
}
