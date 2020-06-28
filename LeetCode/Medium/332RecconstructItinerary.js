var findItinerary = function (tickets) {
  const ans = [];
  const hash = {};
  for (let i = 0; i < tickets.length; i++) {
    let tix = tickets[i];
    //If the airport isn't in our hash setup container array to store connections
    if (!hash.hasOwnProperty(tix[0])) {
      hash[tix[0]] = [];
    }
    //Push all connections to corresponding airport
    hash[tix[0]].push(tix[1]);
  }

  /*
  With input of this:
  [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
  Our adj list will look like this after the loop:
  { MUC: [ 'LHR' ], JFK: [ 'MUC' ], SFO: [ 'SJC' ], LHR: [ 'SFO' ] }

  We start at JFK so with the above input we go JFK -> MUC -> LHR -> SFO -> SJC
  */

  for (const key in hash) {
    hash[key].sort();
  }

  const dfs = (airport) => {
    const dest = hash[airport];
    while (dest && dest.length) {
      const newDep = dest.shift();
      dfs(newDep);
    }
    ans.push(airport);
  };
  dfs('JFK');

  return ans.reverse();
};
