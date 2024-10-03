function twoSum (nums, target){
  //object to store values
 let storObj = {};
 //iterate through i
 for (let i = 0; i < nums.length; i++){
   //compliment value 
   let compliment = target - nums[i];
   
   //check if compliment exists in obj
   if(storObj.hasOwnProperty(compliment)){
     //return i of compliment and value
     return [storObj[compliment], i]
   }
   storObj[nums[i]] = i;
 }
}

const nums = [3, 5, 7, 2];
const target = 10;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
