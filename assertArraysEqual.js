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

const assertArrayEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed}`);
  }
};

// TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);