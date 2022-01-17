const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysList1 = Object.keys(object1);
  const keysList2 = Object.keys(object2);
  let result = true;
  if (keysList1.length !== keysList2.length) {
    return false;

  } else {
    for (let keys of keysList1) {
      if (!object2[keys]){
        return false;
      }
      if(Array.isArray(object1[keys])) {
        if(!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return result;
  }
};

module.exports = eqObjects;