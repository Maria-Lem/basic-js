const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catsInArray = matrix.includes('^^');
  const count = {};
  if (catsInArray === true) return catsInArray.forEach(function(x) {count[x] = (count[x] || 0) + 1;});
};
