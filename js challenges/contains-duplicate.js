// Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let newObj = {};
    for (let i = 0; i < nums.length; i++){
      if (Object.values(newObj).includes(nums[i])){
      //if the object has a duplicate value, return false
      return true
      }
      //add the array element into the object as a value with the key being the index
      newObj[i]=nums[i];
    //else return true
    }
      return false
    }

  }

 