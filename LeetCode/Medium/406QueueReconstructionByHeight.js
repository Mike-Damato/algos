var reconstructQueue = function (people) {
  // const compare = (a, b) => {
  //   if (a[0] !== b[0]) {
  //     return b[0] - a[0]
  //   } else if (a[1] !== b[1]) {
  //     return a[1] - b[1]
  //   }
  // }
  const compare = ([h1, k1], [h2, k2]) => {
    //sort by height descending
    if (h1 !== h2) {
      return h2 - h1;
    }
    //then sort by difference in people taller then person ascending
    else if (k1 !== k2) {
      return k1 - k2;
    }
  };

  people.sort(compare);
  let ans = [];
  for (const person of people) {
    //loop thru sorted array then insert appropriate person to appropriate idx
    ans.splice(person[1], 0, person);
  }
  return ans;
};

/*

example 1:

[[5,0], [5,2], [5,1]] -> [[5,0], [5,1], [5,2]]
so we sort by height (idx 0) descending,
then sort by taller or equal height in front (idx 1) ascending

example 2:

[[5,1], [4,1], [5,0]] -> [[5,0], [4,1], [5,1]]

*/
