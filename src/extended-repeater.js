const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) {
    
  str = str + (addition !== undefined ? new Array(additionRepeatTimes).fill(addition+'').join(additionSeparator) : '');
  str = new Array(repeatTimes).fill(str).join( separator ? separator : '+');  
  
  return str;
};

  