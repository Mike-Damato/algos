var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }
  let answer = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
};
