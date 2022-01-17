const takeUntil = function(array, callback) {
  let result = [];
  for (let items of array) {
    if (callback(items)) break;
    result.push(items);
  }
  return result;
};

module.exports = takeUntil;