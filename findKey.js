const findKey = function(object, callback) {
  let keysList = Object.keys(object);
  let valuesList = Object.values(object);
  let result;
  for (let i = 0; i < valuesList.length; i++) {
    if (callback(valuesList[i])) {
      result = keysList[i];
      break;
    }
  }
  return result;
};

module.exports = findKey;



