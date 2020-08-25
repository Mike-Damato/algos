var mincostTickets = function (days, costs) {
  let set = new Set(days);
  let arr = new Array(366).fill(0);

  for (let i = 1; i < 366; i++) {
    if (!set.has(i)) {
      arr[i] = arr[i - 1];
      continue;
    }
    arr[i] = Math.min(
      (arr[i - 1] || 0) + costs[0],
      (arr[i - 7] || 0) + costs[1],
      (arr[i - 30] || 0) + costs[2]
    );
  }
  return arr.pop();
};
