var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  let count = 0;
  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      i++;
      count++;
    }
    if (count >= n) {
      return true;
    }
    i++;
  }
  return false;
};

//Alternate
// var canPlaceFlowers = function (flowerbed, n) {
//   if (flowerbed[0] === 0 && (!flowerbed[1] || flowerbed[1] === 0)) {
//     flowerbed[0] = 1;
//     n--;
//   }

//   for (let i = 2; i < flowerbed.length; i++) {
//     let prev = flowerbed[i - 1];
//     let next = flowerbed[i + 1];
//     let current = flowerbed[i];
//     if (
//       current === 0 &&
//       ((prev === 0 && next === 0) || (prev === 0 && i === flowerbed.length - 1))
//     ) {
//       flowerbed[i] = 1;
//       n--;
//     }
//   }
//   return n <= 0;
// };
