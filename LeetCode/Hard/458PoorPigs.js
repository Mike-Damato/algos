var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let states = Math.floor(minutesToTest / minutesToDie) + 1;
  return Math.ceil(Math.log(buckets) / Math.log(states));
};
