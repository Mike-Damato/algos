const fibRecursive = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibRecursive(num - 1) + fibRecursive(num - 2);
  }
};
