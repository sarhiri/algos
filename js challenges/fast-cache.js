/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const { argv } = require("process");

const fastCache = func => {
  //initialize object 
  
    
};

//example:
//SINGLE ARGUMENT CASE
// const multiplyBy2 = num => num * 2;
// const testResult = fastCache(multiplyBy2); 
// console.log(testResult(5))
// console.log(testResult(20))
// console.log(testResult(20))



/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
  
};

module.exports = {fastCache, fastCacheAdvanced};