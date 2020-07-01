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

//simple/naive PQ
class PriorityQueue {
  constructor() {
    this.vals = [];
  }
  enqueue(val, p) {
    this.vals.push({ val, p });
    this.sort();
  }
  dequeue() {
    return this.vals.shift();
  }
  sort() {
    this.vals.sort((a, b) => a.p - b.p);
  }
}
