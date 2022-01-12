const letterPositions = function(sentence) {
  const results = {};
  
  for (let j = 0; j < sentence.length; j++) {
    let temp = sentence[j];
if (temp === " ") {
}
else {
  if (results[temp]) {
    results[temp].push(j);
  } else {
    results[temp] = [j];
  }
}
  }
  return results;
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

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(letterPositions("lighthouse in the house"));