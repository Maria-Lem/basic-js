const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (arr.length === 0) {
    return result;
  } 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i === arr.length - 1) continue;

      result.push(undefined);
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (i === 0) continue;

      result.pop();
    } else if (arr[i] === '--double-next') {
      if (i === arr.length - 1) continue;

      result.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      if (i === 0) continue;
      
      result.push(result[result.length - 1])
    } else {
      result.push(arr[i]);
    }
  }

  return result.filter(elem => elem !== undefined);
};
