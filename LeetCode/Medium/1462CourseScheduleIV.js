var checkIfPrerequisite = function (n, prerequisites, queries) {
  if (prerequisites.length === 0) return queries.map((pair) => false);
  let graph = new Map();

  for (let [prereq, course] of prerequisites) {
    if (graph.has(prereq)) {
      graph.get(prereq).push(course);
    } else {
      graph.set(prereq, [course]);
    }
  }
  // console.log('graph', graph)

  //     //DFS
  let result = [];
  for (let [prereq, target] of queries) {
    let visited = new Array(n).fill(0);
    result.push(isPath(prereq, target, visited));
  }

  function isPath(prereq, target, visited) {
    if (prereq === target) return true;
    if (visited[prereq] === 1) return false;
    visited[prereq] = 1;

    if (graph.has(prereq)) {
      // let courses = [...graph.get(prereq)] // no need to copy
      for (let course of [...graph.get(prereq)]) {
        if (isPath(course, target, visited)) return true;
      }
    }
    return false;
  }
  return result;
};
// BFS
//     let result = []
//     for (let [prereq, target] of queries){
//         result.push(isPath(prereq, target))
//     }

//     function isPath(prereq, target) {
//         let visited = new Array(n).fill(false)
//         let queue = [prereq]
//         visited[prereq] = true // prevents repeat, do it as soon as push into queue
//         while (queue.length){
//             let course = queue.shift()
//             visited[course] = true
//             if (graph.has(course)) {
//                 // let courses = [...graph.get(course)] // no copy needed
//                 if([...graph.get(course)].includes(target)) return true
//                 for (let pre of [...graph.get(course)]) {
//                     if (!visited[pre]){
//                         visited[pre] = true // do it as soon as push into queue
//                         queue.push(pre)
//                     }
//                 }
//             }
//         }
//         return false
//     }
//     return result
// };
