// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersect = function(nums1, nums2) {
  //initalize an epmty array to hold values 
  const obj1 = {};
  const mapObj = new Map();
  const res = []; 
  //use a for loop to iterate through array1
  for (let num of nums1){
    obj1[num] ? obj1[num] += 1 : obj1[num] = 1;
    // mapObj.set(num,(mapObj.get(num) || 0) + 1);
  }
  for(let i = 0;i < nums2.length;i++) {
    if(obj1[nums2[i]]) {
      obj1[nums2[i]]--;
      res.push(nums2[i]);
    }
  }
  //for each element in array1, check to see if it exists in array 2
  //if array[i] exists in array1 and array2, add that value to the empty array (keep duplicates into account)
  return res;
};

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
intersect(nums1, nums2);

// if (obj[nums1[i]]){
      //     obj[nums1[i]] += 1; 
      // }
      // else {
      //     obj[nums1[i]] = 1; 
      // }
