var isOneEditDistance = function (s, t) {
  const longer = s.length > t.length ? s : t;
  const shorter = s.length > t.length ? t : s;

  if (longer.length - shorter.length > 1) return false;

  let count = 0;
  let i = 0;
  let j = 0;

  while (i < longer.length) {
    if (longer[i] !== shorter[j]) {
      count++;

      if (longer.length > shorter.length) {
        i++;
        continue;
      }
    }
    i++;
    j++;
  }
  return count === 1;
};
