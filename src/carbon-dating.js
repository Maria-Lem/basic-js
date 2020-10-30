const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const stringToNumber = parseFloat(sampleActivity);

  if (isNaN(stringToNumber) || sampleActivity !== 'string') {
    return false;
  }
};
