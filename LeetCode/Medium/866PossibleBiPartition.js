var possibleBipartition = function (N, dislikes) {
  let visited = {}; // {person: [enemies]} adj list
  for (let i = 0; i < dislikes.length; i++) {
    const [friend, enemy] = dislikes[i];

    if (visited.hasOwnProperty(friend)) {
      visited[friend].push(enemy);
    } else {
      visited[friend] = [enemy];
    }
    if (visited.hasOwnProperty(enemy)) {
      visited[enemy].push(friend);
    } else {
      visited[enemy] = [friend];
    }
  }
  let crew = new Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    if (crew[i] === 0 && !dfs(i, visited, crew, 1)) {
      return false;
    }
  }
  return true;
};
function dfs(node, visited, crew, team) {
  if (crew[node] === 0) {
    // assign team
    crew[node] = team;
  } else {
    // team assigned already, compare if on the right team
    return crew[node] === team;
  }

  if (!visited.hasOwnProperty(node)) {
    // new node
    crew[node] = team;
    return true;
  }
  for (let i = 0; i < visited[node].length; i++) {
    // opposite team
    if (!dfs(visited[node][i], visited, crew, -team)) {
      return false;
    }
  }
  return true;
}
