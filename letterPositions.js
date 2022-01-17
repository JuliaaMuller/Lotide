const letterPositions = function(sentence) {
  const results = {};
  
  for (let j = 0; j < sentence.length; j++) {
    let temp = sentence[j];
      if (temp === " ") {
      } else {
        if (results[temp]) {
          results[temp].push(j);
        } else {
          results[temp] = [j];
        }
      }
    }
  return results;
};

module.exports = letterPositions;