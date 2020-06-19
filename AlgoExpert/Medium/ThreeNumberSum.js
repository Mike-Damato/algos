const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < array.length - 2; i++) {
    let currentNum = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = currentNum + array[left] + array[right];
      if (currentSum === targetSum) {
        ans.push([currentNum, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};

// function arrayThreeSum(arr, targetSum){

//   //sorts the input arr from least to greatest
//   arr.sort((a, b) => a-b)

//   const result = []

//   for (let i = 0; i < arr.length-2; i++){
//     let element = arr[i]
//     let left = i + 1
//     let right = arr.length - 1

//     //for each element in the array check to see if any two other integers in the array add to the target sum
//     while(left < right){
//       let currentSum = element + arr[left] + arr[right]

//       //if the currentSum is equal to the target sum add an array of those 3 integers to the solution array
//       if(currentSum === targetSum){
//         result.push([element, arr[left], arr[right]])
//         left++
//         right--
//       } else if(currentSum > targetSum){
//         right--
//       } else if (currentSum < targetSum){
//         left++
//       }
//     }
//   }
//   return result
// }

// arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)

// function arrayThreeSum(arr, targetSum){
//   const solution = []
//   for(let i = 0; i< arr.length-1; i++){
//     //the sum needed given we already know one element arr[i]
//     let currentSum = targetSum - arr[i]
//     //create a hash table to store all of the integers from arr[i] we have tried
//     let memo = {}
//     for (let j = i+1; j < arr.length; j++){
//       let diff = currentSum - arr[j]
//       console.log(memo)
//       console.log('ARR[J]', arr[j], 'DIFF', diff)
//       if(memo[diff]){
//         solution.push([arr[i], diff, arr[j]])
//         console.log('Success!', solution)
//       }else{
//         console.log('Adding ', arr[j], ' to our memo')
//         memo[arr[j]] = true
//       }
//     }
//   }
//   return solution
// }

// arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)

// function arrayThreeSum(arr, targetSum){
//   const solution = []
//   for(let i = 0; i< arr.length-1; i++){
//     //the sum needed given we already know one element arr[i]
//     let currentSum = targetSum - arr[i]
//     //create a hash table to store all of the integers from arr[i] we have tried
//     let memo = {}
//     for (let j = i+1; j < arr.length; j++){
//       let diff = currentSum - arr[j]
//       console.log(memo)
//       console.log('J', arr[j], 'DIFF', diff)
//       if(memo[diff]){
//         solution.push([arr[i], diff, arr[j]])
//         console.log('WE FOUND A TRIPLET!', solution)
//       }else{
//         memo[arr[j]] = true
//       }
//     }
//   }
//   solution.forEach(elem => elem.sort((a,b) => a-b))
//   return solution.sort((a,b) => (a[0]-b[0]) - (b[1] - a[1]))
// }

// arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
