function minRewards(scores) {
  let rewards = new Array(scores.length).fill(1);
  for (let i = 1; i < scores.length; i++) {
    let left = i - 1;
    if (scores[i] > scores[left]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    let right = i + 1;
    if (scores[i] > scores[right]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }
  return rewards.reduce((a, b) => a + b, 0);
}
