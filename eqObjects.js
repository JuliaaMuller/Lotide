const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const da = { d: ["2", 3], c: "2" };

console.log(eqObjects(cd, dc))
console.log(eqObjects(cd, da))

assertEqual(eqObjects(cd, dc), true)
assertEqual(eqObjects(cd, da), false)