var reconstructQueue = function (people) {
  const compare = ([h1, k1], [h2, k2]) => {
    if (h1 !== h2) {
      return h2 - h1;
    } else if (k1 !== k2) {
      return k1 - k2;
    }
  };

  people.sort(compare);
  let ans = [];
  for (const person of people) {
    ans.splice(person[1], 0, person);
  }
  return ans;
};
