const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // if 
  if (Array.isArray(arr)) {
    if (arr.includes('--discard-next')){
      // const discardNext = arr.indexOf('--discard-next');
      arr.splice(arr.indexOf('--discard-next'), 2);
      return arr;
    } else if (arr.includes('--double-prev')) {
      const doublePrev = arr.indexOf('--double-prev');
      arr.splice(doublePrev, -1);
      return arr;
    }
  } else if (Array.isArray(arr) && arr.length === 0) {
    let empty = [];
    return empty;
  } else {
    throw new Error();
  }
};
