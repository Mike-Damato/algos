//O(N^2) Time | O(N) Space
function minimumAreaRectangle(points) {
  // Write your code here.
  const cols = makeCols(points);
  let minArea = Infinity;
  const edges = new Map();
  //Map stores keys as nums so no need to parseInt
  const sortedCols = [...cols.keys()].sort((a, b) => a - b);

  for (const x of sortedCols) {
    const yValsInCol = cols.get(x).sort((a, b) => a - b);

    for (let i = 0; i < yValsInCol.length; i++) {
      const y2 = yValsInCol[i];
      for (let prev = 0; prev < i; prev++) {
        const y1 = yValsInCol[prev];
        const coord = `${y1}-${y2}`;

        if (edges.has(coord)) {
          const currentArea = (x - edges.get(coord)) * (y2 - y1);
          minArea = Math.min(minArea, currentArea);
        }

        edges.set(coord, x);
      }
    }
  }

  return minArea === Infinity ? 0 : minArea;
}

const makeCols = (points) => {
  const map = new Map();
  for (const point of points) {
    const [x, y] = point;
    if (!map.has(x)) {
      map.set(x, []);
    }
    map.get(x).push(y);
  }
  return map;
};

//Alternate Solution
//O(N^2) Time | O(N) Space

function minimumAreaRectangle(points) {
  // Write your code here.
  let minArea = Infinity;
  const set = makeSet(points);

  for (let i = 0; i < points.length; i++) {
    const [x2, y2] = points[i];
    for (let prev = 0; prev < i; prev++) {
      const [x1, y1] = points[prev];
      const samePoints = x1 === x2 || y1 === y2;

      if (samePoints) continue;

      const point1Diagonal = set.has(makeKey(x1, y2));
      const point2Diagonal = set.has(makeKey(x2, y1));
      const canMakeRectangle = point1Diagonal && point2Diagonal;

      if (canMakeRectangle) {
        const currentArea = Math.abs(x2 - x1) * Math.abs(y2 - y1);
        minArea = Math.min(minArea, currentArea);
      }
    }
  }

  return minArea === Infinity ? 0 : minArea;
}

const makeSet = (points) => {
  const set = new Set();
  for (const point of points) {
    const [x, y] = point;
    const key = makeKey(x, y);
    set.add(key);
  }
  return set;
};

const makeKey = (x, y) => {
  return `${x}-${y}`;
};
