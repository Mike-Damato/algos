var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }

  let hash = {};
  for (const char of tasks) {
    if (hash.hasOwnProperty(char)) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  let max = 0;
  for (const task in hash) {
    max = Math.max(max, hash[task]);
  }

  let count = 0;
  for (const task in hash) {
    if (hash[task] === max) {
      count++;
    }
  }

  return Math.max((max - 1) * (n + 1) + count, tasks.length);
};
