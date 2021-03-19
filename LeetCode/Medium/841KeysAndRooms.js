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
