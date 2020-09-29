//O(n^2) time | O(n^2) space
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

const getCoordsTable = (coords) => {
  let coordsTable = {};

  for (const coord1 of coords) {
    const dirs = {
      [UP]: [],
      [RIGHT]: [],
      [DOWN]: [],
      [LEFT]: [],
    };
    for (const coord2 of coords) {
      const coord2Direction = getCoordDirection(coord1, coord2);

      if (dirs.hasOwnProperty(coord2Direction)) {
        dirs[coord2Direction].push(coord2);
      }
    }
    const coord1String = coordToString(coord1);
    coordsTable[coord1String] = dirs;
  }
  return coordsTable;
};

const getCoordDirection = (coord1, coord2) => {
  let [x1, y1] = coord1;
  let [x2, y2] = coord2;

  if (y2 === y1) {
    if (x2 > x1) {
      return RIGHT;
    } else if (x2 < x1) {
      return LEFT;
    }
  } else if (x2 === x1) {
    if (y2 > y1) {
      return UP;
    } else if (y2 < y1) {
      return DOWN;
    }
  }
  return '';
};

const getRectangleCount = (coords, table) => {
  let count = 0;
  for (const coord of coords) {
    count += dfs(coord, table, UP, coord);
  }
  return count;
};

const dfs = (coord, table, dir, origin) => {
  let coordString = coordToString(coord);
  if (dir === LEFT) {
    let found = table[coordString][LEFT].includes(origin);
    return found ? 1 : 0;
  } else {
    let count = 0;
    let nextDir = getNextDir(dir);
    for (const nextCoord of table[coordString][dir]) {
      count += dfs(nextCoord, table, nextDir, origin);
    }
    return count;
  }
};

const getNextDir = (dir) => {
  if (dir === UP) return RIGHT;
  if (dir === RIGHT) return DOWN;
  if (dir === DOWN) return LEFT;
  return '';
};

const coordToString = (coord) => {
  let [x, y] = coord;
  return `${x}-${y}`;
};

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

//Optimized
//O(n^2) time | O(n) space
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

const getCoordsTable = (coords) => {
  let coordsTable = { x: {}, y: {} };
  for (const coord of coords) {
    let [x, y] = coord;
    coordsTable.x[x] = coordsTable.x[x] || [];
    coordsTable.x[x].push(coord);
    coordsTable.y[y] = coordsTable.y[y] || [];
    coordsTable.y[y].push(coord);
  }
  return coordsTable;
};

const getRectangleCount = (coords, table) => {
  let count = 0;
  for (const coord of coords) {
    let origin = coord[1];
    count += dfs(coord, table, UP, origin);
  }
  return count;
};

const dfs = (coord1, table, dir, origin) => {
  let [x1, y1] = coord1;
  if (dir === DOWN) {
    let neighbors = table.x[x1];
    for (const coord2 of neighbors) {
      let lowerRightY = coord2[1];
      if (lowerRightY === origin) {
        return 1;
      }
    }
    return 0;
  } else {
    let count = 0;
    if (dir === UP) {
      let neighbors = table.x[x1];
      for (const coord2 of neighbors) {
        let y2 = coord2[1];
        let isAbove = y2 > y1;
        if (isAbove) {
          count += dfs(coord2, table, RIGHT, origin);
        }
      }
    } else if (dir === RIGHT) {
      let neighbors = table.y[y1];
      for (const coord2 of neighbors) {
        let x2 = coord2[0];
        let isRight = x2 > x1;
        if (isRight) {
          count += dfs(coord2, table, DOWN, origin);
        }
      }
    }
    return count;
  }
};

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';

//Optimized Further for Readability
//O(n^2) time | O(n) space
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

const getCoordsTable = (coords) => {
  let coordsTable = new Set();
  for (const coord of coords) {
    let coordString = coordToString(coord);
    coordsTable.add(coordString);
  }
  console.log(coordsTable);
  return coordsTable;
};

const getRectangleCount = (coords, table) => {
  let count = 0;
  for (const [x1, y1] of coords) {
    for (const [x2, y2] of coords) {
      if (!inUpperRight([x1, y1], [x2, y2])) {
        continue;
      }
      let upperCoordString = coordToString([x1, y2]);
      let rightCoordString = coordToString([x2, y1]);
      if (table.has(upperCoordString) && table.has(rightCoordString)) {
        count += 1;
      }
    }
  }
  return count;
};

const inUpperRight = (coord1, coord2) => {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  return x2 > x1 && y2 > y1;
};

const coordToString = (coord) => {
  let [x, y] = coord;
  return `${x}-${y}`;
};
