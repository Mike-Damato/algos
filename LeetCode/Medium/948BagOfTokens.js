var bagOfTokensScore = function (tokens, P) {
  tokens.sort((a, b) => a - b);
  let max = 0;
  let count = 0;
  let left = 0;
  let right = tokens.length - 1;
  while (left <= right) {
    if (P >= tokens[left]) {
      count++;
      P -= tokens[left];
      left++;
      max = Math.max(max, count);
    } else if (count > 0) {
      count--;
      P += tokens[right];
      right--;
    } else {
      return max;
    }
  }
  return max;
};
