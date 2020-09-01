var accountsMerge = function (accounts) {
  let graph = {};
  let emailToName = {};

  for (const account of accounts) {
    const [name, ...emails] = account;
    emailToName[emails[0]] = name;

    for (const email of emails) {
      graph[emails[0]] = (graph[emails[0]] || new Set()).add(email);
      graph[email] = (graph[email] || new Set()).add(emails[0]);
    }
  }

  let seen = new Set();
  let ans = [];

  //DFS
  for (let email of Object.keys(graph)) {
    if (!seen.has(email)) {
      let stack = [email];
      seen.add(email);
      let acct = [email];
      while (stack.length) {
        let start = stack.pop();
        for (const item of graph[start]) {
          if (!seen.has(item)) {
            acct.push(item);
            stack.push(item);
            seen.add(item);
          }
        }
      }
      acct.sort();
      acct.unshift(emailToName[email]);
      ans.push(acct);
    }
  }
  return ans;
};
