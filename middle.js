
const assertArrayEqual = function(array1, array2) {
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

assertArrayEqual(middle([1, 2]), [])
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3])
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])