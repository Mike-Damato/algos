class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList.hasOwnProperty(vertex)) {
      this.adjList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    if (this.adjList.hasOwnProperty(v1) && this.adjList.hasOwnProperty(v2)) {
      this.adjList[v1].push(v2);
      this.adjList[v2].push(v1);
    } else {
      return undefined;
    }
  }
  removeEdge(v1, v2) {
    if (this.adjList.hasOwnProperty(v1) && this.adjList.hasOwnProperty(v2)) {
      this.adjList[v1] = this.adjList[v1].filter((vtx) => vtx !== v2);
      this.adjList[v2] = this.adjList[v2].filter((vtx) => vtx !== v1);
    }
  }
}
