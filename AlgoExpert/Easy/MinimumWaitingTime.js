function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < queries.length; i++) {
    total += queries[i] * (queries.length - (i + 1));
  }
  return total;
}
