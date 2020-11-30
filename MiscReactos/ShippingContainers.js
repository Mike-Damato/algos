function maximumContainers(scenarios) {
  // Write your code here
  if (!scenarios.length) return 0;
  let convertedArr = convertScenariosToNumbers(scenarios);
  for (let i = 0; i < convertedArr.length; i++) {
    let [currency, cost, containersReturn] = convertedArr[i];
    getMax(currency, cost, containersReturn);
  }
}
const convertScenariosToNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ');
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(arr[i][j]);
    }
  }
  return arr;
};
const getMax = (currency, cost, containers) => {
  if (currency < cost) return 0;
  let total = Math.floor(currency / cost);
  total = Math.floor(total + (total - 1) / (containers - 1));
  console.log(total);
};
