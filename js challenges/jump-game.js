// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

//ex 1
var canJump = function(nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++){
      if(i > maxJump){
          return false;
      }
      maxJump = Math.max(maxJump, nums[i] + i);
      if(maxJump >= nums.length - 1){
          return true;
      }
  }
  return false;
};

//ex 2
var canJump = function(nums) {
  const lastIdx = nums.length - 1
  
  if (nums.length == 1){
      return true
  }
  if (nums[0] == 0){
      return false
  }


  // Iterate from start naturally
  for (let i = 0; i < lastIdx; i++){

      // Base case...
      if (nums[0] >= lastIdx) return true

      if (i + nums[i] >= lastIdx){
          return canJump(nums.slice(0, i + 1))
      }
  }

  return false
};