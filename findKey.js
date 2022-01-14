const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  let keysList = Object.keys(object);
  let valuesList = Object.values(object);
  let result
  for (let i = 0; i < valuesList.length; i++) {
    if (callback(valuesList[i])) {
      result = keysList[i];
      break;
    }
  }
  return result
}

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)), "Akaleri")



