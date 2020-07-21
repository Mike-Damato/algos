class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vtx) {
    if (!this.adjList[vtx]) {
      this.adjList[vtx] = [];
    }
  }
  addEdge(v1, v2, weight) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight });
  }
  //Djikstra's
  shortestPath(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    //Build up initial state
    for (const vtx in this.adjList) {
      if (vtx === start) {
        distances[vtx] = 0;
        nodes.enqueue(vtx, 0);
      } else {
        distances[vtx] = Infinity;
        nodes.enqueue(vtx, Infinity);
      }
      previous[vtx] = null;
    }
    //As long as there is something to visit
    while (nodes.vals.length) {
      //give us vertex with lowest priority
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        //we are done, now we need to build path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjList[smallest]) {
          let nextNode = this.adjList[smallest][neighbor];
          let possibleSmallest = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (possibleSmallest < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = possibleSmallest;
            //updating previous - how we got to next neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, possibleSmallest);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class Node {
  constructor(val, p) {
    this.val = val;
    this.p = p;
  }
}

class PriorityQueue {
  constructor() {
    this.vals = [];
  }

  enqueue(val, p) {
    let newNode = new Node(val, p);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.vals.length - 1;
    const elem = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.vals[parentIdx];
      if (elem.p >= parent.p) {
        break;
      }
      this.vals[parentIdx] = elem;
      this.vals[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.vals[0];
    const end = this.vals.pop();
    if (this.vals.length > 0) {
      this.vals[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.vals.length;
    const elem = this.vals[idx];
    while (true) {
      let lChildIdx = 2 * idx + 1;
      let rChildIdx = 2 * idx + 2;
      let lChild;
      let rChild;
      let swap = null;

      if (lChildIdx < length) {
        lChild = this.vals[lChildIdx];
        if (lChild.p > elem.p) {
          swap = lChildIdx;
        }
      }
      if (rChildIdx < length) {
        rChild = this.vals[rChildIdx];
        if (
          (swap === null && rChild.p < elem.p) ||
          (swap !== null && rChild.p < lChild.p)
        ) {
          swap = rChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.vals[idx] = this.vals[swap];
      this.vals[swap] = elem;
      idx = swap;
    }
  }
}

// //simple/naive PQ
// class PriorityQueue {
//   constructor() {
//     this.vals = [];
//   }
//   enqueue(val, p) {
//     this.vals.push({ val, p });
//     this.sort();
//   }
//   dequeue() {
//     return this.vals.shift();
//   }
//   sort() {
//     this.vals.sort((a, b) => a.p - b.p);
//   }
// }
