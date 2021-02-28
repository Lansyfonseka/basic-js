const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    return matrix.length == 0 ? 0 : matrix.map(e => e.filter(item => item == '^^')).reduce((prev, curr) => prev.concat(curr)).length
};