const countOnly = require("./countOnly");

const countLetters = function(strings) {
  const results = {};
  for (const letters of strings) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;
  };
  
module.exports = countLetters;