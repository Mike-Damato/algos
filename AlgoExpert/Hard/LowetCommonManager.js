function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
  return go(topManager, reportOne, reportTwo).lowestCommonManager;
}

const go = (manager, reportOne, reportTwo) => {
  let numReports = 0;
  for (const report of manager.directReports) {
    let info = go(report, reportOne, reportTwo);
    if (!!info.lowestCommonManager) {
      return info;
    }
    numReports += info.numReports;
  }
  if (manager === reportOne || manager === reportTwo) {
    numReports += 1;
  }
  let lowestCommonManager = numReports === 2 ? manager : null;
  return { lowestCommonManager, numReports };
};

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
