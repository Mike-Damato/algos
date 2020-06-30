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
    } else {
      return undefined;
    }
  }
  removeVertex(vtx) {
    if (this.adjList.hasOwnProperty(vtx)) {
      while (this.adjList[vtx].length) {
        const adjVtx = this.adjList[vtx].pop();
        this.removeEdge(vtx, adjVtx);
      }
      delete this.adjList[vtx];
    } else {
      return undefined;
    }
  }
  dfsRecursive(start) {
    let result = [];
    let visited = {};
    const adjList = this.adjList;

    const dfs = (vtx) => {
      if (!vtx) {
        return null;
      }
      visited[vtx] = true;
      result.push(vtx);
      adjList[vtx].forEach((neighbor) => {
        //check if the neighbor has not been visited
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }
}
