function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  if (args.length < 1) {
    return false;
  }
  let yungArgs = [...args];
  let hash = {};
  for (const arg of yungArgs) {
    if (hash.hasOwnProperty(arg)) {
      return true;
    } else {
      hash[arg] = 1;
    }
  }

  return false;
}
