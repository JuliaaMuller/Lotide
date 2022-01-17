const findKeyByValue = function (obj, name) {
  let keysList = Object.keys(obj);
  let valuesList = Object.values(obj);
  let result;
  for (let i = 0; i < valuesList.length; i++) {
    if (valuesList[i] === name ) {
      result = keysList[i];
    }
  }
  return result;
};

module.exports = findKeyByValue;

