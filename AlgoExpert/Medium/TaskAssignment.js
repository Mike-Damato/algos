function taskAssignment(k, tasks) {
  // Write your code here.
  const ans = [];
  const map = buildMap(tasks);
  const sorted = [...tasks].sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    const task1Duration = sorted[i];
    const task1Idxs = map.get(sorted[i]);
    const task1Idx = task1Idxs.pop();

    const task2Sorted = tasks.length - 1 - i;
    const task2Duration = sorted[task2Sorted];
    const task2Idxs = map.get(task2Duration);
    const task2Idx = task2Idxs.pop();

    ans.push([task1Idx, task2Idx]);
  }
  return ans;
}

const buildMap = (tasks) => {
  const map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (!map.has(tasks[i])) {
      map.set(tasks[i], [i]);
    } else {
      map.get(tasks[i]).push(i);
    }
  }
  return map;
};
