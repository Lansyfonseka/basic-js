const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  try {
    if (date instanceof Date) throw new CustomError('Unable to determine the time of year!'); 
    let monthNomber = date.getMonth();
    return monthNomber > 10 ? 'winter' : monthNomber > 7 ? 'autumn' : monthNomber > 4 ? 'summer' : monthNomber > 1 ? 'spring' : 'winter';
  }
  catch(err) {
    throw new CustomError('Unable to determine the time of year!');
  }
    
};
