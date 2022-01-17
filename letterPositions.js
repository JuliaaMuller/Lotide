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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(letterPositions("lighthouse in the house"));

assertEqual((letterPositions("lighthouse in the house")["l"]),[0]) // true