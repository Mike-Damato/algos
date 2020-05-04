var findComplement = function (num) {
  let temp = num;
  let bit = 1;
  while (temp) {
    num = num ^ bit;
    bit = bit << 1;
    temp = temp >> 1;
  }
  return num;
};

//Alternate solution
// var bitwiseComplement = function(num) {
//     if(num === 0){
//         return 1;
//     }
//     let temp = num;
//     let bit = 1;
//     while(temp){
//        num = num ^ bit;
//         bit = bit << 1;
//         temp = temp >> 1;
//     }
//     return num;
// };
