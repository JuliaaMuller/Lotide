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



const eqObjects = function(object1, object2) {
  const keysList1 = Object.keys(object1);
  const keysList2 = Object.keys(object2);
  let result = true;
  if (keysList1.length !== keysList2.length) {
    return false;

  } else {
    for (let keys of keysList1) {
      if (!object2[keys]){
        return false
      }
      if(Array.isArray(object1[keys])) {
        if(!eqArrays(object1[keys], object2[keys])) {
          return false
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false
        }
      }
    }
    return result;
  }
};


const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log( `🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`)
}
};
  

assertObjectEqual({ a: '1', b: 3 },{ b: 3, a: '1' })
assertObjectEqual({ a: '1', b: 3 },{ b: 2, a: '1' })