/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

//straight forward way aka brute force 
// const twoSum = (arr, target) => { 
//   for (let i = 0; i<arr.length; i++){
//     for (let j = i + 1; j< arr.length; j++){
//       if (arr[i] + arr[j] === target){
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }

//I think this is a better way to solve this problem. 
const twoSum = (arr, target) => {
  let numObj = {};
  for (let i = 0; i < arr.length; i++){
    const match = target - arr[i];
    if (numObj[match]){
      return true;
    } 
    numObj[arr[i]] = true;
  }
  return false;
}


// const nums = [2, 5, 11, 15];
// console.log(twoSum(nums, 7));
// const nums2 = [3, 6, 5, 8, 10]
// console.log(twoSum(nums2, 9))


/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

// you could do this with brute force too but use 3 loops: i, j, k
const threeSum = (arr, target) => { 
  let numObj = {};
  for (let i = 0; i < arr.length; i++){
    let diff1 = target - arr[i]; //calculate the first difference
    for (let j = i + 1; j < arr.length; j++){
      //find the diffrence of the second element 
      let diff2 = diff1 - arr[j];
      if(numObj[diff2]){
        return true;
      }
      //storing element in object
      numObj[arr[j]] = true;
      //console.log(numObj)
    }
  }
  //return false if otherwise false lol
  return false;
}

const nums = [2, 5, 11, 15];
console.log(threeSum(nums, 18));



module.exports = { twoSum, threeSum };