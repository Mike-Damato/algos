var canReach = function (arr, start) {
  const queue = [start];
  let current;
  while (queue.length) {
    current = queue.shift();

    if (arr[current] === 0) return true;

    if (arr[current] < 0) continue;

    if (current + arr[current] < arr.length) {
      queue.push(current + arr[current]);
    }

    if (current - arr[current] >= 0) {
      queue.push(current - arr[current]);
    }
    //Mark visited
    arr[current] = -arr[current];
  }
  return false;
};
