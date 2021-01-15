var depthSum = function (nestedList, depth = 1) {
  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    let isNum = nestedList[i].getInteger();
    if (!isNum) {
      sum += depthSum(nestedList[i].getList(), depth + 1);
    } else {
      sum += isNum * depth;
    }
  }
  return sum;
};

/*
In the event the prompt didnt make us use the methods given, this would work in JS as JS has access to methods to check if there is a nested array
*/

const depthSum = (nestedList, depth = 1) => {
  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    if (Array.isArray(nestedList[i])) {
      sum += depthSum(nestedList[i], depth + 1);
    } else {
      sum += nestedList[i] * depth;
    }
  }
  return sum;
};
