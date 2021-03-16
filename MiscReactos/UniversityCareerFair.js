const universityCareerFair = (arrivals, duration) => {
  const merged = merge(arrivals, duration).sort(
    (a, b) => a[0] + a[1] - (b[0] + b[1])
  );

  let ans = 0;
  let end = -Infinity;
  for (let i = 0; i < merged.length; i++) {
    const [arrive, dur] = merged[i];
    if (arrive >= end) {
      ans += 1;
      end = arrive + dur;
    }
  }
  return ans;
};

const merge = (arr1, arr2) => {
  const output = [];
  for (let i = 0; i < arr1.length; i++) {
    output.push([arr1[i], arr2[i]]);
  }
  return output;
};
