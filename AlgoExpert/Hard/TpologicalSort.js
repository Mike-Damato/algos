//Top sort works best on DAGs
//O(j + d) Time where j is jobs (vertices) and d is dependencies (edges)
function topologicalSort(jobs, deps) {
  // Write your code here.
  let jobGraph = createJobGraph(jobs, deps);
  return getOrderedJobs(jobGraph);
}

const createJobGraph = (jobs, deps) => {
  let graph = new JobGraph(jobs);
  for (const [prereq, job] of deps) {
    graph.addPrereq(job, prereq);
  }
  return graph;
};

const getOrderedJobs = (graph) => {
  let orderedJobs = [];
  let { nodes } = graph;
  let current;
  while (nodes.length) {
    current = nodes.pop();
    let containsCycle = dfs(current, orderedJobs);
    if (containsCycle) {
      return [];
    }
  }
  return orderedJobs;
};

const dfs = (node, orderedJobs) => {
  if (node.visited) {
    return false;
  }
  if (node.visiting) {
    return true;
  }
  node.visiting = true;
  for (const prereq of node.prereqs) {
    let containsCycle = dfs(prereq, orderedJobs);
    if (containsCycle) {
      return true;
    }
  }
  node.visited = true;
  node.visiting = false;

  orderedJobs.push(node.job);
  return false;
};

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }
  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }
  addPrereq(job, prereq) {
    const jobNode = this.getNode(job);
    const prereqNode = this.getNode(prereq);
    jobNode.prereqs.push(prereqNode);
  }
  getNode(job) {
    if (!this.graph.hasOwnProperty(job)) {
      this.addNode(job);
    }
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.prereqs = [];
    this.visited = false;
    this.visiting = false;
  }
}
