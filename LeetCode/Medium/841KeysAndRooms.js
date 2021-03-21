var canVisitAllRooms = function (rooms) {
  const set = new Set([0]);
  let room = rooms[0];

  const dfs = (room) => {
    while (room.length) {
      let lastRoom = room.pop();
      set.add(lastRoom);
      dfs(rooms[lastRoom]);
    }
  };

  dfs(room);

  return set.size === rooms.length;
};

//Another Approach

var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const dfs = (node, visited) => {
    visited.add(node);
    for (const room of rooms[node]) {
      if (!visited.has(room)) {
        dfs(room, visited);
      }
    }
  };

  dfs(0, visited);
  return visited.size === rooms.length;
};
