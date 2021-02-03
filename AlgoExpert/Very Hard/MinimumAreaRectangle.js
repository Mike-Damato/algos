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
