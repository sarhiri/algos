// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"
function anagram (str1, str2){
  if (str1.length !== str2.length){
    return false
  }
  //initialize an empty object to hold letters from str1
  const charCount = {};
  //place elements from str1 into chat object
  for (let char of str1){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str2){
    if (!charCount[char]){
      return false;
    }
    charCount[char]--;
  }
  return true
}
// Output: false
// Example usage
let string1 = "racecar";
let string2 = "carrace";
console.log(anagram(string1, string2)); // Output: true

let string3 = "jar";
let string4 = "jam";
console.log(anagram(string3, string4)); // Output: false



