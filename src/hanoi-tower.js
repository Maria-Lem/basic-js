const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const solution = {};
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns / turnsSpeed * 3600);
  solution.turns = turns;
  solution.seconds = seconds;
  return solution;
};
