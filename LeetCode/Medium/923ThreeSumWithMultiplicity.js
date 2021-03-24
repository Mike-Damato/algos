var threeSumMulti = function (A, target) {
  const hash = {};
  let trips = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const total = A[i] + A[j];
      const diff = target - total;
      if (hash[diff]) trips += hash[diff];
    }

    if (!hash[A[i]]) hash[A[i]] = 0;

    hash[A[i]]++;
  }

  return trips % (Math.pow(10, 9) + 7);
};
