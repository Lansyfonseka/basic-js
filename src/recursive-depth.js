const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) && arr.length == 0 ? 1 : 
    Array.isArray(arr) ? 1 + Math.max.apply(null,arr.map(e => this.calculateDepth(e))) : 0; 
  }
}