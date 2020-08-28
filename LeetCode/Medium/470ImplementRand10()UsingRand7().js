var result = 0;
var rand10 = function () {
  result = (result + rand7()) % 10;
  return result + 1;
};
