var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i) {
      return h;
    }
    h = Math.min(i + 1, citations[i]);
  }
  return h;
};
