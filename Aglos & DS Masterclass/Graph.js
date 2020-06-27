class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList.hasOwnProperty(vertex)) {
      this.adjList[vertex] = [];
    }
  }
}
