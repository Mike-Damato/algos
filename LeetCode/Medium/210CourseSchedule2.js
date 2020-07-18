var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let indegree = new Array(numCourses).fill(0);
  let ans = new Array(numCourses);

  prerequisites.forEach((prereq) => {
    indegree[prereq[0]]++;
    let list = graph.get(prereq[1]);
    if (list) {
      graph.set(prereq[1], list.concat(prereq[0]));
    } else {
      graph.set(prereq[1], [prereq[0]]);
    }
  });

  let start = 0;
  let end = 0;

  indegree.forEach((deg, i) => {
    if (deg === 0) {
      ans[end] = i;
      end++;
    }
  });

  while (start < end) {
    let key = ans[start];
    let val = graph.get(key);
    for (let i = 0; val && i < val.length; i++) {
      if (--indegree[val[i - 1]] === 0) {
        ans[end] = val[i];
        end++;
      }
    }
    start++;
  }

  return start === end && start === numCourses ? ans : [];
};
