const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(list) {
    if (!Array.isArray(list)) return false;
    return list.map(e => typeof(e) == 'string' ? e.trim()[0].toLocaleUpperCase() : '').sort().join('');
};