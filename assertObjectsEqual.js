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
  let keysList1 = Object.keys(object1);
  keysList1 = keysList1.sort();
  let keysList2 = Object.keys(object2);
  keysList2 = keysList2.sort();
  let result = true 
 if (keysList1.length !== keysList2.length) {
   result = false;
 }
 else {
  for (let i = 0; i < keysList1.length; i++) {
    let list1 = keysList1[i]
    if (Array.isArray(list1)) {
      eqArrays(keysList1[i], keysList2[i]);
    }
    else if (keysList1[i] !== keysList2[i]) {
        result = false;
    }
    }  
  }
 
return result
};



const assertObjectEqual = function(actual, expected) {
  
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectEqual({ a: '1', b: 2 },{ b: 2, a: '1' })