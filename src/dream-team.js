const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const filteredArray = members.filter(item => typeof item === 'string');
    const first = filteredArray.map(item => item.toUpperCase().replace(/\s+/g, ''))
      .sort().map(item => item.slice(0, 1)).join('');
    return first;
  } else {
    return false;
  }
};
