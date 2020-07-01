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
}
