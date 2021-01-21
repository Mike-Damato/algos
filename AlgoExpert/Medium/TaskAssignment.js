function taskAssignment(k, tasks) {
  const ans = [];
  tasks.sort((a, b) => a - b);
  let left = 0;
  let right = tasks.length - 1;
  while (k > 0) {
    ans.push([left, right]);
    left++;
    right--;
    k--;
  }
  return ans;
}
