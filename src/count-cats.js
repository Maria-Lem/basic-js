const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsInArray = matrix.flat().includes('^^');
  const val = '^^';
  if (catsInArray === true) {
    return matrix.flat().reduce((a, v) => (v === val ? a + 1 : a), 0);
  } else {
    return 0;
  }
};