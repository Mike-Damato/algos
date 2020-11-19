//O(v^2 + e) time & O(v) space
function dijkstrasAlgorithm(start, edges) {
  const ans = new Array(edges.length).fill(Infinity);
  const queue = [[start, 0]];
  const visited = new Set();
  ans[start] = 0;
  while (queue.length) {
    let [node, dist] = queue.shift();
    visited.add(node);

    //If our node is unreachable, skip it.
    if (!edges[node].length) continue;

    for (let i = 0; i < edges[node].length; i++) {
      let edge = edges[node][i];
      let [target, targetDist] = edge;

      //get the smallest cost to travel from node to node
      let currentDist = ans[target];
      let newDist = dist + targetDist;
      if (newDist < currentDist) {
        ans[target] = newDist;
      }

      //If we have not seen this node before add it to the queue for processing
      if (!visited.has(target)) {
        queue.push([target, ans[target]]);
      }
    }
  }
  return ans.map((val) => (val === Infinity ? -1 : val));
}

//Slightly updated syntax
function dijkstrasAlgorithm(start, edges) {
  const ans = new Array(edges.length).fill(Infinity);
  const queue = [[start, 0]];
  const visited = new Set();
  ans[start] = 0;
  while (queue.length) {
    let [node, dist] = queue.shift();
    visited.add(node);

    //If our node is unreachable, skip it.
    if (!edges[node].length) continue;

    for (const neighbor of edges[node]) {
      let [target, targetDist] = neighbor;
      //Get smallest cost to travel from node to node
      let currentDist = ans[target];
      let newDist = dist + targetDist;
      if (newDist < currentDist) {
        ans[target] = newDist;
      }

      if (!visited.has(target)) {
        queue.push([target, ans[target]]);
      }
    }
  }
  return ans.map((val) => (val === Infinity ? -1 : val));
}
