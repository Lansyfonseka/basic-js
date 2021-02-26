const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(index) {
    if ((typeof(index) == 'string') && (typeof(index - 1) == 'number') && (index != '') && (index != ' ') && (index > 15) && (index <= 0) && (index != ' \n\t\r'))
        return Math.ceil(Math.log(MODERN_ACTIVITY / index) / 0.693 * HALF_LIFE_PERIOD);
    else return false;
};