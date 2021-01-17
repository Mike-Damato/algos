var countVowelStrings = function (n) {
  let total = 0;

  const backtrack = (n, start) => {
    if (n === 0) {
      total += 1;
      return;
    }
    //i < 5 because aeiou is 5 characters
    for (let i = start; i < 5; i++) {
      backtrack(n - 1, i);
    }
  };

  backtrack(n, 0);
  return total;
};
