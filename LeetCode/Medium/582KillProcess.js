var killProcess = function (pid, ppid, kill) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < ppid.length; i++) {
    if (!map.has(ppid[i])) {
      map.set(ppid[i], []);
    }
    map.get(ppid[i]).push(pid[i]);
  }
  dfs(map, kill, ans);
  return ans;
};

const dfs = (map, kill, ans) => {
  ans.push(kill);
  if (!map.has(kill)) {
    return;
  }
  for (let pid of map.get(kill)) {
    dfs(map, pid, ans);
  }
};
