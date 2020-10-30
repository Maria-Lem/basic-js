const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (!Object.prototype.toString.call(date).match('object Date')) {
    throw new Error();
  }
  let month = date.getMonth();

  let season = (month) => {
    if ([2, 3, 4].includes(month)) {
      return 'spring';
    } else if ([5, 6, 7].includes(month)) {
      return 'summer';
    } else if ([8, 9, 10].includes(month)) {
      return 'autumn';
    } else if ([11, 0, 1].includes(month)) {
      return 'winter';
    }
    return false;
  }
  return season(month);
};
