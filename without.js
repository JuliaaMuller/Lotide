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

//input 1 array et 1 array de ce qu'on veut retirer 
const without = function (arrayIn, arraySupp) {
let result = arrayIn;

for (let i = 0 ; i < arraySupp.length; i++) {
  for (let j = 0; j < arrayIn.length; j++){
    if (arraySupp[i] === arrayIn[j]) {
      result.splice(j,1)
    }
  }
}  
return result

}
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], ["1", "2", "3"]))

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])

