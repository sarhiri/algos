//Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.


// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space? 0of1

var sortColors = function(nums) {
  let isSorted = false;
  while(!isSorted){
      isSorted = true;
      for(let i = 0; i < nums.length - 1; i++){
          if(nums[i] > nums[i + 1]){
              isSorted = false;
              [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; //destructuring array 
          }
      }
  }
};

const myArray = [1,2,3];

[myArray[0],myArray[1]] = [myArray[1],myArray[2]];
console.log(myArray)
// const arrayTwo = [4,5,6];


// [myArray[0],myArray[1]] = [arrayTwo[0],arrayTwo[1]];


// console.log(myArray,arrayTwo)

// const [ one,,three ] = myArray;



console.log(sortColors([2,0,2,1,1,0]))
