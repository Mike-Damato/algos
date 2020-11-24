class Node {
  constructor(row, col, value) {
    this.id = row.toString() + '-' + col.toString();
    this.row = row;
    this.col = col;
    this.value = value;
    this.distanceFromStart = Infinity;
    this.estimatedDistanceToEnd = Infinity;
    this.cameFrom = null;
  }
}

function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const nodes = initializeNodes(graph);

  const startNode = nodes[startRow][startCol];
  const endNode = nodes[endRow][endCol];

  startNode.distanceFromStart = 0;
  startNode.estimatedDistanceToEnd = calculateManhattanDistance(
    startNode,
    endNode
  );

  const nodesToVisit = new MinHeap([startNode]);

  while (!nodesToVisit.isEmpty()) {
    let currentMinDistanceNode = nodesToVisit.remove();

    if (currentMinDistanceNode === endNode) break;

    const neighbors = getNeighbors(currentMinDistanceNode, nodes);

    for (const neighbor of neighbors) {
      if (neighbor.value === 1) continue;

      const tentativeDistanceToNeighbor =
        currentMinDistanceNode.distanceFromStart + 1;
      if (tentativeDistanceToNeighbor >= neighbor.distanceFromStart) continue;

      neighbor.cameFrom = currentMinDistanceNode;
      neighbor.distanceFromStart = tentativeDistanceToNeighbor;
      neighbor.estimatedDistanceToEnd =
        tentativeDistanceToNeighbor +
        calculateManhattanDistance(neighbor, endNode);

      if (!nodesToVisit.containsNode(neighbor)) {
        nodesToVisit.insert(neighbor);
      } else {
        nodesToVisit.update(neighbor);
      }
    }
  }

  return reconstructPath(endNode);
}

const initializeNodes = (graph) => {
  const nodes = [];
  for (const [i, row] of graph.entries()) {
    nodes.push([]);
    for (const [j, value] of row.entries()) {
      const node = new Node(i, j, value);
      nodes[i].push(node);
    }
  }
  return nodes;
};

const calculateManhattanDistance = (currentNode, endNode) => {
  const currentRow = currentNode.row;
  const currentCol = currentNode.col;
  const endRow = endNode.row;
  const endCol = endNode.col;

  return Math.abs(currentRow - endRow) + Math.abs(currentCol - endCol);
};

const getNeighbors = (node, nodes) => {
  const neighbors = [];
  const numRows = nodes.length;
  const numCols = nodes[0].length;

  const row = node.row;
  const col = node.col;

  //down
  if (row < numRows - 1) {
    neighbors.push(nodes[row + 1][col]);
  }
  //up
  if (row > 0) {
    neighbors.push(nodes[row - 1][col]);
  }
  //right
  if (col < numCols - 1) {
    neighbors.push(nodes[row][col + 1]);
  }
  //left
  if (col > 0) {
    neighbors.push(nodes[row][col - 1]);
  }

  return neighbors;
};

const reconstructPath = (endNode) => {
  if (endNode.cameFrom === null) return [];

  let currentNode = endNode;
  const path = [];
  while (currentNode !== null) {
    path.push([currentNode.row, currentNode.col]);
    currentNode = currentNode.cameFrom;
  }
  path.reverse();
  return path;
};

class MinHeap {
  constructor(arr) {
    this.nodePositionsInHeap = arr.reduce((obj, node, i) => {
      obj[node.id] = i;
      return obj;
    }, {});
    this.heap = this.buildHeap(arr);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(arr) {
    const firstParentIdx = Math.floor((arr.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, arr.length - 1, arr);
    }
    return arr;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (
        childTwoIdx !== -1 &&
        heap[childTwoIdx].estimatedDistanceToEnd <
          heap[childOneIdx].estimatedDistanceToEnd
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (
        heap[idxToSwap].estimatedDistanceToEnd <
        heap[currentIdx].estimatedDistanceToEnd
      ) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      heap[currentIdx].estimatedDistanceToEnd <
        heap[parentIdx].estimatedDistanceToEnd
    ) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  remove() {
    if (this.isEmpty()) return;
    this.swap(0, this.heap.length - 1, this.heap);
    const node = this.heap.pop();
    delete this.nodePositionsInHeap[node.id];
    this.siftDown(0, this.heap.length - 1, this.heap);
    return node;
  }

  insert(node) {
    this.heap.push(node);
    this.nodePositionsInHeap[node.id] = this.heap.length - 1;
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    this.nodePositionsInHeap[this.heap[i].id] = j;
    this.nodePositionsInHeap[this.heap[j].id] = i;
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  containsNode(node) {
    return node.id in this.nodePositionsInHeap;
  }

  update(node) {
    this.siftUp(this.nodePositionsInHeap[node.id], this.heap);
  }
}
