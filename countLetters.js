const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(strings) {
  const results = {}
  for (const letters of strings) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results
  }
  
console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters("lighthouse in the house")["h"], 4)