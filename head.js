const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array, result) {
  let final
  if (result = array[0]) {
final = result

  }

  return final
  
}
assertEqual(head([]), 5); //false
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //true