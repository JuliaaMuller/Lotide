// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.


const eqArrays = function (array1, array2) {
  let result 
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length ; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      }
      else {
        result = false;
      }
    }
  }
  else {
    result = false 
  }
  return result 
}

const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length ; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
        return false
      } 
  }
}
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true
  };

const words = ["Julia", "Boris", "Ella", "Ebi", "Moon"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);


assertArraysEqual(results1,[ 'J', 'B', 'E', 'E', 'M' ])
assertArraysEqual(results1,[ 'J', 'B', 'E', 'E', 'B' ])
