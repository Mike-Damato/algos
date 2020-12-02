const smallestStringWithSwaps = (s, pairs) => {
  const map = new Map();
  const ans = [];
  let str = [];
  let idxs = [];
  const visited = new Array(s.length).fill(false);

  const dfs = (i) => {
    if (visited[i]) return;

    visited[i] = true;
    let nodes = map.get(i);
    str.push(s[i]);
    idxs.push(i);
    if (!nodes) return;
    for (const node of nodes) {
      dfs(node);
    }
  };

  for (const [p1, p2] of pairs) {
    if (!map.has(p1)) {
      map.set(p1, []);
    }
    if (!map.has(p2)) {
      map.set(p2, []);
    }
    map.get(p1).push(p2);
    map.get(p2).push(p1);
  }

  for (let i = 0; i < s.length; i++) {
    str = [];
    idxs = [];
    dfs(i);
    str.sort();
    idxs.sort((a, b) => a - b);
    for (let j = 0; j < idxs.length; j++) {
      let idx = idxs[j];
      let char = str[j];
      ans[idx] = char;
    }
  }
  return ans.join('');
};

//Alternate
var smallestStringWithSwaps = function (s, pairs) {
  const map = new Map();
  if (pairs.length === 0) return s;

  for (let i = 0; i < s.length; i++) {
    map.set(i, new Set());
  }

  for (let i = 0; i < pairs.length; i++) {
    let set1 = map.get(pairs[i][0]);
    set1.add(pairs[i][1]);
    let set2 = map.get(pairs[i][1]);
    set2.add(pairs[i][0]);
  }

  let visited = new Array(s.length);
  let ans = [];
  let str = '';

  const dfs = (i, arr) => {
    visited[i] = true;
    str += s[i];
    arr.push(i);
    for (let pos of map.get(i)) {
      if (!visited[pos]) {
        dfs(pos, arr);
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (!visited[i]) {
      str = '';
      let arr = [];
      dfs(i, arr);

      let split = str.split('');
      split.sort();
      arr.sort((a, b) => a - b);

      for (let j = 0; j < arr.length; j++) {
        ans[arr[j]] = split[j];
      }
    }
  }
  return ans.join('');
};
