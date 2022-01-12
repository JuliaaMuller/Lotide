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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual === expected)) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed} : ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let result = []
  if (array.length % 2 === 0 && array.length > 2){
    result.push(array[(array.length/2) -1])
    result.push(array[array.length/2])
  }
  else if (array.length % 2 !== 0 && array.length > 2) {
    result.push(array[Math.floor(array.length/2)])
  }
  return result 
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]